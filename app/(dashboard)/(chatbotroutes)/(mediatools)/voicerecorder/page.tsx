"use client"
import { useState } from "react";
import Title from "@/components/(voicerecorder)/Title";
import {RecordMessage} from "@/components/(voicerecorder)/RecordMessage";
import Link from 'next/link'
import { SmileIcon } from "lucide-react";

const Controller = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Array<string | any>>([]);

  // const data = "This is a fake blob"
  // const blob = new Blob([data], {type: "text/plain"})
  // const url = URL.createObjectURL(blob)
  // console.log(url)

 
  const handleStop = async (mediaBlobUrl: any) => {
    setIsLoading(true);
    console.log(mediaBlobUrl);
  
    // Append recorded message to messages
    const myMessage = { sender: "me", mediaBlobUrl };
    const messagesArr = [...messages, myMessage];
    setMessages(messagesArr)
  
    try {
      // Play audio immediately
      // const userAudio = new Audio(mediaBlobUrl)
      // userAudio.play()
      const audio = new Audio(mediaBlobUrl)
      audio.play()
  
      // Fetch the content from the URL and convert it to a Blob
      const response = await fetch(mediaBlobUrl);
      const blob = await response.blob();
  
      // Send blob to the server 
      const formData = new FormData();
      formData.append("file", blob, "myFile.wav");
  
      const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
      const blobResponse = await fetch(`${BASE_URL}/post-audio`, {
        method: 'POST',
        mode: 'cors',
        body: formData,
      });
  
      const chatbotData = await blobResponse.blob();
      
      if(!blobResponse.ok){throw new Error("Unable to get Blob response")}
      console.log(chatbotData);
      const chatbotBlob = new Blob([chatbotData], {type: 'audio/wav'})
      const chatbotBlobURL = URL.createObjectURL(chatbotBlob)
      const ChatbotAudio = new Audio(chatbotBlobURL)
      ChatbotAudio.play()
  
      // Create a new message for the chatbot response
      const chatbotMessage = { sender: "rachel", mediaBlobUrl: chatbotBlobURL };
      const updatedMessagesArr = [...messagesArr, chatbotMessage];
  
      setMessages(updatedMessagesArr);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    };
  };
  
  
  
  

  return (
    <div className="">
      {/* Title */}
      <Title setMessages={setMessages} />

      <div className="flex flex-col justify-center items-center h-full  pb-96">
        {/* Conversation */}
        <div className="mt-5 px-5">
          {messages?.map((audio, index) => {
            return (
              <div
                key={index}
                className={
                  "flex flex-col "
                }
              >
                {/* Sender */}
                <div className="mt-4 ">
                  <p
                    className={
                      audio.sender == "rachel"
                        ? "text-center mr-2 italic text-green-500"
                        : "ml-2 italic text-blue-500"
                    }
                  >
                    {/* {audio.sender} */}
                  </p>
                  

    {messages.length > 0 ?
     <div className="flex text-center font-light italic py-2 mb-6
     animate-pulse justify-center items-center">
       
       <div>
        <p>Your recorded voice is ready.</p>
        <p>You can download after playing it.</p>
        </div>
       <SmileIcon />
       
     </div>:null
    }
                  {/* Message */}
                  <audio
                    src={audio.mediaBlobUrl}
                    className="appearance-none"
                    controls
                    
                  />
                </div>
              </div>
            );
          })}

          {messages.length == 0 && !isLoading ?
            <div className="text-center font-light italic mt-10">
              {"Voice Recorder..."}
            </div>:null
           
           }

          {isLoading && (
            <div className="flex text-center font-light italic mt-10 
            animate-pulse justify-center items-center">
              
              <p>Processing</p>
              
            </div>
          )}

   

           <div className="grid grid-flow-row w-full  ">
            
              
            <RecordMessage handleStop={handleStop} />
            
          
        </div>
        </div>

        
      </div>
    </div>
  );
};

export default Controller;
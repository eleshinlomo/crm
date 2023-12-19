"use client"
import { useState } from "react";
import Title from "@/components/(audiotospeech)/Title";
import {RecordMessage} from "@/components/(audiotospeech)/RecordMessage";
import Link from 'next/link'
import { json } from "stream/consumers";

const Controller = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);

  // const data = "This is a fake blob"
  // const blob = new Blob([data], {type: "text/plain"})
  // const url = URL.createObjectURL(blob)
  // console.log(url)

 
  const handleStop = async (mediaBlobUrl: any) => {
    setIsLoading(true);
    console.log(mediaBlobUrl);
  
    // Append recorded message to messages
    const myMessage = { sender: "you", mediaBlobUrl };
    const messagesArr = [...messages, myMessage];
  
    try {
      // Play audio immediately
      // const userAudio = new Audio(mediaBlobUrl)
      // userAudio.play()
  
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
      console.log(blobResponse)
      const chatbotData = await blobResponse.blob();
     
      console.log({"user text": chatbotData})
      
      if(!blobResponse.ok){throw new Error("Unable to get Blob response")}
      console.log(chatbotData);
      const chatbotBlob = new Blob([chatbotData], {type: 'audio/wav'})
      const chatbotBlobURL = URL.createObjectURL(chatbotBlob)
      const ChatbotAudio = new Audio(chatbotBlobURL)
      ChatbotAudio.play()
  
      // Create a new message for the chatbot response
      const chatbotMessage = { sender: "bola", mediaBlobUrl: chatbotBlobURL };
      const updatedMessagesArr = [...messagesArr, chatbotMessage];
  
      setMessages(updatedMessagesArr);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    };
  };
  
  
  
  

  return (
    <div className="w-full overflow-y-hidden">

        {/* Disclaimer */}
        <div className="font-extrabold text-center border  flex 
        justify-center items-center 
         border-black px-3 mx-3 mb-3">
                    <p>Now you can do everything you would do with chatGPT 
                      using voice chat.
                        Voice conversation and Transcript with Bola are not saved</p>
                </div>
      {/* Title */}
      <Title setMessages={setMessages} />

      <div className="flex flex-col justify-between h-full overflow-y-scroll 
      pb-96">
        {/* Conversation */}
        <div className=" px-5">
          {messages?.map((audio, index) => {
            return (
              <div
                key={index}
                className={
                  "flex flex-col " +
                  (audio.sender == "bola" && "flex items-end")
                }
              >
                {
                  audio.sender === "bola" ? 
                  <div>
                    <p className="py-2 text-muted-foreground">
                  Download audio response</p>
                    </div>: 
                    <div>
                      <p className="py-2 text-muted-foreground">
                  Download audio prompt</p>
                      </div>
                }
                {/* Sender */}
                <div className=" ">
                  
                  <p
                    className={
                      audio.sender == "bola"
                        ? "text-right mr-2 italic text-green-500"
                        : "ml-2 italic text-blue-500"
                    }
                  >
                    {audio.sender.toUpperCase()}
                  </p>

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

          {messages.length == 0 && !isLoading && (
            <div className="text-center font-light italic mt-10">
              Having a chat with Bola...
            </div>
          )}

          {isLoading && (
            <div className="text-center font-light italic mt-10 animate-pulse">
              Waiting for Bola response...
            </div>
          )}
        </div>

        {/* Recorder */}
        <div className="fixed bottom-0 w-full py-6 border-t text-center 
        bg-gradient-to-r from-black to-blue-500">
          <div className="flex justify-center items-center w-full">
            <div>
              
              <RecordMessage handleStop={handleStop} />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controller;
'use client'
import { useState } from 'react';
import { ImagePromptHandler } from './prompthandler';
import CopyFunctionComponent from '@/components/copyfunction'



const ChatBotPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<Array<string | any>>([]);
  const [userMessage, setUserMessage] = useState<string>('');
  const [userMessageToCopy, setUserMessageToCopy] = useState<string>('');
  const [botMessage, setBotMessage] = useState<string>('');

  const [initialMessage, setInitialMessage] = useState<string>('I can help with great image prompts!')
  
  const sendChatMessages = async (e: any)=>{

    try {
     e.preventDefault()
    // User Messages
        const userMessages = {
            user: 'user',
            userText: userMessage
        }
        setUserMessageToCopy(userMessage)
        setMessages((prevMessages)=>[...prevMessages, userMessages])
        setUserMessage('')


    // Bot Messages
    if(!userMessage) return
    const getBotResponse = await ImagePromptHandler(userMessage)
    
    const botResponse = getBotResponse.message.data
    setBotMessage(botResponse)
    const botMessages = {
        user: 'bot',
        botText: botResponse
    }
    setMessages((prevMessages)=> [...prevMessages, botMessages])

  }

  catch(err){
   console.log(err)
  }finally{
    
  }
  }

  return (
    <div className="fixed bottom-10 left-0 right-0 md:right-10 z-50">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg fixed bottom-10 right-10 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'CLOSE' : 'I can help with prompt'}
      </button>
      {isOpen && (
        <div className="bg-black w-80 h-180 fixed bottom-20 right-0 
         md:right-10 shadow-lg rounded-lg">
          <div className="p-4">
            <h3 className="text-lg text-white font-extrabold mb-2 text-center">
              Image Prompt Writer</h3>
            {/* Chat messages */}
            <div className=" h-64 overflow-y-auto">
              <div className="text-gray-600 mb-2">
                {/* {Messages Start} */}
                {messages.length > 0 ?
               <div>
                {messages.slice().reverse().map((message, index)=>
                <div key={index} className=''>
                  
                 {message.user === 'user'?
                //  User messsages
                 <div>
                 <p className='bg-gray-700 text-blue-500 font-extrabold rounded-2xl py-2 px-2 mb-2'>
                  <span className='font-extrabold text-white items-start '>
                    Idea: </span>{message.userText}</p>
                    </div>
                    :
                // Bot messages
                 <div className='bg-gray-900 text-white rounded-2xl py-2 px-2 mb-2'>
                  <div className='flex items-end justify-end'>
                  <CopyFunctionComponent textToCopy ={botMessage} />
                  </div>
                  <span className='font-extrabold text-blue-500 items-end'>
                  
                  Prompt: </span>{message.botText}</div>
                 }
                </div>
                )}
                </div>:  
                <div>{initialMessage}</div>
               }
               {/* {Messages Stops} */}
              </div>
                
              {/* Add more chat messages here */}
            </div>
            {/* Input field */}
            <div onSubmit={sendChatMessages} className="">
              <form>
              <input
                name='userMessage'
                value={userMessage}
                onChange={(e)=>setUserMessage(e.target.value)}
                type="text"
                placeholder="Type your idea here..."
                className=" w-full border border-gray-300 rounded-lg p-2 
                focus:outline-none"
                required
              />
              </form>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBotPage;
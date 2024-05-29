'use client'
import { useState } from 'react';
import { generalChatbot } from '@/components/(chatbotfunctions.tsx)/generalchatbot';
import {motion} from 'framer-motion'
const ChatBotPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<string | any>>([]);
  const [userMessage, setUserMessage] = useState<string>('');
  const [initialMessage, setInitialMessage] = useState<string>('Hello! How can I help you?')
  
  const sendChatMessages = async (e: any)=>{

    try {
     e.preventDefault()
    // User Messages
        const userMessages = {
            user: 'user',
            userText: userMessage
        }
        setMessages((prevMessages)=>[...prevMessages, userMessages])
        setUserMessage('')


    // Bot Messages
    if(!userMessage) return
    const getBotResponse = await generalChatbot(userMessage)
    
    const botResponse = getBotResponse.message.data
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
        {isOpen ? 'CLOSE' : 'CHAT'}
      </button>
      {isOpen && (
        <motion.div 
        initial={{
         x: -500,
         opacity: 0,
         scale: 0.5
       }}
    
       animate={{
         x: 0,
         opacity: 1,
         scale: 1
       }}
       transition={{duration: 0.5}} className="bg-white w-80 h-96 fixed bottom-20 right-10 shadow-lg rounded-lg">
          <div className="p-4">
            <h3 className="text-lg font-extrabold mb-2 text-center">Fixupe Support</h3>
            {/* Chat messages */}
            <div className="overflow-y-auto h-64">
              <div className="text-gray-600 mb-2">
                {/* {Messages Start} */}
                {messages.length > 0 ?
               <div>
                {messages.slice().reverse().map((message, index)=>
                <div key={index} className=''>
                 {message.user === 'user'?
                //  User messsages
                 <div className='bg-blue-200 rounded-2xl py-2 px-2 mb-2'><span className='font-extrabold text-blue-700 items-start '>
                    You: </span>{message.userText}</div>:
                // Bot messages
                 <div className='bg-green-200 rounded-2xl py-2 px-2 mb-2'><span className='font-extrabold text-green-700 items-end'>
                  Bot: </span>{message.botText}</div>
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
                placeholder="Type your message..."
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none"
                required
              />
              </form>
              
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ChatBotPage;

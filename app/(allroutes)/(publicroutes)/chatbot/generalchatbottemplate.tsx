'use client'
import { useState } from 'react';
import {motion} from 'framer-motion'
import { generalChatbot } from './chatbotfunctions';


interface Message {
  user: string;
  userText?: string;
  botText?: string;
}


interface ChatbotProps {
  header: string
}

const ChatbotTemplate = ({header}: ChatbotProps) => {

  const [isOpen, setIsOpen] = useState(false);
  const [userMessage, setUserMessage] = useState<string>('')
  const [initialMessage, setInitialMessage] = useState<Message[]>([{user: 'bot', botText: 'Hello, how can I help you today?'}])
  const [messages, setMessages] = useState<Message[]>(initialMessage)
 

  
const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
  setUserMessage(e.target.value)

}


const submitForm = async (e: React.FormEvent<HTMLFormElement>)=>{

  try {
   e.preventDefault()
  // User Messages
  const trimedUserMessage = userMessage.trim()
  if (!trimedUserMessage) return 

      const userMessages = {
          user: 'user',
          userText: trimedUserMessage
      }
      setMessages((prevMessages)=>[...prevMessages, userMessages])
      setUserMessage('')


  // Bot Messages
  const getBotResponse = await generalChatbot(trimedUserMessage)
  
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

const payload = {
  
}
const handleFormSubmit=  (e: React.FormEvent<HTMLFormElement>)=>{
 e.preventDefault()
 submitForm(e)
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
            <h3 className="text-lg font-extrabold mb-2 text-center">{header}</h3>
            {/* Chat messages */}
            <div className="overflow-y-auto h-64">
              <div className="text-gray-600 mb-2">
                {/* {Messages Start} */}
                {messages && messages.length > 0 ?
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
                </div>: null
               }
               {/* {Messages Stops} */}
              </div>
                
              {/* Add more chat messages here */}
            </div>
            {/* Input field */}
            <div  className="">
              <form onSubmit={handleFormSubmit}>
              <input
                name='userMessage'
                value={userMessage}
                onChange={handleChange}
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

export default ChatbotTemplate;

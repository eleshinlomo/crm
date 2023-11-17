"use client"
import {useState, useEffect} from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'


const ImagePage = () => {
  const [industry, setIndustry] = useState<string>('')
  const [isIndustry, setIsIndustry] = useState<boolean>(false)
  const [choices, setChoices] = useState<boolean>(true)
  const [keywords, setKeywords] = useState<Array<string | any>>([])
  const [topic, setTopic] = useState<string>('')
  const [isTopic, setIsTopic] = useState<boolean>(false)
  const [isTopics, setIsTopics] = useState<boolean>(false)
  const [isKW, setIsKW] = useState<boolean>(false)
  const [isGenerate, setIsGenerate] = useState<boolean>(false)
  const [isAIGenerated, setIsAIGenerated] = useState<boolean>(false)
  const [topics, setTopics] = useState<Array<string | any>>([])
  // const [text, setText] = useState<string>('')

  let text = ''
  const handleIndustry = (selectedIndustry: string)=>{
    setIndustry(selectedIndustry)
    setIsIndustry(true)
    setChoices(false)
    setIsTopic(true)
    setIsTopics(true)
    setIsKW(false)

    
  }

  const handleIndustryChange = ()=>{
    setChoices(true)
    setIsIndustry(false)
  }

  const handleKeywords = ()=>{
       const generatekw = [
        {'word':'test1'},
        {'word':'test2'},
        {'word':'test3'},
        {'word':'tes4'}

      ]
       setKeywords(generatekw)
  }

  const handleTopics = ()=>{
    const generateTopics = [
     {'topic':'Topictest1'},
     {'topic':'Topictest2'},
     {'topic':'Topictest3'},
     {'topic':'Topictest4'}

   ]
    setTopics(generateTopics)
    setIsTopics(true)
    setIsTopic(false)
    setIsAIGenerated(true)
}

const handleTopic = ()=>{
  setIsTopic(true)
  setIsTopics(false)
  setIsIndustry(false)
  
}

const handleProceed = ()=>{
  setIsTopic(false)
  setIsTopics(false)
  setIsKW(true)
  setIsIndustry(false)

}

const handleGenerate = ()=>{
  setIsGenerate(true)
  setIsKW(false)
}

const handleAITitleChoice = (choice: any)=>{
  setTopic(choice)
}
 

    return (
      <div className=" text-center text-xl px-8 py-8">
           
           {choices ?
           <div>
          <p className="py-2">What industry would you like to write about?</p>
          <div className="grid grid-flow-row md:grid-cols-3 gap-2 py-2">
            <Button onClick={()=>handleIndustry('technology')}>Technology</Button>
            <Button onClick={()=>handleIndustry('Ecommerce')}>Ecommerce</Button>
            <Button onClick={()=>handleIndustry('Hospitality')}>Hospitality</Button>
            <Button onClick={()=>handleIndustry('Media')}>Media</Button>
            <Button onClick={()=>handleIndustry('Health')}>Health</Button>
            <Button onClick={()=>handleIndustry('Finance')}>Finance</Button>
            <Button onClick={()=>handleIndustry('Entertainment')}>Entertainment</Button>
            <Button onClick={()=>handleIndustry('Sport')}>Sport</Button>
            <Button onClick={()=>handleIndustry('Agriculture')}>Agriculture</Button>
            <Button onClick={()=>handleIndustry('Business')}>Business</Button>
            <Button onClick={()=>handleIndustry('Engineering')}>Engineering</Button>
            <Button onClick={()=>handleIndustry('Religion')}>Religion</Button>
          </div>
          </div>:null
            }
          
          {isIndustry ?
          <div className='flex flex-col gap-3 flex-1 justify-center items-center '>
            <p>You have chosen to write within the 
                <span className='font-extrabold px-2'>{industry}</span> Industry</p>
            <Button 
            onClick={handleIndustryChange}
            className='w-38'
            >CHANGE INDUSTRY CHOICE</Button>

          <div className='mt-5'>
          <p>Now, let us choose a Title within the 
            <span className='font-extrabold px-2'> 
            {industry}</span> industry to generate your article</p>
          </div>
          </div>:null
          }
          
          
          <div className='py-8'>
            {isTopics ?
            <div>
            <Button onClick={handleTopics}>
              GENERATE TITLE WITH AI</Button>
          
            
            {isAIGenerated ?
             <div className='py-4'>

              
              <p className='font-extrabold'>Your AI generated Titles:</p>
               {topics.map((kw,index)=>
            <div key={index} className='py-2 flex justify-center items-center gap-3'>
              
              <p className=''>Titles: {kw.topic}</p>
              <Button onClick={()=>setTopic(kw.topic)}>USE TITLE</Button>
            </div>
            )}

              <div className='grid grid-flow-row md:grid-cols-3 gap-2'>
              <Button onClick={handleProceed}>Proceed</Button>
              <Button>Regenerate Titles</Button>
              <Button onClick={handleTopic}>Write My Own Title</Button>
              </div>
               
            </div>:null
             } 
             {/* EndofIsAIGenerated */}

            
             </div>:null
            }
             {/* EndofIsTopics */}

            {isTopic ?
            <div className='my-4'>
              
              <Button className='my-2'>WRITE MY OWN TITLE</Button>

            <form >
              <input
              value={topic} 
              onChange={(e)=>setTopic(e.target.value)}
              className='bg-white text-black p-2 border border-gray-800 rounded'
                required/><br/>
              <Button onClick={handleProceed} className='my-2'>
              Submit</Button>
            </form>
            </div>:null
             }
              {/* EndofIsTopic */}
          </div>
          

          
          
          
          

          {isKW ?

          
          <div>

            <div className='py-8 flex flex-col gap-3 justify-center items-center'>
            <p>Would you like to add key words to your article title:</p>
            <p className='font-extrabold'>{topic}</p>?
            <div className='flex gap-3'>
            <Button onClick={handleKeywords}>Yes</Button>
            <Button>No</Button>
            </div>
             
            
          </div>
            {keywords.map((kw,index)=>
            <div key={index} className=''>
              <p>Your generated keywords for topic {}</p>
              <p className=''>Keyword: {kw.word}</p>
            </div>

            
            )}
            <div>
              <p>All set to generate article within 
                <span className='font-extrabold px-2'>{industry}</span> and title 
              <span className='font-extrabold px-2'>{topic}
                </span></p>
                <Button onClick={handleGenerate}>WRITE ARTICLE</Button>
            </div>
          </div>:null}

          {isGenerate ?
          <div>
            <p>AI API has not been connected. Still in BETA stage.</p>
            
            <Link href='/dashboard'>
            <Button>BACK TO DASHBOARD</Button>
            </Link>
          </div>:null

          }
          
            
      </div>
    )
  }
  
  export default ImagePage
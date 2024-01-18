"use client"
import {useState, useEffect,useRef} from 'react'
import {useRouter} from 'next/navigation'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { BookIcon, BotIcon, FacebookIcon, LinkedinIcon,  TwitterIcon } from 'lucide-react'
import { BASE_URL } from '@/components/urls'
import WaitlistPage from '@/components/waitlistpage'
import { Loader } from '@/components/loader'




const AIWriterPage = () => {
  const [industry, setIndustry] = useState<string>('')
  const [isIndustry, setIsIndustry] = useState<boolean>(false)
  const [industryChoices, setIndustryChoices] = useState<boolean>(true)
  const [kwChoices, setKwChoices] = useState<boolean>(true)
  const [keywords, setKeywords] = useState<Array<string | any>>([])
  const [allKeywords, setAllkeywords] = useState<Array<string | any>>([])
  const [topic, setTopic] = useState<string>('')
  const [isTopic, setIsTopic] = useState<boolean>(false)
  const [isTopics, setIsTopics] = useState<boolean>(false)
  const [topics, setTopics] = useState<Array<any>>([])
  const [message, setMessage] = useState<React.ReactNode | any>()
  const [isKW, setIsKW] = useState<boolean>(false)
  const [isGeneratedKW, setIsGeneratedKW] = useState<boolean>(false)
  const [isGenerate, setIsGenerate] = useState<boolean>(false)
  const [isGeneratedTitles, setIsGeneratedTitles] = useState<boolean>(true)
  const [isAIGenerated, setIsAIGenerated] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  
  const [email, setEmail] = useState<string>('')
  const [article, setArticle] = useState<string>('')
  const [isArticle, setIsArticle] = useState<boolean>(false)
  const [isArticleWaitlist, setIsArticleWaitlist] = useState<boolean>(true)
  
  
  // const [text, setText] = useState<string>('')
 

 

  let text = ''
  
  
//   useEffect(()=>{const getTokenForOpenAI = ()=>{
//     if(!tokens) return
//     const tokenValue = tokens.map((token: any)=>{
//       const tokenUsed = token.tokens
//       return tokenUsed
//     })
//     return tokenValue
//   }
//   getTokenForOpenAI()
// },[tokens])

  const router: any = useRouter()
  const handleIndustry = (selectedIndustry: string)=>{
    setIndustry(selectedIndustry)
    setIsIndustry(true)
    setIndustryChoices(false)
    setIsTopic(true)
    setIsTopics(true)
    setIsKW(false)

    
  }

  const handleIndustryChange = ()=>{
    setIndustryChoices(true)
    setIsIndustry(false)
  }

  

  const handleKeywords = ()=>{
       const generatedkw = [
        {'word':'test1'},
        {'word':'test2'},
        {'word':'test3'},
        {'word':'tes4'}

      ]

      if(generatedkw)
       setAllkeywords(generatedkw)
       setKeywords(generatedkw)
       setKwChoices(false)
       setIsGeneratedKW(true)
       
  }


  // Get Token Value 
  
  // let tokenUsedRef: any = useRef(null)
  // useEffect(()=>{
  //   if (tokens) {
  //   tokenUsedRef.current = tokens
  //   }
  // }, [tokens])


  const generateTitles = async ()=>{
    try{
    setIsLoading(true)
    const payload = {
       industry
    }
   const response =  await fetch(`${BASE_URL}/generatetitles/`, {
    mode: 'cors',
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
   })

   if(!response)throw new Error("No response from server")
   const generatedTitles = await response.json()
  if(generatedTitles.message){
    
    
    console.log(generatedTitles)
    
    
    setTopics(generatedTitles.message)
    setIsTopics(true)
    setIsGeneratedTitles(true)
    setIsTopic(false)
    setIsAIGenerated(true)
    setIsIndustry(false)
    setIsLoading(false)
    }
  }
  catch(error: any){
   error.response.message
  }
  }

//   const handleTitles = ()=>{

    
//     const generateTopics = [
//      {'topic':'TestTitle1'},
//      {'topic':'Testtitle2'},
//      {'topic':'Testtitle4'},
//      {'topic':'Testtitle5'}

//    ]
//     setTopics(generateTopics)
//     setIsTopics(true)
//     setIsTopic(false)
//     setIsAIGenerated(true)
//     setIsIndustry(false)
// }

const handleTopic = ()=>{
  setIsTopic(true)
  setIsTopics(false)
  setIsIndustry(false)
  
}

const handleProceed = (e: any)=>{
  e.preventDefault()
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

const handlekwChoices = ()=>{
  
}







const ArticlePage = ()=>{
  return (
    <div>
      { isArticle ?
      <div>
        <p>{article}</p>
      </div>: <div><p className='text-blue-600'>No Article to display</p></div>
     } 
    </div>
  )
}

const handleArticleSocialPosting = ()=>{
  setMessage(()=>{
    setIsArticleWaitlist(false)
    return (
      <div className='flex flex-col justify-center items-center'>
      
        <WaitlistPage />
        
      </div>
    )
  })
}
 

    return (
      <div className=" text-center text-xl px-8 py-8">
           
           {industryChoices ?
           <div>
          <p className="py-2">What industry would you like to write about?</p>
          <div className="grid grid-flow-row md:grid-cols-3 gap-2 py-2">
            <Button onClick={()=>handleIndustry('technology')}>Technology</Button>
            <Button onClick={()=>handleIndustry('Ecommerce')}>Ecommerce</Button>
            <Button onClick={()=>handleIndustry('Politics')}>Politics</Button>
            <Button onClick={()=>handleIndustry('Hospitality')}>Hospitality</Button>
            <Button onClick={()=>handleIndustry('Children')}>Children</Button>
            <Button onClick={()=>handleIndustry('Family')}>Family</Button>
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
          
          {/* Loader */}
          {isLoading ?
          <Loader />:null
           }

          <div className='py-8'>
            {isTopics ?
            <div>
            <Button onClick={generateTitles}>
              GENERATE TITLE WITH AI</Button>
          
            
            {isAIGenerated ?
             <div className='py-4'>

              <div className='py-4'>
              <div className='flex justify-center'>
              <p>Your chosen Title: </p>
              <BookIcon />
              </div>
              {topic ? <p className='font-extrabold'>{topic}</p> : 
              <p>
              You have not chosen any <span className='font-extrabold'>Title</span>
              </p>
               } 
              </div>


              {isGeneratedTitles ?
              <div>

              <p className='font-extrabold'>Your AI generated Titles:</p>
              
               {isTopics ?
               
               topics.map((title,index)=>
               
            <div key={index} className='py-2 flex flex-col justify-center 
            items-center gap-3'>
              <p className='font-bold'>{title.tokens}</p>
              <p className='py-2'>{title.response.replace(/[^A-Za-z\s:]/g,'')}</p>
              <Button onClick={()=>{
                setTopic(title.response.replace(/[^A-Za-z\s:]/g,''))
                setIsGeneratedTitles(false)
                
                }}>USE TITLE</Button>
                
                </div>
                
               
            
               
            ): null}
            </div>:null}
            
            

              <div className='grid grid-flow-row md:grid-cols-3 gap-2'>
              <Button onClick={handleProceed}>Proceed</Button>
              <Button onClick={generateTitles}>Regenerate Titles</Button>
              <Button onClick={handleTopic}>Modify Title</Button>
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

            <form onSubmit={handleProceed}>
              <input
              value={topic} 
              type='text'
              onChange={(e)=>setTopic(e.target.value)}
              className='bg-white text-black p-2 border border-gray-800 rounded'
                required/><br/>
              <Button type='submit' className='my-2'>
              Submit</Button>
            </form>
            </div>:null
             }
              {/* EndofIsTopic */}
          </div>
          

          {isKW ?

          
          <div>
            {kwChoices ?
            <div className='py-8 flex flex-col gap-3 justify-center items-center'>
            <p>Would you like to add keywords to your Article Title:</p>
            <p className='font-extrabold'>{topic}</p>?
            <div className='flex gap-3'>
            <Button onClick={handleKeywords}>Yes</Button>
            <Button onClick={()=>{
              setKwChoices(false)
              setIsGeneratedKW(false)
            }
            }>No</Button>
            </div> 
          </div>:null
            }
            
            {isGeneratedKW ?
              <div>
            <p>Your generated keywords for title:</p>
            <p className='font-extrabold'>{topic}</p>
            <Button className='animate-pulse'>TEST DATA</Button>
            {keywords.map((kw,index)=>
            <div key={index} className=''>
              <p className =''>Keyword: {kw.topic}</p>
            </div>
            )}
            </div>:null
            }

            
           
            <div className='mt-4 flex flex-col justify-center items-center'>
              <BotIcon />
              <p>All set to generate article within 
                <span className='font-extrabold px-2'>{industry}</span> 
                Industry with the Title:</p>
              <p><span className='font-extrabold px-2'>{topic}
                </span></p>

                { isGeneratedKW ?
                <div>
                <p>and ensuring use of the following 
                  <span className='font-extrabold px-2'>keywords:</span></p>
                  <Button className='animate-pulse'>TEST DATA</Button>
                {allKeywords ?
                <div>
                  {allKeywords.map((keyword, index)=>
                <div key={index}>
                  {keyword.word}
                  </div>
                )}
                </div>:<div><p>None</p></div>
                }
                </div>:null
              }              
                <Button onClick={handleGenerate}>WRITE ARTICLE</Button>
            </div>
          </div>:null}

          {isGenerate ?
          <div>

              <ArticlePage />
            <p>Article Writing API has not been connected. Still in BETA stage.</p>
             
             {isArticleWaitlist ?
             <div>
             <WaitlistPage />
             </div>:null
             }
             
            
              <p className='font-extrabold py-6'>Post your Article on Social Platforms</p>
              <p className='px-8'>{message}</p>
              <div className='py-4 flex flex-col md:flex-row justify-center items-center gap-3'>
              <Button className='w-52'
              onClick={handleArticleSocialPosting}
              >
                <div className='flex gap-3'>
                <LinkedinIcon />
                <p className='mt-1'>Post on LinkedIn</p>
                </div>
              </Button>

              <Button className='w-52'
              onClick={handleArticleSocialPosting}
              >
                <div className='flex gap-3'>
                <FacebookIcon />
                <p className='mt-1'>Post on Facebook</p>
                </div>
              </Button>

              <Button className='w-52'
              onClick={handleArticleSocialPosting}
              >
                <div className='flex gap-3'>
                <TwitterIcon />
                <p className='mt-1'>Post on Twitter</p>
                </div>
              </Button>

            </div>

            <div className='flex  justify-center items-center gap-3'>
            <Link href='/'>
            <Button className='w-24'>HOME</Button>
            </Link>

            <Link href='/dashboard'>
            <Button className='w-32'>DASHBOARD</Button>
            </Link>
            </div>
          </div>:null

          }
          
            
      </div>
    )
  }
  
  export default AIWriterPage
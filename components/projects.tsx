import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'

export const ProjectPage = ()=>{

    const Projects = [
        {
            projectname: "Fixupe",
            info: "AI use cases",
            image: '/images/girl2.png',
            route: 'https://fixupe.com'
        },
        {
            projectname: "Date Me",
            info: "Dating website",
            image: '/projects/dateme.png',
            route: 'https://dateme.vercel.app'
        },
       
    ]
    return (
        <div>

<div className='flex flex-col md:flex-row lg:flex-row
         py-2 px-5 gap-2 justify-center items-center bg-white'>
          {
            Projects.map((project, index)=>

            <div key={index}>
         <div className='h-72 w-72 lg:w-56 lg:56 relative'>
            <Image src={project.image} alt='member profile' fill objectFit='contain'  />  
            </div>
            <div className='text-center'>
            <p className='text-l text-black'>Project Name: {project.projectname}</p>
            <p className='text-l text-black'>Project Info: {project.info}</p> 
            <Button>
                <Link href={project.route}>View Project Website</Link>
            </Button>

            </div>
            </div>
            
    
            )
         } 

         
          

         </div>
        </div>
    )
}
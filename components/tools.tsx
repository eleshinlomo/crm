import DashboardLayout from "@/app/(dashboard)/layout";
import { AreaChartIcon, BookIcon, BotIcon, CodeIcon, EyeIcon, 
    FileIcon, 
    ImageIcon, LayoutDashboard, 
    MenuIcon, 
    MessageSquare, 
    Music2Icon, 
    Settings, 
    VideoIcon 
} from "lucide-react";


export const Tools: [] | any = [

  {
    id:'conversation',
    category: 'Conversation Tools',
    tools: [
        {
        
        label: "General Conversation",
        icon: MessageSquare,
        href: "/general",
        color: "text-pink-500",
        bgColor: "text-grey-500"
        },
        { 
          
          label: "Code Generation",
          icon: CodeIcon,
          href: "/code",
          color: "text-grey-500",
          bgColor: "text-grey-500"
        }
    ]},
    
    { 
      
      id:'writing',
      category: 'Writing Tools',
      tools: [
      
      {
     
      label: "AI Writer",
      icon: AreaChartIcon,
      href: "/aiwriter",
      color: "text-pink-500",
      bgColor: "text-grey-500"
      },
      {   
          
          label: "AI Transcriber",
          icon: BotIcon,
          href: "/aitranscriber",
          color: "text-pink-500",
          bgColor: "text-grey-500"
          }
        ]},

          {
            id:'document',
            category: 'Document Tools',
            tools: [
          { 
            
            label: "PDF Voice Reader",
            icon: BookIcon,
            href: "/pdftovoice",
            color: "text-blue-500",
            bgColor: "text-red-500"
            },
      
            {   
                
                label: "CSV File Analyser",
                icon: FileIcon,
                href: "/csvanalyser",
                color: "text-blue-500",
                bgColor: "text-blue-500"
                }
              ]},

                {
                id:'media',
                category: 'Media Tools',
                tools: [
                  
                  {
                  
                  label: "Image Generation",
                  icon: ImageIcon,
                  href: "/image",
                  color: "text-blue-500",
                  bgColor: "text-grey-500"
                  },
          
                  {   
                      
                      label: "Video Generation",
                      icon: VideoIcon,
                      href: "/video",
                      color: "text-blue-500",
                      bgColor: "text-grey-500"
                      },
          
                      {
                        label: "Music Generation",
                        icon: Music2Icon,
                        href: "/music",
                        color: "text-purple-500",
                        bgColor: "text-grey-500"
                        }
                      ]},

                     
          
                      ]


export const DashboardSideItem = 
    {   
        
        label: "Dashboard",
        href: "/dashboard",
        color: "text-grey-500",
        bgColor: "text-grey-500"
        }

    export const SettingsTool = {
        
        label: "Settings",
        icon: Settings,
        href: "/settings",
        
        }
        
     

   

  
// export const DocumentTools = [
  
//   {heading: 'Document Tools'},
  
    
//         ]




//   export const MediaTools: [

//     {heading: 'Media Tools'},
  
      
         
  
//   ]


//   export const ConversationTools  = [
    
//     {heading: 'Conversation Tools'},

    
  
      // {
      //   label: "AI Boyfriend",
      //   icon: MenuIcon,
      //   href: "/boyfriend",
      //   color: "text-grey-500",
      //   bgColor: "text-grey-500"
      //   },
  
      // {
      //   label: "AI Girlfriend",
      //   icon: EyeIcon,
      //   href: "/girlfriend",
      //   color: "text-grey-500",
      //   bgColor: "text-grey-500"
      //   },
             
  



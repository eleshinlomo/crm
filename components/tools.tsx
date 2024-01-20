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
    id: 'home',
    category: 'Home',
    href: "/",
    tools: [{   
      label: "Viewing Home",
      icon: AreaChartIcon,
      href: "/",
      color: "text-pink-500",
      bgColor: "text-grey-500"
    }]
  },
  
  { 
    id: 'dash',
    category: 'Dashboard',
    href: "/dashboard",
    tools: [{   
      label: "Viewing Dashboard",
      icon: AreaChartIcon,
      href: "/dashboard",
      color: "text-pink-500",
      bgColor: "text-grey-500"
    }]
  },

  { 
    id: 'CRM',
    category: 'CRM',
    href: "/crm",
    tools: [{   
      label: "View CRM",
      icon: AreaChartIcon,
      href: "/crm",
      color: "text-pink-500",
      bgColor: "text-grey-500"
    }]
  },

  {
    id:'business devs',
    category: 'Business Development',
    tools: [
        {
        
        label: "Send Mailshot",
        icon: MessageSquare,
        href: "/general",
        color: "text-pink-500",
        bgColor: "text-grey-500"
        },
        {
        
          label: "Send Mass Text Messages",
          icon: MessageSquare,
          href: "/general",
          color: "text-pink-500",
          bgColor: "text-grey-500"
          },
          {
        
            label: "Cold Call",
            icon: MessageSquare,
            href: "/general",
            color: "text-pink-500",
            bgColor: "text-grey-500"
            }
        
        
    ]},


  // {
  //   id:'team',
  //   category: 'Team Members',
  //   tools: [
  //       {
        
  //       label: "Add A Team Member",
  //       icon: MessageSquare,
  //       href: "/addteammember",
  //       color: "text-pink-500",
  //       bgColor: "text-grey-500"
  //       },
  //       {
        
  //         label: "All Team Members",
  //         icon: MessageSquare,
  //         href: "/allteammembers",
  //         color: "text-pink-500",
  //         bgColor: "text-grey-500"
  //         }
          
  //   ]},

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
        }
        
        
    ]},

    
    {
      id:'media',
      category: 'Media Tools',
      tools: [
        
        {
        
          label: "Voice Recorder",
          icon: ImageIcon,
          href: "/voicerecorder",
          color: "text-blue-500",
          bgColor: "text-grey-500"
          },
        {
        
        label: "Image Generator",
        icon: ImageIcon,
        href: "/image",
        color: "text-blue-500",
        bgColor: "text-grey-500"
        },

        {   
            
            label: "Video Generator",
            icon: VideoIcon,
            href: "/video",
            color: "text-blue-500",
            bgColor: "text-grey-500"
            },

            {
              label: "Music Generator",
              icon: Music2Icon,
              href: "/music",
              color: "text-purple-500",
              bgColor: "text-grey-500"
              }
            ]},


  { 
      
    id:'writing',
    category: 'Writing Tools',
    href: "",
    tools: [
    
    {
   
    label: "Blog Writer",
    icon: AreaChartIcon,
    href: "/aiwriter",
    color: "text-pink-500",
    bgColor: "text-grey-500"
    },
    {   
        
        label: "Transcriber",
        icon: BotIcon,
        href: "/aitranscriber",
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
            id:'document',
            category: 'Document Tools',
            tools: [
              {   
                
                label: "PDFtoWORD",
                icon: FileIcon,
                href: "/pdftoword",
                color: "text-blue-500",
                bgColor: "text-blue-500"
                },
                {   
                
                  label: "WORDtoPDF",
                  icon: FileIcon,
                  href: "/wordtopdf",
                  color: "text-blue-500",
                  bgColor: "text-blue-500"
                  },
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
                id: 'Settings',
                category: 'Settings',
                href: "/settings",
                tools: [{   
                  label: "Viewing Dashboard",
                  icon: AreaChartIcon,
                  href: "/settings",
                  color: "text-pink-500",
                  bgColor: "text-grey-500"
                }]
              },

                     
          
                      ]


        
     

   

  
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
             
  



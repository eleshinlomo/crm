import DashboardLayout from "@/app/layout";
import { AreaChartIcon, BookIcon, BotIcon, CodeIcon, DatabaseIcon, EyeIcon, 
    FileIcon, 
    ImageIcon, LayoutDashboard, 
    MailIcon, 
    MenuIcon, 
    MessageSquare, 
    Music2Icon, 
    PhoneIcon, 
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
    href: "/dashboard/dashboardpage",
    tools: [{   
      label: "Viewing Dashboard",
      icon: AreaChartIcon,
      href: "/dashboard/dashboardpage",
      color: "text-pink-500",
      bgColor: "text-grey-500"
    }]
  },

  // Idea Validation Tool

  // {
  //   id:'idea',
  //   category: 'Validate Idea',
  //   tools: [
  //       {
        
  //       label: null,
  //       icon: MessageSquare,
  //       href: `/validateidea/${null}`,
  //       color: "text-pink-500",
  //       bgColor: "text-grey-500"
  //       },
          
  //   ]},

  // CRM Tool

  { 
    id: 'CRM',
    category: 'CRM',
    tools: [
      
      {   
      label: "Phone Book",
      icon: PhoneIcon,
      href: "/dashboard/crm/phonebookpage",
      color: "text-pink-500",
      bgColor: "text-grey-500"
    },
    {   
      label: "crm",
      icon: DatabaseIcon,
      href: "/dashboard/crm/crmpage",
      color: "text-pink-500",
      bgColor: "text-grey-500"
    }
  ]
  },

  // Business Dev Tool

  // {
  //   id:'business devs',
  //   category: 'Business Development',
  //   tools: [
  //       {
        
  //       label: "Send Mailshot",
  //       icon: MessageSquare,
  //       href: "/general",
  //       color: "text-pink-500",
  //       bgColor: "text-grey-500"
  //       },
  //       {
        
  //         label: "Send Mass Text Messages",
  //         icon: MessageSquare,
  //         href: "/general",
  //         color: "text-pink-500",
  //         bgColor: "text-grey-500"
  //         },
  //         {
        
  //           label: "Cold Call",
  //           icon: MessageSquare,
  //           href: "/general",
  //           color: "text-pink-500",
  //           bgColor: "text-grey-500"
  //           }
        
        
  //   ]},

  
  {
    id:'3',
    category: 'Sales Tools',
    tools: [
      

      // {
      
      //   label: "Email",
      //   icon: MailIcon,
      //   href: "/dashboard/sales/emailpage",
      //   color: "text-blue-500",
      //   bgColor: "text-grey-500"
      //   },

      //   {
      
      //     label: "Mass Email",
      //     icon: MailIcon,
      //     href: "/dashboard/sales/massemailpage",
      //     color: "text-blue-500",
      //     bgColor: "text-grey-500"
      //     },

        {
      
          label: "image generator",
          icon: ImageIcon,
          href: "/dashboard/sales/imagepage",
          color: "text-blue-500",
          bgColor: "text-grey-500"
          },
      ]

        },


    {
      id:'media',
      category: 'Media Tools',
      tools: [
        
        {
      
          label: "voice over generator",
          icon: ImageIcon,
          href: "/dashboard/mediatools/voiceover",
          color: "text-blue-500",
          bgColor: "text-grey-500"
          },
        {
        
          label: "Voice Recorder",
          icon: ImageIcon,
          href: "/dashboard/mediatools/voicerecorder",
          color: "text-blue-500",
          bgColor: "text-grey-500"
          },
          {
        
            label: "Voice Chat",
            icon: ImageIcon,
            href: "/dashboard/mediatools/voicechat",
            color: "text-blue-500",
            bgColor: "text-grey-500"
            },
        // {
        
        // label: "Image Generator",
        // icon: ImageIcon,
        // href: "/image",
        // color: "text-blue-500",
        // bgColor: "text-grey-500"
        // },

        // {   
            
        //     label: "Video Generator",
        //     icon: VideoIcon,
        //     href: "/video",
        //     color: "text-blue-500",
        //     bgColor: "text-grey-500"
        //     },

        //     {
        //       label: "Music Generator",
        //       icon: Music2Icon,
        //       href: "/music",
        //       color: "text-purple-500",
        //       bgColor: "text-grey-500"
        //       }
            ]},


  { 
      
    id:'writing',
    category: 'Writing Tools',
    href: "",
    tools: [
    
    // {
   
    // label: "Blog Writer",
    // icon: AreaChartIcon,
    // href: "/aiwriter",
    // color: "text-pink-500",
    // bgColor: "text-grey-500"
    // },
    {   
        
        label: "Transcriber",
        icon: BotIcon,
        href: "/dashboard/aitranscriber",
        color: "text-pink-500",
        bgColor: "text-grey-500"
        },
        
        {
        
          label: "Content Writer",
          icon: BookIcon,
          href: "/dashboard/contentwriter",
          color: "text-blue-500",
          bgColor: "text-grey-500"
          },
      ]},

    //  Document Tools

          // {
          //   id:'document',
          //   category: 'Document Tools',
          //   tools: [
          //     {   
                
          //       label: "PDFtoWORD",
          //       icon: FileIcon,
          //       href: "/pdftoword",
          //       color: "text-blue-500",
          //       bgColor: "text-blue-500"
          //       },
          //       {   
                
          //         label: "WORDtoPDF",
          //         icon: FileIcon,
          //         href: "/wordtopdf",
          //         color: "text-blue-500",
          //         bgColor: "text-blue-500"
          //         },
          // { 
            
          //   label: "PDF Voice Reader",
          //   icon: BookIcon,
          //   href: "/pdftovoice",
          //   color: "text-blue-500",
          //   bgColor: "text-red-500"
          //   },
      
          //   {   
                
          //       label: "CSV File Analyser",
          //       icon: FileIcon,
          //       href: "/csvanalyser",
          //       color: "text-blue-500",
          //       bgColor: "text-blue-500"
          //       }
          //     ]},

         
              
             

                


              // { 
              //   id: 'Settings',
              //   category: 'Settings',
              //   href: "/settings",
              //   tools: [{   
              //     label: "Viewing Dashboard",
              //     icon: AreaChartIcon,
              //     href: "/settings",
              //     color: "text-pink-500",
              //     bgColor: "text-grey-500"
              //   }]
              // },

                     
          
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
             
  



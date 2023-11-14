import DashboardLayout from "@/app/(dashboard)/layout";
import { AreaChartIcon, BotIcon, CodeIcon, EyeIcon, 
    ImageIcon, LayoutDashboard, 
    MenuIcon, 
    MessageSquare, 
    Music2Icon, 
    Settings, 
    VideoIcon 
} from "lucide-react";


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

export const WritingTools = [
    
   
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
            },
            
  
  ]


  export const MediaTools = [
  
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
              },
         
  
  ]


  export const ConversationTools  = [
    
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
        },
  
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
             
  
  ]


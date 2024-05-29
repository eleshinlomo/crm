import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import EmailSender from "./emailsender"
import { DashNavbar } from "@/components/dashnavbar"

const EmailPage = ()=>{
  return (
   <div>
    <EmailSender />
   </div>
  )
}

export default EmailPage

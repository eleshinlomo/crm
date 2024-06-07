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
import Link from "next/link"

const SigninLadingpage = () => {
  return (
    <div className="">
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline' size='lg'
        className=" text-white bg-blue-500 rounded-2xl w-full" >Sign in</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-black text-white">
        <DialogHeader>
          <DialogTitle>Sign in</DialogTitle>
          <DialogDescription>
            How would you like to sign in?
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button className="w-full bg-white hover:bg-white text-black">
            Sign in with Google
          </Button>
          
          <Button className="w-full bg-white hover:bg-white text-black" asChild>
          <Link href='/signinpage'>
            Sign in with Email
            </Link>
          </Button>
         
        </div>
       <DialogFooter>
       </DialogFooter>
      </DialogContent>
    </Dialog>
    </div>
  )
}

export default SigninLadingpage
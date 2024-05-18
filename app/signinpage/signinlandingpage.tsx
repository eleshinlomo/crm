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
    <div>
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline' size='lg'
        className=" text-white bg-blue-500 rounded-2xl" >Sign in</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-black text-white">
        <DialogHeader>
          <DialogTitle>Sign in</DialogTitle>
          <DialogDescription>
            How would you like to sign in.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button className="w-full">
            Sign in with Google
          </Button>
          
          <Button className="w-full" asChild>
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
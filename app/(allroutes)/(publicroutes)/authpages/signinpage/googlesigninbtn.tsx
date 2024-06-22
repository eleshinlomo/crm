import { Button } from "@/components/ui/button"
import { googleAuthCodeUrl } from "@/components/auth"


const GoogleSignInButton = ()=>{
    return (
        <div className="flex flex-col justify-center items-center">
            {/* Google Button */}
          <Button className="border border-blue-500 rounded-2xl mb-2 mt-4   md:w-full bg-white hover:bg-white text-black text-md" 
          onClick={()=>window.location.href=googleAuthCodeUrl}>
            Sign in with Google
          </Button>
        </div>
    )
}

export default GoogleSignInButton
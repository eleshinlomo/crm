import { Button } from "@/components/ui/button"
import {useState, useEffect} from 'react'
import { userLogout } from "@/components/auth";

export interface SignOutProps {
    isLoggedIn: boolean;
    updateAuth: ()=>void;
}



const SignOutPage = ({updateAuth, isLoggedIn}: SignOutProps)=>{


    const handleSignout = ()=>{
        updateAuth()
    }

    return (
        <div>
            {isLoggedIn === true?
                <Button className="w-full" onClick={handleSignout}>
                Sign out
            </Button>: null
            }
        </div>
    )
}

export default SignOutPage
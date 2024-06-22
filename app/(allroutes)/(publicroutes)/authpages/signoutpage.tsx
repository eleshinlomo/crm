'use client'
import { Button } from "@/components/ui/button"
import {useState, useEffect} from 'react'
import Link from 'next/link'
import SigninLadingpage from "./signinpage/signinlandingpage"

interface SignOutProps {
    isLoggedIn: boolean;
    updateAuth: ()=>void;
}

const SignOutPage = ({isLoggedIn, updateAuth}: SignOutProps) =>{
 isLoggedIn = false

    return (
        <div>
            {isLoggedIn?
                <Button className="text-white bg-blue-500 hover:bg-blue-500 rounded-2xl w-full py-4 px-12" onClick={updateAuth} >                                                                                                                                                                                                                                                                                                                                                                                                        
                Sign out
            </Button>: 
            <SigninLadingpage />
            }
        </div>
    )
}

export default SignOutPage
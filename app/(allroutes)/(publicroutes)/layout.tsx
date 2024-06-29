'use client'
import HomeNavbar from '@/components/homenavbar'
import React from 'react'
import {useState, useEffect} from 'react'

interface PublicRouteProps {

    children: React.ReactNode
}

const PublicRoutesLayout = ({children} : PublicRouteProps)=>{
 
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <div>
         <HomeNavbar isLoggedIn={isLoggedIn} />
         {children}
        </div>
    )
}

export default PublicRoutesLayout
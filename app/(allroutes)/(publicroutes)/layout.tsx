
import HomeNavbar from '@/components/homenavbar'
import React from 'react'

interface PublicRouteProps {

    children: React.ReactNode
}

const PublicRoutesLayout = ({children} : PublicRouteProps)=>{
    return (
        <div>
         <HomeNavbar />
         {children}
        </div>
    )
}

export default PublicRoutesLayout
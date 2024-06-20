
import HomeNavBar from '@/components/homenavbar'
import React from 'react'

interface PublicRouteProps {

    children: React.ReactNode
}

const PublicRoutesLayout = ({children} : PublicRouteProps)=>{
    return (
        <div>
         <HomeNavBar />
         {children}
        </div>
    )
}

export default PublicRoutesLayout
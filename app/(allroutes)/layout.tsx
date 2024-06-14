
import React from 'react'

interface AllRoutesProps {
    children: React.ReactNode
}

const AllRoutesLayout = ({children}: AllRoutesProps) => {
  return (
    <div>
    {children}
    </div>
  )
}

export default AllRoutesLayout
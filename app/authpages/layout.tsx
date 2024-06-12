import Footer from "@/components/footer"



const AuthLayout = ({children}: {children: React.ReactNode})=> {
 

  return (
      
      <div>
        
        {children}
        <Footer />
        
      </div>
    
  )
}

export default AuthLayout

'use client'
import React, { useState, useEffect } from "react";
import Image from 'next/image'
import { Button } from "@/components/ui/button";
import Link from 'next/link'
import { useSearchParams } from "next/navigation";


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL



  const SuccessPurchasePage = () =>{

  const [message, setMessage] = useState("");

  const router = useSearchParams()

  const stripe_session_id: any = router?.get('session_id')
  

  // Confirm if payment was indeed successful
  const confirmPaymentAndUpdateCredits = async ()=>{
      if (! stripe_session_id) return
      const response: any = await fetch(`${BASE_URL}/stripe/confirmpayment/`, {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'stripe_session_id': stripe_session_id
        }

      })

      if (! response) throw new Error('Server error')
      const data: any = await response.json()
      if (data.ok){
        console.log(data)
      }else{
        console.log(response.error)
      }
  }

useEffect(()=>{
  confirmPaymentAndUpdateCredits()
}, [])


  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return  (

    <div className="bg-white text-black py-8 px-4 
    flex flex-col justify-center items-center">
    {message ?
    <p>{message}</p>:null
    }
  
    <div className="product text-center font-extrabold text-xl w-full flex flex-col justify-center 
    gap-3 items-center">
      <div className="relative h-72 w-72">
      <Image
        src="/images/happy_dog.png"
        alt="Surprised dog" fill
      />
      </div>
      <div className="description">
      <p className="text-xl">Thank you for your purchase.</p>
      <h3>Your credits has been topped up with 50,000 credits</h3>
      </div>
    </div>

      <Button type="submit" className="mt-3">
        <Link href='/'>
        Back to Dashboard
        </Link>
      </Button>
  </div>
  );
}

export default SuccessPurchasePage
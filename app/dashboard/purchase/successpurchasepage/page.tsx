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
  const session_id: any = localStorage.getItem('sessionid')
  console.log(stripe_session_id)

  const handleSuccessPayment = async ()=>{
    if (!stripe_session_id) return null
    const response: any = await fetch(`${BASE_URL}/paymentconfirmation/`, {
      mode: 'cors',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'stripesessionid': stripe_session_id,
        'sessionid': session_id
      }
    })

    if(! response) return null
    const data = await response.json()

    if (data.ok){
      console.log(data)
    }else{
      console.log(response.error)
    }
  }

  useEffect(()=>{
    handleSuccessPayment()
  }, [])

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! Thank you for your purchase.");
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
        <Link href='/dashboard/dashboardpage'>
        Back to Dashboard
        </Link>
      </Button>
  </div>
  );
}

export default SuccessPurchasePage
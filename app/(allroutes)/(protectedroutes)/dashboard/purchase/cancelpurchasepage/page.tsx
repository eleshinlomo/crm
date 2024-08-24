"use client"
import React, { useState, useEffect } from "react";
import Image from 'next/image'
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;



const CancelPage = () => {
  
  const [message, setMessage] = useState<string | any>("")

  const sessionid: any = localStorage.getItem('sessionid');
  const router = useSearchParams()

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
  

    if (router?.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (router?.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  


  return (
    <div className="bg-white text-black py-8 px-4 flex flex-col justify-center items-center">
      {message ?
        <p>{message}</p> : null
      }

      <div className="product text-center font-extrabold text-xl w-full flex flex-col justify-center gap-3 items-center">
        <div className="relative h-72 w-72 aspect-square">
          <Image
            src="/images/sales_dog.png"
            alt="Happy dog hd" fill
          />
        </div>
        <div className="description">
          <h3>Ooops! Something went wrong! Would you like to try again?</h3>
          <h4>Get 50,000 credits for $5.00</h4>
        </div>
      </div>

      {/* Stripe Form */}
      <form action={`${BASE_URL}/fixupe-checkout-session/`} method='POST'>
      <input type='hidden' value={sessionid} name='sessionid' />
      <Button type='submit'>
        Checkout
      </Button>
      </form>
    </div>
  );
}

export default CancelPage
"use client"
import React, { useState, useEffect } from "react";
import Image from 'next/image'
import { Button } from "@/components/ui/button";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const sessionid: any = localStorage.getItem('sessionid');


const CancelPage = () => {
  const [message, setMessage] = useState<string | any>("")

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
          <h4>Get 50,000 credits for:</h4>
          <p>$5.00</p>
        </div>
      </div>

      {/* Stripe Form */}
      <form action={`${BASE_URL}/create-checkout-session`} method='POST'>
      <input type='hidden' value={sessionid} name='sessionid' />
      <Button type='submit'>
        Checkout
      </Button>
      </form>
    </div>
  );
}

export default CancelPage
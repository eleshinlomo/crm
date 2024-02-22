'use client'
import React, { useState, useEffect } from "react";
import Image from 'next/image'
import { Button } from "@/components/ui/button";


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL



export default function App() {
  const [message, setMessage] = useState("");

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
        src="/images/surprised_dog.png"
        alt="Surprised dog" fill
      />
      </div>
      <div className="description">
      <p className="text-xl">Changed your mind ? Order again</p>
      <h3>Get 50,000 credits for:</h3>
      <h5>$5.00</h5>
      </div>
    </div>

    {/* Stripe Form */}
    <form action={`${BASE_URL}/stripe/create-checkout-session`} method="POST">
      <Button type="submit">
        Checkout
      </Button>
    </form>
  </div>
  );
}
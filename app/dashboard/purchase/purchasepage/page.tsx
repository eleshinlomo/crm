"use client"
import React, { useState, useEffect } from "react";
import Image from 'next/image'
import { Button } from "@/components/ui/button";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;


const PurchasePage = () => {
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

  const handleCheckout = async (e:any) => {
    const sessionid: any = localStorage.getItem('sessionid');
    if (!sessionid) return
    e.preventDefault()
    try {
       
      const response = await fetch(`${BASE_URL}/stripe/create-checkout-session`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'sessionid': sessionid // Include session ID in headers
        }
      });

      if (!response.ok) {
        throw new Error('Server error');
      }

      const data = await response.json();
      console.log(data); // Handle response data as needed

    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <div className="bg-white text-black py-8 px-4 flex flex-col justify-center items-center">
      {message ?
        <p>{message}</p> : null
      }

      <div className="product text-center font-extrabold text-xl w-full flex flex-col justify-center gap-3 items-center">
        <div className="relative h-72 w-72">
          <Image
            src="/images/credit_clerk.png"
            alt="The cover of Stubborn Attachments" fill
          />
        </div>
        <div className="description">
          <h3>Get 50,000 credits for:</h3>
          <h5>$5.00</h5>
        </div>
      </div>

      {/* Stripe Form */}
      <form onSubmit={handleCheckout}>
      <Button type='submit'>
        Checkout
      </Button>
      </form>
    </div>
  );
}

export default PurchasePage
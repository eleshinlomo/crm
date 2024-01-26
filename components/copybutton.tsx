"use client"
import React, { useState } from 'react';
import { Button } from './ui/button';



const CopyButton = ({text}: {text:string}) => {
  // State to hold the text to copy
  const [textToCopy, setTextToCopy] = useState(text);

  // Function to copy text to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy);
  };

  return (
    <div>
      <Button onClick={copyToClipboard}>Copy</Button>
    </div>
  );
};

export default CopyButton;

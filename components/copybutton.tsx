"use client"
import React, { useState } from 'react';
import { Button } from './ui/button';

interface CopyTextTypes {
textToCopy: string;
}

const CopyButton = ({textToCopy}: CopyTextTypes) => {
  const [message, setMessage] = useState<string>('')
  // State to hold the text to copy

  // Function to copy text to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy);
    setMessage('Copied')
  };

  return (
    <div>
       <p>{message}</p>
      <Button onClick={copyToClipboard}>Copy</Button>
    </div>
  );
};

export default CopyButton;

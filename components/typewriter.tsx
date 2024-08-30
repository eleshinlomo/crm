import React, {useState} from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';


interface TypewriterProps {
  textarray: string[]
}

const Typewriter = ({textarray} : TypewriterProps) => {

  const [ text ] = useTypewriter({
    words:textarray,
    loop: true,
    delaySpeed: 2000
  });

  return (
    <div>
      <div className=' font-extrabold text-start text-xl md:text-2xl'>
      <span className="bg-clip-text py-8 ">{text? text:null}</span>
        <Cursor cursorColor='transparent' />
      </div>
    </div>
  );
};

export default Typewriter;







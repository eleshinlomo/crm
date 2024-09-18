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
      <div className=' font-extrabold text-start text-4xl md:text-5xl text-blue-400'>
      <span className="bg-clip-text py-8 ">{text? text:null}</span>
        <Cursor cursorColor='transparent' />
      </div>
    </div>
  );
};

export default Typewriter;







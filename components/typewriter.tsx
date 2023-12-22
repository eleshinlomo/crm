import React, {useState} from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

interface TypewriterProps {
    customText: string[]
}

const Typewriter: React.FC<TypewriterProps> = ({customText}) => {

  const [ text ] = useTypewriter({
    words:customText,
    loop: true,
    delaySpeed: 2000
  });

  return (
    <div>
      <div className=' font-extrabold text-start text-xl md:text-3xl  
      py-2 '>
        <span className=''>{text}</span>
        <Cursor cursorColor='blue' />
      </div>
    </div>
  );
};

export default Typewriter;







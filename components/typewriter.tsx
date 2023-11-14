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
      <div className='text-white font-extrabold text-center text-2xl md:text-3xl  
      py-6 px-6'>
        <span className='text-blue-600'>{text}</span>
        <Cursor cursorColor='blue' />
      </div>
    </div>
  );
};

export default Typewriter;







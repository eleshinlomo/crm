import React, {useState} from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';



const Typewriter = ({customText} : {customText: Array<string>}) => {

  const [ text ] = useTypewriter({
    words:customText,
    loop: true,
    delaySpeed: 2000
  });

  return (
    <div>
      <div className=' font-extrabold text-start text-xl md:text-2xl'>
      <span className="bg-clip-text py-8 text-transparent
             bg-gradient-to-r from-blue-800 via-white to-teal-800">{text? text:null}</span>
        <Cursor cursorColor='blue' />
      </div>
    </div>
  );
};

export default Typewriter;







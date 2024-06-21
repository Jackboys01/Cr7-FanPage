"use client"

import React, { useState } from 'react';
import Button from '@/Components/Button';
import {MdMessage} from "react-icons/md"
import { BiSolidPhoneCall } from 'react-icons/bi'
import {HiMail} from "react-icons/hi"

const Page = () => {
  const iconStyle={
    fontSize: '20px'
  };

  const goBackToMainPage = () => {
    // Navigate to the main page URL ("/")
    window.location.href = '/';
  };

  const [name, setName] = useState("Daksh");
  const [email, setEmail] = useState("dakshmalik437@gmail.com")
  const [text, setText] = useState("Cr 7 Page")
  const [backgroundImage, setBackgroundImage] = useState("/Images/c7.jpeg")

  const onSubmit = (event)=>{
    event.preventDefault();

    console.log(event)
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
    setBackgroundImage("/Images/siuu.jpg")   
  }

    return (
        <div className="bg-cover bg-center min-h-screen flex items-center justify-center"
         style={{ backgroundImage: `url("${backgroundImage}")` }}>
      <div className="container mx-auto max-w-screen-md flex flex-col bg-white bg-opacity-75 p-8 rounded-lg shadow-lg">
        <div className="flex justify-between gap-x-4">
          <Button text="VIA CALL" icon={<MdMessage style={iconStyle} />} />
          <Button text="VIA TEXT" icon={<BiSolidPhoneCall style={iconStyle} />} />
        </div>

        <div className='my-3 '>
          <Button
            isOutline={true}
            text="VIA EMAIL FORM"
            icon={<HiMail style={iconStyle} />}
          />
        </div>

        <form onSubmit={onSubmit}>
       <div className="flex flex-col space-y-4 relative">
    <label htmlFor="name" className="text-black  bg-white px-1 z-10 absolute">
      Name
    </label>
    <input
      className='h-40 border border-black rounded-md px-3 relative z-0'
      type="text"
      name='name'
    />
  </div>
  <div className="flex flex-col space-y-4 mt-2 relative ">
    <label htmlFor="email" className="text-black  bg-white px-1 z-10 absolute">
      Email
    </label>
    <input
      className='h-40 border border-black rounded-md px-3 relative z-0'
      type="email"
      name='email'
    />
  </div>
  <div className="flex flex-col space-y-4 mt-2 relative">
    <label htmlFor="email" className="text-black  bg-white px-1 z-10 absolute">
      text
    </label>
    < textarea
      className=' border border-black rounded-md px-3 relative '
      name="text" rows={8}
      
    />
  </div>
  <div className='flex justify-center mt-2'>
  <Button text="Submit"  onClick={() => alert("Entered in Draw!")}/> 
  
  </div>

 
 <div className='flex justify-center mt-2'> {"You Have entered in lucky draw " +  name + " " + text + " " + email}</div>
       </form>
       <div className='flex justify-center mt-2'>
    {/* Your Contact page content here */}
    <Button text="Go Back to Main Page" onClick={goBackToMainPage}  />
  </div>
      </div>
    </div>
  );
};

export default Page;
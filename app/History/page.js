"use client"
import React from 'react'
import Button from '@/Components/Button';
const page = () => {
    const goBackToMainPage = () => {
        
        window.location.href = '/';
      };
    
    return (
    <div className="bg-cover bg-center min-h-screen flex items-center justify-center relative"
         style={{ backgroundImage: 'url("/Images/cris.jpg")' }}>

       <div className="mt-24">
        <h1 className='font-bold  text-2xl my-100 '>"In the world of football, CR7 isn't just a player,
            he's an inspiration, a force of nature, and a true icon."</h1>
        </div>  
        <div className='absolute top-0  right-0 p-4'>
          
        <Button  text="Go Back to Main Page" onClick={goBackToMainPage} />
        </div>   
    </div>
  )
}

export default page
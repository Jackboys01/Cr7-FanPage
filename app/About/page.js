"use client"
import React from 'react';
import Button from '@/Components/Button';
const Page = () => {
  const goBackToMainPage = () => {
        
    window.location.href = '/';
  };
 
  return (
    <div className="bg-cover bg-center min-h-screen flex flex-row-reverse items-center justify-start"
    style={{ backgroundImage: 'url("/Images/CR7.jpeg")' }}>

      <div className="flex justify-start p-8 w-1/2">
        <p className='font-bold text-xl'>
          "Cristiano Ronaldo, often referred to as CR7, is one of the greatest footballers of all time. With exceptional speed, skill, 
          and goal-scoring ability, he has achieved numerous records and awards throughout his career. Known for his relentless work ethic and dedication, Ronaldo 
          has played for top clubs like Manchester United, Real Madrid, and Juventus. Beyond his on-field success, he's a global icon admired for his philanthropy and sportsmanship.
          Cristiano Ronaldo's impact on the world of football transcends the sport, making him a legendary figure in the history of the game."
        </p>
      </div>
      <div className='absolute top-0  right-0 p-4'>
          
          <Button  text="Go Back to Main Page" onClick={goBackToMainPage} />
          </div>   
    </div>
  );
}

export default Page;

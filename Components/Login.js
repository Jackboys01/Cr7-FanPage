import React, { useState } from 'react'
import Link from 'next/link'
const Login = () => {
 
    return (
    <div>

    <div className="min-h-screen relative">
      <img
        src="/Images/c7.jpeg"
        alt="CR"
        className="fixed h-screen w-screen object-cover"
      />
     <div className="absolute  w-full text-center">
          <h1 className="text-white text-4xl font-bold p-4">GOAT</h1>
        </div>
      <nav className="absolute top-0  right-0 p-4">
        <ul className="flex space-x-14 text-white font-bold">
          <li>
            <Link  href="/Contact">Contact</Link>
          </li>
          <li>
            <Link href="/About">About</Link>
          </li>
          <li>
            <Link href="/History">History</Link>
          </li>
        </ul>
      </nav>
    </div> 
  </div>
    )
}

export default Login
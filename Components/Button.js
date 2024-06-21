import React from 'react'

const Button = ({text,isOutline,icon,onClick}) => {
  return (
    <button
    className={`flex text-base min-w-[220px] p-2.5 rounded-md gap-x-3.5 items-center justify-center 
    ${isOutline ? 
    'bg-white border border-black text-black w-full font-bold' : 'bg-black text-white'}`}
    onClick={onClick}
  >
    {icon}
    {text}
  </button>
  )
}

export default Button
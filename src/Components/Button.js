import React from 'react'

export default function Button({label, handleClick, type, heightFit=false, isFitWidth=false}) {
  return (
    <button type={type} className={`${isFitWidth? 'w-fit': 'w-full'} md:w-fit text-center inline-block tracking-widest uppercase bg-yellow-700 bg-opacity-40 text-white rounded-sm px-3 py-2 text-xs cursor-pointer transition duration-200 hover:bg-black ${heightFit && 'h-fit'}`}
        // onClick={() => setShowReceipt(false)}
        onClick={handleClick}
    >
        {label}
    </button>
  )
}

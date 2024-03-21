import Image from 'next/image'
import React from 'react'

type Props = {}

const LoadingPage = (props: Props) => {
  return (
    <div className='bg-white w-screen h-screen flex justify-center items-center'>
      <div className='animate-spin  border-[10px] border-sky-500 border-t-sky-700  rounded-full p-4'>
          <Image 
            src={"/images/logos/logo.jpeg"}
            alt="logo"
            width={60}
            height={60}
            className="rounded-full"
          />
      </div>
    </div>
  )
}

export default LoadingPage


import Image from 'next/image'
import React from 'react'

type Props = {}

const LoadingPage = (props: Props) => {
  return (
    <div className='bg-white w-screen h-screen flex justify-center items-center'>
      <div className='animate-spin  border-[10px] border-sky-500 border-t-sky-700  rounded-full p-6'>
          {/* <Image 
            src={"/images/logos/logo.jpeg"}
            alt="logo"
            width={45}
            height={45}
            className=""
          /> */}
      </div>
    </div>
  )
}

export default LoadingPage


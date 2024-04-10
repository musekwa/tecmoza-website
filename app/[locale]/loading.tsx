import Image from 'next/image'
import React from 'react'

type Props = {}

const LoadingPage = (props: Props) => {
  return (
    <div className=' w-screen h-screen flex justify-center items-center'>
      {/* <div className='animate-spin  border-[10px] border-sky-500 border-t-sky-700  rounded-full p-6' /> */}

      <div className='w-full h-screen flex items-center justify-center flex-col gap-3'>
      <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-sky-600"></div>
      <h1 className='text-lg font-bold'>Carregando...</h1>
    </div>
    </div>
  )
}

export default LoadingPage


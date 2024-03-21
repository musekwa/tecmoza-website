import React from 'react'

type Props = {}

const ServicesPage = (props: Props) => {
  return (
    <div className='flex flex-row justify-between items-center w-full  gap-2'>
        <div className='w-1/4 h-[300px] bg-gray-600'>
            <p>Animating Box 1</p>
        </div>
        <div className='w-1/4 h-[300px] bg-gray-600 flex justify-center items-center'>
            <div className='h-12 w-12 border-4 border-sky-500 border-t-sky-900 border-r-sky-900 animate-spin-slow rounded-full ' />
        </div>
        <div className='w-1/4 h-[300px] popover-container'>
            <p>Animating Box 1</p>
        </div>
        <div className='w-1/4 h-[300px] bg-gray-600'>
            <p>Animating Box 1</p>
        </div>
    </div>
  )
}

export default ServicesPage
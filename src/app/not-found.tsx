import { Info } from 'lucide-react'
import React from 'react'

type Props = {}

const NotFoundPage = ({ }) => {
    
  return (
    <div  className='w-screen h-screen flex justify-center items-center '>
      <div className='rounded-full flex flex-col justify-center items-center '>
      <Info className='w-12 h-12 text-sky-500' />
        <h1 className='text-sm text-black'>
          Está página ainda não está disponível! 
        </h1>
      </div>
    </div>
  )
}

export default NotFoundPage
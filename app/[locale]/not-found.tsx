"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Button } from '@/ui/button'

type Props = {}

const NotFoundPage = ({ }) => {

  const router = useRouter();

  const navigationBack = ()=>{
    router.back();
  }
    
  return (
    <div  className='w-screen h-screen flex justify-center items-center bg-white '>
      <div className='rounded-full flex flex-col justify-center items-center space-y-4 '>
        <Image 
          alt='not-found'
          src={"/images/not-found.png"}
          width={400}
          height={400}
        />

        <h1 className='text-[18px] text-gray-500'>
          Esta página ainda não está disponível! 
        </h1>

        <Button 
          className='bg-sky-500 '
        onClick={navigationBack}>
            Voltar
        </Button>

      </div>
    </div>
  )
}

export default NotFoundPage
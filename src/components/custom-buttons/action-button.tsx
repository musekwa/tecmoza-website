"use client"

import { redirect, useRouter } from 'next/navigation';
import React from 'react'

interface ActionButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    url?: string;
    asChild?: boolean;
}

const ActionButton = ({
    children,
    mode = "redirect",
    url = "/",
    asChild
}: ActionButtonProps) => {

    const router = useRouter();

    const onClick = ()=>{
       router.push(url)
    }

    if (mode === "modal") {
        return <p>
            TODO: Modal 
        </p>
    }


  return (
    <span onClick={onclick} className='cursor-pointer'>
        {children}
    </span>
  )
}

export default ActionButton
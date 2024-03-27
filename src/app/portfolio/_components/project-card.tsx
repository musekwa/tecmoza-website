"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
    href: string
    name: string
    image: string
    shortDescription: string
}

const ProjectCard = ({
    href,
    name,
    image,
    shortDescription,
}: Props) => {
    const router = useRouter()
    
    const handleNavigation = (href: string) => {
        router.push(href)
    }

  return (
    <div
    onClick={()=>handleNavigation(href)}
    className="inline-block mx-10 min-w-[80px]  max-w-[300px]  rounded-2xl cursor-pointer hover:scale-95 transition-all duration-300"
  >
    .
      <div className="flex flex-col">
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          priority
          style={{
            // aspectRatio: "1",
          }}
          className=" object-cover rounded-2xl  group-hover:scale-90 duration-300 transition-all ease-in-out"
        />
      </div>
      <div className="w-full whitespace-normal overflow-wrap-anywhere break-words py-3" >
        <p className="tracking-tight leading-tight">
          <span className="text-lg font-semibold">{name}</span> - <span className="text-gray-500 text-sm">{shortDescription}</span>
        </p>
      </div>
    
  </div>
  )
}

export default ProjectCard
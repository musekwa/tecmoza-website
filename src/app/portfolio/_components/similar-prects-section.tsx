"use client"
import { ArrowLeft, ArrowRight } from 'lucide-react';
import React, { useEffect, useRef } from 'react'

type Props = {
    children: React.ReactNode;

}

const SimilarProjectsSection = ({
    children
}: Props) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleLeftScroll = () => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;
        scrollContainer.scrollLeft -= 200; // Adjust the scroll amount as needed
      };
    
      const handleRightScroll = () => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;
        scrollContainer.scrollLeft += 200; // Adjust the scroll amount as needed
      };

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;
        scrollContainer.style.scrollBehavior = 'smooth';
      }, []);


  return (
    <div className='relative px-6 lg:px-24'>
    <div ref={scrollContainerRef}
    className=" overflow-x-hidden whitespace-nowrap scroll-smooth"
    >
        {children}
    </div>
    <button
        className="absolute left-24 top-1/2 transform -translate-y-1/2 bg-gray-300 bg-opacity-70 hover:bg-sky-900  font-bold p-2 rounded-md"
        onClick={handleLeftScroll}
      >
        <ArrowLeft size={20} className='text-sky-500 hover:text-white' />
      </button>
      <button
        className="absolute right-24 top-1/2 transform -translate-y-1/2 bg-gray-300 bg-opacity-70 hover:bg-sky-900 text-gray-800 font-bold p-2 rounded-md"
        onClick={handleRightScroll}
      >
       <ArrowRight size={20} className='text-sky-500 hover:text-white' />
      </button>
    </div>
  )
}

export default SimilarProjectsSection
import Image from 'next/image'
import React from 'react'
import linkedinImg from '@/assets/linkedin.svg'

export const LinkedinCard = () => {
  return (
    <div className="h-[32rem] w-full bg-primary-100 rounded-xl border-2 border-quaternary-100 py-5 px-10">
      
      <h3 className='font-semibold'>My Linked in Profile</h3>
      <p className='text-quinternary-100 text-sm mt-1'>Come to meet me!</p>

      <Image 
        src={linkedinImg}
        width={200}
        height={200}
        alt='Linkedin Logo'
        className='mt-14 object-cover mx-auto'
      />

    </div>
  )
}

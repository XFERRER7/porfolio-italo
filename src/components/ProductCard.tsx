import Image from 'next/image'
import React from 'react'
import iphoneImg from '@/assets/iPhone.png'
import { MoveUpRight } from 'lucide-react'

export const ProductCard = () => {
  return (
    <div className="lg:h-[49rem] w-full bg-primary-100 rounded-xl border-2 border-quaternary-100 py-5 px-10">

      <div className='flex items-center justify-between'>
        <div>
          <h3 className='font-semibold'>Mobile App</h3>
          <p className='text-quinternary-100 text-sm mt-1'>Product Develop</p>
        </div>

        <div className='flex items-center justify-center p-2 bg-secondary-100 rounded-full shadow-button'>
          <MoveUpRight
            size={20}
            className='font-bold'
          /> 
        </div>


      </div>

      <Image
        src={iphoneImg}
        alt='iphone'
        width={500}
        height={700}
        className='object-cover mt-5 mx-auto'
      />

    </div>
  )
}

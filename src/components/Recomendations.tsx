import Image from 'next/image'
import React from 'react'

export const Recomendations = () => {
  return (
    <div className='w-full lg:h-80 bg-primary-100 rounded-xl border-2 border-quaternary-100 py-8 lg:px-10 px-4'>


      <h3 className='font-semibold text-lg'>Recomendations</h3>
      <p className='text-quinternary-100 text-sm mt-1'>"People who trust in my work."</p>


      <div className='flex lg:flex-row flex-col items-center gap-2 mt-5'>

        <Card />
        <Card />
        <Card />

      </div>

    </div>
  )
}


const Card = () => {

  return (
    <div className='h-48 lg:w-[25rem] w-full bg-tertiary-100 rounded-3xl text-white flex flex-col gap-5 justify-center px-5 py-5'>

      <div className='flex items-center gap-3'>
        {/* <Image 
          src='/images/face.jpg'
          alt='face'
          width={100}
          height={100}
          className='rounded-full'
        /> */}

        <div className='h-12 w-12 rounded-full bg-quinternary-100' />

        <div>
          <h4>John Doe</h4>
          <p className='text-[10px]'>CEO at Company</p>
        </div>
      </div>

      <p className='text-sm'>
        s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
      </p>

    </div>
  )

}
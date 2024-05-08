import Image from 'next/image'
import React from 'react'
import kiwiMangaImg from '@/assets/kiwi-manga.png'

export const AppCard = () => {
  return (
    <div className='flex-1 w-full bg-primary-100 rounded-xl border-2 border-quaternary-100 pt-5 px-10 overflow-hidden'>

      <h3 className='font-semibold underline'>
        Kiwi Manga: Manga Manhwa
      </h3>

      <p className='text-quinternary-100 text-sm mt-1 w-1/2'>
        My first app reached a margin of
        over 50,000 downloads!
      </p>

      <Image 
        src={kiwiMangaImg}
        width={479}
        height={374}
        alt='Kiwi Manga'
        className='mt-14 object-cover mx-auto h-80'
      />

    </div>
  )
}

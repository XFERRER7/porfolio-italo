import Image from 'next/image'
import React from 'react'
import iphoneImg from '@/assets/iPhone.png'
import { MoveUpRight } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage';

export const ProductCard = () => {
  const { translations } = useLanguage();

  return (
    <div className="lg:h-[51rem] w-full bg-primary-100 rounded-xl border-2 border-quaternary-100 py-5 px-10">

      <div className="flex items-center justify-between">
        <div>
          <a href='https://www.wealt.app/' target='_blank' className="font-semibold underline">{translations.productCard.title}</a>
          <p className="text-quinternary-100 text-sm mt-1">{translations.productCard.description}</p>
        </div>

        <div className="flex items-center justify-center p-2 bg-secondary-100 rounded-full shadow-button hover:scale-110 transition-all cursor-pointer"
        onClick={() => {
          window.open('https://www.wealt.app/')
        }}
        >
          <MoveUpRight size={20} className="font-bold" /> 
        </div>
      </div>

      <Image
        src={iphoneImg}
        alt="iphone"
        width={500}
        height={700}
        className="object-cover mt-5 mx-auto"
      />

    </div>
  );
};

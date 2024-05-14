import Image from 'next/image'
import React from 'react'
import linkedinImg from '@/assets/linkedin.svg'
import { MoveUpRight } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage';

export const LinkedinCard = () => {
  
  const { translations } = useLanguage();

  return (
    <div className="h-[32rem] w-full bg-primary-100 rounded-xl border-2 border-quaternary-100 py-5 px-10">

      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold underline">{translations.linkedinCard.title}</h3>
          <p className="text-quinternary-100 text-sm mt-1">{translations.linkedinCard.description}</p>
        </div>
        <div className="flex items-center justify-center p-2 bg-secondary-100 rounded-full shadow-button hover:scale-110 transition-all cursor-pointer">
          <MoveUpRight size={20} className="font-bold" />
        </div>
      </div>

      <Image
        src={linkedinImg}
        width={200}
        height={200}
        alt="Linkedin Logo"
        className="mt-14 object-cover mx-auto"
      />

    </div>
  );
};

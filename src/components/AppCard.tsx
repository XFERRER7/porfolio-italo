import Image from 'next/image'
import React from 'react'
import kiwiMangaImg from '@/assets/kiwi-manga.png'
import { MoveUpRight } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage';

export const AppCard = () => {
  
  const { translations } = useLanguage();

  return (
    <div className="flex-1 w-full bg-primary-100 rounded-xl border-2 border-quaternary-100 pt-5 px-10 overflow-hidden">

      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold underline">{translations.appCard.title}</h3>
          <p className="text-quinternary-100 text-sm mt-1 w-1/2">{translations.appCard.description}</p>
        </div>

        <div className="flex items-center justify-center p-2 bg-secondary-100 rounded-full shadow-button hover:scale-110 transition-all cursor-pointer">
          <MoveUpRight size={20} className="font-bold" />
        </div>
      </div>

      <Image
        src={kiwiMangaImg}
        width={479}
        height={374}
        alt="Kiwi Manga"
        className="mt-14 object-cover mx-auto h-80 rounded-tl-xl rounded-tr-2xl"
      />

    </div>
  );
};

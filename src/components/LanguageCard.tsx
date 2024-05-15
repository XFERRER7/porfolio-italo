import { useLanguage } from '@/hooks/useLanguage'
import React from 'react'

export const LanguageCard = () => {

  const { translations } = useLanguage()

  return (
    <div className="gradient-border p-0.5 rounded-xl text-center">
      <div className="lg:h-[129px] h-[97px] w-full rounded-xl">
        <div className="lg:h-32 h-24 w-full gradient-big-card rounded-xl border-quaternary-100 flex items-center justify-center">
          <p className="lg:text-lg text-base">{translations.languageCard.title}</p>
        </div>
      </div>
    </div>
  )
}

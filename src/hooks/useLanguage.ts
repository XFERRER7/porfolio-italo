'use client'
import { en, pt } from "@/utils/lang"
import { useEffect, useState } from "react"


export const useLanguage = () => {

  const [language, setLanguage] = useState('pt')

  useEffect(() => {
    const lang = localStorage.getItem('lang')
    if (lang) {
      setLanguage(lang)
    }
  }, [language])

  const translations = language == 'en' ? en : pt
  
  return {
    translations,
  }
}
import { useLanguage } from '@/hooks/useLanguage'
import React from 'react'

export const Footer = () => {

  const { translations } = useLanguage()

  return (
    <div className='p-[1.5px] rounded-xl footer-gradient-border' id='contact'>
      <div className='w-full lg:h-28 h-36 gradient-footer rounded-xl flex justify-between items-center px-10 lg:flex-row flex-col-reverse py-4'>

        <h3 className='text-xl'>
          Italo Ruan Santos
        </h3>


        <ul>
          <li className='flex gap-3'>
            <a href="https://github.com/dellfinn" target='_blank' className='text-secondary-100'>Github</a>
            <a href="https://wa.me/5562982272474?text=Ol%C3%A1+Italo%21" target='_blank'>Whatsapp</a>
            <a href="https://www.linkedin.com/in/italoruan/" target='_blank'>LinkedIn</a>
          </li>
        </ul>

        <div className="flex gap-2 items-center justify-center bg-[#161616] rounded-full p-1 px-4">

          <div className="w-4 h-4 bg-secondary-100 rounded-full" />

          <span className="text-[10px]">{translations.footer.availableForJob}</span>

        </div>

      </div>
    </div>
  )
}

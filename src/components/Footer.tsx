import React from 'react'

export const Footer = () => {
  return (
    <div className='p-[1.5px] rounded-xl footer-gradient-border'>
      <div className='w-full lg:h-28 h-36 gradient-footer rounded-xl flex justify-between items-center px-10 lg:flex-row flex-col-reverse py-4'>

        <h3 className='text-xl'>
          Italo Ruan Santos
        </h3>


        <ul>
          <li className='flex gap-3'>
            <a href="" className='text-secondary-100'>Github</a>
            <a href="">Whatsapp</a>
            <a href="">LinkedIn</a>
          </li>
        </ul>

        <div className="flex gap-2 items-center justify-center bg-[#161616] rounded-full p-1 px-4">

          <div className="w-4 h-4 bg-secondary-100 rounded-full" />

          <span className="text-[10px]">AVAILABLE FOR JOB</span>

        </div>

      </div>
    </div>
  )
}

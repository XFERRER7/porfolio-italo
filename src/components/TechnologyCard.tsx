import React from 'react'

interface ITechnologyCardProps {
  name: string
}

export const TechnologyCard = ({ name }: ITechnologyCardProps) => {
  return (
    <div className='lg:h-32 h-24 w-1/2 bg-primary-100 rounded-xl border-2 border-quaternary-100 flex items-center justify-center lg:text-lg text-base'>
      <p>
        {name}
      </p>
    </div>
  )
}

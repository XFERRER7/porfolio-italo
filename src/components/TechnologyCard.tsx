import React from 'react'

interface ITechnologyCardProps {
  name: string
}

export const TechnologyCard = ({ name }: ITechnologyCardProps) => {
  return (
    <div className='h-32 w-1/2 bg-primary-100 rounded-xl border-2 border-quaternary-100 flex items-center justify-center'>
      <p>
        {name}
      </p>
    </div>
  )
}

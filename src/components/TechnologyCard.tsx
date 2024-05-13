import React from 'react'

interface ITechnologyCardProps {
  name: string
  mustApplyReverseGradient: boolean
}

export const TechnologyCard = ({ name, mustApplyReverseGradient }: ITechnologyCardProps) => {

  return (
    <div 
    className={`lg:h-32 h-24 w-1/2 relative overflow-hidden ${mustApplyReverseGradient ? 'reverse-gradient-card' : 'gradient-card'} rounded-xl flex items-center justify-center lg:text-lg text-base`}>

      <p>
        {name}
      </p>
      
    </div>
  )
}

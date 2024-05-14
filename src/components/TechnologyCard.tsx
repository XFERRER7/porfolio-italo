import React from 'react'

interface ITechnologyCardProps {
  name: string
  mustApplyReverseGradient: boolean
}

export const TechnologyCard = ({ name, mustApplyReverseGradient }: ITechnologyCardProps) => {

  return (
    <div className={`w-1/2 gradient-border p-0.5 rounded-xl ${mustApplyReverseGradient ? 'reverse-gradient-border' : 'gradient-border'}`}>
      <div
        className={`lg:h-32 h-24 w-full relative overflow-hidden ${mustApplyReverseGradient ? 'reverse-gradient-card' : 'gradient-small-card'} rounded-xl flex items-center justify-center lg:text-lg text-base`}>

        <p>
          {name}
        </p>

      </div>
    </div>

  )
}

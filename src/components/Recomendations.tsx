import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useLanguage } from '@/hooks/useLanguage'
import Image from 'next/image';

export const Recomendations = () => {
  const { translations } = useLanguage();

  return (
    <div className='w-full lg:h-80 bg-primary-100 rounded-xl border-2 border-quaternary-100 py-8 px-14'>
      <h3 className='font-semibold text-lg'>{translations.recommendations.title}</h3>
      <p className='text-quinternary-100 text-sm mt-1'>{translations.recommendations.subtitle}</p>

      <div className='flex mt-5'>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {translations.recommendations.cards.map((item, index) => (
              <CarouselItem key={`${index}-${item.name}`} className="sm:basis-1/2 lg:basis-1/2 xl:basis-1/3 flex items-center justify-center">
                <div className="p-1">
                  <Card
                    name={item.name}
                    position={item.position}
                    quote={item.quote}
                    image={item.image}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='bg-primary-100 border-quinternary-100  active:bg-primary-100 focus:bg-primary-100' />
          <CarouselNext className='bg-primary-100 border-quinternary-100 active:bg-primary-100 focus:bg-primary-100' />
        </Carousel>
      </div>
    </div>
  )
}

interface ICardProps {
  name: string;
  position: string;
  quote: string;
  image: string;
}

const Card = ({ name, position, quote, image }: ICardProps) => {

  return (
    <div className='gradient-border p-[1.5px] rounded-3xl recomendation-card-border'>
      <div className='h-48 lg:w-[20rem] w-full bg-tertiary-100 rounded-3xl text-white flex flex-col gap-5 justify-center px-5 py-5 overflow-hidden'>
        <div className='flex items-center gap-3'>
          
          <Image
            src={image}
            alt='face'
            width={100}
            height={100}
            className='rounded-full w-14 h-14'
          />

          <div>
            <h4>{name}</h4>
            <p className='text-[10px]'>{position}</p>
          </div>
        </div>
        <p className='text-sm overflow-hidden text-ellipsis lg:line-clamp-4 line-clamp-3 cursor-pointer' title={quote}>{quote}</p>
      </div>
    </div>
  )
}
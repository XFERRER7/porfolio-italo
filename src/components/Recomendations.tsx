import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export const Recomendations = () => {
  return (
    <div className='w-full lg:h-80 bg-primary-100 rounded-xl border-2 border-quaternary-100 py-8 px-14'>


      <h3 className='font-semibold text-lg'>Recomendations</h3>
      <p className='text-quinternary-100 text-sm mt-1'>"People who trust in my work."</p>


      <div className='flex mt-5'>


        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/2 xl:basis-1/3 flex items-center justify-center">
                <div className="p-1">
                  <Card />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className='bg-primary-100 border-quinternary-100'
          />
          <CarouselNext
            className='bg-primary-100 border-quinternary-100'
          />
        </Carousel>

      </div>

    </div>
  )
}


const Card = () => {

  return (
    <div className='h-48 lg:w-[20rem] w-full bg-tertiary-100 rounded-3xl text-white flex flex-col gap-5 justify-center px-5 py-5'>

      <div className='flex items-center gap-3'>
        {/* <Image 
          src='/images/face.jpg'
          alt='face'
          width={100}
          height={100}
          className='rounded-full'
        /> */}

        <div className='h-12 w-12 rounded-full bg-quinternary-100' />

        <div>
          <h4>John Doe</h4>
          <p className='text-[10px]'>CEO at Company</p>
        </div>
      </div>

      <p className='text-sm'>
        s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
      </p>

    </div>
  )

}
'use client'
import { Copy, Plus } from "lucide-react"
import Image from "next/image"
import animationImg from "@/assets/animation.svg"
import { motion } from "framer-motion"
import Typewriter from 'typewriter-effect'

const container = {
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.05
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export const About = () => {
  return (
    <motion.div
      className="flex-1 bg-primary-100 border-2 border-quaternary-100 rounded-xl lg:px-14 px-5 lg:py-14 py-8"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className="h-full w-full text-quinternary-100">

        <div className="flex flex-col justify-between mobile:hidden gap-5">

          <motion.div
            variants={item}
            className="flex gap-2 w-48 items-center bg-[#161616] rounded-full p-1.5 px-4">

            <div className="w-4 h-4 bg-secondary-100 rounded-full" />

            <span className="text-xs">AVAILABLE FOR JOB</span>

          </motion.div>

          <h1 className="text-2xl">
            Mobile Developer
          </h1>

        </div>

        <motion.div variants={item} className="mobile:flex items-center justify-between hidden">
          <h1 className="text-2xl">
            Mobile Developer
          </h1>

          <div className="flex gap-2 items-center justify-center bg-[#161616] rounded-full p-1 px-4">

            <div className="w-4 h-4 bg-secondary-100 rounded-full" />

            <span className="text-xs">AVAILABLE FOR JOB</span>

          </div>
        </motion.div>

        <div className="w-32 h-32 bg-[#3F3E3E] rounded-full flex items-center justify-center mobile:hidden mt-5">
          <Image
            src={animationImg}
            alt="animation"
            width={158}
            height={159}
            className="object-cover"
          />
        </div>

        <motion.div variants={item} className="flex items-center justify-between mobile:mt-20 mt-5">

          <div className="flex flex-col gap-7 w-72">

            <h2 className="text-3xl text-white">
              I’m Italo Ruan
            </h2>

            <p className="lg:text-xl text-base h-36">
              <Typewriter
                options={{
                  delay: 20,
                }}
                onInit={(typewriter) => {
                  typewriter.typeString('Mobile developer since 2021, creator of an application with over 50,000 users. Committed to continuously improving User Experience.')
                    .start()
                }}
              />
            </p>
            <div className="flex gap-5 items-center">
              <div className="flex gap-0.5 h-10">
                <button className="bg-secondary-100 text-white rounded-tl-lg rounded-bl-lg w-20 shadow-button">
                  Hire me
                </button>
                <div className="w-7 bg-secondary-100 rounded-tr-lg rounded-br-lg flex items-center justify-center  shadow-button">
                  <Plus size={20} className="text-white" />
                </div>
              </div>
              <div className="flex h-9">
                <button className="w-28 bg-[#161616] rounded flex items-center justify-center gap-1 border border-quaternary-100 rounded-tr-none rounded-br-none">
                  Copy Email
                </button>
                <div className="flex items-center justify-center border border-quaternary-100 bg-[#161616] px-2 rounded-tr-lg rounded-br-lg">
                  <Copy size={16} className="text-white" />
                </div>
              </div>
            </div>

          </div>


          <div className="w-40 h-40 bg-[#3F3E3E] rounded-full mobile:flex items-center justify-center hidden">
            <Image
              src={animationImg}
              alt="animation"
              width={158}
              height={159}
              className="object-cover"
            />
          </div>

        </motion.div>

      </div>
    </motion.div>
  )
}

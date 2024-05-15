'use client'
import { Copy, Plus } from "lucide-react"
import Image from "next/image"
import animationImg from "@/assets/animation.svg"
import { motion } from "framer-motion"
import Typewriter from 'typewriter-effect'
import { useLanguage } from "@/hooks/useLanguage"
import { Switch } from "./ui/switch"
import useLanguageStore from "@/store/langStore"
import { useEffect, useState } from "react"
import { useToast } from "./ui/use-toast"

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

  const { translations } = useLanguage();
  const { language, setLanguage } = useLanguageStore()
  const { toast } = useToast()

  const [key, setKey] = useState(Date.now());

  useEffect(() => {
    setKey(Date.now());
  }, [translations]);

  return (
    <motion.div
      className="lg:h-[32.5rem] h-auto bg-primary-100 border-2 border-quaternary-100 rounded-xl lg:px-14 px-5 lg:py-14 py-8 relative"
      variants={container}
      initial="hidden"
      animate="visible"
      id="about"
    >

      <div className="flex items-center gap-3 text-sm absolute top-2 right-2">
        <span>EN</span>
        <Switch
          className="data-[state=checked]:bg-zinc-700 data-[state=unchecked]:bg-zinc-700"
          onClick={() => {
            setLanguage(language === 'en' ? 'pt' : 'en')
          }}
        />
        <span>PT</span>
      </div>

      <div className="h-full w-full text-quinternary-100">

        <div className="flex flex-col justify-between mobile:hidden gap-5">

          <motion.div
            variants={item}
            className="flex gap-2 justify-center w-60 items-center bg-[#161616] rounded-full p-1.5 px-2">

            <div className="w-4 h-4 bg-secondary-100 rounded-full" />

            <span className="text-xs">{translations.about.availableForJob}</span>

          </motion.div>

          <h1 className="text-2xl">
            {translations.about.title}
          </h1>

        </div>

        <motion.div variants={item} className="mobile:flex items-center justify-between hidden">
          <h1 className="text-2xl">
            {translations.about.title}
          </h1>

          <div className="flex gap-2 items-center justify-center bg-[#161616] rounded-full p-1 px-4">

            <div className="w-4 h-4 bg-secondary-100 rounded-full" />

            <span className="text-xs">{translations.about.availableForJob}</span>

          </div>
        </motion.div>

        <motion.div
          animate={["initial"]}
          whileHover={["grow"]}
          variants={{
            grow: {
              scale: 1.1
            },
            rotate: {
              rotate: [null, -5, 5, 0],
              transition: {
                duration: 10
              }
            },
            initial: {
              y: [-5, 5],
              rotate: 0,
              transition: {
                delay: 0.3,
                duration: 2,
                repeat: Infinity,
                // repeatDelay: 0.2,
                repeatType: "reverse"
              }
            }
          }} className="w-32 h-32 bg-[#3F3E3E] rounded-full flex items-center justify-center mobile:hidden mt-5">
          <Image
            src={animationImg}
            alt="animation"
            width={158}
            height={159}
            className="object-cover"
          />
        </motion.div>

        <motion.div variants={item} className="flex items-center justify-between mobile:mt-20 mt-5">

          <div className="flex flex-col gap-7 w-72">

            <h2 className="text-3xl text-white">
              I’m Italo Ruan
            </h2>

            <div className="lg:text-xl text-base h-36">
              <Typewriter
                key={key} // This ensures the Typewriter re-renders when the key changes
                options={{
                  delay: 20,
                }}
                onInit={(typewriter) => {
                  typewriter.typeString(translations.about.description).start();
                }}
                component={motion.p}
              />
            </div>
            <div className="flex gap-5 items-center mt-3">
              <div className="flex gap-0.5 h-10 hover:scale-105 transition-all">
                <button className={`bg-secondary-100 text-white rounded-tl-lg rounded-bl-lg w-28 shadow-button`}
                  onClick={() => {
                    window.open('https://www.linkedin.com/in/italoruan')
                  }}
                >
                  {translations.about.hireButton}
                </button>
                <div className="w-7 bg-secondary-100 rounded-tr-lg rounded-br-lg flex items-center justify-center  shadow-button">
                  <Plus size={20} className="text-white" />
                </div>
              </div>
              <div className="flex h-9 hover:scale-105 transition-all"
                onClick={() => {
                  navigator.clipboard.writeText('italodev@protonmail.com')
                  toast({
                    title: translations.about.toastTitle,
                    duration: 1500,
                  })
                }}
              >
                <button className="w-28 bg-[#161616] rounded flex items-center justify-center gap-1 border border-quaternary-100 rounded-tr-none rounded-br-none">
                  {translations.about.copyEmailButton}
                </button>
                <div className="flex items-center justify-center border border-quaternary-100 bg-[#161616] px-2 rounded-tr-lg rounded-br-lg">
                  <Copy size={16} className="text-white" />
                </div>
              </div>
            </div>

          </div>



          <motion.div
            animate={["initial"]}
            whileHover={["grow"]}
            variants={{
              grow: {
                scale: 1.1
              },
              rotate: {
                rotate: [null, -5, 5, 0],
                transition: {
                  duration: 10
                }
              },
              initial: {
                y: [-5, 5],
                rotate: 0,
                transition: {
                  delay: 0.3,
                  duration: 2,
                  repeat: Infinity,
                  // repeatDelay: 0.2,
                  repeatType: "reverse"
                }
              }
            }}
            className="w-40 h-40 bg-[#3F3E3E] rounded-full mobile:flex items-center justify-center hidden">
            <Image
              src={animationImg}
              alt="animation"
              width={158}
              height={159}
              className="object-cover"
            />
          </motion.div>

        </motion.div>

      </div>
    </motion.div>
  )
}

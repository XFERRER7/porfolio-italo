import Image from "next/image";
import groupBallsImg from "../assets/group-balls.svg";
import { Menu } from "lucide-react";

export const Navbar = () => {
  return (
    <div className="lg:h-16 h-12 w-full flex gap-1 items-center">

      <div className="rounded-full lg:h-16 lg:w-16 h-12 w-12 flex items-center justify-center bg-primary-100 p-2 border-2 border-quaternary-100">
        <Image
          src={groupBallsImg}
          alt="Group of balls"
          width={64}
          height={64}
          className="h-10 w-10"
        />
      </div>

      {/* Navbar desktop */}
      <div className="flex-1 h-full bg-primary-100 border-2 border-quaternary-100 rounded-full lg:flex hidden items-center justify-around">

        <span className="text-lg text-secondary-100">
          ABOUT
        </span>

        <span className="text-lg">
          PORTFOLIO
        </span>

        <span className="text-lg">
          CONTACT
        </span>

      </div>

      {/* Navbar mobile */}
      <div className="flex-1 h-full bg-primary-100 border-2 border-quaternary-100 rounded-full lg:hidden flex items-center justify-between px-5">

        <span className="text-lg text-secondary-100">
          ABOUT
        </span>

        <Menu size={24} className="" />

      </div>

    </div>
  )
}

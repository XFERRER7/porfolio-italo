import Image from "next/image";
import groupBallsImg from "../assets/group-balls.svg";

export const Navbar = () => {
  return (
    <div className="h-16 w-full flex gap-1 items-center">

      <div className="rounded-full h-16 w-16 bg-primary-100 p-2 border-2 border-quaternary-100">
        <Image
          src={groupBallsImg}
          alt="Group of balls"
          width={64}
          height={64}
        />
      </div>

      <div className="flex-1 h-full bg-primary-100 border-2 border-quaternary-100 rounded-full flex items-center justify-around">

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
    </div>
  )
}

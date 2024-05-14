import Image from "next/image";
import groupBallsImg from "../assets/group-balls.svg";
import { Menu } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Input } from "postcss";
import { Button } from "./ui/button";


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

        <span className="text-lg">
          ABOUT
        </span>

        <span className="text-lg text-secondary-100">
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



        <Sheet key={1}>
          <SheetTrigger asChild>
            <Menu size={24} />
          </SheetTrigger>
          <SheetContent side='bottom' className="bg-primary-100 h-[50vh] border-secondary-100">
            <SheetHeader>
              <SheetTitle className="text-secondary-100">PORTFOLIO</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col justify-center items-center gap-5 h-full">

              <span className="text-lg font-bold w-full border-b border-tertiary-100 text-center py-2">
                About
              </span>

              <span className="text-lg font-bold w-full border-b border-tertiary-100 text-center py-2">
                Contact
              </span>

            </div>
          </SheetContent>
        </Sheet>

      </div>

    </div>
  )
}

import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import DarkmodeSwitch from "@/components/DarkmodeSwitch";

const Navbar = () => {
  return (
    <>
      <nav className="justify-between items-center py-5 shadow-2xl">
        <section className="flex mx-16">
        <div className="w-1/2 text-3xl mx-8 font-bold my-auto">
          <Link href="/">Sawan.dev</Link>
        </div>
        <div className="mx-8">
          <Sheet>
            <SheetTrigger className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 128 128"
              >
                <path
                  fill="#fff"
                  d="M64 14A50 50 0 1 0 64 114A50 50 0 1 0 64 14Z"
                ></path>
                <path
                  fill="#444b54"
                  d="M64,117c-29.2,0-53-23.8-53-53s23.8-53,53-53s53,23.8,53,53S93.2,117,64,117z M64,17c-25.9,0-47,21.1-47,47s21.1,47,47,47s47-21.1,47-47S89.9,17,64,17z"
                ></path>
                <path
                  fill="#444b54"
                  d="M86.5 52h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 52 86.5 52zM86.5 67h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 67 86.5 67z"
                ></path>
                <g>
                  <path
                    fill="#444b54"
                    d="M86.5,82h-45c-1.7,0-3-1.3-3-3s1.3-3,3-3h45c1.7,0,3,1.3,3,3S88.2,82,86.5,82z"
                  ></path>
                </g>
              </svg>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
              <div className="flex flex-col space-y-6 lg:hidden my-auto">
                <h1 className="text-2xl font-bold">Sawan.dev</h1>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/contact">Contact</Link>
                <span><DarkmodeSwitch/></span>
            </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <div className="w-1/2 flex justify-end space-x-6 max-sm:hidden">
          <Link className="font-bold  hover:scale-125 transition-transform duration-300 my-auto" href="#about">About</Link>
          <Link className="font-bold  hover:scale-125 transition-transform duration-300  my-auto" href="/projects">Projects</Link>
          <Link className="font-bold  hover:scale-125 transition-transform duration-300  my-auto" href="/contact">Contact</Link>
          <DarkmodeSwitch/>
        </div>
        </section>
      </nav>
    </>
  );
};

export default Navbar;

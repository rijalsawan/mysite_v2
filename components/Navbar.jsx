import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import DarkmodeSwitch from "@/components/DarkmodeSwitch";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Tech", href: "/#tech-stack" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b-4 border-foreground py-3 md:py-4">
      {/* Decorative wireframe line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[linear-gradient(90deg,currentColor_50%,transparent_50%)] bg-[length:12px_12px] opacity-10 pointer-events-none" />

      <section className="container mx-auto px-4 lg:px-8 flex justify-between items-center relative z-10">
        <motion.div 
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
          className="text-xl md:text-3xl font-black relative group"
        >
          <Link 
            href="/" 
            className="flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1.5 md:px-5 md:py-2 border-2 md:border-4 border-foreground shadow-[4px_4px_0px_currentColor] group-hover:shadow-[6px_6px_0px_currentColor] inline-block uppercase tracking-tighter transition-all"
          >
            
            SAWAN.DEV
          </Link>
        </motion.div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-3">
          <DarkmodeSwitch />
          
          <Sheet>
            <SheetTrigger asChild>
              <button 
                title="Menu"
                className="bg-secondary text-secondary-foreground p-2 md:p-2.5 border-2 md:border-4 border-foreground shadow-[4px_4px_0px_currentColor] hover:-translate-y-1 hover:shadow-[6px_6px_0px_currentColor] transition-all active:translate-y-0 active:shadow-[0px_0px_0px_currentColor]"
              >
                <Menu className="w-6 h-6 md:w-7 md:h-7" strokeWidth={3} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] sm:w-[400px] border-l-4 border-foreground bg-background p-0 flex flex-col pt-12">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              
              <div className="p-6 md:p-8 border-b-4 border-foreground bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,currentColor_25%,transparent_25%,transparent_50%,currentColor_50%,currentColor_75%,transparent_75%,transparent)] bg-[length:4px_4px] opacity-[0.03] pointer-events-none" />
                <span className="font-black text-2xl md:text-3xl uppercase tracking-widest relative z-10 border-4 border-foreground bg-secondary text-secondary-foreground px-4 py-1.5 shadow-[4px_4px_0px_currentColor] inline-block -rotate-2">
                  NAVIGATION
                </span>
              </div>
              
              <div className="flex flex-col flex-1 p-6 md:p-8 gap-4 overflow-y-auto">
                {navLinks.map((link, i) => (
                  <SheetClose asChild key={link.name}>
                    <Link 
                      className="group flex flex-col items-start gap-1 p-2 border-4 border-foreground bg-card hover:bg-primary hover:text-primary-foreground shadow-[8px_8px_0px_currentColor] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_currentColor] transition-all"
                      href={link.href}
                    >
                      <span className="text-xs md:text-sm font-black opacity-50 uppercase tracking-widest">0{i + 1}</span>
                      <span className="text-3xl md:text-4xl font-black uppercase tracking-tight">{link.name}</span>
                    </Link>
                  </SheetClose>
                ))}
              </div>
              
              <div className="p-4 md:p-6 border-t-4 border-foreground bg-primary text-primary-foreground text-center text-xs md:text-sm font-bold uppercase tracking-widest">
                System Active // Sawan.dev
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 overflow-hidden bg-muted/50 border-4 border-foreground shadow-[6px_6px_0px_currentColor] px-4 py-2 -rotate-1 group hover:rotate-0 transition-transform">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              whileHover={{ y: -4, rotate: i % 2 === 0 ? 3 : -3 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <Link 
                className="font-bold text-sm lg:text-base uppercase tracking-widest px-3 py-1.5 border-2 border-transparent hover:border-foreground hover:bg-secondary hover:text-secondary-foreground hover:shadow-[4px_4px_0px_currentColor] transition-all inline-block z-10 relative" 
                href={link.href}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          
          <div className="w-1 h-8 bg-foreground/20 rounded-full mx-2" />

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/resume" className="font-black text-sm lg:text-base uppercase tracking-widest px-4 py-1.5 border-2 border-foreground bg-primary text-primary-foreground shadow-[4px_4px_0px_currentColor] hover:translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_currentColor] transition-all inline-block">RESUME</Link>
          </motion.div>

          <div className="w-1 h-8 bg-foreground/20 rounded-full mx-2" />

          <DarkmodeSwitch />
        </div>
      </section>
    </nav>
  );
};

export default Navbar;



import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useAnimation } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Mail } from "lucide-react";

const SkillBadge = ({ skill, index, shouldReduceMotion, isActive, isPlaying, onClick }) => {
  const baseRotate = [3, -2, 4, -3, 2, -4][index % 6];
  const floatDelay = (index % 5) * 0.2;

  return (
    <motion.div
      layout
      onClick={() => onClick(skill.name)}
      initial={{ opacity: 0, scale: 0.8, rotate: baseRotate }}
      whileInView={{
        opacity: 1,
        scale: 1,
        rotate: shouldReduceMotion ? 0 : baseRotate,
        y: shouldReduceMotion ? 0 : [0, -8, 0]
      }}
      viewport={{ once: true }}
      transition={{
        layout: { type: "spring", stiffness: 300, damping: 20 },
        y: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: floatDelay
        },
        opacity: { duration: 0.5 }
      }}
      whileHover={{
        scale: 1.15,
        rotate: 0,
        y: -10,
        zIndex: 50,
        transition: { type: "spring", stiffness: 400, damping: 15 }
      }}
      whileTap={{
        scale: 0.95,
        rotate: baseRotate * -1.5,
        zIndex: 50,
        boxShadow: "0px 0px 0px currentColor",
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
      animate={isActive ? {
        scale: 1.3,
        rotate: 0,
      } : {}}
      className={`relative z-10 flex items-stretch border-2 md:border-4 rounded-xl md:rounded-2xl hover:z-50 shadow-[4px_4px_0px_currentColor] md:shadow-[6px_6px_0px_currentColor] hover:shadow-[8px_8px_0px_currentColor] overflow-hidden text-foreground cursor-pointer select-none ${
        isActive ? 'border-yellow-400' : 'border-foreground'
      } ${isActive ? 'bg-yellow-400 text-black' : 'bg-card'}`}
      style={{
        touchAction: 'manipulation'
      }}
    >
      {/* Brand Color Sidebar */}
      <div 
        className="w-4 sm:w-5 md:w-8 shrink-0 border-r-2 md:border-r-4 border-foreground relative overflow-hidden"    
      >
        <div className="absolute inset-0" style={{ backgroundColor: skill.color }}></div>
        {/* Candy Stripe Effect for texture */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.6)_50%,transparent_75%,transparent_100%)] [background-size:10px_10px]"></div>
      </div>

      {/* Main Content Area */}
      <div className="px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 flex items-center gap-2 sm:gap-3 md:gap-4 relative w-full bg-background/50">
        {/* Blueprint Grid Pattern background */}
        <div className="absolute inset-0 opacity-[0.06] dark:opacity-[0.12] pointer-events-none" style={{ backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)', backgroundSize: '12px 12px', backgroundPosition: '-1px -1px' }}></div>
        
        {/* Number Tag */}
        <div className="relative z-10 bg-secondary text-secondary-foreground px-1.5 py-0.5 md:px-2 md:py-1 border-2 border-foreground rounded-md text-[10px] sm:text-xs md:text-sm font-black shadow-[2px_2px_0px_currentColor] -rotate-3 group-hover:rotate-6 transition-transform duration-300">
           {String(index + 1).padStart(2, '0')}
        </div>
        
        {/* Skill Name */}
        <span className="relative z-10 text-sm sm:text-base md:text-xl font-black uppercase tracking-tight whitespace-nowrap">
          {skill.name}
        </span>
        
        {/* Decorative arrow */}
        <div className="hidden sm:flex relative z-10 ml-auto pl-1 md:pl-2 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </div>
      </div>
    </motion.div>
  );
};

const Body = () => {
  const shouldReduceMotion = useReducedMotion();

  const handleDownload = () => {
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = '/resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const projects = [
    {
      id: 1,
      title: "Parliament Watch",
      description: "Political transparency and governance tracking platform with real-time parliamentary data scraping, member profiles, law tracking, promise monitoring, public sentiment polling, and comprehensive discussion forums.",
       image: "/gov.jpg",
      technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'NextAuth', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      category: "Governance & Transparency",
      liveUrl: "https://parliament-watch.vercel.app"
    },
    {
      id: 2,
      title: "Mo:Mo Station",
      description: "Modern e-commerce platform with clean design, seamless shopping experience, order management and payment.",
      image: "/ecommerce.svg",
      technologies: ['Next.js', 'PostGreSQL', 'Stripe', 'Google Oauth', 'NextAuth', 'Framer Motion', 'Tailwind CSS'],
      category: "E-commerce",
      liveUrl: "https://himalayanmomo.vercel.app"
    },
    {
      id: 3,
      title: "LensBook",
      description: "A social media platform for sharing photos and connecting with friends. Smooth Messaging feature with read receipts, Efficient realtime notifications. ",
      image: "/lensbook.jpg",
      technologies: ['Next.js', 'PostGreSQL', 'React hooks', 'Cloudinary', 'clerk', 'Websocket', 'Vercel SSE'],
      category: "Social Media & Messaging",
      liveUrl: "https://lens-book.vercel.app"
    },
    {
  id: 4,
  title: "Phantom Driving School",
  description: "A comprehensive driving lesson management platform with admin dashboard for instructors to manage bookings, students, payments, and lesson progress. Features real-time analytics, package management, and student progress tracking. For Admin Access: email: admin@gmail.com, password: 12345678",
  image: "/drive.jpg",
  technologies: ['Next.js', 'TypeScript', 'Prisma', 'Stripe', 'NextAuth', 'Recharts', 'Framer Motion', 'Tailwind CSS'],
  category: "Business Management",
  liveUrl: "https://phantom-xi-sage.vercel.app"
},
    
    {
      id: 5,
      title: "StoreIt",
      description: "A modern SAAS cloud storage platform that allows users to upload, manage, and share files securely. Subscription-based service with Stripe integration.",
      image: "/storeit.jpg",
      technologies: ['React', 'ExpressJS', 'BlackBlaze B2 cloud storage', 'Stripe', 'PostGreSQL', 'NodeJs'],
      category: "SAAS",
      liveUrl: "https://store-it-two-navy.vercel.app"
    },
  ];

  const skills = [
    { name: "HTML", color: "#E65100" },
    { name: "Tailwind CSS", color: "#06B6D4" },
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "React", color: "#61DAFB" },
    { name: "Next.js", color: "#000000" },
    { name: "Node.js", color: "#339933" },
    { name: "Express", color: "#000000" },
    { name: "MongoDB", color: "#47A248" },
    { name: "PostgreSQL", color: "#4169E1" },
    { name: "Docker", color: "#0277BD" }
  ];

  const [displaySkills, setDisplaySkills] = useState(skills);

  // Memory Game State - Use all 11 skills
  const gameSkills = skills.map(skill => skill.name);
  const [sequence, setSequence] = useState([]);
  const [userSequence, setUserSequence] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShowingSequence, setIsShowingSequence] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);
  const [level, setLevel] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOverState, setGameOverState] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  // Show the sequence to user
  const showSequence = async (seq) => {
    setIsShowingSequence(true);
    setUserSequence([]);

    for (let i = 0; i < seq.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 600));
      setActiveSkill(seq[i]);
      await new Promise(resolve => setTimeout(resolve, 600));
      setActiveSkill(null);
    }

    setIsShowingSequence(false);
  };

  // Start game
  const startGame = () => {
    const firstSkill = gameSkills[Math.floor(Math.random() * gameSkills.length)];
    const newSequence = [firstSkill];

    setIsPlaying(true);
    setLevel(1);
    setSequence(newSequence);
    setUserSequence([]);
    setGameOverState(false);
    setShowInstructions(false);

    showSequence(newSequence);
  };

  // Add to sequence and show only the new block
  const nextRound = () => {
    const nextSkill = gameSkills[Math.floor(Math.random() * gameSkills.length)];
    const newSequence = [...sequence, nextSkill];

    setLevel(level + 1);
    setSequence(newSequence);
    setUserSequence([]);

    // Only show the new skill, not the entire sequence
    showSequence([nextSkill]);
  };

  // Handle user click
  const handleSkillClick = (skillName) => {
    if (!isPlaying || isShowingSequence) return;
    if (!gameSkills.includes(skillName)) return;

    // Hide instructions after first click
    if (showInstructions && userSequence.length === 0) {
      setShowInstructions(false);
    }

    // Flash the clicked skill
    setActiveSkill(skillName);
    setTimeout(() => setActiveSkill(null), 300);

    const newUserSequence = [...userSequence, skillName];
    setUserSequence(newUserSequence);

    // Check if this click is correct
    const currentIndex = newUserSequence.length - 1;
    if (newUserSequence[currentIndex] !== sequence[currentIndex]) {
      // Wrong! Game over
      setGameOverState(true);
      setIsPlaying(false);
      setIsShowingSequence(false);
      setShowInstructions(false);

      if (level > highScore) {
        setHighScore(level);
      }

      setTimeout(() => {
        setGameOverState(false);
        setSequence([]);
        setUserSequence([]);
        setLevel(0);
      }, 2500);
      return;
    }

    // Check if user completed the sequence
    if (newUserSequence.length === sequence.length) {
      // Correct! Move to next round
      setTimeout(() => {
        nextRound();
      }, 800);
    }
  };

  // Stop game
  const stopGame = () => {
    setIsPlaying(false);
    setIsShowingSequence(false);
    setSequence([]);
    setUserSequence([]);
    setLevel(0);
    setActiveSkill(null);
    setShowInstructions(false);
  };

  const heroLetters = "Web Developer".split("");

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <section className="my-16 lg:my-28 lg:flex lg:flex-row-reverse lg:mx-[8rem] px-4 justify-center lg:items-start items-center gap-12 relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="hero-img flex mx-auto lg:mx-0 lg:h-[400px] lg:w-[400px] h-72 w-72 mb-8 lg:mb-0 lg:mt-16 border-4 border-foreground shadow-[12px_12px_0px_currentColor] md:shadow-[16px_16px_0px_currentColor] rounded-2xl relative overflow-hidden bg-accent shrink-0 z-10"
        >
          {/* Brutalist image overlay texture */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:4px_4px] opacity-40 dark:opacity-20 pointer-events-none mix-blend-overlay z-20"></div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:w-1/2 space-y-8 text-center lg:text-left relative z-10 my-10"
        >
          <div className="space-y-12">
            <motion.div
              initial={{ rotate: -2, scale: 0.9, opacity: 0 }}
              animate={{ rotate: -1, scale: 1, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.5, delay: 0.1 }}
              className="relative w-fit mx-auto lg:mx-0 bg-[#fdf5c9] dark:bg-yellow-400 p-6 sm:p-8 border-4 border-black shadow-[8px_8px_0px_black] transform-gpu"
            >
               <div className="absolute top-2 left-2 right-2 bottom-2 border-2 border-dashed border-black/20 pointer-events-none z-0" />
               
               <h1 className="text-4xl sm:text-6xl lg:text-[5rem] font-black tracking-tighter text-black leading-[1.05] uppercase relative z-10 text-center lg:text-left">
                 <span className="block w-fit mx-auto lg:mx-0">Full-Stack</span>
                 <span className="mt-1 md:mt-2 block w-fit mx-a_0px_black0">
                   Web Developer
                 </span>
               </h1>
            </motion.div>

            <div className="relative inline-block mt-4 md:mt-8">
              {/* Secondary Paper Note */}
              <motion.div 
               initial={{ rotate: 5, y: 20, opacity: 0 }}
               animate={{ rotate: 2, y: 0, opacity: 1 }}
               transition={{ type: "spring", bounce: 0.4, delay: 0.3 }}
               className="bg-white dark:bg-zinc-100 text-black px-4 py-2 sm:px-6 sm:py-3 border-4 border-black shadow-[6px_6px_0px_black] transform-gpu relative z-10"
              >
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-10 bg-[#ff9999] border-2 border-black -rotate-6 shadow-[2px_2px_0px_black]" /> {/* Red Tape */}
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-widest flex items-center gap-3">
                  
                  Sawan Rijal
                </h2>
              </motion.div>
            </div>
          </div>
          
          <div className="relative mt-12 md:mt-16 w-fit mx-auto lg:mx-0">
            {/* Background pattern for the text box */}
            <div className="absolute inset-0 bg-[linear-gradient(currentColor_1px,transparent_1px),linear-gradient(90deg,currentColor_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-[0.05] pointer-events-none -mr-4 -mb-4 rounded-xl" />
            
            {/* Main Text Content */}
            <motion.div
              initial={{ rotate: 1, y: 20, opacity: 0 }}
              animate={{ rotate: -1, y: 0, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.3, delay: 0.4 }}
              className="relative bg-white dark:bg-zinc-900 p-6 sm:p-8 border-4 border-black shadow-[8px_8px_0px_black] transform-gpu max-w-[38rem]"
            >
              <div className="absolute top-2 left-2 right-2 bottom-2 border-2 border-dashed border-black/20 dark:border-white/20 pointer-events-none z-0" />
              
              <p className="text-black dark:text-zinc-100 text-lg sm:text-xl md:text-2xl font-bold leading-relaxed relative z-10 font-mono">
                <span className="absolute -top-5 -left-3 text-5xl text-black/20 dark:text-white/20 font-serif rotate-3">❝</span>
                Hi, I&apos;m <span className="font-black bg-[#88eeff] dark:bg-blue-500 px-2 py-0.5 border-2 border-black inline-block -rotate-2 transform-gpu shadow-[2px_2px_0px_black]">Sawan</span>. A passionate Full-Stack Developer based in Winnipeg, Manitoba. I love building responsive, scalable, and{" "}
                <span className="font-black bg-[#ffaa88] dark:bg-red-500 px-2 py-0.5 border-2 border-black inline-block rotate-2 transform-gpu shadow-[2px_2px_0px_black]">beautiful</span> web applications.
              </p>
            </motion.div>
          </div>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 pt-6 relative z-10">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              href="https://www.linkedin.com/in/sawan-rijal"
              className="group bg-blue-600 p-3 md:p-4 border-4 border-foreground rounded-xl shadow-[4px_4px_0px_currentColor] md:shadow-[6px_6px_0px_currentColor] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all flex items-center justify-center overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:4px_4px] pointer-events-none" />
              <Image src="/linkedin.png" className="w-8 h-8 object-contain relative z-10 drop-shadow-md brightness-0 invert" alt="linkedin" width={32} height={32} />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              href="https://github.com/rijalsawan"
              className="group bg-white p-3 md:p-4 border-4 border-foreground rounded-xl shadow-[4px_4px_0px_currentColor] md:shadow-[6px_6px_0px_currentColor] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all flex items-center justify-center overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:4px_4px] pointer-events-none" />
              <Github className="w-8 h-8 text-black relative z-10 drop-shadow-md" />
            </Link>
            <Link
              type="button"
              href="/resume"
              className="group bg-primary text-primary-foreground px-6 md:px-10 py-3 md:py-4 border-4 border-foreground rounded-xl shadow-[4px_4px_0px_currentColor] md:shadow-[6px_6px_0px_currentColor] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all flex items-center gap-3 font-black text-lg md:text-xl uppercase tracking-widest relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>
              <span className="relative z-10">Resume</span>
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="overflow-hidden" id="tech-stack">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 relative">
            <motion.h2 
              initial={{ rotate: -2, scale: 0.9, opacity: 0 }}
              whileInView={{ rotate: shouldReduceMotion ? 0 : -2, scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-4xl md:text-6xl font-black tracking-tight bg-primary text-primary-foreground px-8 py-4 rounded-[2rem] shadow-xl border-4 border-foreground"
              style={{ rotate: shouldReduceMotion ? "0deg" : "-2deg" }}
            >
              My Tech Arsenal
            </motion.h2>
            <p className="mt-8 text-xl text-muted-foreground font-bold max-w-2xl mx-auto tracking-wide">
              {isPlaying
                ? `Remember the full sequence! Level ${level} (only new block lights up)`
                : shouldReduceMotion
                  ? "The tools I use to bring ideas to life."
                  : "Play the Memory Game with my tech skills!"}
            </p>

            {/* Game UI */}
            {isPlaying && !gameOverState && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative mt-6 bg-[#fdf5c9] dark:bg-yellow-300 text-black border-4 border-foreground px-8 py-4 inline-block transform-gpu -rotate-1 shadow-[6px_6px_0px_currentColor]"
              >
                <div className="absolute inset-1 border-2 border-dashed border-black/20 pointer-events-none" />
                <div className="relative z-10">
                  <div className="text-sm md:text-base font-black uppercase tracking-wider">Level</div>
                  <div className="text-4xl md:text-6xl font-black">{level}</div>
                  {isShowingSequence && <div className="text-xs md:text-sm font-bold mt-2">👀 Watch carefully...</div>}
                  {!isShowingSequence && <div className="text-xs md:text-sm font-bold mt-2 text-green-600">✋ Your turn! ({userSequence.length}/{sequence.length})</div>}
                </div>
              </motion.div>
            )}

            {gameOverState && (
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative mt-6 bg-[#fdb2b2] dark:bg-red-400 text-black border-4 border-foreground px-8 py-6 inline-block transform-gpu rotate-2 shadow-[8px_8px_0px_currentColor]"
              >
                <div className="absolute inset-1 border-2 border-dashed border-black/20 pointer-events-none" />
                <div className="relative z-10">
                  <div className="text-3xl md:text-4xl font-black uppercase">Game Over!</div>
                  <div className="text-lg md:text-xl font-bold mt-2">You reached level {level}</div>
                  {level > highScore && <div className="text-base md:text-lg font-bold mt-1 text-yellow-600">🎉 New High Score!</div>}
                </div>
              </motion.div>
            )}

            {/* How to Play Description */}
            {showInstructions && (
              <motion.div
                initial={{ rotate: 1, y: 20, opacity: 0 }}
                animate={{ rotate: -1, y: 0, opacity: 1 }}
                exit={{ rotate: 1, y: 20, opacity: 0 }}
                transition={{ type: "spring", bounce: 0.3 }}
                className="relative mt-8 bg-white dark:bg-zinc-900 p-6 sm:p-8 border-4 border-foreground shadow-[8px_8px_0px_currentColor] transform-gpu max-w-[38rem] mx-auto text-left"
              >
                <div className="absolute top-2 left-2 right-2 bottom-2 border-2 border-dashed border-black/20 dark:border-white/20 pointer-events-none z-0" />
                  
                {/* Close button */}
                <button
                  onClick={() => setShowInstructions(false)}
                  className="absolute -top-4 -right-4 w-10 h-10 bg-red-500 text-white border-4 border-foreground rounded-full shadow-[4px_4px_0px_currentColor] font-black text-xl hover:scale-110 flex items-center justify-center z-30"
                >
                  ✕
                </button>

                <div className="relative z-10 text-foreground font-mono">
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-6 flex items-center gap-2">
                    <span className="font-black bg-[#88eeff] dark:bg-blue-500 text-black px-2 py-0.5 border-2 border-foreground inline-block -rotate-2 shadow-[2px_2px_0px_currentColor]">How to Play</span>
                  </h3>

                  {/* Instructions */}
                  <div className="space-y-4 text-base md:text-lg font-bold leading-relaxed">
                    <p>
                      <span className="inline-block w-8 text-center bg-[#ffaa88] dark:bg-red-500 text-black px-1 py-0.5 border-2 border-foreground rotate-2 shadow-[2px_2px_0px_currentColor] mr-2">1</span> 
                      Watch the <span className="underline decoration-wavy decoration-[#88eeff] dark:decoration-blue-500 underline-offset-4 decoration-2">new block</span> light up.
                    </p>
                    <p>
                      <span className="inline-block w-8 text-center bg-[#ffaa88] dark:bg-red-500 text-black px-1 py-0.5 border-2 border-foreground -rotate-2 shadow-[2px_2px_0px_currentColor] mr-2">2</span> 
                      Click <span className="underline decoration-wavy decoration-[#ffaa88] dark:decoration-red-500 underline-offset-4 decoration-2">ALL blocks</span> in the complete sequence.
                    </p>
                    <p>
                      <span className="inline-block w-8 text-center bg-[#ffaa88] dark:bg-red-500 text-black px-1 py-0.5 border-2 border-foreground rotate-2 shadow-[2px_2px_0px_currentColor] mr-2">3</span> 
                      Wrong click = <span className="bg-red-500 text-white px-2 py-0.5 border-2 border-foreground shadow-[2px_2px_0px_currentColor] inline-block -rotate-1">Game Over</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {!shouldReduceMotion && (
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                {!isPlaying ? (
                  <>
                    <motion.button
                      whileHover={{ scale: 1.05, rotate: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={startGame}
                      className="bg-green-500 text-black px-6 py-2 border-2 md:border-4 border-foreground rounded-xl shadow-[2px_2px_0px_currentColor] md:shadow-[4px_4px_0px_currentColor] font-black text-sm md:text-base uppercase tracking-wider transition-all hover:bg-green-400"
                    >
                      ▶ Play
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setShowInstructions(!showInstructions)}
                      className="bg-blue-500 text-white px-6 py-2 border-2 md:border-4 border-foreground rounded-xl shadow-[2px_2px_0px_currentColor] md:shadow-[4px_4px_0px_currentColor] font-black text-sm md:text-base uppercase tracking-wider transition-all hover:bg-blue-400"
                    >
                      ? How to Play
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05, rotate: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setDisplaySkills([...displaySkills].sort(() => Math.random() - 0.5))}
                      className="bg-secondary text-secondary-foreground px-6 py-2 border-2 md:border-4 border-foreground rounded-xl shadow-[2px_2px_0px_currentColor] md:shadow-[4px_4px_0px_currentColor] font-black text-sm md:text-base uppercase tracking-wider transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      Shuffle Stack
                    </motion.button>
                  </>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={stopGame}
                    className="bg-red-500 text-white px-6 py-3 border-2 md:border-4 border-foreground rounded-xl shadow-[2px_2px_0px_currentColor] md:shadow-[4px_4px_0px_currentColor] font-black text-sm md:text-base uppercase tracking-wider transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                  >
                    ✕ Stop Game
                  </motion.button>
                )}
              </div>
            )}

            {!isPlaying && highScore > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative mt-4 bg-[#fdf5c9] dark:bg-yellow-300 border-4 border-foreground px-8 py-4 inline-block rotate-1 shadow-[4px_4px_0px_currentColor]"
              >
                <div className="absolute inset-1 border-2 border-dashed border-black/20 pointer-events-none" />
                <div className="relative z-10">
                  <div className="text-sm font-black uppercase tracking-wider text-black/60">High Score</div>
                  <div className="text-3xl font-black text-black">Level {highScore}</div>
                </div>
              </motion.div>
            )}
          </div>

          <div
            className="relative w-full p-4 sm:p-6 md:p-12 min-h-[400px] md:min-h-[550px] flex flex-wrap justify-center content-start sm:content-center gap-4 sm:gap-6 md:gap-8 pointer-events-auto"
          >
            {displaySkills.map((skill, index) => (
              <SkillBadge
                key={skill.name}
                skill={skill}
                index={index}
                shouldReduceMotion={shouldReduceMotion}
                isActive={activeSkill === skill.name}
                isPlaying={isPlaying}
                onClick={handleSkillClick}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden" id="about">
        {/* Decorate background */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] pointer-events-none dark:opacity-20 opacity-50" />
        
        <div className="container mx-auto px-4 lg:px-[8rem] relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-8 md:gap-12"
          >
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between border-b-4 md:border-b-8 border-foreground pb-6 gap-6 relative">
              <div className="inline-block bg-yellow-300 text-black px-4 py-2 md:px-6 md:py-3 border-4 border-foreground shadow-[6px_6px_0px_currentColor] -rotate-2 transform-gpu">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-widest flex items-center gap-3 md:gap-4">
                  <span className="h-3 w-3 md:h-4 md:w-4 rounded-full bg-red-500 animate-pulse border-2 border-black" />
                  About Me
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mt-2 md:mt-4">
              {/* Giant Text Box */}
              <motion.div 
                className="lg:col-span-8 relative bg-white dark:bg-zinc-900 p-6 md:p-10 lg:p-12 border-4 border-foreground shadow-[8px_8px_0px_currentColor] md:shadow-[12px_12px_0px_currentColor] lg:shadow-[16px_16px_0px_currentColor]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {/* Blueprint lines */}
                <div className="absolute inset-0 bg-[linear-gradient(currentColor_1px,transparent_1px),linear-gradient(90deg,currentColor_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-[0.03] pointer-events-none" />
                
                <div className="space-y-6 text-lg md:text-2xl lg:text-3xl font-bold leading-relaxed text-foreground relative z-10 font-mono">
                  <p>
                    <span className="bg-foreground text-background px-2 py-1 md:px-3 md:py-1 rounded inline-block mr-2 md:mr-3 -rotate-2 whitespace-nowrap">I am</span>
                    a passionate Full-Stack Developer dedicated to creating cutting-edge, user-friendly, and performant web applications. With a strong foundation in modern web technologies, I love transforming complex problems into elegant digital solutions.
                  </p>
                  <p>
                    I constantly explore new frameworks and tools to stay at the forefront of web development, ensuring that the applications I build are not just functional, but <span className="underline decoration-wavy decoration-red-500 underline-offset-4 decoration-2">exceptional</span>.
                  </p>
                </div>
              </motion.div>

              {/* Data / Stats Panel */}
              <motion.div 
                className="lg:col-span-4 flex flex-col gap-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="bg-secondary p-6 md:p-8 border-4 border-foreground shadow-[6px_6px_0px_currentColor] md:shadow-[8px_8px_0px_currentColor] relative overflow-hidden group">
                  <div className="absolute right-0 top-0 w-24 h-24 bg-[linear-gradient(45deg,currentColor_25%,transparent_25%,transparent_50%,currentColor_50%,currentColor_75%,transparent_75%,transparent)] bg-[length:10px_10px] opacity-10 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110" />
                  <h3 className="text-xs md:text-sm font-black uppercase tracking-widest text-muted-foreground mb-2 relative z-10">Location</h3>
                  <p className="text-xl md:text-2xl lg:text-3xl font-black uppercase relative z-10">Winnipeg, MB</p>
                </div>
                
                <div className="bg-primary text-primary-foreground p-6 md:p-8 border-4 border-foreground shadow-[6px_6px_0px_currentColor] md:shadow-[8px_8px_0px_currentColor] relative overflow-hidden group flex-1">
                   <div className="absolute -right-4 -bottom-4 opacity-20 group-hover:rotate-12 transition-transform">
                     <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="m17 5-5-3-5 3"/><path d="m17 19-5 3-5-3"/><path d="M2 12h20"/><path d="m5 7 3 5-3 5"/><path d="m19 7-3 5 3 5"/></svg>
                   </div>
                  <h3 className="text-xs md:text-sm font-black uppercase tracking-widest text-primary-foreground/70 mb-2 relative z-10">Focus</h3>
                  <p className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight relative z-10">Scaleable<br/>Solutions.</p>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>
      
      <section className="pb-24 bg-muted/30 relative" id="projects">
        {/* Subtle grid pattern for projects background */}
        <div className="absolute inset-0 bg-[linear-gradient(currentColor_1px,transparent_1px),linear-gradient(90deg,currentColor_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-[0.02]" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 relative"
          >
            <h2 className="inline-block text-4xl md:text-6xl font-black uppercase tracking-tight bg-primary text-primary-foreground px-8 py-3 rounded-2xl border-4 border-foreground shadow-[6px_6px_0px_currentColor] md:shadow-[8px_8px_0px_currentColor] -rotate-1 mb-6 relative z-20">
              Featured Projects
            </h2>
            <div className="pt-8">
              <p className="relative inline-block text-lg md:text-2xl font-mono max-w-3xl mx-auto bg-[#fffff8] dark:bg-[#1f1e1c] border-4 border-foreground shadow-[6px_6px_0px_currentColor] md:shadow-[8px_8px_0px_currentColor] p-6 text-foreground leading-relaxed">
                <span className="absolute -top-4 -left-4 bg-red-500 text-white text-[10px] md:text-xs font-black px-3 py-1 border-2 md:border-4 border-foreground -rotate-6 shadow-[2px_2px_0px_currentColor] font-sans">OVERVIEW</span>
                Here are some of my recent projects that showcase my skills and passion for web development. I focus on clean code and pixel-perfect design.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 justify-items-center">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -8 }}
                className="w-full max-w-sm bg-[#fffff8] dark:bg-[#1f1e1c] rounded flex flex-col border-4 border-foreground shadow-[8px_8px_0px_currentColor] group relative will-change-transform"
              >
                {/* Notebook Rules (Horizontal lines) */}
                <div className="absolute inset-0 mt-8 bg-[linear-gradient(transparent_95%,rgba(0,0,0,0.1)_95%)] dark:bg-[linear-gradient(transparent_95%,rgba(255,255,255,0.08)_95%)] bg-[length:100%_2rem] pointer-events-none z-0" />
                
                {/* Notebook Margin Line */}
                <div className="absolute left-10 md:left-12 top-0 bottom-0 w-0.5 bg-red-400/60 dark:bg-red-500/40 z-10" />

                {/* Notebook Ring Holes */}
                <div className="absolute left-2 md:left-3 top-0 bottom-0 flex flex-col justify-evenly py-8 z-20">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 rounded-full bg-background border-4 border-foreground shadow-inner" />
                  ))}
                </div>

                {/* Category / Sticky Tab */}
                <div className="absolute -top-4 -right-2 bg-red-500 text-white text-[10px] md:text-xs font-black px-3 py-1 border-2 md:border-4 border-foreground rotate-6 shadow-[2px_2px_0px_currentColor] font-sans z-30 uppercase">
                  {project.category}
                </div>

                {/* Image Tape / Polaroid style */}
                <div className="relative h-48 md:h-52 mt-16 mx-12 md:mx-14 rounded-sm bg-muted border-4 border-foreground transform rotate-2 group-hover:rotate-0 transition-transform overflow-hidden z-20 mb-2 shadow-[4px_4px_0px_currentColor] md:shadow-[6px_6px_0px_currentColor]">
                  <Image
                    className="object-cover w-full h-full grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-sm">
                    {project.liveUrl && project.liveUrl !== "#" && (
                       <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 hover:rotate-3 transition-transform">
                        <Badge variant="secondary" className="bg-white text-black border-2 md:border-4 border-foreground hover:bg-yellow-300 cursor-pointer text-xs md:text-sm py-1.5 md:py-2 px-3 md:px-4 rounded-xl shadow-[4px_4px_0px_currentColor] uppercase font-black">
                          <ExternalLink className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2" /> Live
                        </Badge>
                      </Link>
                    )}
                    {project.gitUrl && project.gitUrl !== "#" && (
                      <Link href={project.gitUrl} target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 hover:-rotate-3 transition-transform">
                        <Badge variant="secondary" className="bg-white text-black border-2 md:border-4 border-foreground hover:bg-blue-300 cursor-pointer text-xs md:text-sm py-1.5 md:py-2 px-3 md:px-4 rounded-xl shadow-[4px_4px_0px_currentColor] uppercase font-black">
                          <Github className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2" /> Repo
                        </Badge>
                      </Link>
                    )}
                  </div>
                </div>
                {/* Wobbly Tape over the photo */}
                <div className="absolute top-[3.2rem] left-1/2 -translate-x-1/2 w-16 h-5 bg-white/70 backdrop-blur-sm border-2 border-foreground/30 -rotate-3 z-30 opacity-80" />
                
                <div className="pl-14 md:pl-16 pr-4 md:pr-6 pb-6 pt-2 flex-1 flex flex-col relative z-20">
                  <h3 className="text-xl md:text-2xl font-[Kalam,cursive] font-bold text-foreground uppercase tracking-tight mb-2 group-hover:text-primary/80 transition-colors bg-white dark:bg-zinc-800 w-fit -rotate-1 border-2 border-foreground px-2 py-0.5 shadow-[2px_2px_0px_currentColor]">
                    {project.title}
                  </h3>
                  {/* Notice leading-[2rem] matches the background line height */}
                  <p className="text-foreground/90 font-[Kalam,cursive] font-bold text-base md:text-lg leading-[2rem] line-clamp-3 mb-6 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies?.map((tech) => (
                      <span key={tech} className="whitespace-nowrap text-[11px] md:text-xs font-[Kalam,cursive] font-bold tracking-wider px-2 py-1 bg-muted border-2 border-foreground shadow-[2px_2px_0px_currentColor] -rotate-1 group-hover:rotate-0 transition-transform">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photography / Hobbies Section */}
      <section className="py-24 relative overflow-hidden bg-white dark:bg-[#1f1e1c] border-t-4 border-foreground" id="photography">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_currentColor_1px,_transparent_1px)] bg-[size:24px_24px] opacity-[0.03] dark:opacity-10"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between mb-16 max-w-6xl mx-auto gap-8"
          >
            <h2 className="inline-block text-4xl md:text-6xl font-black uppercase tracking-tight bg-yellow-300 text-black px-8 py-3 border-4 border-foreground shadow-[6px_6px_0px_currentColor] -rotate-2 z-20">
              Photography
            </h2>
            <div className="relative">
              <p className="font-[Kalam,cursive] text-xl md:text-2xl font-bold text-foreground rotate-2 bg-[#fffff8] dark:bg-zinc-800 p-4 border-2 border-foreground shadow-[4px_4px_0px_currentColor]">
                When I&apos;m not coding, I love capturing moments!
              </p>
              {/* Push pin style */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-red-500 border-2 border-foreground shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.5),2px_2px_0px_currentColor] z-30"></div>
            </div>
          </motion.div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 lg:gap-12 justify-items-center mt-12 pb-8">
            {[
              { src: "/thunder.jpeg", alt: "Thunder", caption: "Electric Sky", rot: -3, mt: "lg:mt-0" },
              { src: "/squirrel.jpeg", alt: "Squirrel", caption: "Nut Hunter", rot: 2, mt: "lg:mt-12" },
              { src: "/pegon.jpeg", alt: "Pigeon", caption: "City Bird", rot: -1, mt: "lg:mt-4" },
              { src: "/fly.jpeg", alt: "Dragonfly", caption: "Macro World", rot: 4, mt: "lg:mt-8" },
              { src: "/fih.jpeg", alt: "Cat", caption: "Feline Focus", rot: -2, mt: "lg:mt-20" },
              { src: "/ferry.jpeg", alt: "Ferris Wheel", caption: "Sunset Rides", rot: 3, mt: "lg:mt-12" },
            ].map((photo, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30, rotate: photo.rot * 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: photo.rot }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 40 }}
                className={`relative w-full max-w-[320px] bg-[#fffff8] p-4 pb-16 md:p-5 md:pb-20 border-2 border-foreground shadow-[8px_8px_0px_currentColor] will-change-transform ${photo.mt}`}
              >
                {/* Tape */}
                <div className={`absolute top-[-0.75rem] left-1/2 -translate-x-1/2 w-16 h-6 bg-white/70 backdrop-blur-sm border-2 border-foreground/30 ${i % 2 === 0 ? 'rotate-2' : '-rotate-2'} z-30 opacity-80`} />
                <div className="w-full aspect-square bg-muted border-2 border-foreground overflow-hidden relative shadow-inner">
                   <Image 
                     src={photo.src} 
                     alt={photo.alt}
                     fill
                     sizes="(max-width: 768px) 100vw, 320px"
                     className="object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500" 
                   />
                </div>
                <p className="absolute bottom-4 left-0 w-full text-center font-[Kalam,cursive] font-bold text-lg md:text-2xl text-black">{photo.caption}</p>
              </motion.div>
            ))}
          </div>
          
        </div>
      </section>

      <section className="py-24 md:py-32 bg-primary overflow-hidden relative" id="contact">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center space-y-8 md:space-y-10"
          >
            <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter text-primary-foreground leading-none">
              Let&apos;s Build
              <br className="hidden sm:block"/> Together.
            </h2>
            
            <p className="text-lg sm:text-xl md:text-3xl font-bold text-primary-foreground/90 max-w-3xl">
              Got a wild idea or just want to chat?
            </p>

            <motion.a 
              href="mailto:rijalsawan@gmail.com"
              whileHover={shouldReduceMotion ? {} : { scale: 1.05, rotate: -2 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
              className="mt-8 md:mt-12 relative inline-flex items-center justify-center p-2 group text-foreground"
              aria-label="Send email to rijalsawan@gmail.com"
            >
              <span className="absolute inset-0 bg-background rounded-full translate-y-2 translate-x-2 md:translate-y-3 md:translate-x-3 group-hover:translate-y-1 group-hover:translate-x-1 transition-transform border-2 md:border-4 border-foreground"></span>
              <span className="relative flex items-center gap-2 md:gap-3 bg-secondary text-secondary-foreground border-2 md:border-4 border-foreground text-xl sm:text-2xl md:text-4xl font-black px-6 py-4 md:px-12 md:py-6 rounded-full uppercase tracking-widest shadow-[inset_0_0_0_2px_rgba(255,255,255,0.2)] md:shadow-[inset_0_0_0_4px_rgba(255,255,255,0.2)]">
                <Mail className="w-6 h-6 md:w-10 md:h-10" />
                Say Hello!
              </span>
            </motion.a>
          </motion.div>
        </div>
      </section>
      
      <footer className="py-12 border-t-4 border-foreground bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4">
            <Link href="/" className="text-3xl font-black uppercase text-primary-foreground tracking-tight hover:rotate-2 transition-transform inline-block">
              Sawan.dev
            </Link>
            <p className="text-primary-foreground/80 text-sm md:text-base font-bold text-center border-2 border-primary-foreground/20 px-4 py-2 rounded-xl backdrop-blur-xs">
              © {new Date().getFullYear()} Sawan Rijal. Built with big borders and bold ideas.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Body;

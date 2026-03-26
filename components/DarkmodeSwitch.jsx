"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

const DarkmodeSwitch = () => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-9 w-9 md:h-11 md:w-11" />
  }

  const isDark = resolvedTheme === "dark"

  const toggleTheme = (e) => {
    const nextTheme = isDark ? "light" : "dark"

    if (!document.startViewTransition) {
      setTheme(nextTheme)
      return
    }

    const x = e.clientX
    const y = e.clientY
    
    // Determine the max radius for the circle to cover the whole screen
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )

    const transition = document.startViewTransition(() => {
      setTheme(nextTheme)
    })

    transition.ready.then(() => {
      const isDarkNext = nextTheme === "dark"
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ]

      document.documentElement.animate(
        {
          clipPath: isDarkNext ? [...clipPath].reverse() : clipPath,
        },
        {
          duration: 600,
          easing: "ease-in-out",
          pseudoElement: isDarkNext
            ? "::view-transition-old(root)"
            : "::view-transition-new(root)",
        }
      )
    })
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative flex items-center justify-center border-2 md:border-4 border-foreground rounded-lg md:rounded-xl shadow-[2px_2px_0px_currentColor] md:shadow-[4px_4px_0px_currentColor] bg-background text-foreground hover:bg-secondary h-9 w-9 md:h-11 md:w-11 overflow-hidden group z-50 transform-gpu"
      whileHover={{ scale: 1.05, rotate: isDark ? -5 : 5 }}
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "dark" : "light"}
          initial={{ y: -30, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 30, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 20 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {isDark ? (
            <Moon className="h-[1.2rem] w-[1.2rem] md:h-[1.5rem] md:w-[1.5rem] text-foreground" />
          ) : (
            <Sun className="h-[1.2rem] w-[1.2rem] md:h-[1.5rem] md:w-[1.5rem] text-foreground" />
          )}
        </motion.div>
      </AnimatePresence>
      <span className="sr-only">Toggle theme</span>
    </motion.button>
  )
}

export default DarkmodeSwitch

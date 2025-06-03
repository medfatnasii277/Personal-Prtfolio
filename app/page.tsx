"use client"

import { motion } from "framer-motion"
import { HeroSection } from "@/components/hero-section"
import SkillsSection from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { BackgroundEffect } from "@/components/background-effect"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [easterEggActive, setEasterEggActive] = useState(false)
  const [konamiSequence, setKonamiSequence] = useState<string[]>([])

  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "KeyB",
    "KeyA",
  ]

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const newSequence = [...konamiSequence, event.code].slice(-10)
      setKonamiSequence(newSequence)

      if (newSequence.join(",") === konamiCode.join(",")) {
        setEasterEggActive(true)
        setTimeout(() => setEasterEggActive(false), 5000)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [konamiSequence])

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <BackgroundEffect />

      {easterEggActive && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
        >
          <div className="text-center bg-gray-900 border-2 border-green-400 p-8 font-mono">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                textShadow: ["0 0 10px #22c55e", "0 0 20px #22c55e, 0 0 30px #22c55e", "0 0 10px #22c55e"],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="text-6xl font-bold text-green-400 mb-4"
            >
              {"< DEVELOPER MODE />"}
            </motion.div>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              className="text-xl text-cyan-400"
            >
              🚀 KONAMI CODE DETECTED 🚀
            </motion.div>
            <div className="text-sm text-gray-400 mt-4">// Achievement unlocked: Found the secret!</div>
            <div className="text-xs text-gray-500 mt-2">console.log("You found the easter egg! 🥚");</div>
          </div>
        </motion.div>
      )}

      <main className="relative z-10">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  )
}

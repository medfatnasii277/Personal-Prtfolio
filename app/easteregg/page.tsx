"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Trophy, Search, Code, Zap } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function EasterEggPage() {
  const [showContent, setShowContent] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500)
    const confettiTimer = setTimeout(() => setShowConfetti(true), 1000)
    
    return () => {
      clearTimeout(timer)
      clearTimeout(confettiTimer)
    }
  }, [])

  const achievements = [
    {
      icon: "🕵️‍♂️",
      title: "Detective Mode",
      description: "Found the hidden easter egg"
    },
    {
      icon: "💻",
      title: "Terminal Master",
      description: "Successfully navigated the file system"
    },
    {
      icon: "🎯",
      title: "Eagle Eye",
      description: "Spotted the secret directory"
    },
    {
      icon: "🚀",
      title: "Explorer",
      description: "Completed the terminal challenge"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-blue-900/20" />
      
      {/* Confetti effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: -20,
                opacity: 1,
                scale: 0
              }}
              animate={{ 
                y: window.innerHeight + 20,
                opacity: 0,
                scale: 1,
                rotate: Math.random() * 360
              }}
              transition={{ 
                duration: 3 + Math.random() * 2,
                delay: Math.random() * 2,
                ease: "easeOut"
              }}
              className="absolute w-2 h-2 bg-green-400 rounded-full"
            />
          ))}
        </div>
      )}

      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 50 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main celebration */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: showContent ? 1 : 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
            className="mb-8"
          >
            <div className="text-8xl mb-4">🎉</div>
            <h1 className="text-6xl md:text-8xl font-bold text-green-400 font-mono mb-4">
              CONGRATULATIONS!
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 font-mono mb-8">
              You found the hidden easter egg! 🕵️‍♂️
            </p>
          </motion.div>

          {/* Achievement section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 30 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-blue-400 font-mono mb-6">
              <Trophy className="inline w-8 h-8 mr-3" />
              ACHIEVEMENTS UNLOCKED
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: showContent ? 1 : 0, x: showContent ? 0 : -50 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="bg-gray-900 border border-green-400 p-6 rounded-none font-mono"
                >
                  <div className="text-4xl mb-3">{achievement.icon}</div>
                  <h3 className="text-xl font-bold text-green-400 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Fun message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showContent ? 1 : 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mb-12"
          >
            <div className="bg-gray-900 border border-blue-400 p-8 rounded-none font-mono">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                <Search className="inline w-6 h-6 mr-2" />
                You're a true detective!
              </h3>
              <p className="text-lg text-gray-300 mb-4">
                Not many people take the time to explore and discover hidden features. 
                Your curiosity and attention to detail are exactly what makes a great developer! 🚀
              </p>
              <div className="text-sm text-gray-500">
                <Code className="inline w-4 h-4 mr-1" />
                console.log("🎯 Easter egg discovered by: A curious mind");
              </div>
            </div>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 30 }}
            transition={{ duration: 1, delay: 2 }}
            className="flex justify-center"
          >
            <Button
              asChild
              className="bg-green-600 hover:bg-green-700 text-black font-mono text-lg px-8 py-4"
            >
              <Link href="/">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Portfolio
              </Link>
            </Button>
          </motion.div>

          {/* Secret message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showContent ? 0.3 : 0 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="mt-16 text-center"
          >
            <p className="text-sm text-gray-600 font-mono">
              // This easter egg was created with ❤️ for curious developers
            </p>
            <p className="text-xs text-gray-700 font-mono mt-2">
              // You've proven you have the eye for detail that recruiters love!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
} 
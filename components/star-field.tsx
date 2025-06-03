"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Star {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  duration: number
}

export function StarField() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = []
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          duration: Math.random() * 3 + 2,
        })
      }
      setStars(newStars)
    }

    generateStars()
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 0.3, star.opacity],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Shooting stars */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`shooting-${i}`}
          className="absolute w-1 h-1 bg-yellow-400 rounded-full"
          initial={{ x: -10, y: Math.random() * window.innerHeight }}
          animate={{
            x: window.innerWidth + 10,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 2,
            ease: "linear",
          }}
          style={{
            boxShadow: "0 0 10px #fbbf24, -20px 0 20px #fbbf24",
          }}
        />
      ))}
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface CodeRain {
  id: number
  x: number
  y: number
  speed: number
  chars: string[]
  opacity: number
}

export function BackgroundEffect() {
  const [codeRains, setCodeRains] = useState<CodeRain[]>([])

  const codeChars = [
    "0",
    "1",
    "{",
    "}",
    "[",
    "]",
    "(",
    ")",
    ";",
    ":",
    "const",
    "let",
    "var",
    "if",
    "else",
    "for",
    "while",
    "function",
    "return",
    "true",
    "false",
    "null",
    "undefined",
    "async",
    "await",
    "=>",
    "===",
    "!==",
    "&&",
    "||",
    "console.log",
    "git",
    "npm",
    "yarn",
    "react",
    "node",
  ]

  useEffect(() => {
    const generateCodeRain = () => {
      const newRains: CodeRain[] = []
      const columns = Math.floor(window.innerWidth / 20)

      for (let i = 0; i < columns; i++) {
        if (Math.random() > 0.85) {
          // Only some columns have rain
          newRains.push({
            id: i,
            x: i * 20,
            y: -100,
            speed: Math.random() * 3 + 1,
            chars: Array(10)
              .fill(0)
              .map(() => codeChars[Math.floor(Math.random() * codeChars.length)]),
            opacity: Math.random() * 0.5 + 0.1,
          })
        }
      }
      setCodeRains(newRains)
    }

    generateCodeRain()
    window.addEventListener("resize", generateCodeRain)

    return () => window.removeEventListener("resize", generateCodeRain)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30" />

      {/* Circuit-like lines */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-20"
            style={{
              top: `${20 + i * 20}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating code elements */}
      {codeRains.map((rain) => (
        <motion.div
          key={rain.id}
          className="absolute font-mono text-green-400 text-xs"
          style={{
            left: rain.x,
            opacity: rain.opacity,
          }}
          animate={{
            y: [rain.y, window.innerHeight + 100],
          }}
          transition={{
            duration: 20 / rain.speed,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {rain.chars.map((char, index) => (
            <motion.div
              key={index}
              className="mb-2"
              animate={{
                opacity: [1, 0.3, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: index * 0.1,
              }}
            >
              {char}
            </motion.div>
          ))}
        </motion.div>
      ))}

      {/* Binary floating elements */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`binary-${i}`}
          className="absolute text-blue-400 font-mono text-xs opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          {Math.random() > 0.5 ? "01" : "10"}
        </motion.div>
      ))}

      {/* Glowing particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 3 === 0 ? "#22c55e" : i % 3 === 1 ? "#3b82f6" : "#8b5cf6",
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

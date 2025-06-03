"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Download, Github, Linkedin, Terminal, Coffee } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  const codeLines = [
    "const developer = {",
    "  name: 'Mohamed Fatnassi',",
    "  role: 'Full-Stack Engineer',",
    "  status: 'Looking for summer internship',",
    "  coffee: true,",
    "  bugs: 0 // (allegedly)",
    "}",
  ]

  useEffect(() => {
    const currentLine = 0
    let currentChar = 0
    const fullText = codeLines.join("\n")

    const typeWriter = () => {
      if (currentChar < fullText.length) {
        setDisplayText(fullText.slice(0, currentChar + 1))
        currentChar++
        setTimeout(typeWriter, 50)
      }
    }

    const timer = setTimeout(typeWriter, 1000)

    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearTimeout(timer)
      clearInterval(cursorTimer)
    }
  }, [])

  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = ""
    link.click()
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      {/* Matrix-like background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      <div className="text-center z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-4 text-green-400 font-mono"
            >
              MOHAMED FATNASSI
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl md:text-2xl mb-6 text-gray-300 font-mono"
            >
              <span className="text-blue-400">class</span> <span className="text-yellow-400">SoftwareEngineer</span>{" "}
              <span className="text-white">{"{"}</span>
              <br />
              <span className="ml-4 text-purple-400">constructor</span>
              <span className="text-white">() {"{ "}</span>
              <span className="text-gray-400">/* Ready to debug your life */</span>
              <span className="text-white">{" }"}</span>
              <br />
              <span className="text-white">{"}"}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-6 py-3 rounded-none font-mono transition-all duration-300 group"
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Terminal className="w-5 h-5 mr-2" />
                cd ./projects
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex space-x-4"
            >
              <Link href="https://github.com/medfatnasii277" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-none w-12 h-12 bg-gray-800 hover:bg-gray-700 hover:text-green-400 transition-all duration-300 font-mono"
                >
                  <Github className="w-6 h-6" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/mohamed-fatnassi-961121229/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-none w-12 h-12 bg-gray-800 hover:bg-gray-700 hover:text-blue-400 transition-all duration-300 font-mono"
                >
                  <Linkedin className="w-6 h-6" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right side - Code block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="bg-gray-900 border border-gray-700 rounded-none p-6 font-mono text-left"
          >
            <div className="flex items-center mb-4 border-b border-gray-700 pb-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="ml-4 text-gray-400 text-sm">~/portfolio/about.json</span>
            </div>

            <pre className="text-green-400 text-sm leading-relaxed">
              <code>
                {displayText}
                {showCursor && <span className="bg-green-400 text-gray-900">▋</span>}
              </code>
            </pre>

            <div className="mt-4 text-xs text-gray-500 border-t border-gray-700 pt-2">
              <span className="text-green-400">✓</span> Syntax OK |<span className="text-yellow-400"> ⚠</span> Coffee
              level: LOW |<span className="text-blue-400"> ℹ</span> Bugs: 404 not found
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-500 mb-4 font-mono">// Scroll to explore</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-10 border-2 border-green-400 rounded-none mx-auto flex justify-center font-mono"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
              className="w-1 h-3 bg-green-400 mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

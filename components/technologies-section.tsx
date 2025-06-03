"use client"

import { motion } from "framer-motion"
import { Code, Database, Cloud, Smartphone, Palette, Shield, Cpu, Globe } from "lucide-react"

const technologies = [
  { name: "React", icon: Code, color: "text-blue-400" },
  { name: "Next.js", icon: Globe, color: "text-white" },
  { name: "TypeScript", icon: Code, color: "text-blue-500" },
  { name: "Node.js", icon: Cpu, color: "text-green-400" },
  { name: "Python", icon: Code, color: "text-yellow-400" },
  { name: "PostgreSQL", icon: Database, color: "text-blue-300" },
  { name: "MongoDB", icon: Database, color: "text-green-500" },
  { name: "AWS", icon: Cloud, color: "text-orange-400" },
  { name: "Docker", icon: Shield, color: "text-blue-400" },
  { name: "Kubernetes", icon: Cloud, color: "text-purple-400" },
  { name: "React Native", icon: Smartphone, color: "text-cyan-400" },
  { name: "Tailwind", icon: Palette, color: "text-teal-400" },
]

export function TechnologiesSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent">
            Technology Stack
          </h2>
          <p className="text-xl text-gray-400">Tools and technologies I work with</p>
        </motion.div>

        <div className="relative h-96 flex items-center justify-center">
          {/* Central hub */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute w-24 h-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30"
          >
            <Code className="w-12 h-12 text-black" />
          </motion.div>

          {/* Orbiting technologies */}
          {technologies.map((tech, index) => {
            const angle = (index * 360) / technologies.length
            const radius = 150
            const x = Math.cos((angle * Math.PI) / 180) * radius
            const y = Math.sin((angle * Math.PI) / 180) * radius

            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                animate={{
                  x: [x, x * 1.1, x],
                  y: [y, y * 1.1, y],
                }}
                transition={{
                  duration: 4 + index * 0.2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 bg-black/60 backdrop-blur-sm border border-gray-700 rounded-full flex flex-col items-center justify-center cursor-pointer hover:border-gray-500 group"
                >
                  <tech.icon className={`w-6 h-6 ${tech.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-xs text-gray-400 mt-1 group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </motion.div>
              </motion.div>
            )
          })}

          {/* Orbital rings */}
          <div className="absolute w-80 h-80 border border-gray-800 rounded-full opacity-30" />
          <div className="absolute w-96 h-96 border border-gray-800 rounded-full opacity-20" />
          <div className="absolute w-[28rem] h-[28rem] border border-gray-800 rounded-full opacity-10" />
        </div>
      </div>
    </section>
  )
}

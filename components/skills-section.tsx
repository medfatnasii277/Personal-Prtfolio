"use client"

import { motion } from "framer-motion"
import { Code, Database, Cloud } from "lucide-react"

const skills = [
  { name: "Spring Boot", icon: Code, color: "text-green-400" },
  { name: "React", icon: Code, color: "text-blue-400" },
  { name: "Node.js", icon: Code, color: "text-green-400" },
  { name: "MySQL", icon: Database, color: "text-blue-400" },
  { name: "MongoDB", icon: Database, color: "text-green-400" },
  { name: "Git", icon: Code, color: "text-orange-400" },
  { name: "Docker", icon: Cloud, color: "text-blue-400" },
]

export default function SkillsSection() {
  return (
    <section className="py-20 px-4 relative bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-400 font-mono">skills.json</h2>
          <p className="text-xl text-gray-400 font-mono">{"// Core technologies I work with"}</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black border border-gray-700 p-6 rounded-none hover:border-green-400 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <skill.icon className={`w-8 h-8 ${skill.color} mb-3`} />
                <span className="text-white font-mono">{skill.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Terminal, GitBranch } from "lucide-react"

const experiences = [
  {
    title: "Developer Intern – Fleet Tracking Application",
    company: "Smarteo",
    period: "2022 (4 months)",
    location: "Tunisia",
    description: "Developed a web application to improve fleet management and truck tracking capabilities.",
    techStack: ["Node.js", "Express.js", "MongoDB", "Angular", "GPS", "Socket.io", "NgRx"],
    achievements: [
      "Built a RESTful API with Node.js and Express.js, persisted data with MongoDB",
      "Designed Angular UI with NgRx for real-time route visualization",
      "Integrated geolocation using Socket.io for live GPS tracking",
    ],
    github: "https://github.com/medfatnasii277/Fleet-Tracking-Backend"
  },
]

export function ExperienceSection() {
  return (
    <section className="py-20 px-4 relative bg-black">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-400 font-mono">experience.log</h2>
          <p className="text-xl text-gray-400 font-mono">
            {"// Professional journey in software development"}
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="bg-gray-900 border-2 border-green-400 rounded-none hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300">
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div className="mb-4 lg:mb-0">
                      <h3 className="text-2xl font-bold text-green-400 font-mono mb-1">{exp.title}</h3>
                      <p className="text-xl text-blue-400 font-mono">{exp.company}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center text-gray-400 font-mono">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-gray-400 font-mono">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 font-mono text-sm leading-relaxed">{exp.description}</p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-purple-400 mb-3 font-mono">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-800 text-cyan-400 font-mono text-sm border border-cyan-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-yellow-400 mb-3 font-mono">Key Achievements:</h4>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.div
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 + achIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start font-mono text-sm"
                        >
                          <span className="text-green-400 mr-3">{">"}</span>
                          <span className="text-gray-300">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* GitHub Link */}
                  {exp.github && (
                    <div className="mt-4">
                      <a
                        href={exp.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-gray-400 hover:text-green-400 transition-colors duration-300"
                      >
                        <GitBranch className="w-4 h-4 mr-2" />
                        View on GitHub
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Fun footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gray-900 border border-gray-700 p-4 inline-block font-mono">
            <span className="text-gray-500">// Total experience: </span>
            <span className="text-green-400">while(alive) {"{ "}</span>
            <span className="text-yellow-400">learn()</span>
            <span className="text-green-400">{" }"}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

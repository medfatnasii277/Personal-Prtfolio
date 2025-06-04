"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ExternalLink, Github, Code, Star, GitFork, Eye } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Moodly – AI-Powered Wellness Web App",
    description: "A full-stack wellness application featuring an empathetic AI chatbot and interactive wellness resources.",
    image: "/moodly-preview.jpg",
    status: "Production",
    tech: ["Python", "Flask", "React", "OpenAI API", "Express.js"],
    stars: "⭐",
    forks: "🔄",
    funFact: "// Making mental wellness accessible through AI",
    details: "An innovative wellness platform that combines AI technology with interactive wellness resources to provide personalized mental health support.",
    features: [
      "Empathetic AI chatbot for emotional support and guidance",
      "Interactive meditation sessions and mindfulness exercises",
      "Engaging mini-games for stress relief and mental wellness",
      "Real-time emotional analysis and personalized recommendations",
      "User-friendly interface with responsive design"
    ],
    github: "https://github.com/medfatnasii277/Moodly-AI-Powered-Mental-Health-Companion",
    live: "https://moodly-ai-powered-mental-health-com.vercel.app/?nocache=1748982603328"
  },
  {
    title: "StudentVault — Secure Document Management System for Students",
    description: "A full-stack document management application with secure authentication and user management.",
    image: "/studentwallet.jpg",
    status: "2024",
    tech: ["Spring Boot", "Spring Security", "React", "JWT", "Hibernate", "MySQL"],
    stars: "",
    forks: "",
    funFact: "// Making document management secure and accessible for students",
    details: "A secure document management space for students, featuring a secured REST API with Spring Boot, user management with JWT, and a MySQL database. The frontend is developed with React.",
    features: [
      "Secure REST API with Spring Boot, user management with JWT, and MySQL database",
      "Modern React frontend with responsive design and intuitive interface",
      "Robust authentication and authorization system using Spring Security",
      "Efficient document storage and retrieval system",
      "User-friendly dashboard for document management"
    ],
    github: "https://github.com/medfatnasii277/Student-Wallet-Backend",
    live: undefined,
  },
  {
    title: "Professional Resume Builder",
    description: "A modern, responsive web application for generating professional resumes with customizable themes and real-time preview functionality.",
    image: "/resumebuilder.jpg",
    status: "2024",
    tech: ["Next.js", "React", "HTML5", "CSS3", "JavaScript"],
    stars: "",
    forks: "",
    funFact: "// Making resume creation as easy as filling out a form",
    details: "Built a modern, responsive web application for generating professional resumes with customizable themes and real-time preview functionality. The project allows users to input their personal information, experience, education, and skills, and instantly see a live preview of their resume with the selected design theme. Users can also export the final resume as a downloadable PDF. Focused on clean UI/UX and component-driven architecture using Next.js for server-side rendering and performance optimization.",
    features: [
      "Multi-step form with tabs: Personal Info, Experience, Education, Skills, Theme",
      "Live resume preview with dynamic data binding",
      "Theme customization options for layout and design",
      "Export to PDF functionality",
      "Responsive design for desktop and mobile"
    ],
    github: undefined,
    live: undefined,
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 relative bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-400 font-mono">projects.json</h2>
          <p className="text-xl text-gray-400 font-mono">{"// Building solutions that make a difference"}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black border-2 border-blue-400 rounded-none hover:border-cyan-400 transition-all duration-300 group h-full flex flex-col">
                {/* Project Image */}
                <div className="relative overflow-hidden border-b-2 border-blue-400">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-2 py-1 text-xs font-mono border ${
                        project.status === "Production"
                          ? "bg-green-600 text-black border-green-400"
                          : "bg-yellow-600 text-black border-yellow-400"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Code Icon */}
                  <div className="absolute top-4 left-4">
                    <Code className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>

                <CardContent className="p-6 flex flex-col flex-grow">
                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-green-400 mb-2 font-mono">{project.title}</h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-4 font-mono text-sm">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-800 text-purple-400 text-xs font-mono border border-purple-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-yellow-400 mb-2 font-mono">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-gray-300 font-mono text-sm">
                          <span className="text-green-400 mr-2">{">"}</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Fun Fact */}
                  <p className="text-xs text-gray-500 font-mono mt-4 italic">{project.funFact}</p>

                  {/* Buttons */}
                  <div className="mt-6 flex gap-4">
                    <Button asChild className="bg-green-600 hover:bg-green-700 text-black font-mono">
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="border-gray-600 font-mono">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

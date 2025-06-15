"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Medal, Award, Star, Target, Flag, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const achievements = [
  {
    title: "2Fast DSA Competition",
    description: "2nd place in competitive programming and Data Structures & Algorithms competition.",
    icon: Trophy,
    category: "Competition",
    color: "text-yellow-400",
    image: "/2fast.jpg",
    details: "Demonstrated exceptional problem-solving skills and algorithmic thinking in a competitive programming environment."
  },
  {
    title: "CyberBenders AI & CTF",
    description: "1st place in AI and Cybersecurity Capture The Flag competition.",
    icon: Medal,
    category: "Cybersecurity",
    color: "text-blue-400",
    image: "/cyberbenders.jpg",
    details: "Combined AI expertise with cybersecurity skills to solve complex challenges and secure systems."
  },
  {
    title: "Coding Moon",
    description: "1st place in overnight hackathon for developing a full-stack educational application.",
    icon: Star,
    category: "Hackathon",
    color: "text-purple-400",
    image: "/coodingMoon.jpg",
    details: "Built a complete educational platform from scratch in 24 hours, showcasing rapid development and technical expertise."
  },
  {
    title: "Survival Challenge",
    description: "1st place in multi-domain competition combining web development, AI, and cybersecurity.",
    icon: Target,
    category: "Multi-Domain",
    color: "text-red-400",
    image: "/survivalChallenge.jpg",
    details: "Excelled in a challenging environment that tested skills across multiple technical domains."
  },
  {
    title: "Digital Minds",
    description: "1st place in hackathon for developing a full-stack solution addressing IT waste management.",
    icon: Award,
    category: "Sustainability",
    color: "text-cyan-400",
    image: "/digitalMinds.jpg",
    details: "Created an innovative solution to tackle electronic waste management and promote environmental sustainability in IT."
  },
  {
    title: "Nuit d'info 2024",
    description: "Silver medal in GreenIT challenge focusing on SEO, Lighthouse, and environmental impact optimization.",
    icon: Medal,
    category: "Green IT",
    color: "text-green-400",
    image: "/green.jpg",
    details: "Developed solutions to optimize web applications for better environmental impact, focusing on SEO and Lighthouse performance metrics."
  }
]

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button
            asChild
            variant="outline"
            className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 font-mono"
          >
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              cd ..
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-400 font-mono">achievements.json</h1>
          <p className="text-xl text-gray-400 font-mono">{"// A collection of milestones and accomplishments"}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-900 border-2 border-gray-700 rounded-none hover:border-green-400 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  {achievement.image && (
                    <div className="relative w-full h-48 mb-4 overflow-hidden rounded-none">
                      <Image
                        src={achievement.image}
                        alt={achievement.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-4">
                    <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 font-mono">{achievement.title}</h3>
                  <p className="text-gray-400 mb-4 font-mono text-sm">{achievement.description}</p>
                  
                  {achievement.details && (
                    <p className="text-gray-500 mb-4 font-mono text-xs italic">{achievement.details}</p>
                  )}
                  
                  <div className="mt-4">
                    <span className={`px-3 py-1 text-sm font-mono border ${achievement.color} border-current`}>
                      {achievement.category}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Museum-like decorative elements */}
        <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 opacity-50" />
        <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 opacity-50" />
        
        {/* Floating particles effect */}
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-green-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
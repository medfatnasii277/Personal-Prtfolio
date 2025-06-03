"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"

export function ContactSection() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-400 font-mono">contact.json</h2>
          <p className="text-xl text-gray-400 font-mono">{"// Let's connect and create something amazing"}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900 border-2 border-blue-400 rounded-none hover:border-cyan-400 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4 border-b border-gray-700 pb-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="ml-4 text-gray-400 text-sm font-mono">~/contact/email.json</span>
                </div>

                <div className="flex items-center justify-center p-6">
                  <a
                    href="mailto:mohamedfatnassi277@gmail.com"
                    className="flex items-center space-x-3 text-blue-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <Mail className="w-6 h-6" />
                    <span className="font-mono">mohamedfatnassi277@gmail.com</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900 border-2 border-green-400 rounded-none hover:border-cyan-400 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4 border-b border-gray-700 pb-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="ml-4 text-gray-400 text-sm font-mono">~/contact/phone.json</span>
                </div>

                <div className="flex items-center justify-center p-6">
                  <a
                    href="tel:+21621788913"
                    className="flex items-center space-x-3 text-green-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <Phone className="w-6 h-6" />
                    <span className="font-mono">+216 21788913</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

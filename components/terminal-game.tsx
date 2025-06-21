"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Terminal, X, Maximize2, Minimize2 } from "lucide-react"
import { useRouter } from "next/navigation"

interface FileSystemNode {
  name: string
  type: "file" | "directory"
  content?: string
  children?: Record<string, FileSystemNode>
}

const fileSystem: FileSystemNode = {
  name: "root",
  type: "directory",
  children: {
    home: {
      name: "home",
      type: "directory",
      children: {
        user: {
          name: "user",
          type: "directory",
          children: {
            "portfolio": {
              name: "portfolio",
              type: "directory",
              children: {
                "about.md": {
                  name: "about.md",
                  type: "file",
                  content: "# About Me\n\nI'm a passionate developer who loves creating amazing things with code!"
                },
                "projects": {
                  name: "projects",
                  type: "directory",
                  children: {
                    "web-apps": {
                      name: "web-apps",
                      type: "directory",
                      children: {
                        "react-project": {
                          name: "react-project",
                          type: "directory",
                          children: {
                            "README.md": {
                              name: "README.md",
                              type: "file",
                              content: "# React Project\n\nA modern web application built with React and TypeScript."
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "secret": {
                  name: "secret",
                  type: "directory",
                  children: {
                    "hidden": {
                      name: "hidden",
                      type: "directory",
                      children: {
                        "easteregg": {
                          name: "easteregg",
                          type: "file",
                          content: "🎉 Congratulations! You found the hidden easter egg!\n\nYou're a true detective! 🕵️‍♂️\n\nClick here to claim your reward: /easteregg"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "etc": {
      name: "etc",
      type: "directory",
      children: {
        "config.txt": {
          name: "config.txt",
          type: "file",
          content: "System configuration file\nVersion: 1.0\nStatus: Active"
        }
      }
    }
  }
}

export function TerminalGame() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [currentPath, setCurrentPath] = useState<string[]>(["home", "user", "portfolio"])
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [currentCommand, setCurrentCommand] = useState("")
  const [output, setOutput] = useState<string[]>([
    "Welcome to the Terminal Game! 🎮",
    "Type 'help' to see available commands.",
    "Your mission: Find the hidden easter egg! 🕵️‍♂️",
    "",
    "Current directory: /home/user/portfolio",
    ""
  ])
  const [commandIndex, setCommandIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const getCurrentDirectory = (): FileSystemNode => {
    let current = fileSystem
    for (const dir of currentPath) {
      if (current.children && current.children[dir]) {
        current = current.children[dir]
      }
    }
    return current
  }

  const executeCommand = (cmd: string) => {
    const parts = cmd.trim().split(" ")
    const command = parts[0].toLowerCase()
    const args = parts.slice(1)

    let newOutput = [...output]

    switch (command) {
      case "help":
        newOutput.push("Available commands:")
        newOutput.push("  ls - List directory contents")
        newOutput.push("  cd <directory> - Change directory")
        newOutput.push("  cd .. - Go to parent directory")
        newOutput.push("  cat <file> - Display file contents")
        newOutput.push("  pwd - Show current directory")
        newOutput.push("  clear - Clear terminal")
        newOutput.push("  exit - Close terminal")
        break

      case "ls":
        const currentDir = getCurrentDirectory()
        if (currentDir.children) {
          const items = Object.keys(currentDir.children)
          if (items.length === 0) {
            newOutput.push("Directory is empty")
          } else {
            items.forEach(item => {
              const node = currentDir.children![item]
              const icon = node.type === "directory" ? "📁" : "📄"
              newOutput.push(`${icon} ${item}`)
            })
          }
        } else {
          newOutput.push("No contents to list")
        }
        break

      case "cd":
        if (args.length === 0) {
          newOutput.push("Usage: cd <directory>")
        } else if (args[0] === "..") {
          if (currentPath.length > 0) {
            setCurrentPath(currentPath.slice(0, -1))
            newOutput.push(`Changed to: /${currentPath.slice(0, -1).join("/")}`)
          } else {
            newOutput.push("Already at root")
          }
        } else {
          const currentDir = getCurrentDirectory()
          if (currentDir.children && currentDir.children[args[0]]) {
            const target = currentDir.children[args[0]]
            if (target.type === "directory") {
              setCurrentPath([...currentPath, args[0]])
              newOutput.push(`Changed to: /${[...currentPath, args[0]].join("/")}`)
            } else {
              newOutput.push(`${args[0]} is not a directory`)
            }
          } else {
            newOutput.push(`Directory '${args[0]}' not found`)
          }
        }
        break

      case "cat":
        if (args.length === 0) {
          newOutput.push("Usage: cat <file>")
        } else {
          const currentDir = getCurrentDirectory()
          if (currentDir.children && currentDir.children[args[0]]) {
            const file = currentDir.children[args[0]]
            if (file.type === "file") {
              if (file.content) {
                newOutput.push(file.content)
                
                // Check if this is the easter egg file
                if (args[0] === "easteregg") {
                  setTimeout(() => {
                    setIsOpen(false)
                    router.push("/easteregg")
                  }, 2000)
                }
              } else {
                newOutput.push("File is empty")
              }
            } else {
              newOutput.push(`${args[0]} is not a file`)
            }
          } else {
            newOutput.push(`File '${args[0]}' not found`)
          }
        }
        break

      case "pwd":
        newOutput.push(`/${currentPath.join("/")}`)
        break

      case "clear":
        setOutput([])
        return

      case "exit":
        setIsOpen(false)
        return

      case "":
        break

      default:
        newOutput.push(`Command '${command}' not found. Type 'help' for available commands.`)
    }

    newOutput.push("")
    setOutput(newOutput)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentCommand.trim()) {
      setCommandHistory([...commandHistory, currentCommand])
      executeCommand(currentCommand)
      setCurrentCommand("")
      setCommandIndex(-1)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault()
      if (commandIndex < commandHistory.length - 1) {
        const newIndex = commandIndex + 1
        setCommandIndex(newIndex)
        setCurrentCommand(commandHistory[commandHistory.length - 1 - newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (commandIndex > 0) {
        const newIndex = commandIndex - 1
        setCommandIndex(newIndex)
        setCurrentCommand(commandHistory[commandHistory.length - 1 - newIndex])
      } else if (commandIndex === 0) {
        setCommandIndex(-1)
        setCurrentCommand("")
      }
    }
  }

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  return (
    <>
      {/* Terminal Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-green-600 hover:bg-green-700 text-black font-mono shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Terminal className="w-8 h-8" />
        </Button>
      </motion.div>

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              className="w-full max-w-4xl h-[600px] bg-gray-900 border border-green-400 rounded-none shadow-2xl flex flex-col"
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between bg-gray-800 border-b border-green-400 p-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-4 text-green-400 font-mono text-sm">Terminal Game</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="text-red-400 hover:text-red-300"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="flex-1 p-4 overflow-hidden">
                <div className="h-full bg-black rounded-none p-4 font-mono text-green-400 text-sm overflow-y-auto">
                  {output.map((line, index) => (
                    <div key={index} className="whitespace-pre-wrap">{line}</div>
                  ))}
                  
                  {/* Command Input */}
                  <form onSubmit={handleSubmit} className="flex items-center">
                    <span className="text-green-400 mr-2">$</span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={currentCommand}
                      onChange={(e) => setCurrentCommand(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="flex-1 bg-transparent text-green-400 outline-none border-none"
                      placeholder="Type a command..."
                      autoComplete="off"
                    />
                  </form>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 
"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Cloud } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "-100%",
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <>
      <header className="bg-gray-900 bg-opacity-50 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Cloud className="h-8 w-8 text-blue-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              YusufHosting
            </span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-blue-400 transition">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-blue-400 transition">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-blue-400 transition">
              Contact
            </Link>
          </nav>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white hover:text-blue-400 transition">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-[#0A041A] z-50 md:hidden"
          >
            <div className="p-4 flex justify-between items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Cloud className="h-8 w-8 text-blue-500" />
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                  YusufHosting
                </span>
              </Link>
              <button onClick={() => setIsOpen(false)} className="text-white hover:text-blue-400 transition">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col p-4 space-y-6">
              <Link
                href="/"
                className="text-2xl text-white hover:text-blue-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-2xl text-white hover:text-blue-400 transition"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-2xl text-white hover:text-blue-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}


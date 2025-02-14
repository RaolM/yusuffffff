"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const buyers = [
  { name: "Ahmad R.", product: "Admin Panel", price: 25000, location: "Jakarta, Indonesia" },
  { name: "Dewi S.", product: "Hosting Panel 3GB", price: 5000, location: "Surabaya, Indonesia" },
  { name: "Rizky P.", product: "Cloud VPS 4GB 2 CORE", price: 40000, location: "Bandung, Indonesia" },
  { name: "Putri M.", product: "Hosting Panel Unlimited", price: 15000, location: "Medan, Indonesia" },
  { name: "Bambang W.", product: "Admin Panel Permanen", price: 40000, location: "Makassar, Indonesia" },
  { name: "Siti N.", product: "Cloud VPS 8GB 4 CORE", price: 60000, location: "Yogyakarta, Indonesia" },
  { name: "Raden K.", product: "Tencent cloud 3 bulan", price: 300000, location: "Semarang, Indonesia" },
  { name: "Maya L.", product: "WhatsApp Bot Script (SC STORE)", price: 20000, location: "Palembang, Indonesia" },
  { name: "Surya H.", product: "WhatsApp Bot Script (SC MD)", price: 40000, location: "Solo, Indonesia" },
  { name: "Ratna D.", product: "WhatsApp Bot Script (SC AI)", price: 45000, location: "Denpasar, Indonesia" },
  { name: "Agus F.", product: "Cloud VPS 2GB 1 CORE", price: 30000, location: "Malang, Indonesia" },
  { name: "Nina R.", product: "Hosting Panel 5GB", price: 10000, location: "Padang, Indonesia" },
  { name: "Dimas T.", product: "WhatsApp Bot Script (BUTTON)", price: 31000, location: "Manado, Indonesia" },
  { name: "Wati S.", product: "Admin Panel", price: 25000, location: "Pontianak, Indonesia" },
  { name: "Hendra J.", product: "Cloud VPS 16GB 8 CORE", price: 80000, location: "Pekanbaru, Indonesia" },
]

export default function FakeBuyerWidget() {
  const [currentBuyer, setCurrentBuyer] = useState(buyers[0])
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentBuyer(buyers[Math.floor(Math.random() * buyers.length)])
        setIsVisible(true)
      }, 300)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-4 bg-gray-800 p-4 rounded-lg shadow-lg max-w-sm"
        >
          <div className="flex items-center space-x-4">
            <Image
              src="/placeholder.svg?height=50&width=50"
              alt={currentBuyer.name}
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold text-white">{currentBuyer.name}</p>
              <p className="text-sm text-gray-300">Baru saja membeli {currentBuyer.product}</p>
              <p className="text-xs text-gray-400">
                Rp{currentBuyer.price.toLocaleString("id-ID")} - {currentBuyer.location}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}


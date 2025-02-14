"use client"
import { motion } from "framer-motion"

function formatVisitorCount(count: number): string {
  if (count < 1000) {
    return count.toString()
  } else if (count < 1000000) {
    return `${(count / 1000).toFixed(1)}K`
  } else if (count < 1000000000) {
    return `${(count / 1000000).toFixed(1)}M`
  } else {
    return `${(count / 1000000000).toFixed(1)}B`
  }
}

export default function VisitorCounter() {
  const visitorCount = 1857

  return (
    <div className="text-center mb-8">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-block"
      >
        <div className="text-5xl md:text-6xl font-bold text-rose-500">{formatVisitorCount(visitorCount)}</div>
        <div className="text-xl text-gray-300">Number of Buyers</div>
      </motion.div>
    </div>
  )
}


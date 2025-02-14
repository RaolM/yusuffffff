"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Sparkles, ArrowLeft } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0A041A] text-white">
      <header className="bg-gray-900 bg-opacity-50 backdrop-blur-md py-6 fixed w-full z-10">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-blue-400 hover:text-blue-300 transition flex items-center">
            <ArrowLeft className="mr-2" />
            Kembali ke Beranda
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            About Me
          </h1>
          <div className="flex items-center justify-center gap-2 mb-12">
            <Sparkles className="h-5 w-5 text-purple-400" />
            <p className="text-lg md:text-xl text-purple-400">Transforming ideas into digital experiences</p>
            <Sparkles className="h-5 w-5 text-purple-400" />
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <div className="w-48 h-48 mx-auto relative mb-12">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse" />
              <Image
                src="https://i.ibb.co.com/FbSbKNfW/IMG-20250211-WA0217.jpg"
                alt="Yusuf's Profile"
                width={200}
                height={200}
                className="relative rounded-full object-cover"
              />
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Hello, I'm
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-8 text-white">Yusuf</h3>

              <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                Seorang Siswa Teknik Jaringan Komputer dan Telekomunikasi yang Memiliki Ketertarikan Mendalam pada
                Pengembangan Front-End. Saya Fokus untuk Menciptakan Pengalaman Digital yang Menarik dan Interaktif,
                Serta Selalu Berusaha Memberikan Solusi Terbaik dalam Setiap Proyek yang Saya Kerjakan.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}


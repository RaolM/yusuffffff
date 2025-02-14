"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Server, Cloud, MessageSquare, X } from "lucide-react"
import FakeBuyerWidget from "../components/FakeBuyerWidget"

const products = [
  {
    icon: Server,
    name: "Admin Panel",
    description: "🧧BISA CREAT PANEL SENDIRI\n🧧BISA BALIK MODAL\n🧧BISA DI JUAL PANEL\n🧧BISA BIKIN PANEL PUAS",
    image: "https://files.catbox.moe/skj01i.jpg",
    prices: [
      { name: "Bulanan", price: 25000, duration: "/bulan" },
      { name: "Permanen", price: 40000, duration: "/permanen" },
    ],
    additionalInfo: "[Free sc creat panel]",
  },
  {
    icon: Server,
    name: "Hosting Panel",
    description: "- ON 24 JAM\n- GA BOROS KOUTA\n- GA BOROS PENYIMPANAN HP\n- BOT TETEP ON JIKA WEB TERHAPUS",
    image: "https://files.catbox.moe/skj01i.jpg",
    prices: [
      { name: "2 GB 90% CPU", price: 3000, duration: "/bulan" },
      { name: "3 GB 90% CPU", price: 5000, duration: "/bulan" },
      { name: "4 GB 120% CPU", price: 7000, duration: "/bulan" },
      { name: "5 GB 150% CPU", price: 10000, duration: "/bulan" },
      { name: "RAM & CPU UNLIMITED", price: 15000, duration: "/bulan" },
    ],
  },
  {
    icon: Cloud,
    name: "Cloud VPS",
    description:
      "📝Keuntungan :\n- Free install panel petrodactyl\n- Free install thema\n- Free egg\n- Free Domain\n- garansi 20 hari",
    image: "https://files.catbox.moe/t8tcmr.jpg",
    prices: [
      { name: "2GB 1 CORE", price: 30000, duration: "/bulan" },
      { name: "4GB 2 CORE", price: 40000, duration: "/bulan" },
      { name: "8GB 4 CORE", price: 60000, duration: "/bulan" },
      { name: "16GB 8 CORE", price: 80000, duration: "/bulan" },
      { name: "32GB 16 CORE", price: 100000, duration: "/bulan" },
    ],
    additionalProducts: [
      { name: "Tencent cloud 3 bulan", price: 300000, additionalInfo: "$19" },
      { name: "Tencent cloud 1 tahun", price: 500000, additionalInfo: "$30" },
    ],
  },
  {
    icon: MessageSquare,
    name: "WhatsApp Bot Script",
    description: "Tingkatkan efisiensi komunikasi Anda dengan bot WhatsApp kami yang canggih dan kustomisabel.",
    image: "https://i.ibb.co.com/DD9sLRKD/IMG-20250212-WA0015.jpg",
    prices: [
      { name: "SC STORE (NO BUTTON)", price: 30000 },
      { name: "SC STORE (BUTTON)", price: 49000 },
      { name: "SC MD (1000+ FITUR)", price: 49000 },
      { name: "SC AI (NUGAS/GAME)", price: 50000 },
      { name: "COSTUME SCRIPT", price: 100000 },
    ],
  },
]

const paymentMethods = [
  { name: "QRIS", icon: "💳" },
  { name: "Dana", icon: "💰" },
  { name: "Gopay", icon: "📱" },
  { name: "Bank", icon: "🏦" },
]

export default function ProductsPage() {
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<{ name: string; price: number; details?: string } | null>(null)
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)

  const handleLearnMore = (productName: string) => {
    setExpandedProduct(expandedProduct === productName ? null : productName)
  }

  const handleBuy = (productName: string, price: number, details?: string) => {
    setSelectedProduct({ name: productName, price, details })
    setIsPaymentModalOpen(true)
  }

  const handlePaymentSelection = (paymentMethod: string) => {
    if (selectedProduct) {
      const { name, price, details } = selectedProduct
      const message = `📝Halo YusufHosting mau order\n\nProduk : ${name}\nHarga : ${price.toLocaleString("id-ID")}\nPembayaran : ${paymentMethod}${details ? `\n${details}` : ""}`
      const encodedMessage = encodeURIComponent(message)
      window.open(`https://wa.me/6285935002092?text=${encodedMessage}`, "_blank")
    }
    setIsPaymentModalOpen(false)
    setSelectedProduct(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white">
      <header className="bg-gray-900 bg-opacity-50 backdrop-blur-md py-6 fixed w-full z-10">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-blue-400 hover:text-blue-300 transition flex items-center">
            <ArrowLeft className="mr-2" />
            Kembali ke Beranda
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-24">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        >
          Solusi Cloud Premium Kami
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="relative h-64">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition duration-300 ease-in-out transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <product.icon className="h-20 w-20 text-blue-400" />
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
                <p className="text-gray-300 mb-4 whitespace-pre-line">{product.description}</p>
                <button
                  onClick={() => handleLearnMore(product.name)}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                >
                  {expandedProduct === product.name ? "Sembunyikan Detail" : "Pelajari Lebih Lanjut"}
                </button>
                {expandedProduct === product.name && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 space-y-2"
                  >
                    {product.additionalInfo && <p className="text-yellow-400 mb-2">{product.additionalInfo}</p>}
                    {product.prices.map((price, priceIndex) => (
                      <div key={priceIndex} className="flex justify-between items-center">
                        <span>{price.name}</span>
                        <span>Rp{price.price.toLocaleString("id-ID")}</span>
                        <button
                          onClick={() =>
                            handleBuy(
                              product.name,
                              price.price,
                              product.name === "Admin Panel" ? `\nDurasi: ${price.duration}` : `\nTipe: ${price.name}`,
                            )
                          }
                          className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded text-sm transition duration-300 ease-in-out"
                        >
                          Beli
                        </button>
                      </div>
                    ))}
                    {product.additionalProducts && (
                      <div className="mt-4">
                        <h3 className="text-xl font-semibold mb-2">Account Tencent Cloud</h3>
                        {product.additionalProducts.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex justify-between items-center">
                            <span>{item.name}</span>
                            <span>
                              Rp{item.price.toLocaleString("id-ID")} ({item.additionalInfo})
                            </span>
                            <button
                              onClick={() => handleBuy(item.name, item.price, undefined)}
                              className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded text-sm transition duration-300 ease-in-out"
                            >
                              Beli
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 CloudStore. Hak Cipta Dilindungi.</p>
        </div>
      </footer>

      <FakeBuyerWidget />

      <AnimatePresence>
        {isPaymentModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Pilih Metode Pembayaran</h2>
                <button onClick={() => setIsPaymentModalOpen(false)} className="text-gray-400 hover:text-white">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {paymentMethods.map((method) => (
                  <button
                    key={method.name}
                    onClick={() => handlePaymentSelection(method.name)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded transition duration-300 ease-in-out flex items-center justify-center"
                  >
                    <span className="mr-2 text-2xl">{method.icon}</span>
                    {method.name}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


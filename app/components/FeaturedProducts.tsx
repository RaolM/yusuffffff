import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const products = [
  {
    name: "Admin Panel",
    description: "🧧BISA CREAT PANEL SENDIRI\n🧧BISA BALIK MODAL\n🧧BISA DI JUAL PANEL\n🧧BISA BIKIN PANEL PUAS",
    image: "https://files.catbox.moe/skj01i.jpg",
  },
  {
    name: "Hosting Panel",
    description: "- ON 24 JAM\n- GA BOROS KOUTA\n- GA BOROS PENYIMPANAN HP\n- BOT TETEP ON JIKA WEB TERHAPUS",
    image: "https://files.catbox.moe/skj01i.jpg",
  },
  {
    name: "Cloud VPS",
    description:
      "📝Keuntungan :\n- Free install panel petrodactyl\n- Free install thema\n- Free egg\n- Free Domain\n- garansi 20 hari",
    image: "https://files.catbox.moe/t8tcmr.jpg",
  },
  {
    name: "WhatsApp Bot Script",
    description: "Tingkatkan efisiensi komunikasi Anda dengan bot WhatsApp kami yang canggih dan kustomisabel.",
    image: "https://i.ibb.co.com/DD9sLRKD/IMG-20250212-WA0015.jpg",
  },
]

export default function FeaturedProducts() {
  return (
    <motion.section
      id="products"
      className="py-20 px-4 bg-gray-800"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} layout="fill" objectFit="cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{product.name}</h3>
                <p className="text-gray-300 whitespace-pre-line mb-6">{product.description}</p>
                <Link
                  href="/products"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition duration-300 ease-in-out"
                >
                  Pelajari Lebih Lanjut
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-gray-400">© 2025 CloudStore. Hak Cipta Dilindungi.</div>
    </motion.section>
  )
}


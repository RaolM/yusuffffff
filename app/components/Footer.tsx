import { Cloud, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Cloud className="h-8 w-8 text-blue-500 mr-2" />
            <span className="text-2xl font-bold">YusufHosting</span>
          </div>
          <nav className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="hover:text-blue-400 transition">
              Products
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              About Us
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              Contact
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              Terms of Service
            </a>
          </nav>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/share/1ByC9zTGoB/"
              className="hover:text-blue-400 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/mmsuffy"
              className="hover:text-blue-400 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">© 2025 YusufHosting. All rights reserved.</div>
      </div>
    </footer>
  )
}


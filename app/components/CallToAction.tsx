import { ArrowRight } from "lucide-react"

export default function CallToAction() {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Cloud Experience?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Get started with our premium cloud solutions today and take your digital infrastructure to new heights.
        </p>
        <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100 flex items-center mx-auto">
          Get Started Now
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </section>
  )
}


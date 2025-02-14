import Image from "next/image"

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Game Server Owner",
    content: "The Pterodactyl Panel has revolutionized how I manage my game servers. It's intuitive and powerful!",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Sarah Lee",
    role: "Marketing Manager",
    content:
      "The WhatsApp Bot Scripts have automated our customer service, saving us time and improving response rates.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Mike Chen",
    role: "Web Developer",
    content:
      "The VPS options from Linode and DigitalOcean are top-notch. Great performance and reliability for my projects.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


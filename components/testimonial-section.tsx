import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Quote } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface Testimonial {
  id: number
  name: string
  role: string
  rating: number
  comment: string
  image: string
}

const testimonial: Testimonial = {
  id: 1,
  name: "Dianne Russell",
  role: "Happy Customer",
  rating: 5.0,
  comment: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto",
  image: "/authors/06.png?height=200&width=200"
}

export default function TestimonialSection() {
  return (
    <section className="w-full bg-[#004D3C] py-16">
      <div className="mx-auto max-w-[1170px] px-4">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <div className="space-y-4">
            <span className="inline-block rounded-full border border-gray-400/30 px-4 py-1 text-sm text-gray-300">
              Testimonial
            </span>
          </div>
          <Button
            asChild
            className="bg-[#FFB800] text-black hover:bg-[#FFB800]/90"
          >
            <Link href="/testimonials" className="flex items-center gap-2">
              View All Testimonials
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Testimonial Card */}
        <div className="relative rounded-2xl bg-[#003D30] p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
            {/* Profile Image with Quote Icon */}
            <div className="relative">
              <div className="relative h-32 w-32 overflow-hidden rounded-full bg-[#FFB800]">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -right-2 top-0 rounded-full bg-[#FFB800] p-2">
                <Quote className="h-6 w-6 text-black" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-4">
              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 fill-[#FFB800]"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xl font-bold text-white">
                  {testimonial.rating.toFixed(1)}
                </span>
              </div>

              {/* Comment */}
              <p className="text-lg text-gray-300">{testimonial.comment}</p>

              {/* Author Info */}
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                <p className="text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


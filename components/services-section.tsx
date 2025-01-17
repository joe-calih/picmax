import Image from "next/image"
import { Button } from "@/components/ui/button"

interface Category {
  id: string
  number: string
  title: string
  description?: string
  image?: string
  services: string[]
}

const categories: Category[] = [
  {
    id: "portrait",
    number: "01",
    title: "Portrait Photography",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    image: "/nature.webp?height=300&width=500",
    services: [
      "Individual Portraits",
      "Family Portraits",
      "Lifestyle Portraits",
      "Couple Portraits",
      "Graduation Portraits",
      "Engagement Portraits"
    ]
  },
  {
    id: "event",
    number: "02",
    title: "Event Photography",
    services: [
      "Birthday Party Photography",
      "Anniversary Celebrations",
      "Corporate Events",
      "Baby Showers",
      "Engagement Parties"
    ]
  },
  {
    id: "product",
    number: "03",
    title: "Product Photography",
    services: [
      "E-commerce Photography",
      "Catalog Photography",
      "360-Degree Product Photography",
      "Creative Product Photography"
    ]
  },
  {
    id: "commercial",
    number: "04",
    title: "Commercial Photography",
    services: [
      "Advertising Campaigns",
      "Brand Photography",
      "Product Photography",
      "Corporate Headshots and Team Photos",
      "Industrial Photography"
    ]
  }
]

export default function ServicesSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-[1170px] px-4">
        <div className="flex flex-col space-y-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl bg-gray-50 p-8 transition-shadow hover:shadow-lg"
            >
              <div className="flex flex-col space-y-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-6">
                      <span className="text-2xl font-bold text-gray-900">
                        {category.number}.
                      </span>
                      <h2 className="text-3xl font-bold text-gray-900">
                        {category.title}
                      </h2>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {category.services.map((service) => (
                        <span
                          key={service}
                          className="rounded-full bg-white px-4 py-2 text-sm text-gray-600 shadow-sm"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                    {category.description && (
                      <p className="max-w-2xl text-gray-500">
                        {category.description}
                      </p>
                    )}
                  </div>
                  <Button
                    className="bg-[#FFB800] text-black hover:bg-[#FFB800]/90"
                  >
                    Learn More
                  </Button>
                </div>
                {category.image && (
                  <div className="relative h-[300px] w-full overflow-hidden rounded-xl">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button
            variant="outline"
            className="bg-[#FFB800] text-black hover:bg-[#FFB800]/90"
          >
            Load More
          </Button>
        </div>
      </div>
    </section>
  )
}


import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface PricingTier {
  price: number
  features: string[]
}

const pricingTiers: PricingTier[] = [
  {
    price: 50,
    features: [
      "Lorem ipsum dolor sit amet",
      "Sed ut perspiciatis",
      "At vero eos et accusamus",
      "Vitae dicta sunt explicabo",
      "Veritatis et quasi architecto"
    ]
  },
  {
    price: 80,
    features: [
      "Lorem ipsum dolor sit amet",
      "Sed ut perspiciatis",
      "At vero eos et accusamus",
      "Vitae dicta sunt explicabo",
      "Veritatis et quasi architecto"
    ]
  },
  {
    price: 120,
    features: [
      "Lorem ipsum dolor sit amet",
      "Sed ut perspiciatis",
      "At vero eos et accusamus",
      "Vitae dicta sunt explicabo",
      "Veritatis et quasi architecto"
    ]
  }
]

export default function PricingSections() {
  return (
    <section className="w-full bg-[#004D3C] py-16">
      <div className="mx-auto max-w-[1170px] px-4">
        {/* Title Section */}
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full border border-gray-400/30 px-4 py-1 text-sm text-gray-300">
            Pricing
          </span>
          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Choose Your Plan
          </h2>
          <p className="mt-4 text-gray-300">
            Select the perfect photography package that suits your needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Yellow Circle Decoration */}
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#FFB800]/20" />

              {/* Price Header */}
              <div className="relative mb-8">
                <div className="relative z-10">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-[#004D3C]">$</span>
                    <span className="text-6xl font-bold text-[#004D3C]">
                      {tier.price}
                    </span>
                    <span className="ml-2 text-gray-500">/Service</span>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <ul className="mb-8 space-y-4">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFB800]">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                className="w-full bg-[#FFB800] text-black transition-colors duration-300 hover:bg-[#004D3C] hover:text-white"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface PriceCardProps {
  price: string
  features: string[]
}

export function PriceCard({ price, features }: PriceCardProps) {
  return (
    <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-8">
        <div className="flex items-baseline">
          <span className="text-4xl font-bold text-[#006838]">
            ${price}
          </span>
          <span className="ml-2 text-gray-500">/ Service</span>
        </div>
      </div>
      <ul className="mb-8 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <Check className="h-5 w-5 text-[#FFD700]" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        className="mt-auto bg-[#FFD700] hover:bg-[#FFD700]/90 text-black font-semibold"
      >
        Get Started
      </Button>
    </div>
  )
}


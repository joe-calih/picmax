import { PriceCard } from "./price-card"

const PRICING_DATA = [
  {
    price: "50",
    features: [
      "Lorem ipsum dolor sit amet",
      "Sed ut perspiciatis",
      "At vero eos et accusamus",
      "Vitae dicta sunt explicabo",
      "Veritatis et quasi architecto"
    ]
  },
  {
    price: "80",
    features: [
      "Lorem ipsum dolor sit amet",
      "Sed ut perspiciatis",
      "At vero eos et accusamus",
      "Vitae dicta sunt explicabo",
      "Veritatis et quasi architecto"
    ]
  },
  {
    price: "120",
    features: [
      "Lorem ipsum dolor sit amet",
      "Sed ut perspiciatis",
      "At vero eos et accusamus",
      "Vitae dicta sunt explicabo",
      "Veritatis et quasi architecto"
    ]
  }
]

export default function PricingSection() {
  return (
    <section className="bg-[#006838] py-16">
      <div className="max-w-[1170px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_DATA.map((plan, index) => (
            <PriceCard
              key={index}
              price={plan.price}
              features={plan.features}
            />
          ))}
        </div>
      </div>
    </section>
  )
}


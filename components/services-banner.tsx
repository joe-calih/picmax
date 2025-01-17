export function ServicesBanner() {
  const services = [
    'Photography',
    'Event Photography',
    'Product Photography',
    'Commercial Photography'
  ]
  
  return (
    <div className="w-full bg-[#FFB800] py-4">
      <div className="mx-auto max-w-[1170px] px-4 flex items-center justify-between">
        {services.map((service, index) => (
          <div key={service} className="flex items-center">
            <span className="text-[#003B2B] font-medium">{service}</span>
            {index < services.length - 1 && (
              <span className="mx-4 text-[#003B2B]">✻</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}


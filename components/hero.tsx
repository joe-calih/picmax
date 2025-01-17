import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <div className="relative overflow-hidden h-[75vh] bg-[#003B2B]">
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <div className="w-full h-full bg-[#FFB800] opacity-20" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0c50 0 50 100 100 100V0H0z' fill='%23FFB800'/%3E%3C/svg%3E")`,
            backgroundSize: '100% 100%'
          }}
        />
      </div>
      
      <div className="mx-auto max-w-[1170px] h-full px-4 py-8 md:py-12 flex items-center justify-between">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-600 mb-6 ">
            <span className="text-gray-400">Hello, we are</span>
            <span className="text-[#FFB800]">Picmax</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            Photo Studio
            <br />
            <span className="text-[#FFB800]">Capturing Moments</span>
            <br />
            Across Thika.
          </h1>
          
          <p className="text-gray-400 text-lg mb-8 max-w-md">
            With over five years of experience behind the lens, Ive had the privilege of
            capturing diverse stories, emotions, and moments across various settings.
          </p>
          
          <Button className="bg-[#FFB800] text-[#003B2B] hover:bg-[#e6a600] inline-flex items-center gap-2 px-6 py-6 rounded-full text-lg">
            View Portfolio
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
        
        <div className="hidden md:block relative w-[500px] h-[500px]">
          <Image
            src="/landing/camera-2.webp"
            alt="Photographer"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  )
}


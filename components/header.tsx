import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="w-full py-4 bg-[#003B2B]">
      <div className="mx-auto max-w-[1170px] px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#FFB800] flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          <span className="text-xl font-semibold text-white">Picmax</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {['Home', 'Services', 'Projects', 'Pricing', 'About', 'Blogs'].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-gray-200 hover:text-white transition-colors text-base"
            >
              {item}
            </Link>
          ))}
        </nav>
        
        <Button className="bg-[#003B2B] text-white border border-[#004d37] hover:bg-[#004d37]">
          Contact Me
        </Button>
      </div>
    </header>
  )
}


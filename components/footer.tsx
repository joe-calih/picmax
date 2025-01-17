import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, PinIcon as Pinterest, Youtube } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="w-full">
    
      {/* Main Footer */}
      <div className="w-full bg-[#004D3C] py-12">
        <div className="mx-auto grid max-w-[1170px] grid-cols-1 gap-8 px-4 md:grid-cols-4">
          {/* Logo Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-[#FFB800] p-1">
                <Image
                  src="/placeholder.svg"
                  alt="Picmax Logo"
                  width={24}
                  height={24}
                  className="h-full w-full"
                />
              </div>
              <span className="text-2xl font-bold text-white">Picmax.</span>
            </div>
            <p className="text-base text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-white hover:text-[#FFB800]">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-[#FFB800]">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-[#FFB800]">
                <Pinterest className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-[#FFB800]">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-[#FFB800]">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="text-gray-300 hover:text-[#FFB800]">
                FAQs
              </Link>
              <Link href="#" className="text-gray-300 hover:text-[#FFB800]">
                Services
              </Link>
              <Link href="#" className="text-gray-300 hover:text-[#FFB800]">
                Testimonial
              </Link>
              <Link href="#" className="text-gray-300 hover:text-[#FFB800]">
                About Us
              </Link>
              <Link href="#" className="text-gray-300 hover:text-[#FFB800]">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>+0123-456-789</p>
              <p>example@gmail.com</p>
              <p>
                4517 Washington Ave.
                <br />
                Thika, Town
                <br />
                39495
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Get the latest information
            </h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-l bg-white px-4 py-2 text-sm focus:outline-none"
              />
              <Button
                className="rounded-l-none bg-[#FFB800] hover:bg-[#FFB800]/90"
                size="sm"
              >
                →
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-[#FFB800]">
        <div className="mx-auto flex max-w-[1170px] items-center justify-between px-4 py-4 text-base font-medium">
          <p>Copyright © 2024 Picmax. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:underline">
              User Terms & Conditions
            </Link>
            <span>|</span>
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}


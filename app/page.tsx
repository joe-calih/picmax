import BlogSection from '@/components/blog-section'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import PricingSections from '@/components/pricing-sections'
import ScheduleSession from '@/components/schedule-session'
import { ServicesBanner } from '@/components/services-banner'
import ServicesSection from '@/components/services-section'
import TestimonialSection from '@/components/testimonial-section'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ServicesBanner />
      <ScheduleSession/>
      <BlogSection/>
      <ServicesBanner/>
      <PricingSections/>
      <TestimonialSection/>
      <ServicesSection/>
      <ServicesBanner />
    </main>
  )
}


'use client'

import * as React from 'react'
import { Calendar } from '@/components/ui/calendar'
import { Facebook, Instagram, PinIcon as Pinterest, Twitter, Youtube } from 'lucide-react'
import { format } from 'date-fns'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { submitSession } from '@/actions/submit-session'
import { type SocialLink } from '@/types/index'

const services = [
  'Consultation',
  'Training Session',
  'Therapy Session',
  'Group Session',
  'Workshop'
]

const timeSlots = [
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
  '5:00 PM'
]

const socialLinks: SocialLink[] = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Pinterest', href: '#', icon: Pinterest },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'YouTube', href: '#', icon: Youtube },
]

export default function ScheduleSession() {
  const [date, setDate] = React.useState<Date>()
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [message, setMessage] = React.useState('')

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(event.currentTarget)
    const data = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      service: formData.get('service') as string,
      location: formData.get('location') as string,
      date: date as Date,
      time: formData.get('time') as string,
      message: formData.get('message') as string,
    }

    const result = await submitSession(data)
    setMessage(result.message)
    setIsSubmitting(false)
  }

  return (
    <div className="w-full bg-white">
      <div className="mx-auto max-w-[1170px] px-4 py-12">
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-gray-200 text-sm font-medium">
            Schedule Session
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Your Name *</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Ex. John Doe"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="phone">Phone *</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="Enter Phone Number"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="service">Preferred Services *</Label>
                <Select name="service" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="location">Location *</Label>
                <Input
                  id="location"
                  name="location"
                  placeholder="Enter Location"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label>Preferred Session Date *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        'justify-start text-left font-normal',
                        !date && 'text-muted-foreground'
                      )}
                    >
                      {date ? format(date, 'PP') : 'Pick a date'}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="time">Preferred Session Time *</Label>
                <Select name="time" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="message">Your Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Enter here..."
                  required
                />
              </div>
            </div>

            {message && (
              <div className={cn(
                "p-4 rounded-md",
                message.includes('success') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
              )}>
                {message}
              </div>
            )}

            <Button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-black"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </form>

          <div className="rounded-xl overflow-hidden">
            <div className="bg-emerald-900 text-white p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-yellow-400 mb-2">Address</h3>
                  <p>4517 Washington Ave, Manchester,<br />Kentucky 39495</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-yellow-400 mb-2">Contact</h3>
                  <div className="space-y-2">
                    <p>Phone: +0123-456-789</p>
                    <p>Email: example@gmail.com</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-yellow-400 mb-2">Time</h3>
                  <div className="space-y-2">
                    <p>Monday - Friday : 10:00 - 20:00</p>
                    <p>Saturday - Sunday : 11:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-400 p-8">
              <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="bg-emerald-900 text-white p-2 rounded-full hover:bg-emerald-800 transition-colors"
                  >
                    <link.icon className="w-6 h-6" />
                    <span className="sr-only">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


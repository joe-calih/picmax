export interface FormData {
  name: string
  phone: string
  service: string
  location: string
  date: Date
  time: string
  message: string
}

export interface SocialLink {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}


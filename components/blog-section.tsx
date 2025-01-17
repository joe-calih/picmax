import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface BlogPost {
  id: number
  title: string
  category: string
  author: string
  date: string
  image: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How to Develop Your Unique Photography Style",
    category: "Photography Style",
    author: "Amelia Davis",
    date: "21 September 2024",
    image: "/modern.webp?height=300&width=400",
  },
  {
    id: 2,
    title: "Behind the Shoot: A Day in the Life of a Photographer",
    category: "Photographer",
    author: "Amelia Davis",
    date: "20 September 2024",
    image: "/star.webp?height=300&width=400",
  },
  {
    id: 3,
    title: "10 Tips for Capturing Stunning Portraits",
    category: "Photographer",
    author: "Amelia Davis",
    date: "19 September 2024",
    image: "/studio.webp?height=300&width=400",
  },
]

export default function BlogSection() {
  return (
    <section className="w-full bg-[#004D3C] py-16">
      <div className="mx-auto max-w-[1170px] px-4">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-gray-300">News & Blogs</p>
            <h2 className="text-4xl font-bold text-white">Articles</h2>
          </div>
          <Button
            asChild
            className="bg-[#FFB800] text-black hover:bg-[#FFB800]/90"
          >
            <Link href="/blogs" className="flex items-center gap-2">
              View All Blogs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group overflow-hidden rounded-lg bg-[#003D30] transition-transform hover:-translate-y-1"
            >
              <Link href={`/blog/${post.id}`}>
                <div className="relative h-[240px] w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block rounded-full bg-[#FFB800] px-4 py-1 text-sm font-medium text-black">
                    {post.category}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-white group-hover:text-[#FFB800]">
                    {post.title}
                  </h3>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-300">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


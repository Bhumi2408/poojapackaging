import { blogs } from '@/data/blogs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <section className="bg-[#1E2126] flex rounded-b-[100px] relative z-10 overflow-hidden">
        <div className="pt-44 w-[50%]">
          <div className="pl-20 pb-20">

            <h3 className="text-5xl lg:text-7xl font-semibold text-white leading-tight">
              Blog
            </h3>
          </div>
        </div>
        <div className="w-[50%] hidden  md:flex items-center justify-center relative pr-24">
          {/* Grid */}
          <div
            className="absolute md:w-[300px] lg:w-[450px] h-full bg-cover bg-center bg-y-repeat"
            style={{
              backgroundImage: "url('/images/home/herogrid.webp')",
            }}
          />

          {/* Overlay only on grid */}
          <div className="absolute md:w-[300px] lg:w-[450px] h-full bg-[#1E2126]/90" />
        </div>
      </section>

      <section className="bg-white relative z-[5] -mt-[100px] rounded-b-[100px] pt-[150px] pb-24">
        <div className="md:w-[75%] mx-auto px-5 md:px-0">

          <div className="mb-16 text-center">
            <p className="text-[#C23E34] font-medium uppercase tracking-[3px]">
              Latest Blogs
            </p>

            <h2 className="text-5xl font-semibold text-[#1E2126] mt-4">
              Packaging Insights & Industry Updates
            </h2>

            <p className="text-[#666] mt-5 max-w-3xl mx-auto leading-8">
              Discover expert articles, packaging guides, industry trends,
              manufacturing tips and flexible packaging solutions from
              Pooja Packaging Industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {blogs.map((blog) => (

              <Link
                key={blog.slug}
                href={`/blogs/${blog.slug}`}
                className="group overflow-hidden rounded-[26px] border border-[#E8E8E8] bg-white transition duration-300 hover:-translate-y-2 hover:border-[#C23E34] hover:shadow-2xl"
              >

                {/* Image */}

                <div className="overflow-hidden">

                  <Image
                    src={blog.hero.image}
                    alt={blog.hero.imageAlt}
                    width={500}
                    height={350}
                    className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                </div>

                {/* Content */}

                <div className="p-7">

                  <p className="text-sm text-[#C23E34]">
                    {blog.hero.publishedDate}
                  </p>

                  <h3 className="mt-3 text-[28px] font-semibold leading-tight text-[#1E2126] transition group-hover:text-[#C23E34] line-clamp-2">
                    {blog.hero.title}
                  </h3>

                  <p className="mt-4 line-clamp-2 text-[17px] leading-8 text-[#666]">
                    {blog.excerpt}
                  </p>

                  <div className="mt-8 flex items-center justify-between">

                    <span className="font-medium text-[#C23E34]">
                      Read More →
                    </span>

                    <span className="text-sm text-[#888]">
                      {blog.hero.readTime}
                    </span>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>
      </section>
    </>
  )
}

export default page
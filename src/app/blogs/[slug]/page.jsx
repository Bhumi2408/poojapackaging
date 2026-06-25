import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import { CheckCircle2 } from "lucide-react";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.seo.title,
    description: blog.seo.description,
    keywords: blog.seo.keywords,

    alternates: {
      canonical: `https://www.poojapackagingindustries.com/blog/${blog.slug}`,
    },

    openGraph: {
      title: blog.seo.title,
      description: blog.seo.description,
      images: [blog.hero.image],
    },

    twitter: {
      card: "summary_large_image",
      title: blog.seo.title,
      description: blog.seo.description,
      images: [blog.hero.image],
    },
  };
}

export default async function BlogDetails({ params }) {
  const { slug } = await params;
  let headingIndex = 0;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) notFound();

  return (
    <>
      {/* Hero */}

      <section className="bg-[#1E2126] rounded-b-[100px] relative z-10">
        <div className="w-[75%] mx-auto pt-44 pb-28">
          <p className="text-[#C23E34] text-lg">{blog.hero.category}</p>

          <h1 className="mt-5 text-6xl font-semibold leading-tight text-white">
            {blog.hero.title}
          </h1>

          <div className="mt-10 flex gap-8 text-[#BBBBBB]">
            <span>{blog.hero.publishedDate}</span>

            <span>{blog.hero.author}</span>
          </div>
        </div>
      </section>

      {/* Content */}

      <section className="bg-white rounded-b-[100px] -mt-[100px] relative z-[5] pt-[150px] pb-20">
        <div className="w-[75%] mx-auto">
          {/* Hero Image */}

          <Image
            src={blog.hero.image}
            alt={blog.hero.imageAlt}
            width={1400}
            height={700}
            className="w-full rounded-[30px] object-cover"
          />

          {/* Content */}

          <div className="mx-auto mt-16 max-w-4xl">
            {blog.content.map((item, index) => {
              switch (item.type) {
                case "heading": {
                  headingIndex++;

                  const HeadingTag = headingIndex === 1 ? "h3" : "h5";

                  return (
                    <HeadingTag
                      key={index}
                      className={`${
                        headingIndex === 1
                          ? "mt-7 mb-6 text-3xl font-semibold text-[#1E2126]"
                          : "mt-7 mb-5 text-xl font-semibold text-[#1E2126]"
                      }`}
                    >
                      {item.children.map((child, i) =>
                        child.href ? (
                          <Link
                            key={i}
                            href={child.href}
                            className="text-[#C23E34] hover:underline"
                          >
                            {child.text}
                          </Link>
                        ) : (
                          <span
                            key={i}
                            className={child.bold ? "font-semibold" : ""}
                            style={{ color: child.color || "inherit" }}
                          >
                            {child.text}
                          </span>
                        ),
                      )}
                    </HeadingTag>
                  );
                }

                case "paragraph":
                  return (
                    <p key={index} className="mb-5 leading-7 text-[#555]">
                      {item.children.map((child, i) =>
                        child.href ? (
                          <Link
                            key={i}
                            href={child.href}
                            className="font-medium text-[#C23E34] hover:underline"
                          >
                            {child.text}
                          </Link>
                        ) : (
                          <span
                            key={i}
                            className={child.bold ? "font-semibold" : ""}
                          >
                            {child.text}
                          </span>
                        ),
                      )}
                    </p>
                  );

                case "image":
                  return (
                    <Image
                      key={index}
                      src={item.image}
                      alt={item.alt}
                      width={1200}
                      height={700}
                      className="my-12 w-full rounded-3xl"
                    />
                  );

                case "table":
                  return (
                    <div key={index} className="my-8 overflow-x-auto">
                      <table className="w-full overflow-hidden rounded-2xl border border-gray-200">
                        <thead className="bg-[#C23E34] text-white">
                          <tr>
                            {item.headers.map((header, i) => (
                              <th
                                key={i}
                                className="border border-[#b9342b] px-6 py-4 text-left text-lg font-semibold"
                              >
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>

                        <tbody>
                          {item.rows.map((row, rowIndex) => (
                            <tr
                              key={rowIndex}
                              className="odd:bg-white even:bg-gray-50 hover:bg-red-50 transition-colors"
                            >
                              {row.map((cell, cellIndex) => (
                                <td
                                  key={cellIndex}
                                  className="border border-gray-200 px-6 py-4 text-[17px] leading-7 text-[#555]"
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );

                case "features":
                  return (
                    <div
                      key={index}
                      className="my-12 grid gap-6 md:grid-cols-2"
                    >
                      {item.items.map((feature, i) => (
                        <div
                          key={i}
                          className="rounded-2xl border border-gray-200 bg-[#F8F8F8] p-6"
                        >
                          <div className="flex items-start gap-4 ">
                            <div className="flex h-10 w-10 w-[10%] items-center justify-center rounded-full bg-[#C23E34] text-white">
                              <CheckCircle2 className="w-5 h-5" />
                            </div>

                            <div className="w-[85%]">
                              <h3 className="text-lg font-semibold text-[#1E2126]">
                                {feature.title}
                              </h3>

                              <p className="mt-2 leading-7 text-[#666]">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  );

                case "list":
                  return (
                    <ul
                      key={index}
                      className="my-3 list-disc space-y-3 pl-8 text-[#555]"
                    >
                      {item.items.map((li, i) => (
                        <li key={i}>{li}</li>
                      ))}
                    </ul>
                  );

                default:
                  return null;
              }
            })}
          </div>

          {/* FAQ */}

          {blog.faq.length > 0 && (
            <div className="mx-auto mt-10 max-w-4xl">
              <h5 className="mb-10 text-2xl font-semibold">
                Frequently Asked Questions
              </h5>

              <div className="space-y-5">
                {blog.faq.map((faq, index) => (
                  <details key={index} className="rounded-2xl border p-6">
                    <summary className="cursor-pointer text-xl font-medium">
                      {faq.question}
                    </summary>

                    <p className="mt-5 leading-8 text-[#555]">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          )}

          {blog.conclusion?.length > 0 && (
            <div className="mt-10 max-w-4xl mx-auto">
                <h5 className="mb-5 text-2xl font-semibold">
                Conclusion
              </h5>
              {blog.conclusion.map((item, index) => {
                switch (item.type) {
                  case "heading":
                    return (
                      <h2
                        key={index}
                        className="mt-10 mb-5 text-4xl font-semibold text-[#1E2126]"
                      >
                        {item.children.map((child, i) => (
                          <span key={i}>{child.text}</span>
                        ))}
                      </h2>
                    );

                  case "paragraph":
                    return (
                      <p
                        key={index}
                        className="mb-3 leading-7 text-[#555]"
                      >
                        {item.children.map((child, i) =>
                          child.href ? (
                            <Link
                              key={i}
                              href={child.href}
                              className="font-medium text-[#C23E34] hover:underline"
                            >
                              {child.text}
                            </Link>
                          ) : (
                            <span key={i}>{child.text}</span>
                          ),
                        )}
                      </p>
                    );

                  default:
                    return null;
                }
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

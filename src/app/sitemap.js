import { products } from "@/data/products";
import { blogs } from "@/data/blogs";

export default function sitemap() {
  const baseUrl = "https://www.poojapackagingindustries.com";
  const lastModified = new Date();

  // Static pages
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products`,
      lastModified,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified,
      priority: 0.8,
    },
  ];

  // Products - automatically generated from data/products.js
  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified,
    priority: 0.8,
  }));

  // Blogs - automatically generated from data/blogs.js
  const blogRoutes = blogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified,
    priority: 0.64,
  }));

  return [...staticRoutes, ...productRoutes, ...blogRoutes];
}
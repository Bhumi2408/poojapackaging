export default function robots() {
  const baseUrl = "https://www.poojapackagingindustries.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
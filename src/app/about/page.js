import HeroSection from "@/components/about/HeroSection";
import LaminatedRolls from "@/components/about/LaminatedRolls";
import BlogSection from "@/components/home/BlogSection";
import CompanyStats from "@/components/home/CompanyStats";
import ScrollProduct from "@/components/home/ScrollProduct";

export const metadata = {
  title: "Pooja Packaging Industries — Flexible Packaging Manufacturer in Delhi",
  description:
    "Pooja Packaging Industries is a trusted flexible packaging manufacturer in Delhi. Custom laminated pouches, rolls & zipper packs for FMCG, food & retail brands. Get a free quote!",
  alternates: {
    canonical: "https://www.poojapackagingindustries.com/about",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Pooja Packaging Industries",
      url: "https://www.poojapackagingindustries.com",
      logo: "https://www.poojapackagingindustries.com/logo.png",
      description:
        "Pooja Packaging Industries is a trusted flexible packaging manufacturer based in Delhi, specializing in custom laminated pouches, laminated rolls, and zipper packs for FMCG, food, and retail brands across India.",
      foundingDate: "2017",
      legalName: "Pooja Packaging Industries",
      taxID: "07AAGFP3760D1Z8",
      identifier: [
        {
          "@type": "PropertyValue",
          name: "GST Number",
          value: "07AAGFP3760D1Z8",
        },
        {
          "@type": "PropertyValue",
          name: "Import Export Code (IEC)",
          value: "AAGFP3760D",
        },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-9810006555",
        contactType: "Customer Service",
        availableLanguage: ["English", "Hindi"],
      },
      sameAs: [
        "https://www.facebook.com/PoojaPackagingIndustries",
        "https://www.instagram.com/poojapackagingindustries/",
      ],
    },
    {
      "@type": "LocalBusiness",
      name: "Pooja Packaging Industries",
      image: "https://www.poojapackagingindustries.com/logo.png",
      url: "https://www.poojapackagingindustries.com",
      telephone: "+91-9810006555",
      email: "poojapackagingindustries951@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "G951, DSIDC Industrial Area",
        addressLocality: "Delhi",
        addressRegion: "Delhi",
        postalCode: "110040",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "28.6139",
        longitude: "77.2090",
      },
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Bank Transfer, UPI",
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Packaging Products",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Detergent Pouches",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Spices Pouches",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Atta & Flour Packaging Pouches",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Snack Packaging Pouches",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Laminated Rolls",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Zipper Packs",
            },
          },
        ],
      },
      sameAs: [
        "https://www.facebook.com/PoojaPackagingIndustries",
        "https://www.instagram.com/poojapackagingindustries/",
      ],
    },
    {
      "@type": "WebPage",
      name: "About Pooja Packaging Industries — Flexible Packaging Manufacturer in Delhi",
      url: "https://www.poojapackagingindustries.com/about",
      description:
        "Learn about Pooja Packaging Industries, a trusted flexible packaging manufacturer in Delhi offering custom laminated pouches, rolls, and zipper packs for FMCG, food, and retail brands across India.",
      inLanguage: "en-IN",
      isPartOf: {
        "@type": "WebSite",
        name: "Pooja Packaging Industries",
        url: "https://www.poojapackagingindustries.com",
      },
      about: {
        "@type": "Organization",
        name: "Pooja Packaging Industries",
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.poojapackagingindustries.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About",
            item: "https://www.poojapackagingindustries.com/about",
          },
        ],
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <HeroSection />
      <LaminatedRolls />
      <CompanyStats />
      <ScrollProduct />
      <BlogSection />
    </>
  );
}
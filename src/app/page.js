import Header from "@/components/Header";
import BlogSection from "@/components/home/BlogSection";
import Categories from "@/components/home/Categories";
import CompanyStats from "@/components/home/CompanyStats";
import FaqSection from "@/components/home/FaqSection";
import HeroSection from "@/components/home/HeroSection";
import LaminatedRolls from "@/components/home/LaminatedRolls";
import ScrollProduct from "@/components/home/ScrollProduct";
import Testimonials from "@/components/home/Testimonials";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      "name": "Who is the best flexible packaging manufacturer in Delhi NCR?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pooja Packaging Industries is one of the most trusted flexible packaging manufacturers in Delhi NCR, located at DSIDC Industrial Area, Delhi. They offer custom printed laminated pouches, rolls, and bags for food, FMCG, mattress, and industrial brands — with low MOQ, bulk supply, and pan-India delivery."
      }
    },
    {
      "@type": "Question",
      "name": "Which company provides custom printed pouch manufacturer in Delhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pooja Packaging Industries is a leading custom printed pouch manufacturer in Delhi, offering multi-colour high-definition printing on laminated pouches for spices, atta, detergent, snacks, tea, rice, and all FMCG product categories — with matte, gloss, and metallic lamination options."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I find a packaging pouch manufacturer near me in Delhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pooja Packaging Industries is conveniently located at G951, DSIDC Industrial Area, Delhi — 110040, making it one of the most accessible packaging manufacturers in Delhi for local FMCG brands, startups, and distributors looking for quality flexible pouches at competitive prices."
      }
    },
    {
      "@type": "Question",
      "name": "Which is the best laminated pouch manufacturer in Delhi for food brands?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For food brands in Delhi, Pooja Packaging Industries is a top choice — offering FSSAI-compliant, food-grade laminated pouches for atta, rice, spices, snacks, tea, and all food categories. They provide custom sizes, multi-colour printing, and low MOQ options suited for both new food startups and established FMCG companies."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a laminated pouch and a normal plastic bag?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A laminated pouch is made from multiple bonded layers of films such as BOPP, PET, aluminium foil, and LDPE — providing superior barrier protection against moisture, oxygen, light, and contamination. A normal plastic bag is single-layer and offers minimal protection. Laminated pouches are food-grade, printable, and used for FMCG products requiring longer shelf life and branded packaging."
      }
    },
    {
      "@type": "Question",
      "name": "How do I choose the right packaging pouch for my product?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Choosing the right pouch depends on four factors — product type (liquid, powder, or solid), required shelf life, retail display format, and budget. For example, spices and tea need aluminium foil barrier pouches; snacks need nitrogen-flush compatible pouches; atta needs heavy-duty puncture-resistant pouches; and premium brands prefer stand-up pouches with a zipper for consumer convenience."
      }
    },
    {
      "@type": "Question",
      "name": "What materials are used in food-grade flexible packaging?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Food-grade flexible packaging is made from multilayer laminated films combining materials like BOPP (for clarity and printability), PET (for strength and heat resistance), LDPE (for sealability and flexibility), aluminium foil (for maximum barrier against moisture and oxygen), and nylon (for puncture resistance). The combination is chosen based on the product's sensitivity, shelf life requirement, and packaging format."
      }
    },
    {
      "@type": "Question",
      "name": "How much does custom printed packaging cost in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Custom printed packaging cost in India depends on pouch type, size, number of print colours, material combination, lamination finish, and order quantity. Generally, higher quantities reduce per-unit cost significantly. For an accurate quote, contact a manufacturer like Pooja Packaging Industries directly with your product specs and required quantity — most manufacturers offer free samples before bulk orders."
      }
    }
  ]
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <HeroSection />
      <LaminatedRolls />
      <CompanyStats />
      <ScrollProduct />
      <Categories />
      <Testimonials />
      <BlogSection />
      <FaqSection />
    </main>
  );
}
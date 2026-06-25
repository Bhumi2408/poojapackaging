import HeroSection from "@/components/about/HeroSection"
import LaminatedRolls from "@/components/about/LaminatedRolls"
import BlogSection from "@/components/home/BlogSection"
import CompanyStats from "@/components/home/CompanyStats"
import ScrollProduct from "@/components/home/ScrollProduct"

export const metadata = {
  title: "about us",
  description: "...",
  keywords: ["hello","hii"],
  alternates: {
    canonical: "https://www.poojapackagingindustries.com/about"
  }
}

const page = () => {
  return (
    <div>
      <HeroSection/>
      <LaminatedRolls/>
      <CompanyStats/>
      <ScrollProduct/>
      <BlogSection/>
    </div>
  )
}

export default page
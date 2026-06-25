import Header from "@/components/Header";
import BlogSection from "@/components/home/BlogSection";
import Categories from "@/components/home/Categories";
import CompanyStats from "@/components/home/CompanyStats";
import HeroSection from "@/components/home/HeroSection";
import LaminatedRolls from "@/components/home/LaminatedRolls";
import ScrollProduct from "@/components/home/ScrollProduct";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main className="bg-[#1c1e26]">
      <Header />
      <HeroSection/>
      <LaminatedRolls/>
      <CompanyStats/>
      <ScrollProduct/>
      <Categories/>
      <Testimonials/>
      <BlogSection/>
    </main>
  );
}
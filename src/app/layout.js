import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata = {
  title: "Pooja Packaging Industries - Top Custom packaging solutions India",
  description: "At Pooja Packaging Industries, we deliver innovative packaging solutions that protect your products and strengthen your brand presence. With years of experience in laminated rolls, pouches, and zipper packs, we focus on quality, durability, and attractive designs that meet industry standards.",
  keywords:"Pooja Packaging Industries, Custom packaging solutions in India",
   icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className="min-h-screen flex flex-col font-sans antialiased bg-[#1E2126] text-white">
        <Header />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
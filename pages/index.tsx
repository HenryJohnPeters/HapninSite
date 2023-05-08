import Image from "next/image";
import { Manrope } from "next/font/google";
import NavBar from "@/components/NavBar/NavBar";
import Hero from "@/components/Hero/Hero";
import HowItWorks from "@/components/HowItWorks";
import Partners from "@/components/Partners";
import About from "@/components/About";
import Footer from "@/components/Footer";
import ImageGrid from "@/components/Hero/ImageGrid";

const manrope = Manrope({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={manrope.className}>
      <NavBar />
      <Hero />
      <HowItWorks />
      <ImageGrid />
      <Partners />
      <About />
      <Footer />
    </main>
  );
}

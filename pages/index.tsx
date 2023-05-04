import Image from "next/image";
import { Manrope } from "next/font/google";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Partners from "@/components/Partners";

const manrope = Manrope({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={manrope.className}>
      <NavBar />
      <Hero />
      <HowItWorks />
      <Partners />
    </main>
  );
}

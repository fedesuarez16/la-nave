import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Clients } from "@/components/sections/Clients";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Services />
        <Clients />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

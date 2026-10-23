import { notFound } from "next/navigation";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Clients } from "@/components/sections/Clients";
import { About } from "@/components/sections/About";
import { Founder } from "@/components/sections/Founder";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} dict={dict.nav} />
      <main>
        <Hero dict={dict.hero} />
        <Projects dict={dict.projects} />
        <Services dict={dict.services} />
        <Clients dict={dict.clients} />
        <About dict={dict.about} />
        <Founder dict={dict.founder} />
        <Contact dict={dict.contact} />
      </main>
      <Footer dict={dict} />
    </>
  );
}

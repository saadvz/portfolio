import Header from "@/components/Header";
import SocialLinks from "@/components/SocialLinks";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <SocialLinks />
      <Hero />
      <Experience />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

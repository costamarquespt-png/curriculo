import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import Specialties from "@/components/Specialties";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <TopBar />
      <Hero />
      <Specialties />
      <About />
      <Projects />
      <Certificates />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

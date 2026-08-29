import Hero from "@/components/Hero";
import AIToolsMarquee from "@/components/AIToolsMarquee";
import SocialProof from "@/components/SocialProof";
import ValueProps from "@/components/ValueProps";
import About from "@/components/About";
import ProblemSolution from "@/components/ProblemSolution";
import Projects from "@/components/Projects";
import ProductShowcase from "@/components/three/ProductShowcase";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Metrics from "@/components/Metrics";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <AIToolsMarquee />
      <SocialProof />
      <ValueProps />
      <About />      <ProblemSolution />
      <Projects />
      <ProductShowcase />
      <Features />
      <HowItWorks />      <Experience />
      <Skills />
      <Metrics />
      <Testimonials />
      <FAQ />
      <Contact />
      <FinalCTA />
      <Footer />
    </main>
  );
}

import AboutSection from "@component/AboutSection/AboutSection";
import { ContactSection } from "@component/ContactSection/ContactSection";
import Hero from "@component/Hero/Hero";
import Layout from "@component/Layout/Layout";
import ProjectSection from "@component/ProjectSection/ProjectSection";
import Testimonials from "@component/Testimonials/Testimonials";

export default function Home() {
  return (
    <div className="w-full bg-background noisy relative overflow-hidden select-none z-2">
      <Layout
        pageMeta={{
          title: "Doviange - Home of Interior designs",
          description: "Give your consent, we design a perfect blend of trends and complex architecture, designed by Doviange",
        }}
      >
        <Hero />
        <AboutSection />
        <ProjectSection />
        <Testimonials />
        <ContactSection />
      </Layout>
    </div>
  );
}

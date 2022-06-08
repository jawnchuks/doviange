import AboutSection from "@component/AboutSection/AboutSection";
import { ContactSection } from "@component/ContactSection/ContactSection";
import Hero from "@component/Hero/Hero";
import Layout from "@component/Layout/Layout";
import ProjectSection from "@component/ProjectSection/ProjectSection";
import Testimonials from "@component/Testimonials/Testimonials";

export default function Home() {
  return (
    <div className="w-full bg-background relative overflow-hidden select-none z-2">
      <Layout
        pageMeta={{
          title: "Doviange- Home of Interior designs",
          description: "This is a new description",
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

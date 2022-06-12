import { ContactSection } from "@component/ContactSection/ContactSection";
import HeroAbout from "@component/HeroAbout/HeroAbout";
import Layout from "@component/Layout/Layout";
import ServicesAbout from "@component/ServicesAbout/ServicesAbout";

export default function about() {
  return (
    <div className="w-full bg-background relative overflow-hidden select-none z-2 font-sora">
      <Layout
        pageMeta={{
          title: "About Doviange - Home of Interior designs",
          description: "This is a new description",
        }}
      >
        <HeroAbout />
        <ServicesAbout />
        <ContactSection />
      </Layout>
    </div>
  );
}

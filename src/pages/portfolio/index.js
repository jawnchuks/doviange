import { ContactSection } from "@component/ContactSection/ContactSection";
import HeroPortfolio from "@component/HeroPortfolio/HeroPortfolio";
import Layout from "@component/Layout/Layout";
import PortfolioList from "@component/PortfolioList/PortfolioList";

export default function portfolio() {
  return (
    <div className="w-full bg-background relative overflow-hidden select-none z-2 font-sans">
      <Layout
        pageMeta={{
          title: "Doviange - Home of Interior designs",
          description: "This is a new description",
        }}
      >
        <HeroPortfolio />
        <PortfolioList />
        <ContactSection />
      </Layout>
    </div>
  );
}

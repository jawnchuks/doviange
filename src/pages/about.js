import { ContactSection } from "@component/ContactSection/ContactSection";
import Layout from "@component/Layout/Layout";

export default function about() {
  return (
    <div className="w-full bg-background relative overflow-hidden select-none z-2 font-sora">
      <Layout
        pageMeta={{
          title: "About Doviange - Home of Interior designs",
          description: "This is a new description",
        }}
      >
        <ContactSection />
      </Layout>
    </div>
  );
}

import ContactForm from "@component/ContactForm/ContactForm";
import HeroContact from "@component/HeroContact/HeroContact";
import Layout from "@component/Layout/Layout";

export default function contact() {
  return (
    <div className="w-full bg-background relative overflow-hidden select-none z-2 font-sora">
      <Layout
        pageMeta={{
          title: "Doviange - Home of Interior designs",
          description: "This is a new description",
        }}
      >
        <HeroContact />
        <ContactForm />
      </Layout>
    </div>
  );
}
1;

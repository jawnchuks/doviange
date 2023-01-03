
import { ContactSection } from "@component/ContactSection/ContactSection";
import HeroBlog from "@component/HeroBlog/HeroBlog";
import Layout from "@component/Layout/Layout";

export default function blog() {
    return (
        <div className="w-full bg-background relative overflow-hidden select-none z-2 font-sora">
            <Layout
                pageMeta={{
                    title: "Blog - Home of Interior designs",
                    description: "This is a new description",
                }}
            >
                <HeroBlog />
                <ContactSection />
            </Layout>
        </div>
    );
}

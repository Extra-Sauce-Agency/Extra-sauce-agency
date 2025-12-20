import Navigation from "@/components/shared/Navigation";
import HeroSection from "@/components/sections/homepage/HeroSection";
import TrustedBySection from "@/components/sections/homepage/TrustedBySection";
import WhoIsThisForSection from "@/components/sections/homepage/WhoIsThisForSection";
import Testimonials from "@/components/sections/homepage/TestimonialsSection";
import ProcessSection from "@/components/sections/homepage/ProcessSection";
import ServicesOverviewSection from "@/components/sections/homepage/ServicesOverviewSection";
import FAQSection from "@/components/sections/homepage/FAQSection";
import CTASection from "@/components/sections/homepage/CTASection";
import Footer from "@/components/shared/Footer";
import EnhancedSEOHead from "@/components/SEO/EnhancedSEOHead";
import { homepageStructuredData } from "@/data/structured-data";

const HomePage = () => {
  return (
    <>
      <EnhancedSEOHead
        title="Founder-Led Growth Systems for SaaS & B2B Companies | Extra Sauce Agency"
        description="Build predictable inbound demand with our founder-led content systems for SaaS & B2B. Sharpen your narrative and authority. Extra Sauce Agency. Toronto-based, serving across Canada and the U.S."
        ogTitle="Founder-Led Growth Systems for SaaS & Modern B2B Companies"
        ogDescription="We help SaaS and high-growth B2B companies build authority, sharpen their narrative, and create predictable inbound demand with founder-led content systems."
        keywords={[
          "B2B marketing",
          "founder-led marketing", 
          "content marketing",
          "SaaS growth",
          "thought leadership",
          "executive ghostwriting",
          "video content engine",
          "GTM coaching",
          "B2B SaaS marketing",
          "content strategy",
          "personal branding for executives",
          "demand generation"
        ]}
        ogImage="https://www.extrasauceagency.com/og-image.png"
        canonicalUrl="https://www.extrasauceagency.com"
        type="website"
        structuredData={homepageStructuredData}
      />
      
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <TrustedBySection />
          <WhoIsThisForSection />
          <Testimonials />
          <ProcessSection />
          <ServicesOverviewSection />
          <FAQSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
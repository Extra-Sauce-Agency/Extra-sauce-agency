import React from "react";
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import HeroCaseStudy from "@/components/sections/successstories/HeroCaseStudy";
import CaseStudyGrid from "@/components/sections/successstories/CaseStudyGrid";
import MilestonesSection from "@/components/sections/successstories/MilestonesSection";
import CTASection from "@/components/sections/successstories/CTASection";
import { caseStudies } from "@/content/success-stories";
import EnhancedSEOHead from "@/components/SEO/EnhancedSEOHead";
import { organizationSchema } from "@/data/structured-data";

const SuccessStories: React.FC = () => {
  const featuredStory = caseStudies.find((story) => story.featured) ?? caseStudies[0];
  const otherStories = caseStudies.filter((story) => story.id !== featuredStory.id);

  const itemListSchema = {
    "@type": "ItemList",
    "itemListElement": caseStudies.map((story, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": story.title,
      "url": `https://www.extrasauceagency.com/success-stories/${story.slug}`
    }))
  };

  const structuredData = [organizationSchema, itemListSchema];

  return (
    <>
      <EnhancedSEOHead
        title="SaaS & B2B Success Stories | Founder-Led Growth Results"
        description="Proof from SaaS and B2B companies who scaled authority and inbound pipeline using our founder-led growth system."
        ogTitle="SaaS & B2B Success Stories | Founder-Led Growth Results"
        ogDescription="Proof from SaaS and B2B companies who scaled authority and inbound pipeline using our founder-led growth system."
        canonicalUrl="https://www.extrasauceagency.com/success-stories"
        type="article"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        <HeroCaseStudy story={featuredStory} />
        <MilestonesSection />
        <CaseStudyGrid stories={otherStories} />
        <CTASection />
        <Footer />
      </div>
    </>
  );
};

export default SuccessStories;

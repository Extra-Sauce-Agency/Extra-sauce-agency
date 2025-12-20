import Navigation from "@/components/shared/Navigation";
import SauceRecipe from "@/components/sections/saucerecipe/SauceRecipe";
import Footer from "@/components/shared/Footer";
import EnhancedSEOHead from "@/components/SEO/EnhancedSEOHead";
import { organizationSchema, sauceRecipeSchema } from "@/data/structured-data";

const TheSauceRecipe = () => {
  const structuredData = [organizationSchema, sauceRecipeSchema];

  return (
    <>
      <EnhancedSEOHead
        title="The Sauce Recipe | Founder-Led Growth for SaaS & B2B"
        description="Explore The Sauce Recipe—our founder-led growth methodology designed for SaaS and modern B2B companies seeking narrative clarity and demand generation."
        ogTitle="The Sauce Recipe | Founder-Led Growth for SaaS & B2B"
        ogDescription="Explore The Sauce Recipe - our founder-led growth methodology designed for SaaS and modern B2B companies seeking narrative clarity and demand generation."
        canonicalUrl="https://www.extrasauceagency.com/the-sauce-recipe"
        type="article"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        <SauceRecipe />
        <Footer />
      </div>
    </>
  );
};

export default TheSauceRecipe;
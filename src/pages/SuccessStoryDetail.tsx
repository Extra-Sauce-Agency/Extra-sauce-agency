import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import { ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react";
import { caseStudies, getStorySections } from "@/content/success-stories";
import CaseStudyHero from "@/components/sections/successstories/detail/CaseStudyHero";
import TableOfContents from "@/components/sections/successstories/detail/TableOfContents";
import PullQuote from "@/components/sections/successstories/detail/PullQuote";
import CTASection from "@/components/sections/successstories/CTASection";
import EnhancedSEOHead from "@/components/SEO/EnhancedSEOHead";

const SuccessStoryDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const story = caseStudies.find((s) => s.slug === slug);

  if (!story) {
    return <Navigate to="/success-stories" replace />;
  }

  const sections = getStorySections(story);

  return (
    <>
      <EnhancedSEOHead
        title={`${story.title} | Extra Sauce Agency`}
        description={story.quote ?? story.title}
        ogTitle={story.title}
        ogDescription={story.quote ?? story.title}
        canonicalUrl={`https://www.extrasauceagency.com/success-stories/${story.slug}`}
        type="article"
      />
      <div className="min-h-screen bg-[#FCFAF8]">
        <Navigation />

        <CaseStudyHero story={story} />

        <section className="py-8 lg:py-16 bg-[#FCFAF8]">
          <div className="container-premium">
            <Link
              to="/success-stories"
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to success stories
            </Link>

            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-3">
                <TableOfContents sections={sections} />
              </div>

              <div className="lg:col-span-9 max-w-3xl">
                {sections.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-28 mb-14">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1A1715] mb-4">
                      {section.heading}
                    </h2>

                    {section.paragraphs?.map((paragraph, i) => (
                      <p key={i} className="text-[#4A4543] leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}

                    {section.subsections?.map((subsection, i) => (
                      <div key={i} className="mt-6 mb-6">
                        <h3 className="text-lg font-bold text-[#1A1715] mb-3">{subsection.heading}</h3>
                        {subsection.paragraphs.map((paragraph, j) => (
                          <p key={j} className="text-[#4A4543] leading-relaxed mb-4">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    ))}

                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="space-y-3 my-6">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-[#1A1715] font-medium">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.quote && <PullQuote quote={section.quote} client={story.client} />}

                    {section.links && section.links.length > 0 && (
                      <ul className="space-y-2 mt-4">
                        {section.links.map((link) => (
                          <li key={link.url}>
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-primary font-semibold hover:text-primary/80 transition-colors"
                            >
                              {link.label}
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection />
        <Footer />
      </div>
    </>
  );
};

export default SuccessStoryDetail;

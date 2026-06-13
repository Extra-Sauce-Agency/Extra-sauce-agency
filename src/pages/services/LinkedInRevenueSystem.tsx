import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Zap, Users, TrendingUp, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import CTASection from "@/components/sections/homepage/CTASection";
import FAQSection from "@/components/sections/homepage/FAQSection";
import EnhancedSEOHead from "@/components/SEO/EnhancedSEOHead";
import { organizationSchema } from "@/data/structured-data";

const LinkedInRevenueSystem = () => {
  const systemSteps = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Strategic Content Framework",
      description: "We develop a content strategy that positions you as an authority in your space. Every post is designed to attract your ideal clients and build genuine engagement."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Building", 
      description: "Transform your LinkedIn presence into a thriving community. We help you attract like-minded professionals and build relationships that convert to qualified leads."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Revenue Generation",
      description: "Turn engagement into revenue. Our system connects your content strategy directly to your sales pipeline, ensuring every post serves a business purpose."
    }
  ];

  const benefits = [
    {
      number: "1",
      title: "Establish Authority",
      description: "Position yourself as a thought leader in your industry. Build credibility that attracts inbound inquiries from qualified prospects."
    },
    {
      number: "2", 
      title: "Consistent Visibility",
      description: "Stay top-of-mind with your network. Regular, strategic posts keep you visible and relevant without requiring hours of your personal time."
    },
    {
      number: "3",
      title: "Qualified Lead Generation",
      description: "Attract prospects who are already familiar with your expertise. Reduce sales cycles and increase close rates with warm, inbound leads."
    },
    {
      number: "4",
      title: "Network Expansion",
      description: "Build meaningful connections with decision-makers and influencers in your space. Your network becomes your competitive advantage."
    },
    {
      number: "5",
      title: "Scalable System",
      description: "Create a repeatable system that works month after month. LinkedIn authority compounds over time, becoming more valuable with each post."
    }
  ];

  const faqSection = {
    headline: "Common Questions",
    description: "Everything you need to know about the LinkedIn Revenue System",
    questions: [
      {
        question: "How long does it take to see results?",
        answer: "Most clients see meaningful engagement within 30-60 days. Revenue impact typically appears within 90 days as your authority builds and your network expands."
      },
      {
        question: "Do I have to post every day?",
        answer: "No. We recommend 2-3 strategic posts per week. Quality and consistency matter more than frequency. We help you develop a sustainable posting schedule."
      },
      {
        question: "What if I'm not comfortable being in the spotlight?",
        answer: "We handle the heavy lifting. Our team creates content based on your expertise and approves everything before posting. You maintain control while we manage execution."
      },
      {
        question: "How is this different from just hiring a social media manager?",
        answer: "We focus on revenue generation, not just vanity metrics. Every post is strategically designed to build authority, attract qualified leads, and support your sales goals."
      },
      {
        question: "Can this work for B2B companies?",
        answer: "Absolutely. LinkedIn is the #1 platform for B2B lead generation. We specialize in helping B2B executives and companies build authority and generate qualified leads."
      },
      {
        question: "What's included in the LinkedIn Revenue System?",
        answer: "Content strategy development, weekly content creation, community engagement, performance analytics, and monthly strategy calls to optimize your results."
      }
    ]
  };

  const serviceSchema = {
    "@type": "Service",
    "name": "LinkedIn Revenue System",
    "description": "Turn your LinkedIn presence into a predictable revenue engine with our strategic content and community building system.",
    "url": "https://www.extrasauceagency.com/services/linkedin-revenue-system",
    "provider": {
      "@id": "https://www.extrasauceagency.com/#organization"
    }
  };

  const structuredData = [organizationSchema, serviceSchema];

  return (
    <>
      <EnhancedSEOHead
        title="LinkedIn Revenue System - Build Authority & Generate Leads"
        description="Turn your LinkedIn presence into a predictable revenue engine. Strategic content, community building, and lead generation for B2B executives."
        ogTitle="LinkedIn Revenue System - Build Authority & Generate Leads"
        ogDescription="Turn your LinkedIn presence into a predictable revenue engine. Strategic content, community building, and lead generation for B2B executives."
        canonicalUrl="https://www.extrasauceagency.com/services/linkedin-revenue-system"
        type="article"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center relative overflow-visible bg-gradient-subtle pt-28 md:pt-36">
          <div className="container-premium text-center relative z-10">
            <div className="max-w-4xl mx-auto animate-scale-in">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
                LinkedIn Revenue System
              </h1>
              
              <h2 className="text-2xl lg:text-3xl font-semibold text-primary mb-6">
                Turn your LinkedIn presence into a predictable revenue engine.
              </h2>
              
              <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                Strategic content, authentic community building, and qualified lead generation—all designed to grow your business.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                <Link to="/book-strategy-call">
                  <Button className="btn-hero">
                    Schedule Consultation
                  </Button>
                </Link>
              </div>
              
              {/* Metrics */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">60-90 Days</div>
                  <div className="text-sm text-muted-foreground">To See Revenue Impact</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2-3x</div>
                  <div className="text-sm text-muted-foreground">Increase in Qualified Leads</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Predictable</div>
                  <div className="text-sm text-muted-foreground">Monthly Revenue Growth</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* System Section */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container-premium">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 max-w-4xl mx-auto">
                THE LINKEDIN REVENUE SYSTEM
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A proven framework that turns your LinkedIn presence into your most powerful sales channel.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {systemSteps.map((step, index) => (
                <div 
                  key={index}
                  className="card-premium text-center group hover:scale-105 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-4 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 lg:py-16">
          <div className="container-premium">
            <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
              {/* Left Side */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                  <span className="text-primary">BENEFITS:</span><br />
                  <span className="text-foreground">LINKEDIN REVENUE SYSTEM</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our LinkedIn Revenue System doesn't just build your presence—it generates qualified leads and revenue. Here's how we deliver value:
                </p>
              </div>

              {/* Right Side - Benefits List */}
              <div className="space-y-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0 mt-1">
                      {benefit.number}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="container-premium">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Investment</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Simple, transparent pricing for the LinkedIn Revenue System
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="card-premium p-12 border-2 border-primary">
                <div className="text-center">
                  <p className="text-muted-foreground mb-2">Starting at</p>
                  <p className="text-6xl font-bold text-primary mb-4">$5,000</p>
                  <p className="text-muted-foreground mb-8">Complete LinkedIn Revenue System setup and first month</p>
                  <Link to="/book-strategy-call">
                    <Button className="btn-hero">
                      Schedule Your Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection 
          headline={faqSection.headline}
          description={faqSection.description}
          questions={faqSection.questions}
        />

        {/* Full-width CTA Section */}
        <div className="mt-12">
          <CTASection />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default LinkedInRevenueSystem;

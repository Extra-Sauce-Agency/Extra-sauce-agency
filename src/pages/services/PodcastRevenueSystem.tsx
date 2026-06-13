import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Mic, Copy, Share2, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import CTASection from "@/components/sections/homepage/CTASection";
import FAQSection from "@/components/sections/homepage/FAQSection";
import EnhancedSEOHead from "@/components/SEO/EnhancedSEOHead";
import { organizationSchema } from "@/data/structured-data";

const PodcastRevenueSystem = () => {
  const systemSteps = [
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Complete Podcast Setup",
      description: "We handle everything from recording and editing to hosting and distribution. You focus on the conversation; we handle the technical complexity."
    },
    {
      icon: <Copy className="w-8 h-8" />,
      title: "Content Multiplier System", 
      description: "One episode becomes 20+ pieces of content. Blog posts, social clips, email sequences, and more—all automatically repurposed from your podcast."
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Strategic Distribution",
      description: "Your content reaches your audience across every platform. We ensure maximum visibility and engagement for every episode you release."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Revenue Generation",
      description: "Build a podcast that generates leads, establishes authority, and creates multiple revenue streams for your business."
    }
  ];

  const benefits = [
    {
      number: "1",
      title: "Authority & Credibility",
      description: "Podcasting positions you as an expert in your field. Build trust with your audience and establish yourself as a thought leader."
    },
    {
      number: "2", 
      title: "Qualified Lead Generation",
      description: "Attract high-quality leads from listeners who are already engaged with your content and familiar with your expertise."
    },
    {
      number: "3",
      title: "Content Multiplier Effect",
      description: "Turn one 45-minute episode into weeks of content. Maximize your content investment and reach across all platforms."
    },
    {
      number: "4",
      title: "Audience Building",
      description: "Create a loyal community of listeners who become customers, advocates, and partners in your business growth."
    },
    {
      number: "5",
      title: "Competitive Advantage",
      description: "While your competitors hesitate, you're building a podcast empire. Podcasting is still underutilized by most B2B companies."
    }
  ];

  const faqSection = {
    headline: "Common Questions",
    description: "Everything you need to know about the Podcast Revenue System",
    questions: [
      {
        question: "Do I need any technical skills to start a podcast?",
        answer: "No. We handle all the technical setup, recording, editing, and distribution. You just need to show up and have great conversations."
      },
      {
        question: "How often should I release episodes?",
        answer: "We recommend weekly episodes for consistency and audience building. However, we work with your schedule to find what's sustainable for your business."
      },
      {
        question: "How long does it take to see results?",
        answer: "Most clients see meaningful engagement within 30-60 days. Revenue impact typically appears within 90-180 days as your audience grows."
      },
      {
        question: "What if I don't have guests lined up?",
        answer: "We help you develop a guest strategy and can assist with outreach. We also support solo episodes and interview formats."
      },
      {
        question: "How does the content multiplier system work?",
        answer: "We automatically repurpose your podcast into blog posts, social media clips, email sequences, and more. One episode creates 20+ pieces of content."
      },
      {
        question: "Can I make money directly from my podcast?",
        answer: "Yes. Beyond sponsorships and ads, your podcast becomes a lead generation machine that drives revenue through your core business offerings."
      }
    ]
  };

  const serviceSchema = {
    "@type": "Service",
    "name": "Podcast Revenue System",
    "description": "Launch and monetize a podcast that builds your authority and generates revenue. Complete setup, content multiplier system, and strategic distribution.",
    "url": "https://www.extrasauceagency.com/services/podcast-revenue-system",
    "provider": {
      "@id": "https://www.extrasauceagency.com/#organization"
    }
  };

  const structuredData = [organizationSchema, serviceSchema];

  return (
    <>
      <EnhancedSEOHead
        title="Podcast Revenue System - Launch & Monetize Your Podcast"
        description="Launch and monetize a podcast that builds authority and generates revenue. Complete setup, content multiplier system, and strategic distribution included."
        ogTitle="Podcast Revenue System - Launch & Monetize Your Podcast"
        ogDescription="Launch and monetize a podcast that builds authority and generates revenue. Complete setup, content multiplier system, and strategic distribution included."
        canonicalUrl="https://www.extrasauceagency.com/services/podcast-revenue-system"
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
                Podcast Revenue System
              </h1>
              
              <h2 className="text-2xl lg:text-3xl font-semibold text-primary mb-6">
                Launch and monetize a podcast that builds your authority and generates revenue.
              </h2>
              
              <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                Complete podcast setup, content multiplier system, and strategic distribution—all designed to establish authority and drive business growth.
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
                  <div className="text-3xl font-bold text-primary mb-2">1 Episode</div>
                  <div className="text-sm text-muted-foreground">= 20+ Content Pieces</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">90 Days</div>
                  <div className="text-sm text-muted-foreground">To Establish Authority</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Multiple</div>
                  <div className="text-sm text-muted-foreground">Revenue Streams</div>
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
                THE PODCAST REVENUE SYSTEM
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A complete framework to launch, grow, and monetize your podcast while building authority in your industry.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
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

        {/* Content Multiplier Visual Section */}
        <section className="py-16 lg:py-20">
          <div className="container-premium">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                The Content Multiplier Effect
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                One podcast episode becomes weeks of strategic content across all your platforms
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              {/* Flow Diagram */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
                <div className="card-premium p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-4">1</div>
                  <h3 className="font-bold text-foreground mb-2">Record</h3>
                  <p className="text-sm text-muted-foreground">One 45-minute episode</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-3xl text-primary font-bold">›</div>
                </div>
                <div className="card-premium p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-4">2</div>
                  <h3 className="font-bold text-foreground mb-2">Repurpose</h3>
                  <p className="text-sm text-muted-foreground">Convert to blog, clips, threads</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-3xl text-primary font-bold">›</div>
                </div>
                <div className="card-premium p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-4">3</div>
                  <h3 className="font-bold text-foreground mb-2">Distribute</h3>
                  <p className="text-sm text-muted-foreground">Across all platforms</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-3xl text-primary font-bold">›</div>
                </div>
                <div className="card-premium p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-4">4</div>
                  <h3 className="font-bold text-foreground mb-2">Monetize</h3>
                  <p className="text-sm text-muted-foreground">Generate leads & revenue</p>
                </div>
              </div>

              {/* Output Examples */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="card-premium p-6">
                  <h4 className="font-bold text-foreground mb-2">Blog Posts</h4>
                  <p className="text-sm text-muted-foreground">3-5 long-form articles extracted from your episode</p>
                </div>
                <div className="card-premium p-6">
                  <h4 className="font-bold text-foreground mb-2">Social Media</h4>
                  <p className="text-sm text-muted-foreground">20+ clips, quotes, and threads ready to post</p>
                </div>
                <div className="card-premium p-6">
                  <h4 className="font-bold text-foreground mb-2">Email Content</h4>
                  <p className="text-sm text-muted-foreground">Newsletter sequences and lead magnets</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="container-premium">
            <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
              {/* Left Side */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                  <span className="text-primary">BENEFITS:</span><br />
                  <span className="text-foreground">PODCAST REVENUE SYSTEM</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our Podcast Revenue System doesn't just build your presence—it establishes authority and generates qualified leads. Here's how we deliver value:
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
        <section className="py-12 lg:py-16">
          <div className="container-premium">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Investment</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Complete podcast launch and first 12 episodes
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="card-premium p-12 border-2 border-primary">
                <div className="text-center">
                  <p className="text-muted-foreground mb-2">Starting at</p>
                  <p className="text-6xl font-bold text-primary mb-4">$8,000</p>
                  <p className="text-muted-foreground mb-8">Complete podcast launch and first 12 episodes with content multiplier system</p>
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

export default PodcastRevenueSystem;

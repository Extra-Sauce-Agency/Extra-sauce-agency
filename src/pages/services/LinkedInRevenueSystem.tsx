import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import CTASection from "@/components/sections/homepage/CTASection";
import FAQSection from "@/components/sections/homepage/FAQSection";
import EnhancedSEOHead from "@/components/SEO/EnhancedSEOHead";
import { organizationSchema } from "@/data/structured-data";

const LinkedInRevenueSystem = () => {
  const systemSteps = [
    {
      number: "1",
      title: "Voice & Narrative Workshop",
      description: "We extract your unique POV, frameworks, and stories. We map your ICP, competitive landscape, and the narrative you need to own in your category."
    },
    {
      number: "2",
      title: "Monthly Strategy + Extraction",
      description: "One 60-minute call per month. We ask the right questions, you share your expertise. Our ghostwriters turn raw insight into polished thought leadership."
    },
    {
      number: "3",
      title: "Publish, Engage, Grow",
      description: "4 LinkedIn posts per week, optimized for reach and engagement. We handle everything: writing, editing, scheduling, and performance tracking."
    }
  ];

  const problemStatements = [
    {
      title: "You don't have 10 hours a week",
      description: "Between board meetings, product roadmap, and closing deals, content creation falls to the bottom of the list. Every. Single. Week.",
      highlighted: false
    },
    {
      title: "Generic content doesn't convert",
      description: "AI-generated posts and recycled marketing fluff get scrolled past. Your buyers are sophisticated. They can smell inauthenticity from a mile away.",
      highlighted: false
    },
    {
      title: "Your sales team needs air cover",
      description: "Cold outbound is getting more expensive every quarter. Your AEs are spending hours prospecting people who've never heard of you. Thought leadership changes that equation.",
      highlighted: false
    },
    {
      title: "The cost of doing nothing",
      description: "While you're 'too busy to post,' your competitors are becoming the default choice in your category. Every month without thought leadership is a month your pipeline depends entirely on paid ads and cold calls.",
      highlighted: true
    }
  ];

  const benefits = [
    {
      title: "Get back to your core business",
      description: "60 minutes a month. That's all we need from you. We handle the rest. No more staring at a blank LinkedIn post at 11pm wondering what to write."
    },
    {
      title: "A personal brand that compounds",
      description: "Unlike paid ads that stop working when you stop paying, thought leadership compounds. Every post builds on the last. Your authority grows exponentially."
    },
    {
      title: "Build a tribe of the right buyers",
      description: "We don't optimize for vanity metrics. We build an audience of your actual ICP: decision-makers at companies you want to sell to."
    },
    {
      title: "Make your sales team unstoppable",
      description: "When your AEs reach out and the prospect already knows your name from LinkedIn, the conversation starts at a completely different level. Shorter cycles, bigger deals."
    }
  ];

  const results = [
    {
      metric: "3M+",
      label: "LinkedIn Impressions",
      description: "Generated in 45 days for a SaaS CEO who had zero LinkedIn presence before working with us"
    },
    {
      metric: "12",
      label: "Qualified Leads / Month",
      description: "From content alone. No ads. No cold outbound. Just thought leadership that attracted the right buyers."
    },
    {
      metric: "$480K",
      label: "Pipeline Generated",
      description: "In the first quarter. Inbound deals from LinkedIn connections who reached out after engaging with the founder's content."
    }
  ];

  const testimonial = {
    quote: "Extra Sauce transformed my LinkedIn from a ghost town into a lead machine. I went from posting once a month to being recognized as a thought leader in my space. The pipeline impact was immediate.",
    author: "[Client Name], CEO at [SaaS Company]",
    location: "Toronto, Canada"
  };

  const pricingFeatures = [
    "4 long-form LinkedIn posts per week (16/month)",
    "Monthly 60-min strategy & extraction call",
    "Dedicated ghostwriter matched to your voice",
    "Voice & Narrative workshop (onboarding)",
    "Audience growth playbook",
    "Content calendar & editorial strategy",
    "Social selling engagement strategy",
    "Monthly performance report with insights"
  ];

  const faqSection = {
    headline: "Common Questions",
    description: "Everything you need to know about the LinkedIn Revenue System",
    questions: [
      {
        question: "How long until we should expect results from LinkedIn content?",
        answer: "Most clients see measurable traction within 30-45 days. This includes growth in LinkedIn impressions, profile views, and inbound connection requests. Full pipeline impact typically materializes within 60-90 days as your thought leadership compounds."
      },
      {
        question: "What is the difference between founder-led marketing and personal branding?",
        answer: "Personal branding is about building a public image. Founder-led marketing is about building pipeline. We focus on creating content that positions you as the obvious expert in your category, drives inbound demand, and directly supports your sales team with thought leadership that converts."
      },
      {
        question: "Why should we work with Extra Sauce for LinkedIn content?",
        answer: "We specialize exclusively in B2B SaaS. Our ghostwriters have deep knowledge of demand generation, go-to-market strategy, and the SaaS buying journey. We don't write generic content. We build narrative systems that drive qualified pipeline for your sales team."
      },
      {
        question: "Can LinkedIn content be tailored to my industry?",
        answer: "Absolutely. Every engagement starts with a deep-dive into your industry, ICP, competitive landscape, and unique point of view. Your ghostwriter conducts monthly strategy sessions to extract your expertise and translate it into content that resonates with your specific buyers."
      },
      {
        question: "How do you capture my voice and expertise in ghostwritten content?",
        answer: "We start with a Voice & Narrative workshop where we map your communication style, hot takes, frameworks, and stories. Your dedicated ghostwriter then creates a voice guide that ensures every piece sounds authentically you. Monthly calibration calls keep the voice sharp."
      },
      {
        question: "What is the onboarding process?",
        answer: "Week 1: Voice & Narrative workshop + ICP deep-dive. Week 2: Content strategy + editorial calendar. Week 3: First drafts for review. Week 4: Content goes live. The entire onboarding takes 2-3 weeks before your first posts are published."
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
        
        {/* Hero Section - Dark Background */}
        <section className="min-h-[70vh] flex items-center justify-center relative overflow-visible bg-slate-900 pt-28 md:pt-36">
          <div className="container-premium text-left relative z-10">
            <div className="max-w-3xl animate-scale-in">
              <p className="text-primary text-sm font-bold tracking-widest mb-4 uppercase">
                LinkedIn Revenue System
              </p>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-8 text-white">
                LinkedIn Revenue System for SaaS Founders & B2B Leaders
              </h1>
              
              <p className="text-lg lg:text-xl text-slate-300 mb-12 max-w-2xl leading-relaxed">
                You have the expertise. You don't have the time to write. We turn your ideas into thought leadership that builds authority and fills your pipeline.
              </p>

              {/* Pricing Info */}
              <div className="bg-slate-800 inline-block px-4 py-2 rounded-lg mb-8">
                <p className="text-slate-300 text-sm">
                  Starting at <span className="text-white font-bold">$5,000/mo</span> • Results in <span className="text-white font-bold">30-45 days</span>
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
                <Link to="/book-strategy-call">
                  <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-semibold">
                    Book a Strategy Call
                  </Button>
                </Link>
                <button className="border-2 border-slate-400 text-white px-8 py-5 rounded-lg hover:bg-slate-800 transition-colors font-semibold">
                  See How It Works
                </button>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-8 max-w-2xl">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">3M+</div>
                  <div className="text-sm text-slate-400">LinkedIn impressions generated</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">45</div>
                  <div className="text-sm text-slate-400">Days to full pipeline</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">20+</div>
                  <div className="text-sm text-slate-400">SaaS founders trust us</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container-premium">
            <div className="mb-16">
              <p className="text-primary text-sm font-bold tracking-widest mb-4 uppercase">
                The Problem
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Your competitors are building audiences.<br />You're stuck in back-to-back meetings.
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
                Every SaaS founder knows they should be posting on LinkedIn. Building thought leadership. Creating content that makes buyers come to them instead of chasing cold leads. But here's the reality:
              </p>
            </div>

            {/* Problem Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
              {problemStatements.map((problem, index) => (
                <div
                  key={index}
                  className={`p-8 rounded-xl ${
                    problem.highlighted
                      ? "bg-slate-900 text-white"
                      : "bg-slate-50 border border-slate-200"
                  }`}
                >
                  <h3 className={`text-xl font-bold mb-4 ${
                    problem.highlighted ? "text-white" : "text-slate-900"
                  }`}>
                    {problem.title}
                  </h3>
                  <p className={problem.highlighted ? "text-slate-300" : "text-slate-600"}>
                    {problem.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container-premium">
            <div className="mb-16">
              <p className="text-primary text-sm font-bold tracking-widest mb-4 uppercase">
                How It Works
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                The system that turns 60 minutes of your time into a month of thought leadership
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
                We don't just write posts. We build a content engine around your expertise, your voice, and your strategic narrative.
              </p>
            </div>

            {/* Steps - Single Row */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
              {systemSteps.map((step, index) => (
                <div key={index} className="text-center">
                  {/* Numbered Circle */}
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">
                    {step.number}
                  </div>
                  
                  {/* Arrow */}
                  {index < systemSteps.length - 1 && (
                    <div className="hidden md:block absolute right-0 top-1/3 transform translate-x-1/2 text-primary text-3xl">
                      →
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-20 bg-slate-50">
          <div className="container-premium">
            <div className="mb-16">
              <p className="text-primary text-sm font-bold tracking-widest mb-4 uppercase">
                Benefits
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                What LinkedIn revenue system actually does for your business
              </h2>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-xl border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container-premium">
            <div className="mb-16">
              <p className="text-primary text-sm font-bold tracking-widest mb-4 uppercase">
                Results
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                What happens when founders stop ghosting LinkedIn
              </h2>
            </div>

            {/* Metrics */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mb-12">
              {results.map((result, index) => (
                <div key={index} className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                  <p className="text-4xl font-bold text-primary mb-2">{result.metric}</p>
                  <p className="text-lg font-bold text-slate-900 mb-4">{result.label}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{result.description}</p>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="bg-slate-900 text-white p-12 rounded-xl max-w-5xl">
              <p className="text-lg italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <p className="font-bold mb-1">{testimonial.author}</p>
              <p className="text-slate-400">{testimonial.location}</p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 lg:py-20 bg-slate-50">
          <div className="container-premium">
            <div className="text-center mb-16">
              <p className="text-primary text-sm font-bold tracking-widest mb-4 uppercase">
                Pricing
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                LinkedIn Revenue System
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Transparent pricing. No hidden fees. No long-term contracts. Cancel anytime.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-white border-2 border-slate-900 rounded-2xl p-12">
                <div className="text-center mb-8">
                  <p className="text-6xl font-bold text-slate-900 mb-2">$5,000</p>
                  <p className="text-slate-600">/month</p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {pricingFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-slate-700">{feature}</p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link to="/book-strategy-call" className="block mb-4">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-base font-semibold">
                    Book a Strategy Call →
                  </Button>
                </Link>

                <p className="text-center text-sm text-slate-600">
                  Typical results: 30-45 days to first measurable traction
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-slate-900 text-white text-center">
          <div className="container-premium max-w-3xl mx-auto">
            <p className="text-primary text-sm font-bold tracking-widest mb-4 uppercase">
              Ready to start?
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Stop being the best-kept secret in your category
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Book a 30-minute strategy call. We'll review your LinkedIn, identify your content-market fit, and show you exactly how LinkedIn Revenue System can fill your pipeline.
            </p>
            <Link to="/book-strategy-call">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-semibold">
                Book a Strategy Call →
              </Button>
            </Link>
            <p className="text-slate-400 text-sm mt-6">
              No commitment. No pitch deck. Just a real conversation about your growth.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection 
          headline={faqSection.headline}
          description={faqSection.description}
          questions={faqSection.questions}
        />

        <Footer />
      </div>
    </>
  );
};

export default LinkedInRevenueSystem;

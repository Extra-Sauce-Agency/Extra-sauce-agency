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
      title: "Content Market Fit",
      description: "The first few weeks we will do content sprint tests to see what hooks, formats, and messaging resonates with your audience best."
    },
    {
      number: "2",
      title: "Content & Sales Alignment",
      description: "The content is strategically paired with outbound to drive a qualified audience to your executive team that are in-market ready to buy."
    },
    {
      number: "3",
      title: "Technical & Personal",
      description: "We extract your unique POVs, methodologies, industry bets, and key language through our onboarding, voice workshop, and proprietary technology."
    }
  ];

  const problemStatements = [
    {
      title: "You don't have 10 hours a week",
      description: "You're stuck in back-to-back meetings and then don't have time every week to put out high-quality content that reflects your executive brand. All we need is two content calls/mo (60 min each).",
      highlighted: false
    },
    {
      title: "Commodity Content Ruins Brand",
      description: "There is AI slop and generic content everywhere online now. Your buyers are sophisticated and prefer insightful narrative-driven content.",
      highlighted: false
    },
    {
      title: "You aren't generating conversations on LinkedIn",
      description: "We average a 20-30% reply rate on LinkedIn when the industry standard is 5%",
      highlighted: false
    },
    {
      title: "The cost of inaction",
      description: "While you're 'too busy to post,' your competitors are becoming the go-to option in your category. With us, you'll be bringing in raving fans AND qualified pipeline.",
      highlighted: true
    }
  ];

  const benefits = [
    {
      title: "Content that sounds like you",
      description: "2-4 content calls a month is all we need from you to create high-quality posts like you spent days writing them. We staff B2B technical copywriters and build AI agents to ensure quality and high-leverage content activities."
    },
    {
      title: "A personal brand that compounds",
      description: "Unlike paid ads that stop working when you stop paying, thought leadership compounds. Every post builds on the last. Your authority grows exponentially."
    },
    {
      title: "Build the right tribe of buyers instead of low-quality leads",
      description: "We grow a realm of influence around executives and shorter sale cycles with their exact targeted account list and have raving fans showing up on demo calls that already know your name from LinkedIn."
    },
    {
      title: "Stop staring at a blank LinkedIn post every day",
      description: "Your time is best leveraged on your core business activities. There is too much noise on these platforms for you to get by with mediocre effort. Use a battle-tested framework."
    }
  ];

  const results = [
    {
      metric: "1.5M+",
      label: "LinkedIn Impressions",
      description: "Generated in 90 days for a CEO of a professional service firm who had only 50 connections on LinkedIn when starting to work with us."
    },
    {
      metric: "12-16",
      label: "Sales opportunities / mo",
      description: "These are quality buyers engaged in the DMs. No random lead magnet sign-up. A real person ready to jump on a call to discuss."
    },
    {
      metric: "1M+",
      label: "Pipeline Generated",
      description: "We have helped clients land high-quality inbound and outbound opportunities. This includes from buyers and early-stage investors."
    }
  ];

  const testimonial = {
    quote: "Manny's expertise and dedication have been instrumental in packaging our service offerings with clarity, crafting a compelling strategic narrative, and generating insightful content on LinkedIn that drives leads.",
    author: "Sharlene Gumbs",
    title: "CEO at True Ally",
    photo: "/sharlenegumbs.png"
  };

  const pricingFeatures = [
    "Content Management",
    "Sales Development Representative On Account",
    "Creative & Narrative Development",
    "Executive Brand Development",
    "LinkedIn Engagement & Social Selling",
    "Account-based Marketing",
    "Performance Reporting"
  ];

  const faqSection = {
    headline: "Frequently Asked Questions",
    description: "",
    questions: [
      {
        question: "We've tried LinkedIn content before and got zero pipeline. Why would this be different?",
        answer: "What you tried might not have been a revenue system. It was a content delivery service. And those are two completely different things.\n\nMost LinkedIn agencies & most ghostwriters do the same thing: they interview you, write posts, schedule them, and send you an impressions report at the end of the month.\n\nThe difference is we create a fix of content formats to avoid content fatigue and pair it with strategic outbound.\n\nContent without outbound is a billboard nobody drives past.\nOutbound without content is cold calling with a stranger's number."
      },
      {
        question: "Is the cost worth it? How do I know I'll see ROI?",
        answer: "Our clients with an average deal size of $20K–$50K typically recoup the investment within 3 months. One closed deal covers six months of the retainer. Two deals and you're profitable on the channel for the year (and it keeps compounding after that, because thought leadership doesn't stop working when you stop paying, the way paid ads do).\n\nHere's what that looks like in practice: PSII added $428K ARR within 8 months. A client in the automotive AI space closed $600K ARR within 4 months. Ice X booked 12 qualified meetings within 45 days of starting."
      },
      {
        question: "How do you make sure the content actually sounds like me?",
        answer: "Most ghostwritten content is detectable in the first sentence. It's safe, surface-level, and clearly written by someone who read your website for 20 minutes.\n\nWe understand you’ve spent years building your trust. This is why our proprietary system clones your technical expertise, POV, and tone of voice to write posts like you’ve spent 2 hours doing it yourself.\n\nFrom there, we run a content-market-fit sprint; testing different hooks, angles, and formats against your actual target account list. We find out what your specific buyers respond to before we commit to a full content calendar. No guessing."
      },
      {
        question: "When can I realistically expect to see qualified pipeline from this?",
        answer: "Most clients start seeing leading indicators within 45–60 days, and qualified pipeline within 70–90 days."
      },
      {
        question: "How much do you need me involved every month?",
        answer: "2 to 4 content calls per month. 60 minutes each. These calls are to extract stories, insights, and company updates so the content is tailored uniquely to you."
      },
      {
        question: "Will this work on an audience that is niche and sophisticated?",
        answer: "Mass reach is not our goal. We're not trying to get you viral. We're trying to get you known by the 200–500 decision-makers at the companies you actually want to close.\n\nWhen your buyers are sophisticated, generic content makes you look like a commodity solution.\n\nThey are smart enough to find the best 1-2 options themselves. This discovery happens through content and LinkedIn outreach."
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
                Get LinkedIn content that builds a realm of influence and outbound that books meetings in DMs.
              </h1>
              
              <p className="text-lg lg:text-xl text-slate-300 mb-12 max-w-2xl leading-relaxed">
                LinkedIn outreach stalls when nobody recognizes the sender. We build your executive's presence with ghostwritten content, then message high-intent buyers who engage with it without automation tools. 
              </p>

              {/* Tagline */}
              <div className="bg-slate-800 inline-block px-4 py-2 rounded-lg mb-8">
                <p className="text-slate-300 text-sm">
                  Within 45 days, <span className="text-white font-bold">Ice X generated 12 meetings booked</span>
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-16">
                <Link to="/book-strategy-call">
                  <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-semibold">
                    Apply Now
                  </Button>
                </Link>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-8 max-w-2xl pb-12">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">90</div>
                  <div className="text-sm text-slate-400">Days to full pipeline</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-slate-400">SAAS Founders We Wrote For</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">20-30%</div>
                  <div className="text-sm text-slate-400">LinkedIn Reply Rate</div>
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
                77% of B2B buyers purchase from a company<br />whose execs have an active social media presence
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
                It's more than just creating 3 posts / week on LinkedIn to drive qualified pipeline.
              </p>
            </div>

            {/* Problem Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
                How The Sauce Recipe™ Works
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                The content revenue system that works for busy executives
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
                We have monthly content calls with your CEO or c-suite member to extract their unique thought leadership and we pair this with strategic outbound to high-intent individuals that are ready to buy.
              </p>
            </div>

            {/* Steps - Single Row */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                What executive ghostwriting actually does for your business
              </h2>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
                What happens when C-suite takes LinkedIn serious
              </h2>
            </div>

            {/* Metrics */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              {results.map((result, index) => (
                <div key={index} className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                  <p className="text-4xl font-bold text-primary mb-2">{result.metric}</p>
                  <p className="text-lg font-bold text-slate-900 mb-4">{result.label}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{result.description}</p>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="bg-accent border-l-4 border-primary p-8 rounded-lg max-w-5xl mx-auto">
              <p className="text-lg italic mb-8 leading-relaxed text-white">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.photo} 
                  alt={testimonial.author} 
                  className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-accent-foreground/80">{testimonial.title}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 lg:py-20 bg-slate-50">
          <div className="container-premium">
            <div className="text-center mb-16">
              <p className="text-primary text-sm font-bold tracking-widest mb-4 uppercase">
                What's Included
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                LinkedIn Revenue System
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Turn your executive’s LinkedIn into your best-performing demand channel without taking more than 4 hours a month from their schedule.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-white border-2 border-slate-900 rounded-2xl p-10 lg:p-12">
                <div className="space-y-4 mb-8 text-left">
                  {pricingFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <p className="text-slate-700">{feature}</p>
                    </div>
                  ))}
                </div>

                <p className="text-center text-base text-slate-700 font-medium mb-8">
                  You work with a demand gen manager, senior copywriter, SDR, and senior designer dedicated to your account.
                </p>

                <Link to="/book-strategy-call" className="block mb-4">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-base font-semibold">
                    Apply Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-slate-900 text-white text-center">
          <div className="container-premium max-w-3xl mx-auto">
            <p className="text-primary text-sm font-bold tracking-widest mb-4 uppercase">
              Ready to build pipeline with content?
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              One step closer to reaching the next growth stage
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Apply below to work with our team. If you're accepted for a strategy call, our team will present findings from our preliminary audit, identify the biggest content opportunities, and show you the best path to pipeline with content.
            </p>
            <Link to="/book-strategy-call">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-semibold">
                Apply Now
              </Button>
            </Link>
            <p className="text-slate-400 text-sm mt-6">
              Just an honest conversation about your content efforts.
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

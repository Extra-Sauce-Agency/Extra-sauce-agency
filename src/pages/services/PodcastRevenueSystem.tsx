import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import CTASection from "@/components/sections/homepage/CTASection";
import FAQSection from "@/components/sections/homepage/FAQSection";
import EnhancedSEOHead from "@/components/SEO/EnhancedSEOHead";
import { organizationSchema } from "@/data/structured-data";

const PodcastRevenueSystem = () => {
  const systemSteps = [
    {
      number: "1",
      title: "Targeted Buyer Lists",
      description: "The goal is not to get mass views but instead qualified buyers infront of your content. This is why we map out key account lists and focus all of our efforts getting attention from them."
    },
    {
      number: "2",
      title: "Demand Creation & Demand capture",
      description: "Most teams don't do both and that's where they lose sale opportunities. Our video production keeps you top of mind on the feeds and then be able to capture that demand in-market through curated newsletters."
    },
    {
      number: "3",
      title: "Binge-worthy & Insightful",
      description: "The moment content feels like a sales pitch, buyers tune out and quietly leave you off their shortlist. Content they look forward to does the opposite. Make it interesting, make it useful to their career, and they'll come back daily without being chased."
    }
  ];

  const problemStatements = [
    {
      title: "We don't have time to create content",
      description: "Our system caters busy executives. We extract high-signal insights in ~4 hours/mo and turn them into weeks of binge-worthy content across every key channel.",
      highlighted: false
    },
    {
      title: "Our product is too technical/niche",
      description: "We don't rely on mass reach because we drive the buyers from your target list to your content, then position your c-suite as the trusted voice in your category.",
      highlighted: false
    },
    {
      title: "Our audience doesn't buy from social media",
      description: "80% of B2B executives vet your content before they ever buy from you. Meanwhile, your competitors are building content catalogues. Every month, they're showing up in your buyers' feeds and inboxes to stay top of mind.",
      highlighted: true
    },
    {
      title: "The cost of inaction",
      description: "What demand are you capturing? Your competitors are building content catalogues and capturing in-market demand. Every month they're showing up in your buyers' feeds and inboxes.",
      highlighted: false
    }
  ];

  const benefits = [
    {
      title: "Account-based marketing through content",
      description: "We build value-based relationships with tier 1/2 target account lists via episode invites, co-marketing collaborations, and warm introductions."
    },
    {
      title: "A video presence everywhere with little involvement",
      description: "You will become discoverable across all platforms and unquestionable wherever a decision maker looks."
    },
    {
      title: "Become recognized as a category leader",
      description: "As you showcase your unique POV and create content with other industry leaders, your personal and company brand gain authority because now you're leading the conversation."
    },
    {
      title: "Sales team wastes less time on low-quality leads",
      description: "We grow a realm of influence around executives and shorter sale cycles with their exact targeted account list and have raving fans showing up on demo calls that already know your name from LinkedIn."
    }
  ];

  const results = [
    {
      metric: "13M+",
      label: "Video Views",
      description: "Across YouTube, LinkedIn, and Meta in 4 months"
    },
    {
      metric: "423K",
      label: "Additional Annual Revenue",
      description: "Closed within 6 months from inbound driven by our content system."
    },
    {
      metric: "42%",
      label: "Additional Monthly Demos",
      description: "From 0 → 12-16 qualified inbound inquiries/month within 4 months."
    }
  ];

  const testimonial = {
    quote: "The new brand and content helped influence our audience. We had old prospects booking demos with us thinking we're a different company. The content engine paid for itself rather than burning our money in Google Ads again.",
    author: "Vik Saini",
    title: "Head Of Sales, Payroll Solutions International Inc.",
    photo: "/viksoni.png"
  };

  const pricingFeatures = [
    "Podcast Management",
    "Newsletter growth management",
    "High-Value Guest Sourcing",
    "Creative & Narrative Development",
    "Content Flywheel Distribution",
    "ABM & pipeline funnel guidance",
    "Performance Measurement"
  ];

  const faqSection = {
    headline: "Common Questions",
    description: "Everything you need to know about the Podcast Revenue System",
    questions: [
      {
        question: "We already have a podcast and it's not generating leads. What would you do differently?",
        answer: "First, we'd stop chasing downloads and start targeting decision-makers. We map your exact target account list before we record episode one. Every piece of content that comes out of the studio (the full episode, the short-form clips, the newsletter posts) gets distributed specifically to the companies you want to close. Second, we'd connect the podcast to your outbound motion; ABM nurturing, sales-ready assets, and establishing credibility through peers. Third, we'd build the demand capture layer you're missing. A podcast keeps you top of mind. A newsletter converts the audience when they're ready to buy."
      },
      {
        question: "Is $9,500/month worth it? How does this pay for itself?",
        answer: "A demand gen manager, a senior video editor, a copywriter, a content strategist, an outreach coordinator, and a show producer (the team required to run a content flywheel at this level) runs $25,000–$42,000 per month in payroll alone. Before tools, before ramp-up time, before the six months it takes a new hire to understand your voice, your category, and your buyers. And when someone leaves, you start over. If your average deal size is $30,000–$100,000, a single closed opportunity more than covers a month of the retainer. Two deals in a quarter and the channel is profitable. Our deals in the $200–$500k range typically see the investment pay for itself within 6 months."
      },
      {
        question: "Our audience is small and niche. Can a podcast realistically generate pipeline for us?",
        answer: "Here's the reality of your market: there are probably 200–1,000 companies that could realistically buy from you. Within those companies, there are 3–5 decision-makers per company. Your total addressable audience for pipeline purposes is somewhere between 600–5,000 people. That's not a podcast reach problem. That's a targeting opportunity. We don't publish and pray. We build your target account list before the first episode drops, and we drive every asset (clips, full episodes, newsletter, LinkedIn posts) directly to the decision-makers on that list."
      },
      {
        question: "What does the newsletter have to do with the podcast?",
        answer: "The podcast is your demand creation engine. It keeps your brand in your buyers' feeds, builds familiarity with your executive's point of view, and earns trust with the 95% of your market that isn't ready to buy right now.\n\nThe newsletter is your demand capture engine. It's how you own the audience the podcast builds, reach buyers directly in their inbox, and convert the people who are ready to buy now.\n\nMost B2B podcasts create demand and then leave it on the table. Together, they cover the full buying journey."
      },
      {
        question: "How much time does this actually take from our executive team?",
        answer: "Four hours per month. 60-minute recording sessions each. Everything else is ours.\n\nSelf-managing a podcast typically requires a monthly internal commitment of at least 30 hours."
      },
      {
        question: "How is this different from hiring a podcast production agency?",
        answer: "A podcast production agency delivers files. We build a revenue system that happens to use a podcast as its anchor. We don't stop at production.\n\nProduction agencies are accountable to content output. We're accountable to business outcomes. Those are different businesses."
      }
    ]
  };

  const serviceSchema = {
    "@type": "Service",
    "name": "Podcast Revenue System",
    "description": "Turn your podcast into a predictable revenue engine with our strategic content distribution and demand capture system.",
    "url": "https://www.extrasauceagency.com/services/podcast-revenue-system",
    "provider": {
      "@id": "https://www.extrasauceagency.com/#organization"
    }
  };

  const structuredData = [organizationSchema, serviceSchema];

  return (
    <>
      <EnhancedSEOHead
        title="Podcast Revenue System - Turn Your Podcast Into Pipeline"
        description="Transform your podcast into a predictable revenue engine. Strategic content distribution, guest sourcing, and demand capture for B2B executives."
        ogTitle="Podcast Revenue System - Turn Your Podcast Into Pipeline"
        ogDescription="Transform your podcast into a predictable revenue engine. Strategic content distribution, guest sourcing, and demand capture for B2B executives."
        canonicalUrl="https://www.extrasauceagency.com/services/podcast-revenue-system"
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
                Podcast Revenue System
              </p>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-8 text-white">
                Video content flywheels that turn executive insight into pipeline
              </h1>
              
              <p className="text-lg lg:text-xl text-slate-300 mb-12 max-w-2xl leading-relaxed">
                There's a proven system modern B2B teams use to turn their podcast + newsletter system into a consistent stream of qualified buyers. We build and run that system for you.
              </p>

              {/* Tagline */}
              <div className="bg-slate-800 inline-block px-4 py-2 rounded-lg mb-8">
                <p className="text-slate-300 text-sm">
                  <span className="text-white font-bold">Control D generates qualified pipeline in under 60 days of launch</span>
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
                  <div className="text-3xl font-bold text-primary mb-2">100M+</div>
                  <div className="text-sm text-slate-400">Video views generated</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">4hrs</div>
                  <div className="text-sm text-slate-400">Your time per month</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">16-20</div>
                  <div className="text-sm text-slate-400">Content assets per month</div>
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
                Your buyers are watching. You're just not showing up.
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
                93% of B2B buyers say video plays an important role to earn attention and trust. Newsletters are how you own that audience and convert them when they are ready to buy.
              </p>
            </div>

            {/* Problem Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {problemStatements.map((problem, index) => {
                const isLastItem = index === problemStatements.length - 1;
                const isDarkBox = isLastItem;
                return (
                <div
                  key={index}
                  className={`p-8 rounded-xl ${
                    isDarkBox
                      ? "bg-slate-900 text-white"
                      : "bg-slate-50 border border-slate-200"
                  }`}
                >
                  <h3 className={`text-xl font-bold mb-4 ${
                    isDarkBox ? "text-white" : "text-slate-900"
                  }`}>
                    {problem.title}
                  </h3>
                  <p className={isDarkBox ? "text-slate-300" : "text-slate-600"}>
                    {problem.description}
                  </p>
                </div>
              );
              })}
            </div>
          </div>
        </section>

        {/* The Content Flywheel Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Header */}
            <div className="mb-16">
              <p className="text-primary text-sm font-bold tracking-widest mb-4 uppercase">
                Content Flywheel
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                A repeatable engine, not a one-off.
              </h2>
            </div>

            {/* 4-Stage Flow */}
            <div className="mb-20">
              {/* Desktop: Single Row */}
              <div className="hidden lg:flex items-center gap-4 mb-8">
                {/* Stage 01 - RECORD */}
                <div className="flex-1 bg-accent text-white p-6 rounded-2xl">
                  <p className="text-primary text-xs font-bold tracking-widest mb-2 uppercase">01 · Record</p>
                  <h3 className="text-lg font-bold mb-1">1 × 60-min session</h3>
                  <p className="text-slate-300 text-sm">The only step that needs you.</p>
                </div>
                <div className="text-primary text-2xl font-bold flex-shrink-0">→</div>

                {/* Stage 02 - EXTRACT */}
                <div className="flex-1 bg-slate-50 border border-slate-200 p-6 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <p className="text-primary text-xs font-bold tracking-widest mb-2 uppercase">02 · Extract</p>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Clips, newsletter, sales enablement</h3>
                  <p className="text-slate-600 text-sm">Strategic moments pulled for various goals.</p>
                </div>
                <div className="text-primary text-2xl font-bold flex-shrink-0">→</div>

                {/* Stage 03 - DISTRIBUTE */}
                <div className="flex-1 bg-slate-50 border border-slate-200 p-6 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <p className="text-primary text-xs font-bold tracking-widest mb-2 uppercase">03 · Distribute</p>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">LinkedIn, YouTube, newsletter</h3>
                  <p className="text-slate-600 text-sm">Clear narrative, top of mind.</p>
                </div>
                <div className="text-primary text-2xl font-bold flex-shrink-0">→</div>

                {/* Stage 04 - ENGAGE */}
                <div className="flex-1 bg-slate-50 border border-slate-200 p-6 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <p className="text-primary text-xs font-bold tracking-widest mb-2 uppercase">04 · Engage</p>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Social selling & content-led outbound</h3>
                  <p className="text-slate-600 text-sm">Turn attention into conversations.</p>
                </div>
              </div>

              {/* Tablet/Mobile: 2x2 Grid */}
              <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Stage 01 - RECORD */}
                <div className="bg-accent text-white p-8 rounded-2xl">
                  <p className="text-primary text-xs font-bold tracking-widest mb-3 uppercase">01 · Record</p>
                  <h3 className="text-2xl font-bold mb-2">1 × 60-min session</h3>
                  <p className="text-slate-300 text-sm">The only step that needs you.</p>
                </div>

                {/* Stage 02 - EXTRACT */}
                <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <p className="text-primary text-xs font-bold tracking-widest mb-3 uppercase">02 · Extract</p>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Clips, newsletter, sales enablement</h3>
                  <p className="text-slate-600 text-sm">Strategic moments pulled for various goals.</p>
                </div>

                {/* Stage 03 - DISTRIBUTE */}
                <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <p className="text-primary text-xs font-bold tracking-widest mb-3 uppercase">03 · Distribute</p>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">LinkedIn, YouTube, newsletter</h3>
                  <p className="text-slate-600 text-sm">Clear narrative, top of mind.</p>
                </div>

                {/* Stage 04 - ENGAGE */}
                <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <p className="text-primary text-xs font-bold tracking-widest mb-3 uppercase">04 · Engage</p>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Social selling & content-led outbound</h3>
                  <p className="text-slate-600 text-sm">Turn attention into conversations.</p>
                </div>
              </div>
            </div>

            {/* Output Section */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <p className="text-slate-600 text-xs font-bold tracking-widest uppercase">Output / Month</p>
                <div className="flex-1 h-px bg-slate-200"></div>
              </div>

              {/* Output Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {/* 4-8 Short-form videos */}
                <div className="border border-slate-200 p-6 rounded-xl hover:shadow-lg hover:border-primary hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-primary font-bold text-3xl min-w-fit">4–8</div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Short-form videos</h4>
                      <p className="text-slate-600 text-sm">LinkedIn · Instagram · TikTok · YouTube Shorts</p>
                    </div>
                  </div>
                </div>

                {/* 1 Flagship episode */}
                <div className="border border-slate-200 p-6 rounded-xl hover:shadow-lg hover:border-primary hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-primary font-bold text-3xl min-w-fit">1</div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Flagship episode</h4>
                      <p className="text-slate-600 text-sm">YouTube / podcast · incl. cinematic trailer</p>
                    </div>
                  </div>
                </div>

                {/* 2-4 Narrative LinkedIn posts */}
                <div className="border border-slate-200 p-6 rounded-xl hover:shadow-lg hover:border-primary hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-primary font-bold text-3xl min-w-fit">2–4</div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Narrative LinkedIn posts</h4>
                      <p className="text-slate-600 text-sm">For your executive team</p>
                    </div>
                  </div>
                </div>

                {/* 1 Newsletter / LinkedIn article */}
                <div className="border border-slate-200 p-6 rounded-xl hover:shadow-lg hover:border-primary hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-primary font-bold text-3xl min-w-fit">1</div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Newsletter / LinkedIn article</h4>
                      <p className="text-slate-600 text-sm">Built from key insights</p>
                    </div>
                  </div>
                </div>

                {/* 2 Supporting segments */}
                <div className="border border-slate-200 p-6 rounded-xl hover:shadow-lg hover:border-primary hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-primary font-bold text-3xl min-w-fit">2</div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Supporting segments</h4>
                      <p className="text-slate-600 text-sm">YouTube · LinkedIn · Instagram · TikTok</p>
                    </div>
                  </div>
                </div>

                {/* ∞ Always-on engagement */}
                <div className="border border-slate-200 p-6 rounded-xl hover:shadow-lg hover:border-primary hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-primary font-bold text-3xl min-w-fit flex items-center justify-center h-12">∞</div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Always-on engagement</h4>
                      <p className="text-slate-600 text-sm">Social selling · ABM outreach · strategic commenting</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Total Output */}
              <div className="flex justify-end">
                <div className="flex items-center gap-3">
                  <span className="text-slate-600 text-sm font-medium">Total output</span>
                  <div className="bg-accent text-white px-6 py-3 rounded-full font-bold">
                    <span className="text-primary">15+</span> <span className="text-white">pieces every month</span>
                  </div>
                </div>
              </div>
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
                The reasoning behind content revenue systems
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
                What executive video content does for your business
              </h2>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-xl border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 leading-snug">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
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
                What our content revenue systems produce for clients
              </h2>
            </div>

            {/* Metrics Grid */}
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
                {testimonial.photo && (
                  <img 
                    src={testimonial.photo} 
                    alt={testimonial.author}
                    className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                  />
                )}
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
                Pricing
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Podcast Revenue System
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Build a binge-worthy content show & newsletter that becomes your company's primary demand engine that your buyers actively look forward to every week.
              </p>
            </div>

            {/* Pricing Card */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-white border-2 border-slate-900 rounded-2xl p-12">
                <div className="text-center mb-8">
                  <p className="text-6xl font-bold text-slate-900 mb-2">$9,500</p>
                  <p className="text-slate-600">/month</p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-12">
                  {pricingFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link to="/book-strategy-call" className="block">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-base font-semibold">
                    Apply Now
                  </Button>
                </Link>

                {/* Timeline */}
                <p className="text-center text-slate-600 text-sm mt-8">
                  Typical results: Client data shows 3-4 months to see traction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container-premium">
            <div className="mb-16">
              <p className="text-primary text-sm font-bold tracking-widest mb-4 uppercase">
                {faqSection.headline}
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                {faqSection.description}
              </h2>
            </div>

            {/* FAQ Items */}
            <div className="max-w-3xl mx-auto space-y-6">
              {faqSection.questions.map((item, index) => (
                <details key={index} className="group border border-slate-200 rounded-lg p-6 cursor-pointer hover:border-primary transition-colors">
                  <summary className="flex items-center justify-between font-bold text-slate-900 text-lg">
                    {item.question}
                    <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-slate-600 mt-4 leading-relaxed">
                    {item.answer}
                  </p>
                </details>
              ))}
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
              No pitch. Just an honest conversation about your content efforts.
            </p>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default PodcastRevenueSystem;

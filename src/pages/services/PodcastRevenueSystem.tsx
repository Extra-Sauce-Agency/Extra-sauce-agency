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
      description: "The goal is not to get mass views but instead qualified buyers in front of your content. That is why we map out key account lists and focus all our efforts on getting their attention."
    },
    {
      number: "2",
      title: "Demand Creation & Demand Capture",
      description: "Most teams don't do both and that's where they lose sales opportunities. Our video production keeps you top of mind in feeds, and we capture that in-market demand through curated outbound."
    },
    {
      number: "3",
      title: "Binge-worthy & Insightful",
      description: "Content that feels like it's trying to sell never works, it gets buyers to quietly leave you out of their consideration set. Instead, having content they love to tune into daily that they find interesting and help them along their career is GOLD they will keep tuning into."
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
      title: "A trusted presence everywhere",
      description: "You will become discoverable across all platforms and unquestionable wherever a decision maker looks."
    },
    {
      title: "Become recognized as a category leader",
      description: "As you showcase your unique POV and create content with other industry leaders, your personal and company brand gain authority because now you're leading the conversation."
    },
    {
      title: "Sales team wastes less time on low-quality leads",
      description: "We grow a realm of influence around executives and results in shorter sales cycles with their exact targeted account list and have raving fans showing up on demo calls that already know your name from social media."
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
    "Brand Show Management (podcast, webinar, YouTube series)",
    "Guest Sourcing",
    "Creative & Narrative Development",
    "Content Flywheel distribution",
    "Community engagement",
    "Account-Based Marketing",
    "Performance Measurement"
  ];

  const faqSection = {
    headline: "Common Questions",
    description: "Everything you need to know about the Video Revenue System",
    questions: [
      {
        question: "We already have a podcast and it's not generating leads. What would you do differently?",
        answer: "First, we'd stop chasing downloads and start targeting decision-makers. We map your exact target account list before we record episode one. Every piece of content that comes out of the studio (the full episode, the short-form clips, the newsletter, the LinkedIn posts) gets distributed specifically to the companies you want to close.\n\nSecond, we'd connect the podcast to your outbound motion; ABM nurturing, sales-ready assets, and establishing credibility through peers.\n\nThird, we'd build the demand capture layer you're missing. A podcast keeps you top of mind. A newsletter converts the audience when they're ready to buy."
      },
      {
        question: "Is the cost worth it? How does this pay for itself?",
        answer: "A demand gen manager, senior video editor, copywriter, content strategist, outreach coordinator, and a show producer runs $25,000–$42,000 per month in payroll alone. Before tools, before ramp-up time, before the testing phase. We are a fraction of the cost."
      },
      {
        question: "Our audience is small and niche. Can a podcast or webinar realistically generate pipeline for us?",
        answer: "Here's the reality of your market: there are probably 200–1,000 companies that could realistically buy from you. Within those companies, there are 1–3 decision-makers who matter. Your total addressable audience for pipeline purposes is somewhere between 200 and 3,000 people. Our system specializes in driving their eyeballs to your content.\n\nWe don't publish and pray. We build your target account list before the first episode drops, and we drive every asset (clips, full episodes, newsletter, LinkedIn posts) directly to the decision-makers on that list."
      },
      {
        question: "How much time does this actually take from our executive team?",
        answer: "Four hours per month max. 60-minute recording sessions. Everything else is on us.\n\nSelf-managing a podcast, webinar, or YouTube series typically requires a monthly internal commitment of at least 180 team hours."
      },
      {
        question: "How is this different from hiring a YouTube production agency?",
        answer: "A YouTube production agency delivers good videos. Our team has YouTube experts as well as go-to-market alignment to make sure the content has a revenue system attached to it. We don't stop at production.\n\nProduction agencies are accountable to content output. We're accountable to business revenue."
      }
    ]
  };

  const serviceSchema = {
    "@type": "Service",
    "name": "Video Revenue System",
    "description": "Turn your podcast into a predictable revenue engine with our strategic content distribution and demand capture system.",
    "url": "https://www.extrasauceagency.com/services/video-revenue-system",
    "provider": {
      "@id": "https://www.extrasauceagency.com/#organization"
    }
  };

  const structuredData = [organizationSchema, serviceSchema];

  return (
    <>
      <EnhancedSEOHead
        title="Video Revenue System - Turn Your Video Into Pipeline"
        description="Transform your video-first content engine into a predictable revenue system. Strategic content distribution, guest sourcing, and demand capture for B2B executives."
        ogTitle="Video Revenue System - Turn Your Video Into Pipeline"
        ogDescription="Transform your video-first content engine into a predictable revenue system. Strategic content distribution, guest sourcing, and demand capture for B2B executives."
        canonicalUrl="https://www.extrasauceagency.com/services/video-revenue-system"
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
                Video Revenue System
              </p>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-8 text-white">
                Put your executives on camera and get meetings booked with buyers who are already fans
              </h1>
              
              <p className="text-lg lg:text-xl text-slate-300 mb-12 max-w-2xl leading-relaxed">
                Your buyers research you long before they talk to sales. We make sure your leadership is who they find.
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
                  <h3 className="text-lg font-bold mb-1">1 60-min recording session (podcast, webinar, YT video)</h3>
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
                  <h3 className="text-2xl font-bold mb-2">1 60-min recording session (podcast, webinar, YT video)</h3>
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
                      <h4 className="font-bold text-slate-900 mb-1">Full-length flagship episode</h4>
                      <p className="text-slate-600 text-sm">YouTube/podcast /live event, including a cinematic trailer</p>
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

                {/* ∞ Social selling and account-based outreach */}
                <div className="border border-slate-200 p-6 rounded-xl hover:shadow-lg hover:border-primary hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-primary font-bold text-3xl min-w-fit flex items-center justify-center h-12">∞</div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Social selling and account-based outreach</h4>
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
                What's Included
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Video Revenue System
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Build a binge-worthy content show that becomes your demand engine that your buyers actively look forward to seeing on their social feeds every week.
              </p>
            </div>

            {/* Pricing Card */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-white border-2 border-slate-900 rounded-2xl p-12">
                {/* Features */}
                <div className="space-y-4 mb-12">
                  {pricingFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <p className="text-center text-base text-slate-700 font-medium mb-8">
                  You work with a dedicated director of demand gen, show producer, senior video editors, senior copywriter, and a senior designer.
                </p>

                {/* CTA */}
                <Link to="/book-strategy-call" className="block">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-base font-semibold">
                    See The Video Revenue System
                  </Button>
                </Link>
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
                  <div className="text-slate-600 mt-4 leading-relaxed space-y-4">
                    {item.answer.split(/\n\s*\n/).map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex}>{paragraph}</p>
                    ))}
                  </div>
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
              Just an honest conversation about your content efforts.
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

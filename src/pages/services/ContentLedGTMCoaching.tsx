import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import EnhancedSEOHead from "@/components/SEO/EnhancedSEOHead";
import { organizationSchema } from "@/data/structured-data";

const ContentLedGTMCoaching = () => {
  const heroMetrics = [
    { value: "6 weeks", label: "From zero to pipeline engine" },
    { value: "1:1 calls", label: "White-glove coaching" },
    { value: "85%", label: "Time spent building systems" }
  ];

  const problemStatements = [
    {
      title: "Expecting results because you're posting on LinkedIn 3-5x/week and 2+ blogs/mo",
      description: "Just because you're posting content doesn't mean inbound leads are going to come in. You need to have your push and pull motions in sync to convert the demand you build.",
      highlighted: false
    },
    {
      title: "You have an internal marketer but not a battle-tested system",
      description: "You can't keep burning more money jumping from one marketing tactic to another.",
      highlighted: false
    },
    {
      title: "You know how to make content but too busy with other parts of the business",
      description: "Making content isn't the hard part. It's all the things that get it to work; outbound, a/b testing, social selling, personal branding, offer creation, etc.",
      highlighted: false
    },
    {
      title: "The cost of inaction",
      description: "You want to be able to run your own personal brand but it is overwhelming",
      highlighted: true
    }
  ];

  const shiftComparison = [
    {
      title: "Traditional GTM Playbook",
      points: [
        "Burn ad budgets for 3 months for low-quality leads",
        "High churn when hiring many SDRs",
        "Zero leads when you stop spending on outbound",
        "Pipeline is heavily dependent on SDRs and paid ads",
        "Reply rates are dropping and CAC are rising"
      ]
    },
    {
      title: "Content-led GTM Playbook",
      points: [
        "Be considered the top 1-2 expert in your space",
        "High-intent leads find you and eager to work",
        "Grow a realm of influence in your niche and pipeline compounds",
        "Content assets become evergreen and bring in leads months later",
        "Build a brand that supports the long-term company growth"
      ]
    }
  ];

  const sprintPhases = [
    {
      number: "1",
      title: "Establish Market Of One Positioning",
      description: "Create a compelling first impression in your market by carving out a position through strategic narrative, visual branding that is memorable, and distinctive enough to separate from the competition."
    },
    {
      number: "2",
      title: "Audience development & messaging",
      description: "Collect data through social listening tools to craft actionable personas and build out a strategy to target them at different touchpoints in the audience's discoverable stage."
    },
    {
      number: "3",
      title: "Social Selling Infrastructure Setup",
      description: "Setup sales & marketing tools to help find high-intent leads, manage conversations on social media, and distribute/analyze content, funnel setup to capture leads."
    },
    {
      number: "4",
      title: "Scroll-Stopping Content Workflows",
      description: "Learn to leverage various LLMs and specialty workflows via Claude Skills to 10x your content production, minimize burnout, content that sounds like you while getting you focused on the core parts of your business, learn the ins & outs of growing revenue on channels like LinkedIn & YouTube."
    }
  ];

  const benefits = [
    {
      title: "Grow with a revenue system that compounds",
      description: "Unlike outbound, paid ads, or tradeshows, content will keep bringing in leads even if you pause."
    },
    {
      title: "Get your Business economics to make sense",
      description: "It becomes a challenge to scale or justify paid advertising costs when CAC prices are too high (60%+ YoY last 5 years for B2B)."
    },
    {
      title: "Don't have to rely on anyone else to bring in pipeline",
      description: "You don't have to rely on hiring more experts and external vendors when you have a battle-tested system tailored for your business that you can turn on/off."
    },
    {
      title: "Hands-on implementation calls",
      description: "Work with our lead content strategist one-on-one and be ready for a hands-on call where you build the essentials together week after week until you walk away with a content revenue system."
    }
  ];

  const results = [
    {
      metric: "~16",
      label: "Meetings per month",
      description: "Higher show up rate and with leads that are excited to meet you"
    },
    {
      metric: "40%",
      label: "Shorter sale cycles",
      description: "Buyers are less skeptical when content makes you look like the top 1-2 option in your space"
    },
    {
      metric: "6-8x",
      label: "Inbound inquiries",
      description: "As content begins to compound, clients begin to see more inbound opportunities"
    }
  ];

  const testimonial = {
    quote: "Before the sprint, I was relying on trade shows and events to find leads but it was very unpredictable. 2 months of working with Manny and I was able to implement a personal brand online from scratch. I started to get a few leads every week from LinkedIn! This was a game changer",
    author: "Faysal Khaled",
    title: "CEO @ Mortgage Edge - Toronto, Ontario",
    photo: "/faysalkhaled.png"
  };

  const pricingFeatures = [
    "Weekly 1:1 implementation calls",
    "Templates, frameworks, and SOPs provided",
    "Access Extra Sauce proprietary resource library",
    "Ongoing Slack support (Up to 60 days after completion)",
    "Up to 3 team members included",
    "Bonus: Content production calendar, LinkedIn sales navigator (discounted)"
  ];

  const faqItems = [
    {
      question: "What is a content-to-pipeline sprint?",
      answer: "We help founders implement a lean content system that drives real company revenue in the next 90 days. We ask busy executives to give us 8 weeks to build a content-led GTM engine that makes you look like a thought leader in your space and bring in 1 clients. Over these weeks, we develop your company narrative, brand identity, outbound motions, and content workflows that get meetings booked in your LinkedIn DMs."
    },
    {
      question: "Who is this coaching program for?",
      answer: "SaaS executives and B2B CEOs in the $1M-20M ARR range who want to build pipeline through content but don't know where to start or been burnt by content agencies that deliver fluff. Ideal if you've tried content marketing before and it didn't move the needle, or if you're over-reliant on paid acquisition and outbound."
    },
    {
      question: "How is this different from hiring a marketing agency?",
      answer: "Agencies do the work for you. This coaching program teaches you how to do it yourselves. You walk away with a repeatable content system, templates, workflows, and the strategic clarity to execute content-led growth internally. You get to build your own engine with us versus renting one."
    },
    {
      question: "What happens after the sprint?",
      answer: "You own everything: the strategy, the systems, the templates, and the playbook. We offer 60-days of ongoing communication support in our slack channel. Our clients ask us questions and we help them see traction in the first 90 days of executing this sprint."
    },
    {
      question: "How much time do I need to commit each week?",
      answer: "Plan for 2-3 hours per week: one 90-minute coaching session plus 90 minutes of homework. The time investment is front-loaded — you're building a system that will save you hundreds of hours and iterations over the next 12 months."
    },
    {
      question: "Can my marketing team join the coaching sessions?",
      answer: "Absolutely. We encourage it. Up to 3 team members can join at no additional cost."
    }
  ];

  const doneForYouServices = [
    {
      title: "LinkedIn Content Engine",
      description: "Up to 20 linkedin posts/mo, written in your technical voice. Outbound done daily on your behalf. On average we get a 30% reply rate and 16 qualified meetings/mo"
    },
    {
      title: "Podcast Content Engine",
      description: "Create a binge-worthy B2B brand show that turns into short-form clips, YouTube videos, written social posts, blogs, and etc. Stay top of mind where your buyers hang out online."
    }
  ];

  const serviceSchema = {
    "@type": "Service",
    "name": "Content-To-Pipeline Sprint",
    "description": "Build your own content revenue engine in under 8 weeks with our hands-on coaching program designed for SaaS founders and B2B leaders.",
    "url": "https://www.extrasauceagency.com/services/content-led-gtm-coaching",
    "provider": {
      "@id": "https://www.extrasauceagency.com/#organization"
    }
  };

  const structuredData = [organizationSchema, serviceSchema];

  return (
    <>
      <EnhancedSEOHead
        title="Content-To-Pipeline Sprint - Build Your Content Revenue Engine"
        description="Build your own content revenue engine in under 8 weeks. Hands-on coaching for SaaS founders and B2B leaders to implement battle-tested content systems."
        ogTitle="Content-To-Pipeline Sprint - Build Your Content Revenue Engine"
        ogDescription="Build your own content revenue engine in under 8 weeks. Hands-on coaching for SaaS founders and B2B leaders to implement battle-tested content systems."
        canonicalUrl="https://www.extrasauceagency.com/services/content-led-gtm-coaching"
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
                Content-To-Pipeline Sprint
              </p>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-8 text-white">
                Build your own content revenue engine in under 8 weeks
              </h1>
              
              <p className="text-lg lg:text-xl text-slate-300 mb-12 max-w-2xl leading-relaxed">
                In 2026, relying on inconsistent posting or outbound alone won't work, they both need to be in sync. We work with you 1:1 to install the exact systems and workflows we use with 7-8 figure B2B teams.
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
                {heroMetrics.map((metric, index) => (
                  <div key={index}>
                    <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                    <div className="text-sm text-slate-400">{metric.label}</div>
                  </div>
                ))}
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
                Stop producing content daily that doesn't do anything and implement a battle-tested system
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
                You need a content engine that consistently drives pipeline with modern B2B buyers
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

        {/* The Shift Section */}
        <section className="py-16 lg:py-20 bg-slate-50">
          <div className="container-premium">
            <div className="mb-16">
              <p className="text-primary text-sm font-bold tracking-widest mb-4 uppercase">
                The Shift
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Traditional GTM vs Content-led GTM
              </h2>
            </div>

            {/* Comparison Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {shiftComparison.map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-xl border border-slate-200">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">{item.title}</h3>
                  <ul className="space-y-3">
                    {item.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-3">
                        <span className="text-primary font-bold text-lg mt-0.5">•</span>
                        <span className="text-slate-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The 8-Week Sprint Section */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container-premium">
            <div className="mb-16">
              <p className="text-primary text-sm font-bold tracking-widest mb-4 uppercase">
                The 8-Week Sprint
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Four phases to build your content revenue system
              </h2>
            </div>

            {/* Phases Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {sprintPhases.map((phase, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                    {phase.number}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {phase.description}
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
                What you get from this sprint
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
                What happens when B2B teams implement Content Revenue Systems
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
                Pricing
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Content-To-Pipeline Sprint
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Work 1:1 with us to build your own content revenue system in 8 weeks with the exact strategy, systems, and playbooks we use in The Sauce Recipe™
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-white border-2 border-slate-900 rounded-2xl p-12">
                <div className="text-center mb-8">
                  <p className="text-6xl font-bold text-slate-900 mb-2">$6,000</p>
                  <p className="text-slate-600">/one-time</p>
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

                {/* CTA Button */}
                <Link to="/book-strategy-call" className="block">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-base font-semibold rounded-xl">
                    Apply Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Apply Now Info Section */}
        <section className="py-12 lg:py-16 bg-white border-t border-slate-200">
          <div className="container-premium text-center">
            <p className="text-lg text-slate-600">
              Each coaching call can go up to 90 minutes. We only take on 4 coaching clients per month.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-20 bg-slate-50">
          <div className="container-premium">
            <div className="mb-16">
              <p className="text-primary text-sm font-bold tracking-widest mb-4 uppercase">
                Frequently Asked Questions
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Common Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-xl border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {item.question}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Done-For-You Services Section */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container-premium">
            <div className="mb-16">
              <p className="text-primary text-sm font-bold tracking-widest mb-4 uppercase">
                Done-For-You Services
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Rather our team handle content for you?
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl">
                Look at our done-for-you services. Only 4hrs/mo required from your side.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {doneForYouServices.map((service, index) => (
                <div key={index} className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link to={index === 0 ? "/services/linkedin-revenue-system" : "/services/podcast-revenue-system"}>
                    <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-semibold">
                      Learn More
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-slate-900">
          <div className="container-premium text-center">
            <div className="max-w-3xl mx-auto">
              <p className="text-primary text-sm font-bold tracking-widest mb-4 uppercase">
                Ready to build your content engine?
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                Let's get started
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Apply now to schedule your strategy call and see if the Content-To-Pipeline Sprint is right for your business.
              </p>
              <Link to="/book-strategy-call">
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-semibold">
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ContentLedGTMCoaching;

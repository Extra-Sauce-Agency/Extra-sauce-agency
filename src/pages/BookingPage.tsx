import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { InlineWidget } from "react-calendly";
import EnhancedSEOHead from "@/components/SEO/EnhancedSEOHead";
import { trustedBySection } from "@/content/homepage";

// Balance optical weight: wide wordmarks get less height, compact marks get more
const logoSizeClasses = {
  wide: "h-4 sm:h-5 md:h-6 max-w-[100px] md:max-w-[120px]",
  medium: "h-6 sm:h-7 md:h-8 max-w-[90px] md:max-w-[110px]",
  compact: "h-8 sm:h-9 md:h-10 max-w-[50px] md:max-w-[60px]",
};

const BookingPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "We've had old prospects come back to book a demo and thought we were a completely different company.",
      author: "Vik Saini",
      title: "Head Of Sales",
      avatar: "/viksoni.png"
    },
    {
      quote: "I just want to say, I have a good ghostwriter.",
      author: "Nadia Irani", 
      title: "CEO & Founder",
      avatar: "/nadiairani.png"
    },
    {
      quote: "Manny came in and helped us streamline our social media distribution system and kept us up to date with the best strategies. We've seen massive growth the last 6 months.",
      author: "Alex Salois",
      title: "Senior Content Manager", 
      avatar: "/alexsalois.png"
    },
    {
      quote: "Manny's expertise & dedication have been instrumental in crafting a compelling strategic narrative, and generating insightful content on LinkedIn that drives leads.",
      author: "Sharlene Gumbs ",
      title: "CEO & Founder",
      avatar: "/sharlenegumbs.png"
    },
    {
      quote: "I've been able to connect with the exact decision-makers in the companies we want to work with - The relationship is so much better this way than a cold approach.",
      author: "Phillip Lunn ",
      title: "CEO & Founder",
      avatar: "/philliplunn.png"
    },
  ];

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const benefits = [
    "Walk away with a clear picture of how to leverage LinkedIn & Youtube as a revenue channel.",
    "Get a frank assessment of your Company & C-suite content presence and where the gaps are costing you influence & authority.",
    "Understand exactly what it would look like to run The Sauce Recipe™ in your business and what results you can realistically expect."
  ];

  // Triple the logos for seamless infinite scroll
  const allCompanies = [...trustedBySection.companies, ...trustedBySection.companies, ...trustedBySection.companies]; 

  return (
    <>
      <EnhancedSEOHead
        title="Apply Now | SaaS & B2B Growth Evaluation"
        description="Ready to stop the acquisition hamster wheel? Book a strategy call to evaluate your founder-led growth system and predictable content engine opportunities today."
        ogTitle="Apply Now | SaaS & B2B Growth Evaluation"
        ogDescription="Book a strategy call to evaluate your founder-led growth system, narrative clarity, and content engine opportunities for SaaS or B2B teams."
        canonicalUrl="https://www.extrasauceagency.com/book-strategy-call"
        type="article"
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <div className="pt-20 sm:pt-32 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col xl:grid xl:grid-cols-2 gap-6 sm:gap-8 xl:gap-16 items-start">
              {/* Left Content */}
              <div className="order-2 xl:order-1 w-full">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl 2xl:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight">
                  Apply <span className="text-primary">Now</span>
                </h1>
                
                <div className="mb-6 sm:mb-8">
                  <p className="text-primary font-semibold mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg xl:text-base leading-relaxed">
                    Schedule a call with our team to find out if The Sauce Recipe™ is the right content revenue system to turn your executive team into your most powerful pipeline channel.
                  </p>
                  
                  <div className="space-y-3 sm:space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-2 sm:gap-3">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-accent mt-1 flex-shrink-0" />
                        <p className="text-muted-foreground text-sm sm:text-base lg:text-lg xl:text-sm 2xl:text-base leading-relaxed">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Company Logos Scrolling Section */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4 text-center">
                    Trusted by
                  </h3>
                  <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-foreground py-6 px-2 sm:px-4">
                    {/* Fade edges for seamless scroll */}
                    <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-foreground to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-foreground to-transparent z-10 pointer-events-none"></div>
                    <div className="scrolling-logos-wrapper">
                      <div className="scrolling-logos animate-scroll">
                        {allCompanies.map((company, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-center flex-shrink-0 h-10 md:h-12"
                            aria-hidden={idx >= trustedBySection.companies.length}
                          >
                            <img
                              src={company.logo}
                              alt={company.name}
                              title={company.name}
                              className={`${logoSizeClasses[company.size]} w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300`}
                              draggable="false"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6 sm:mb-8">
                  <div 
                    className="relative bg-white/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border/30"
                  >
                    {/* Testimonial Header */}
                    <div className="flex justify-between items-center mb-4 sm:mb-6">
                      <h4 className="text-sm sm:text-base font-bold text-foreground uppercase tracking-wider">What Clients Say</h4>
                      <div className="flex gap-2">
                        <button 
                          onClick={prevTestimonial}
                          className="p-1 sm:p-2 rounded-full hover:bg-white/50 transition-colors border border-border/20"
                          aria-label="Previous testimonial"
                        >
                          <ChevronLeft className="w-4 h-4 text-foreground" />
                        </button>
                        <button 
                          onClick={nextTestimonial}
                          className="p-1 sm:p-2 rounded-full hover:bg-white/50 transition-colors border border-border/20"
                          aria-label="Next testimonial"
                        >
                          <ChevronRight className="w-4 h-4 text-foreground" />
                        </button>
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <div className="min-h-[140px] sm:min-h-[160px] md:min-h-[120px] flex flex-col justify-between">
                      <p className="text-muted-foreground text-xs sm:text-sm md:text-base xl:text-sm 2xl:text-base italic mb-4 sm:mb-6 leading-relaxed">
                        "{testimonials[currentTestimonial].quote}"
                      </p>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-border/30 flex-shrink-0 bg-muted">
                          <img 
                            src={testimonials[currentTestimonial].avatar} 
                            alt={testimonials[currentTestimonial].author}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h5 className="text-xs sm:text-sm md:text-base xl:text-sm 2xl:text-base font-bold text-foreground">{testimonials[currentTestimonial].author}</h5>
                          <p className="text-[10px] sm:text-xs md:text-sm xl:text-xs 2xl:text-sm text-muted-foreground">{testimonials[currentTestimonial].title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - Calendly Widget */}
              <div className="order-1 xl:order-2 w-full xl:sticky xl:top-28">
                <div className="space-y-6">
                  <div className="text-center xl:text-left">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-2 tracking-tight">
                      SaaS & B2B Growth Evaluation
                    </h2>
                    <p className="text-muted-foreground text-xs sm:text-sm md:text-base xl:text-sm 2xl:text-base px-2 max-w-xl mx-auto leading-relaxed">
                      This isn't a sales call. It's an application review. Extra Sauce works with a select number of B2B SaaS companies at any given time. If you're not the right fit, you'll know within 24 hours.
                    </p>
                  </div>

                  {/* Calendly Embed */}
                  <div className="card-premium p-0 overflow-hidden rounded-xl sm:rounded-2xl border-2 border-orange-400 shadow-lg bg-gradient-to-br from-orange-50 via-white to-white">
                    <div className="h-[400px] sm:h-[500px] md:h-[600px] xl:h-[700px] 2xl:h-[750px]">
                      <InlineWidget 
                        url="https://calendly.com/extrasauceagency"
                        styles={{
                          height: '100%',
                          width: '100%'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      
      <style>{`
        .scrolling-logos-wrapper {
          overflow: hidden;
          width: 100%;
          position: relative;
        }
        .scrolling-logos {
          display: flex;
          gap: 2.5rem;
          width: max-content;
          align-items: center;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        
        /* Enhanced smooth scrolling */
        @media (prefers-reduced-motion: no-preference) {
          .animate-scroll {
            animation-timing-function: linear;
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .scrolling-logos {
            gap: 2rem;
          }
          .animate-scroll {
            animation-duration: 30s;
          }
        }
      `}</style>
    </>
  );
};

export default BookingPage;

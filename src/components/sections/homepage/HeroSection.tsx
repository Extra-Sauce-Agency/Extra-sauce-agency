import { Button } from "@/components/ui/button";
import { ArrowDown, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { heroSection } from "@/content/homepage";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true); // Start visible for faster LCP

  useEffect(() => {
    // Defer non-critical mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Delay mouse tracking to improve initial render
    const timeoutId = setTimeout(() => {
      window.addEventListener('mousemove', handleMouseMove);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative flex-1 flex items-center overflow-hidden bg-gradient-subtle">
      {/* Enhanced Interactive Background */}
      <div className="absolute inset-0">
        {/* Interactive Mouse Gradient */}
        <div
          className="absolute inset-0 opacity-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 107, 107, 0.15), transparent 50%)`
          }}
        />

        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-primary/15 to-secondary/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-primary/20 rounded-full animate-bounce`}
              style={{
                left: `${20 + i * 10}%`,
                top: `${30 + i * 8}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      </div>

      <div className="w-full px-6 sm:px-[5%] relative z-10 pt-28 pb-12 lg:pt-32 lg:pb-16">
        <div className={`w-full lg:max-w-[85vw] mx-auto text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Headline: 5vw, balanced over two lines across the 85vw block */}
          <h1 className="text-[2.75rem] sm:text-[clamp(3rem,5vw,9rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-balance">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%] pb-1">
              {heroSection.headline}
            </span>
          </h1>

          {/* Primary paragraph: 20px → 36px */}
          <p className="mt-6 lg:mt-8 max-w-[68ch] text-[clamp(1.25rem,1.4vw,2.25rem)] leading-[1.5] text-[#4b5563]">
            {heroSection.subheadline}
          </p>

          {/* Qualifier box: 16px → 24px */}
          <div className="mt-6 w-fit max-w-[80ch] rounded-xl border border-[#FFE7E1] bg-[#FFF7F5] px-5 py-4 lg:px-6 lg:py-5 text-[clamp(1rem,1vw,1.5rem)]">
            <p className="leading-[1.6] text-[#6b7280]">
              {heroSection.popupTagLead} {heroSection.popupTagRest}
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
            <Link to="/book-strategy-call">
              <Button className="group h-auto rounded-full bg-primary px-9 py-4 2xl:px-11 2xl:py-5 text-[clamp(1.125rem,1vw,1.625rem)] font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-primary/90 hover:shadow-primary/30 focus-enhanced">
                {heroSection.primaryCTA}
                <div className="ml-2 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowDown className="w-3 h-3 rotate-[-45deg]" />
                </div>
              </Button>
            </Link>

            <Link
              to="/the-sauce-recipe"
              className="group inline-flex items-center gap-2 text-[clamp(1.125rem,1vw,1.625rem)] font-medium text-foreground/80 transition-colors duration-200 hover:text-foreground"
            >
              {heroSection.secondaryCTA}
              <ChevronRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

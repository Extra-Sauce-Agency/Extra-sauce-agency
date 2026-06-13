import { trustedBySection } from "@/content/homepage";

// Triple the logos for seamless infinite scroll
const allCompanies = [...trustedBySection.companies, ...trustedBySection.companies, ...trustedBySection.companies];

// Helper to get specialized custom scaling and padding classes for logos that need balancing
const getLogoSizingClass = (name: string) => {
  switch (name) {
    case "Oracle":
      return "h-6 sm:h-7 md:h-8 max-w-[100px] sm:max-w-[120px] md:max-w-[140px]"; // Wide, bold landscape logo
    case "Goalcast":
      return "h-8 sm:h-10 md:h-11 max-w-[100px] sm:max-w-[120px] md:max-w-[130px]"; // Wide logo
    case "WISMOlabs":
      return "h-6 sm:h-7 md:h-8 max-w-[100px] sm:max-w-[120px] md:max-w-[140px]"; // Landscape SVG
    case "TBDC":
      return "h-12 sm:h-14 md:h-16 max-w-[50px] sm:max-w-[60px] md:max-w-[70px] scale-90"; // Circular, tall logo
    case "Bhive":
      return "h-11 sm:h-13 md:h-14 max-w-[50px] sm:max-w-[60px] md:max-w-[65px]"; // Square/compact logo
    case "City of Brampton":
      return "h-10 sm:h-12 md:h-13 max-w-[70px] sm:max-w-[85px] md:max-w-[95px]"; // Balanced square logo
    case "Icube UTM":
      return "h-10 sm:h-12 md:h-13 max-w-[70px] sm:max-w-[85px] md:max-w-[95px]"; // Compact logo
    case "Carleton University":
      return "h-11 sm:h-13 md:h-14 max-w-[80px] sm:max-w-[95px] md:max-w-[110px]"; // Balanced shield logo
    case "Alam Law Firm":
      return "h-10 sm:h-12 md:h-13 max-w-[80px] sm:max-w-[95px] md:max-w-[110px]"; // Wide Law logo
    case "Irani Law":
      return "h-10 sm:h-12 md:h-13 max-w-[80px] sm:max-w-[95px] md:max-w-[110px]"; // Law logo
    case "MBM Law Firm":
      return "h-7 sm:h-8 md:h-9 max-w-[90px] sm:max-w-[110px] md:max-w-[120px]"; // Long landscape logo
    case "Khalsa Aid":
      return "h-11 sm:h-13 md:h-14 max-w-[60px] sm:max-w-[70px] md:max-w-[80px]"; // Tall emblem
    default:
      return "h-10 sm:h-12 md:h-14 max-w-[80px] sm:max-w-[100px] md:max-w-[120px]"; // Default safe balanced size
  }
};

const TrustedBySection = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden w-full">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="w-full relative z-10 px-0">
        {trustedBySection.title && (
          <div className="text-center mb-8 px-6 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {trustedBySection.title}
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mx-auto shadow-lg"></div>
            {trustedBySection.subtitle && (
              <p className="text-lg text-muted-foreground mt-4 max-w-4xl mx-auto">
                {trustedBySection.subtitle}
              </p>
            )}
          </div>
        )}
        
        {/* Enhanced Logo Container */}
        <div className="relative overflow-hidden bg-gradient-to-r from-white/30 via-white/50 to-white/30 backdrop-blur-md border-y border-white/20 shadow-lg py-10 w-full">
          {/* Fade edges for seamless scroll */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
          
          <div className="scrolling-logos-wrapper">
            <div className="scrolling-logos animate-scroll">
              {allCompanies.map((company, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center opacity-60 hover:opacity-100 transition-all duration-500 group flex-shrink-0 hover:scale-105"
                >
                  <div className="relative flex items-center justify-center p-4 rounded-xl bg-white/40 backdrop-blur-sm border border-white/20 shadow-sm group-hover:shadow-md group-hover:bg-white/70 transition-all duration-500 w-[140px] sm:w-[160px] md:w-[180px] h-[70px] sm:h-[85px] md:h-[95px]">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className={`${getLogoSizingClass(company.name)} object-contain transition-all duration-500`}
                      draggable="false"
                      onError={(e) => {
                        console.log(`Failed to load image for ${company.name}:`, company.logo);
                        e.currentTarget.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgMTIwIDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iNDgiIGZpbGw9IiNmM2Y0ZjYiLz48dGV4dCB4PSI2MCIgeT0iMjgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM2Yjc2ODAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiI+TG9nbzwvdGV4dD48L3N2Zz4=";
                      }}
                    />
                    {/* Enhanced glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl -z-10"></div>
                    
                    {/* Company name tooltip */}
                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-2.5 py-1 bg-foreground text-background text-[10px] font-semibold rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-md z-20">
                      {company.name}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-foreground"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .scrolling-logos-wrapper {
          overflow: hidden;
          width: 100%;
          position: relative;
        }
        .scrolling-logos {
          display: flex;
          gap: 1.5rem;
          width: max-content;
          align-items: center;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-scroll {
          animation: scroll 45s linear infinite;
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
            gap: 1rem;
          }
          .animate-scroll {
            animation-duration: 35s;
          }
        }
      `}</style>
    </section>
  );
};

export default TrustedBySection;

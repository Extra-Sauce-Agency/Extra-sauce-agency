import { trustedBySection } from "@/content/homepage";

// Triple the logos for seamless infinite scroll
const allCompanies = [...trustedBySection.companies, ...trustedBySection.companies, ...trustedBySection.companies];

// Balance optical weight: wide wordmarks get less height, compact marks get more
const logoSizeClasses = {
  wide: "h-6 sm:h-7 md:h-8 max-w-[150px] md:max-w-[180px]",
  medium: "h-8 sm:h-9 md:h-10 max-w-[130px] md:max-w-[160px]",
  compact: "h-10 sm:h-11 md:h-12 max-w-[70px] md:max-w-[80px]",
};

const TrustedBySection = () => {
  return (
    <section className="py-10 md:py-12 bg-foreground relative overflow-hidden w-full">
      <div className="w-full relative z-10 px-0">
        <div className="relative overflow-hidden w-full">
          {/* Fade edges for seamless scroll */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-foreground to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-foreground to-transparent z-10 pointer-events-none"></div>

          <div className="scrolling-logos-wrapper">
            <div className="scrolling-logos animate-scroll">
              {allCompanies.map((company, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center flex-shrink-0 h-12 md:h-14"
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

      <style>{`
        .scrolling-logos-wrapper {
          overflow: hidden;
          width: 100%;
          position: relative;
        }
        .scrolling-logos {
          display: flex;
          gap: 4rem;
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

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .scrolling-logos {
            gap: 2.5rem;
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

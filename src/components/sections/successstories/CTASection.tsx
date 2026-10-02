import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { successStoriesCTA } from "@/content/success-stories";

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden border-t">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-bounce"
            style={{
              left: `${15 + i * 12}%`,
              top: `${25 + i * 8}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>

      <div className="container-premium relative z-10">
        <div className="text-center max-w-5xl mx-auto animate-fade-in">
          <h2 className="text-5xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
            Big Content Wins{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Backed By Real Clients
            </span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4">
            <Link to={successStoriesCTA.buttonHref}>
              <Button className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg font-semibold rounded-2xl shadow-elegant hover:scale-105 transition-all duration-300">
                <span className="relative z-10 flex items-center">
                  {successStoriesCTA.buttonLabel}
                  <div className="ml-2 w-5 h-5 rounded-full bg-primary-foreground/20 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                    <span className="text-xs">→</span>
                  </div>
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

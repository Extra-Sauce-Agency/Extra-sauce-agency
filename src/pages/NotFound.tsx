import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft } from "lucide-react";
import EnhancedSEOHead from "@/components/SEO/EnhancedSEOHead";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const popularPages = [
    { title: "Home", path: "/", description: "Back to our homepage" },
    { title: "Services", path: "/services/executive-ghostwriting", description: "Explore our marketing services" },
    { title: "The Sauce Recipe", path: "/the-sauce-recipe", description: "Learn our proven methodology" },
    { title: "Book Strategy Call", path: "/book-strategy-call", description: "Schedule a consultation" },
    { title: "Success Stories", path: "/success-stories", description: "See our client results" },
    { title: "Blog", path: "/resources/blogs", description: "Read our latest insights" }
  ];

  return (
    <>
      <EnhancedSEOHead
        title="404 - Page Not Found | Extra Sauce Agency"
        description="The page you're looking for doesn't exist. Explore our B2B marketing services and founder-led growth strategies."
        noindex={true}
        canonicalUrl={`https://www.extrasauceagency.com${location.pathname}`}
      />
      
      <Navigation />
      
      <div className="min-h-screen bg-background">
        <div className="container-premium py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            {/* 404 Hero */}
            <div className="mb-12">
              <div className="mb-8">
                <img 
                  src="/chili.png" 
                  alt="Extra Sauce Chili" 
                  className="w-20 h-20 mx-auto mb-6 opacity-60"
                />
                <h1 className="text-8xl lg:text-9xl font-bold text-primary mb-4">
                  404
                </h1>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Oops! This page got lost in the sauce
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  The page you're looking for doesn't exist. But don't worry - we've got plenty of 
                  other spicy content to explore!
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link to="/">
                  <Button className="btn-hero min-w-[200px]">
                    <Home className="w-5 h-5 mr-2" />
                    Back to Home
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="min-w-[200px]"
                  onClick={() => window.history.back()}
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Go Back
                </Button>
              </div>
            </div>

            {/* Popular Pages */}
            <div className="border-t border-border pt-12">
              <h3 className="text-2xl font-bold mb-8">
                Popular Pages
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {popularPages.map((page, index) => (
                  <Link 
                    key={index}
                    to={page.path}
                    className="group p-6 rounded-xl border border-border hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 text-left"
                  >
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {page.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {page.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default NotFound;

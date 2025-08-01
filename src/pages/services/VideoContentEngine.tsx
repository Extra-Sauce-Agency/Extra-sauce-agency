import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { User, Eye, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import CTASection from "@/components/sections/homepage/CTASection";

const VideoContentEngine = () => {
  const systemSteps = [
    {
      icon: <User className="w-8 h-8" />,
      title: "Account-Based Marketing Approach",
      description: "The video engine is built around conversations. You don't just create content—you create value with key prospects, strategic partners, or industry influencers by bringing them on as guests. It's a Trojan Horse for relationship-building."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "One Recording, Infinite Distribution", 
      description: "Each recorded episode fuels an entire ecosystem—short-form clips, written posts, newsletters, website blog, YouTube content, and even sales enablement assets. This gives you a high-leverage, scalable content system from just 2-4 hours a month of recording."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Category Positioning Through Narrative",
      description: "We don't just film and clip. We shape every episode around your strategic narrative, layering in POVs that shift buyer belief and elevate your positioning. Over time, your series becomes a magnet for trust, authority, and inbound deal flow."
    }
  ];

  const benefits = [
    {
      number: "1",
      title: "Reclaim hours for high-leverage work",
      description: "We run the entire engine so your calendar stays clear. 2-4hrs/mo of recording fuels weeks of content without the mental load of managing it."
    },
    {
      number: "2", 
      title: "Build relationships with key accounts",
      description: "This isn't vanity content. Your series becomes a platform to invite dream clients, partners, and investors into real conversations—building a real relationship before the demo."
    },
    {
      number: "3",
      title: "Sell how modern B2B buyers buy",
      description: "Your buyer is smart enough to find the top 1-2 options in your category. Your video content positions you as the obvious choice—educating, showing up, and qualifying them before they even talk to sales."
    },
    {
      number: "4",
      title: "A brand that sells while you sleep",
      description: "When your face, voice, and insights show up weekly across channels, trust compounds. Every recording creates dozens of assets, allowing you to show up everywhere your prospect hangs out online."
    },
    {
      number: "5",
      title: "Your sales team will love you",
      description: "Your content becomes a library of warm openers, objection busters, and assets they can send in real time. It turns every salesperson into a product expert and helps them convert more pipeline."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center relative overflow-visible bg-gradient-subtle pt-20">
        <div className="container-premium text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-scale-in">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
              Executive-Led Video <span className="text-primary">Engine</span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl font-semibold text-primary mb-6">
              Turn your expertise into a video engine that closes pipeline.
            </h2>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Launch a binge-worthy video series—podcast, masterclass, or webinar—that fuels LinkedIn, YouTube, and your entire content engine while turning dream prospects into pipeline.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <Link to="/book-strategy-call">
                <Button className="btn-hero">
                  Learn More
                </Button>
              </Link>
            </div>
            
            {/* Metrics with floating element */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center max-w-6xl mx-auto">
              {/* Animated floating element as first column */}
              <div className="lg:col-span-1 flex justify-center lg:justify-start">
                <div className="animate-fade-in animation-delay-1500">
                  <div className="relative">
                    <div className="bg-slate-800 text-white p-4 xl:p-6 rounded-lg shadow-xl max-w-[280px] transform rotate-[3deg] hover:rotate-0 transition-transform duration-300">
                      <div className="text-xs xl:text-sm font-bold text-green-400 mb-2">"Video finally feels like us. It captures our voice, shows our expertise, and actually keeps prospects engaged."</div>
                      <div className="text-xs text-slate-300">
                        After producing video content for Goalcast—one of the world's top media brands, we're now bringing the same storytelling engine to B2B. That same system helped us generate 16M+ views in just 4 months.
                      </div>
                    </div>
                    <div className="absolute -top-1 -left-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Stats as remaining 3 columns */}
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">4 Hr/mo</div>
                <div className="text-sm text-muted-foreground">Minimal time investment</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">11-18/mo</div>
                <div className="text-sm text-muted-foreground">Qualified Meetings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">~3 Months</div>
                <div className="text-sm text-muted-foreground">Expected ROI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Hero Section */}

      {/* System Section */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 max-w-4xl mx-auto">
              MORE THAN JUST VIDEO CLIPS. A SYSTEM FOR DEMAND AND SCALABILITY.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The SAUCE Recipe™ sparks conversations with high-value prospects and keeps them coming back weekly to learn, trust, and eventually buy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {systemSteps.map((step, index) => (
              <div 
                key={index}
                className="card-premium text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mx-auto mb-6 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto">
            <div className="card-premium p-12">
              <div className="flex items-center gap-8">
                <div className="w-24 h-24 bg-primary rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center">
                  <img
                    src="/viksoni.png"
                    alt="Vik Soni"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <blockquote className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    "Extra Sauce completely shifted how we approach lead generation. Instead of 
                    wasting time at tradeshows or chasing cold leads, we now have warm 
                    conversations weekly with prospects who already trust us. The content positions 
                    our product as the go-to in our space, and pipeline has never been stronger."
                  </blockquote>
                  <div className="text-primary font-semibold">
                    Vik Soni<br />
                    <span className="text-muted-foreground text-sm">Head of Sales</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 lg:py-16">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Left Side */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                <span className="text-primary">BENEFITS:</span><br />
                <span className="text-foreground">VIDEO ENGINE</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our executive video engine doesn't just create content—it drives demand, deepens relationships, 
                and builds real market momentum. Here's how it delivers impact across every series:
              </p>
            </div>

            {/* Right Side - Benefits List */}
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-6">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0 mt-1">
                    {benefit.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full-width CTA Section */}
      <div className="mt-12">
        <CTASection />
      </div>

      <Footer />
    </div>
  );
};

export default VideoContentEngine;
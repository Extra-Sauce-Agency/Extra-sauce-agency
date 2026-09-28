import { useState } from "react";
import { Link } from "react-router-dom";
import { Play, X, CheckCircle2, ExternalLink, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CaseStudy } from "@/content/success-stories";

interface HeroCaseStudyProps {
  story: CaseStudy;
}

const HeroCaseStudy = ({ story }: HeroCaseStudyProps) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const scrollToGrid = () => {
    document.getElementById("case-study-grid")?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePlayClick = () => {
    if (story.externalVideoUrl) {
      window.open(story.externalVideoUrl, "_blank", "noopener,noreferrer");
    } else {
      setIsVideoOpen(true);
    }
  };

  return (
    <section className="relative overflow-hidden pt-24 lg:pt-40 pb-16 lg:pb-24 bg-background">
      {/* Ambient glow orbs */}
      <div className="absolute top-10 left-[8%] w-80 h-80 lg:w-[28rem] lg:h-[28rem] bg-[#FFE4DF] rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 right-[8%] w-72 h-72 lg:w-96 lg:h-96 bg-[#FFF1EE] rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="container-premium relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 lg:whitespace-nowrap bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Customer Success Stories
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how founders use The Sauce Recipe™ to turn content into pipeline.
          </p>
        </div>

        <div className="max-w-6xl mx-auto rounded-3xl border border-neutral-200 bg-white p-6 md:p-8 shadow-xl shadow-neutral-100">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 lg:items-center">
            {/* Video player — ~58% width */}
            <div className="lg:col-span-3">
              <div className="relative rounded-2xl overflow-hidden shadow-md bg-accent aspect-video group">
                <img
                  src={story.thumbnail}
                  alt={story.title}
                  className="w-full h-full object-contain opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <button
                  type="button"
                  onClick={handlePlayClick}
                  aria-label="Watch the video"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                  </span>
                </button>

                {story.externalVideoUrl ? (
                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full inline-flex items-center gap-1.5">
                    Watch full video
                    <ExternalLink className="w-3 h-3" />
                  </div>
                ) : (
                  story.duration && (
                    <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
                      {story.duration} watch
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Quote & outcome — ~42% width */}
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-2 mb-5">
                {story.tags.map((tag) => (
                  <div key={tag} className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-md opacity-50" />
                    <div className="relative bg-gradient-to-r from-primary to-secondary text-white font-bold text-xs px-4 py-1.5 rounded-full shadow-lg shadow-rose-500/20">
                      {tag}
                    </div>
                  </div>
                ))}
              </div>

              {story.quote && (
                <blockquote className="text-lg md:text-xl font-medium text-neutral-900 leading-snug mb-4 max-w-md">
                  "{story.quote}"
                </blockquote>
              )}

              {(story.author || story.authorRole) && (
                <div className="flex items-center gap-3 mb-6">
                  {story.authorAvatar ? (
                    <img
                      src={story.authorAvatar}
                      alt={story.author}
                      className="w-9 h-9 rounded-full object-cover shrink-0"
                    />
                  ) : (
                    <div className="w-9 h-9 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-xs shrink-0">
                      {(story.author ?? story.client).slice(0, 2).toUpperCase()}
                    </div>
                  )}
                  <p className="text-sm text-neutral-500 font-medium">
                    {story.author}
                    {story.authorRole ? `, ${story.authorRole}` : ""}
                  </p>
                </div>
              )}

              {story.metrics && story.metrics.length > 0 && (
                <div className="bg-[#FFF7F5] border border-[#FFE7E1] rounded-xl p-3 space-y-1.5 mb-8">
                  {story.metrics.map((metric) => (
                    <div key={metric} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm font-medium text-foreground">{metric}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-nowrap items-center gap-3">
                <Link to={`/success-stories/${story.slug}`}>
                  <Button className="rounded-full px-6 whitespace-nowrap">
                    Read Full Story
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  onClick={scrollToGrid}
                  className="rounded-full px-4 text-primary hover:bg-primary/10 hover:text-primary whitespace-nowrap"
                >
                  See more stories below
                  <ArrowDown className="ml-1.5 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isVideoOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {story.videoUrl ? (
              <video src={story.videoUrl} controls autoPlay className="w-full h-full" />
            ) : (
              <p className="text-white/70 text-center px-6">Video coming soon.</p>
            )}
            <button
              onClick={() => setIsVideoOpen(false)}
              aria-label="Close video"
              className="absolute top-4 right-4 w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroCaseStudy;

import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { CaseStudy, caseStudyFilters } from "@/content/success-stories";

interface CaseStudyGridProps {
  stories: CaseStudy[];
}

const CaseStudyGrid = ({ stories }: CaseStudyGridProps) => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredStories =
    activeFilter === "All" ? stories : stories.filter((story) => story.tags.includes(activeFilter));

  return (
    <section id="case-study-grid" className="relative overflow-hidden py-16 lg:py-24 bg-background scroll-mt-20">
      {/* Ambient glow orbs */}
      <div className="absolute top-1/3 left-[6%] w-80 h-80 lg:w-[26rem] lg:h-[26rem] bg-[#FFF1EE] rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-[6%] w-72 h-72 lg:w-96 lg:h-96 bg-[#FFE4DF] rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="container-premium relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">More success stories</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real clients across LinkedIn, podcasts, and webinars.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {caseStudyFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-semibold transition-colors",
                activeFilter === filter
                  ? "bg-primary text-primary-foreground border border-primary shadow-elegant"
                  : "border border-neutral-300 bg-white text-neutral-700 hover:border-neutral-400 hover:bg-neutral-50"
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story) => (
            <Link
              key={story.id}
              to={`/success-stories/${story.slug}`}
              className="group bg-white/90 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/30 overflow-hidden shadow-card hover:shadow-xl hover:shadow-neutral-200/60 hover:-translate-y-1 transition-all duration-200"
            >
              <div className="aspect-video relative overflow-hidden bg-accent">
                <img
                  src={story.thumbnail}
                  alt={story.title}
                  className={cn(
                    "w-full h-full object-cover group-hover:scale-105 transition-all duration-500",
                    story.thumbnailIsPlaceholder
                      ? "opacity-20 group-hover:opacity-25"
                      : "opacity-90 group-hover:opacity-100"
                  )}
                />
                <div
                  className={cn(
                    "absolute inset-0",
                    story.thumbnailIsPlaceholder
                      ? "bg-gradient-to-br from-accent/95 via-accent/90 to-black/90"
                      : "bg-gradient-to-t from-black/60 via-black/10 to-transparent"
                  )}
                />

                {story.duration && (
                  <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">
                    {story.duration}
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 text-xs">
                    {story.tags[0]}
                  </Badge>
                </div>
                <h3 className="text-lg font-bold mb-2 leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                  {story.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{story.description}</p>
                <span className="inline-flex items-center text-sm font-semibold text-rose-500 hover:text-rose-600">
                  Read Case Study
                  <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filteredStories.length === 0 && (
          <p className="text-center text-muted-foreground mt-12">
            No case studies for this category yet — check back soon.
          </p>
        )}
      </div>
    </section>
  );
};

export default CaseStudyGrid;

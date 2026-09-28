import { useState } from "react";
import { Play, X, ExternalLink } from "lucide-react";
import { CaseStudy } from "@/content/success-stories";

interface HeroMediaVideoProps {
  story: CaseStudy;
}

// Hero Variant A: 16:9 video player with brand overlay, play button, and duration badge.
const HeroMediaVideo = ({ story }: HeroMediaVideoProps) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handlePlayClick = () => {
    if (story.externalVideoUrl) {
      window.open(story.externalVideoUrl, "_blank", "noopener,noreferrer");
    } else {
      setIsVideoOpen(true);
    }
  };

  return (
    <>
      <div className="relative w-full rounded-3xl overflow-hidden bg-accent aspect-video lg:h-full group">
        <img
          src={story.thumbnail}
          alt={story.title}
          className="w-full h-full object-contain opacity-50"
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
              {story.duration}
            </div>
          )
        )}
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
    </>
  );
};

export default HeroMediaVideo;

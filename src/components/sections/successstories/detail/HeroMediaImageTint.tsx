import { CaseStudy } from "@/content/success-stories";

interface HeroMediaImageTintProps {
  story: CaseStudy;
}

// Hero Variant B: real photo/graphic with a warm brand tint overlay, for case studies without
// a video yet. Falls back to a plain brand gradient when the story has no matching image.
const HeroMediaImageTint = ({ story }: HeroMediaImageTintProps) => {
  const hasRealImage = !story.thumbnailIsPlaceholder;

  return (
    <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-accent via-accent to-[#FF4438] aspect-video lg:h-full lg:min-h-[360px] flex items-end">
      {hasRealImage ? (
        <img
          src={story.thumbnail}
          alt={story.title}
          className="absolute inset-0 w-full h-full object-contain"
        />
      ) : (
        <div className="relative z-10 p-6 md:p-8">
          {story.tags[0] && (
            <span className="inline-block bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
              {story.tags[0]}
            </span>
          )}
          <p className="text-white/90 text-lg font-semibold leading-snug max-w-md">{story.description}</p>
        </div>
      )}
    </div>
  );
};

export default HeroMediaImageTint;

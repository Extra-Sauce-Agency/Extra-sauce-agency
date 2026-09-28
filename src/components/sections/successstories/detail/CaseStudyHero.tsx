import { CaseStudy } from "@/content/success-stories";
import AtAGlanceCard from "./AtAGlanceCard";
import HeroMediaVideo from "./HeroMediaVideo";
import HeroMediaImageTint from "./HeroMediaImageTint";

interface CaseStudyHeroProps {
  story: CaseStudy;
}

const CaseStudyHero = ({ story }: CaseStudyHeroProps) => {
  return (
    <section className="relative overflow-hidden pt-24 lg:pt-32 pb-16 bg-background">
      {/* Ambient glow orbs */}
      <div className="absolute top-10 left-[8%] w-80 h-80 lg:w-[28rem] lg:h-[28rem] bg-[#FFEFEA] rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 right-[8%] w-72 h-72 lg:w-96 lg:h-96 bg-[#FFEFEA] rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="container-premium relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight text-[#1A1715]">
            {story.title}
          </h1>
          <p className="text-lg text-[#4A4543]">{story.description}</p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-6 lg:gap-8 lg:items-stretch">
          <div className="lg:col-span-3">
            {/* Hero Variant A: Video — used when story.heroVariant === "video" */}
            {/* Hero Variant B: Image with warm tint overlay — the default for stories without a video yet */}
            {story.heroVariant === "video" ? (
              <HeroMediaVideo story={story} />
            ) : (
              <HeroMediaImageTint story={story} />
            )}
          </div>
          <div className="lg:col-span-2">
            <AtAGlanceCard story={story} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHero;

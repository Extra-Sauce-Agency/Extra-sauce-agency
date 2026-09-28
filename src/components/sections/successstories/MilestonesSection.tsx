import { Youtube, Instagram, Linkedin, LucideIcon } from "lucide-react";
import { milestonesSection } from "@/content/success-stories";

const platformIcons: Record<string, LucideIcon> = {
  YouTube: Youtube,
  Instagram: Instagram,
  LinkedIn: Linkedin,
};

const MilestonesSection = () => {
  return (
    <section className="w-full border-y border-[#F0EAE6] bg-[#FAF7F5]/80">
      <div className="container-premium py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-10">
          <div className="lg:max-w-md">
            <p className="text-2xl font-bold text-neutral-900 leading-snug">
              {milestonesSection.supportingText}
            </p>
          </div>

          <div className="flex-1 grid sm:grid-cols-3 gap-8 lg:gap-10 lg:pl-10 lg:border-l lg:border-[#F0EAE6]">
            {milestonesSection.milestones.map((milestone, index) => {
              const Icon = platformIcons[milestone.platform];
              return (
                <div key={index} className="flex items-start gap-3">
                  {Icon && (
                    <div className="w-11 h-11 shrink-0 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  )}
                  <div>
                    <div className="text-3xl md:text-4xl font-extrabold text-neutral-900 leading-none">
                      {milestone.value}
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{milestone.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MilestonesSection;

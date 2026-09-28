import { CheckCircle2 } from "lucide-react";
import { CaseStudy } from "@/content/success-stories";

interface AtAGlanceCardProps {
  story: CaseStudy;
}

const AtAGlanceCard = ({ story }: AtAGlanceCardProps) => {
  return (
    <div className="h-full rounded-3xl border border-neutral-200/80 bg-white p-6 md:p-8 shadow-xl shadow-neutral-100 flex flex-col">
      <div className="flex items-center gap-3 mb-5">
        {story.clientLogo ? (
          <div className="w-12 h-12 rounded-xl border border-border bg-white flex items-center justify-center shrink-0 p-2">
            <img src={story.clientLogo} alt={story.client} className="w-full h-full object-contain" />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold shrink-0">
            {story.client.slice(0, 2).toUpperCase()}
          </div>
        )}
        <div>
          <p className="font-bold text-foreground leading-tight">{story.client}</p>
          {story.industry && <p className="text-xs text-muted-foreground">{story.industry}</p>}
        </div>
      </div>

      <div className="relative inline-block self-start mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-md opacity-50" />
        <div className="relative bg-gradient-to-r from-primary to-secondary text-white font-bold text-xs px-4 py-1.5 rounded-full shadow-lg shadow-rose-500/20">
          {story.tags[0]}
        </div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-6">{story.description}</p>

      {story.metrics && story.metrics.length > 0 && (
        <ul className="space-y-3 mt-auto pt-6 border-t border-border">
          {story.metrics.map((metric) => (
            <li key={metric} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="font-medium text-foreground text-sm">{metric}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AtAGlanceCard;

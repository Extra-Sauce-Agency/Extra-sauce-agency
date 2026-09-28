import { Quote } from "lucide-react";
import { CaseStudyQuote } from "@/content/success-stories";

interface PullQuoteProps {
  quote: CaseStudyQuote;
  client?: string;
}

const PullQuote = ({ quote, client }: PullQuoteProps) => {
  return (
    <div className="relative rounded-2xl border border-[#FFE2DB] bg-[#FFF5F2] p-8 md:p-10 my-10">
      <div className="relative inline-flex mb-5">
        <div className="absolute inset-0 bg-primary/30 blur-md rounded-full" />
        <Quote className="relative w-9 h-9 text-primary" fill="currentColor" />
      </div>

      <p className="text-lg md:text-xl font-medium text-neutral-900 leading-relaxed mb-6">
        "{quote.text}"
      </p>

      <div className="flex items-center gap-3">
        {quote.avatar ? (
          <img
            src={quote.avatar}
            alt={quote.author}
            className="w-12 h-12 rounded-full object-cover border-2 border-white shadow"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold shrink-0">
            {quote.author.slice(0, 2).toUpperCase()}
          </div>
        )}
        <div>
          <p className="font-bold text-foreground leading-tight">{quote.author}</p>
          {quote.role && <p className="text-sm text-muted-foreground">{quote.role}</p>}
        </div>
        {client && (
          <span className="ml-auto hidden sm:inline-flex bg-white border border-[#FFE2DB] text-neutral-700 text-xs font-semibold px-3 py-1.5 rounded-full">
            {client}
          </span>
        )}
      </div>
    </div>
  );
};

export default PullQuote;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CaseStudySection } from "@/content/success-stories";

interface TableOfContentsProps {
  sections: CaseStudySection[];
}

const TableOfContents = ({ sections }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="hidden lg:block sticky top-28 self-start">
      <ul className="space-y-1 border-l border-border">
        {sections.map((section) => {
          const isActive = activeId === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={handleClick(section.id)}
                className={cn(
                  "block pl-4 py-2 -ml-px border-l-2 text-sm transition-colors",
                  isActive
                    ? "border-primary text-primary font-bold"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                {section.navLabel}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="mt-8 rounded-2xl border border-[#FFE2DB] bg-[#FFF5F2] p-5">
        <p className="text-sm font-semibold text-foreground mb-3">Want results like this?</p>
        <Link to="/book-strategy-call">
          <Button size="sm" className="w-full rounded-full">
            Apply Now
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default TableOfContents;

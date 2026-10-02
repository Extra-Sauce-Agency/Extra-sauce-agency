// Success stories/case studies content for easy editing by non-technical users
// Each case study routes to /success-stories/:slug when clicked.
export interface CaseStudyQuote {
  text: string;
  author: string;
  role: string;
  avatar?: string; // Path to a headshot in public/, falls back to initials
}

export interface CaseStudySubsection {
  heading: string; // Rendered as a sub-heading inside the section (e.g. a named "Phase")
  paragraphs: string[];
}

export interface CaseStudyLink {
  label: string;
  url: string;
}

export interface CaseStudySection {
  id: string; // Anchor id, also used by the table of contents
  navLabel: string; // Short label shown in the sticky table of contents
  heading: string;
  paragraphs?: string[];
  subsections?: CaseStudySubsection[]; // Named sub-blocks within the section (e.g. strategy phases)
  bullets?: string[];
  quote?: CaseStudyQuote; // Renders a branded pull-quote inside this section
  links?: CaseStudyLink[]; // External references (LinkedIn posts, YouTube channel, etc.)
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string; // Outcome-driven title, e.g. "How Acme built a $1.2M pipeline from zero"
  client: string; // Client/company name shown as the logo badge initials
  clientLogo?: string; // Path to a real logo in public/, falls back to initials
  description: string; // 1-2 line snippet explaining the execution, shown on the grid card
  industry?: string; // Shown in the detail page's "At a Glance" card
  tags: string[];
  thumbnail: string; // Path to placeholder/real image in public/
  thumbnailIsPlaceholder?: boolean; // True when thumbnail is borrowed from another story and doesn't actually match this one — dims it in the grid
  videoUrl?: string; // Direct, embeddable video file — leave blank until one exists
  externalVideoUrl?: string; // Review-tool link (e.g. Frame.io) that opens in a new tab instead of embedding
  duration?: string; // e.g. "3 min"
  heroVariant?: "video" | "image"; // Detail-page hero layout — defaults to "image" when omitted
  quote?: string;
  author?: string;
  authorRole?: string;
  authorAvatar?: string; // Path to a headshot in public/, falls back to initials
  metrics?: string[]; // 2-3 key result bullet points
  featured?: boolean; // Featured story is shown in the hero
  sections?: CaseStudySection[]; // Full detail-page narrative; auto-generated from the fields above when omitted
}

export const caseStudies: CaseStudy[] = [
  {
    id: "irani-law",
    slug: "irani-law",
    title: "How Irani Law went from 50 LinkedIn followers to 15 qualified meetings a month",
    client: "Irani Law",
    clientLogo: "/logos/irani-law.png",
    description: "Nadia Irani built her Mississauga practice on referrals and in-person networking. Ninety days after we switched on the LinkedIn Revenue System, financial advisors were booking time with her in the DMs.",
    industry: "Legal Services — Estate, Real Estate & Business Law",
    tags: ["LinkedIn Revenue System"],
    thumbnail: "/IraniLawStudy.png",
    videoUrl: "/IraniLawVideo.mp4",
    duration: "3 min",
    heroVariant: "video",
    quote: "I just want to say, I have a good ghostwriter. We did over 1M impressions on LinkedIn in like four, five months. We had to start keeping up with business opportunities in the DMs. I never knew LinkedIn could bring in business like this.",
    author: "Nadia Irani",
    authorRole: "CEO of Irani Law",
    authorAvatar: "/nadiairani.png",
    metrics: ["1.5M+ impressions in 90 days", "~15 qualified meetings/month", "~20% outbound reply rate"],
    featured: true,
    sections: [
      {
        id: "overview",
        navLabel: "Overview",
        heading: "Why Nadia came to us",
        paragraphs: [
          "Nadia Irani runs Irani Law, an estate planning, real estate, and business law firm in Mississauga, Ontario. Her pipeline came from two places: referrals and rooms. Both worked. Neither was predictable. Some months the phone rang. Some months it went quiet, and she had no lever to pull.",
          "She could see what LinkedIn was doing for other professionals in her market. Her own profile had 50 followers and no posts. She also had a reason to hesitate. Her colleagues, her referral partners, and half the Ontario bar are on that platform. One post that sounded like a stranger wrote it would cost her more credibility than posting nothing at all.",
          "Most executives arrive with the same brief: make the slow months stop.",
        ],
      },
      {
        id: "challenge",
        navLabel: "The Challenge",
        heading: "What was actually missing",
        paragraphs: ["Nadia didn't have an expertise problem. She had three gaps:"],
        bullets: [
          "A funnel. Attention with nowhere to land leaks. Anyone who clicked her name after a good post found a profile and a web presence that said nothing about the depth of her practice.",
          "A ghostwriter that can convey her expertise. This is the objection that stops most executives from ever starting. Ghostwriting fails when the wrong writer gets involved.",
          "Push & Pull GTM motions. Content generates the pull. Without the push, it sits there. Content gets the first impression but paired with strategic outbound is what gets meetings booked.",
        ],
      },
      {
        id: "solution",
        navLabel: "The Solution & Strategy",
        heading: "What we built",
        subsections: [
          {
            heading: "Phase 1: MarketFit Spinner™",
            paragraphs: [
              "We built Irani Law a lean website and rebuilt Nadia's LinkedIn profile and company page around her executive brand. Anyone arriving from a post now landed somewhere that matched the authority of what they had just read.",
            ],
          },
          {
            heading: "Phase 2: Scroll-Stopping Engine™",
            paragraphs: [
              "Before writing a word, we built an executive voice profile for Nadia. Then we ran two to three content calls a month to pull out her POV, her industry bets, her contrarian takes, and what she was seeing across live files. Our technical writers turned those calls into narrative-driven posts. Nadia approved them. Her colleagues never knew anyone else was involved.",
            ],
          },
          {
            heading: "Phase 3: Warm Outbound System™",
            paragraphs: [
              "Our team analyzed who engaged with each post and our fractional SDR opened conversations with the relevant buyers. We built tier 1 and tier 2 account lists around her ideal audience, with one specific target in mind: financial advisors, who sit next to the exact estate planning conversations Nadia wants to be in. LinkedIn reply rates average around 5%. Across our clients we see roughly 20%.",
            ],
          },
          {
            heading: "Phase 4: C-Suite Paid Ads Strategy™",
            paragraphs: [
              "We never had to turn this on. Nadia has already reached her max capacity with the first 3 phases.",
            ],
          },
          {
            heading: "The Lever We Never Pulled",
            paragraphs: [
              "Phase 4 exists to throw gas on the fire when we want to accelerate results, target a defined account list, or to buy reach when organic and outbound cannot generate enough of it. Nadia hit capacity before we got there. Fifteen qualified meetings a month, all sourced from content and LinkedIn outbound, filled her calendar past what her firm could absorb.",
              "Pouring paid spend into a practice that cannot take another meeting gets only an unnecessary bigger invoice. We left the lever alone and told her why.",
            ],
          },
        ],
      },
      {
        id: "results",
        navLabel: "Key Results & Pipeline Impact",
        heading: "Results in the first 90 days",
        bullets: [
          "1.5 million+ impressions once we found her content market fit",
          "~15 qualified meetings a month, booked in the DMs",
          "45 days from outbound launch to her first financial advisor meetings",
          "~20% reply rate against a 5% platform average",
          "Speaking invitations, inbound, from people who found her through the content",
        ],
        paragraphs: [
          "She started with 50 followers and a referral pipeline she could not forecast. She ended the quarter turning down meetings.",
        ],
        quote: {
          text: "I just want to say, I have a good ghostwriter. We did over 1M impressions on LinkedIn in like four, five months. We had to start keeping up with business opportunities in the DMs. I never knew LinkedIn could bring in business like this.",
          author: "Nadia Irani",
          role: "CEO of Irani Law",
          avatar: "/nadiairani.png",
        },
      },
      {
        id: "looking-ahead",
        navLabel: "Looking Ahead",
        heading: "Looking Ahead",
        paragraphs: [
          "Referrals and networking rooms will always work. They just will not scale, and they will never give you predictable pipeline for next quarter.",
          "The system we built for Nadia is the same one we run for B2B founders and executives who are done guessing at pipeline. If that sounds like your situation, we'll book a strategy call and we will map out what your version looks like.",
        ],
      },
      {
        id: "see-the-work",
        navLabel: "See the Work",
        heading: "See the Work",
        links: [
          { label: "Post example 1", url: "https://lnkd.in/p/gvUyyqfa" },
          { label: "Post example 2", url: "https://lnkd.in/p/gK647YAZ" },
          { label: "Post example 3", url: "https://lnkd.in/p/gChQA4ht" },
        ],
      },
    ],
  },
  {
    id: "wismolabs",
    slug: "wismolabs",
    title: "When Google Ads stopped working: how WISMOlabs rebuilt its go-to-market",
    client: "WISMOlabs",
    clientLogo: "/logos/wismo-labs.png",
    description: "The Google ads channel had gone flat, no sales team, no cold outbound, and no content. We rebuilt the engine around a brand term he now owns, 'The Peak Engagement Window™'.",
    industry: "Ecommerce — Post-Purchase Software",
    tags: ["Webinar Revenue System"],
    thumbnail: "/study2.png",
    thumbnailIsPlaceholder: true,
    heroVariant: "image",
    metrics: [
      "Monthly expert-panel webinar launched",
      "New outbound-fed partnership pipeline",
      "Full narrative + homepage rebuild",
    ],
    sections: [
      {
        id: "overview",
        navLabel: "Overview",
        heading: "Why Dimitri came to us",
        paragraphs: [
          "Dimitri runs WISMOlabs, a post-purchase experience platform for ecommerce consumer good brands. Google Ads and SEO carried his pipeline but customer acquisition (CAC) started to increase and campaigns stopped being as effective/profitable. The returns stopped justifying it.",
          "By that point he had also stripped out his sales team and the process behind it. No outbound activity. No content program. SEO still brought visitors to the site and booked some meetings, and that was the entire engine but that also began to decay.",
          "He wanted to go after a specific vertical inside ecommerce. He also knew the market had never heard from him directly. Dimitri has real expertise on the post-purchase problem, and none of it was reaching the buyers he needed to earn trust with.",
        ],
      },
      {
        id: "challenge",
        navLabel: "The Challenge",
        heading: "What was actually missing",
        paragraphs: [
          "Dimitri rarely made any video content on LinkedIn or YouTube besides a product demo. That was the surface problem.",
          "Underneath it was a harder one. Post-purchase solutions are multiplying, and every one of them lists the same features. Comparing features does not move a buyer off the vendor they already pay. Dimitri needed a narrative that gave his audience a reason to jump ship, and he needed it to hold across every touchpoint. His core advantage compared to competitors was his domain expertise and he needed to start leveraging it in the content.",
        ],
      },
      {
        id: "solution",
        navLabel: "The Solution & Strategy",
        heading: "What we built",
        subsections: [
          {
            heading: "Phase 1: MarketFit Spinner™",
            paragraphs: [
              "We established Dimitri as an expert on post-purchase experience, connected his career experience to the mission he's on with WISMOlabs, and established a company narrative to separate his brand from others in the market. We coined the Peak Engagement Window, the period after checkout when a customer pays closer attention to a brand than at any other moment in the relationship. That term now anchors the messaging everywhere.",
              "Then we rewrote everything to match: WISMOlabs homepage copy, Dimitri's personal LinkedIn (the About section banner, which we restructured to connect his career history, how he came to found WISMOlabs, and the mission behind it), and the company LinkedIn page.",
            ],
          },
          {
            heading: "Phase 2: Scroll-Stopping Engine™",
            paragraphs: [
              "Dimitri gave us one hour a week on Riverside. We interviewed him and turned each session into four to eight posts spanning carousels, short-form video, and text. We tested formats, read the performance data, and doubled down on what worked. All of it went into a content asset bank WISMOlabs owns and keeps long after our engagement ends.",
              "Then we launched the webinar program: monthly sessions with a panel of expert speakers. One long-form production a month fed the entire content engine downstream.",
            ],
          },
          {
            heading: "Phase 3: Warm Outbound System™",
            paragraphs: [
              "We built tier 1 and tier 2 account lists of WISMOlabs' ideal customers and ran LinkedIn and email outbound against them. The invitation was the webinar which led to nurturing an audience rather than cold selling.",
            ],
          },
        ],
      },
      {
        id: "results",
        navLabel: "Key Results & Pipeline Impact",
        heading: "The panelists & attendees became the opportunity",
        paragraphs: [
          "We built the webinar program to nurture prospects and build potential partnerships.",
          "It also did something we had not planned for. The expert speakers we brought in to lend the panel started asking about the product themselves, and resulted in partnership conversations after the session. Same thing happened with the attendees to see if this can work at their companies.",
        ],
      },
      {
        id: "looking-ahead",
        navLabel: "Looking Ahead",
        heading: "Looking Ahead",
        paragraphs: [
          "Paid channels buy attention. They do not build the reason a buyer should switch to you, and when the channel plateaus you find out how much of your pipeline was rented.",
          "We build the narrative, the content, and the outbound motion that builds a solid foundation for WISMOlab's go-to-market strategy. If your growth depends on one channel, book a strategy call and we will map out how to build a sustainable GTM motion with content.",
        ],
      },
      {
        id: "see-the-work",
        navLabel: "See the Work",
        heading: "See the Work",
        links: [
          {
            label: "Post example 1",
            url: "https://www.linkedin.com/posts/dmitri-rassadkine_shipping-updates-arent-operational-they-activity-7449551618343206912-_Yl2",
          },
          {
            label: "Post example 2",
            url: "https://www.linkedin.com/posts/dmitri-rassadkine_if-youve-never-worked-in-e-commerce-here-activity-7417959578992152576-Nt7M",
          },
          {
            label: "Webinar example: Turn \"Where Is My Order?\" Into Repeat Orders (The 2026 Post-Purchase Playbook)",
            url: "https://www.youtube.com/watch?v=uOv3JzUvgH0&feature=youtu.be",
          },
        ],
      },
    ],
  },
  {
    id: "goalcast-unseen",
    slug: "goalcast-unseen",
    title: "Five months to save a YouTube show: how we grew Goalcast's Unseen to 500K subscribers",
    client: "Goalcast",
    clientLogo: "/logos/goalcast.png",
    description: "Unseen had a deadline. Prove the audience was there or get shelved. We built the distribution system, ran the tests, and put up 16 million views and $124K in ad revenue inside five months.",
    industry: "Digital Media",
    tags: ["Podcast Revenue System"],
    thumbnail: "/study3.png",
    heroVariant: "image",
    quote: "Manny came in and helped us streamline our social media distribution system and kept us up to date with the best strategies. We've seen massive growth the last 6 months.",
    author: "Alex Salois",
    authorRole: "Senior Content Manager @ Goalcast",
    authorAvatar: "/alexsalois.png",
    metrics: ["50K → 500K+ subscribers", "16M+ views in 4 months", "$124K+ in ad revenue"],
    sections: [
      {
        id: "overview",
        navLabel: "Overview",
        heading: "Why Goalcast came to us",
        paragraphs: [
          "Goalcast is a digital media publisher with an audience in the tens of millions. Four months earlier they had launched Unseen, a weekly true crime series on YouTube with distribution across social.",
          "We were brought onto the show team to grow its social presence. What we walked into was a decision that had not been made yet. Stakeholders were still weighing whether Unseen would continue, and the window to prove it was roughly six months.",
        ],
      },
      {
        id: "challenge",
        navLabel: "The Challenge",
        heading: "What was actually missing",
        paragraphs: [
          "The show had episodes. It did not have a proper omni-channel distribution system.",
          "Every week we produced a piece of content that needed to reach channels in different formats, get tested, and get tracked. Without a clean workflow for that, things get skipped, versions get confused, and nobody can tell you which thumbnail earned the views. A team can work hard all quarter and still have no idea what is working.",
          "Goalcast already had internal social systems in place. We brought our content systems in and merged the two without anyone relearning their job.",
        ],
      },
      {
        id: "solution",
        navLabel: "The Solution & Strategy",
        heading: "What we built",
        bullets: [
          "A weekly release rhythm. Every episode out Thursday morning on YouTube, on schedule, without exception. Consistency is the least glamorous variable in audience growth and the one most shows lose first.",
          "A dedicated Shorts channel from zero. Rather than diluting the main channel's feed, we stood up a separate channel built only for short-form and grew it from nothing to 50k+ followers.",
          "Research behind every claim. We worked with researchers to ideate episodes and source the context, then verify the facts underneath anything the show asserted. True crime punishes sloppiness, and audience trust in this category is the whole asset.",
          "A professional narrator. We hired and directed narration for every episode, which gave the series a consistent voice viewers could recognize across platforms.",
          "A testing machine. This is the part that mattered most. We ran thumbnails and titles through Meta's A/B testing before anything went live on YouTube. We set up burner accounts on TikTok to test more than ten headline variants on clips. By the time an episode published, the title and thumbnail had already been validated through an audience.",
        ],
      },
      {
        id: "results",
        navLabel: "Key Results & Pipeline Impact",
        heading: "Results in five months",
        paragraphs: [
          "Unseen was not cancelled. It continued to get budget to continue building. Eventually, the team went on to hire internal staff and continue to build off the content systems we put in.",
        ],
        bullets: [
          "Main channel: 50K to 500K+ subscribers",
          "New Shorts channel: 0 to 60K subscribers",
          "16 million+ views in 4 months",
          "$124K+ in ad revenue",
          "Unseen renewed and still running today",
        ],
        quote: {
          text: "Manny came in and helped us streamline our social media distribution system and kept us up to date with the best strategies. We've seen massive growth the last 6 months.",
          author: "Alex Salois",
          role: "Senior Content Manager @ Goalcast",
          avatar: "/alexsalois.png",
        },
      },
      {
        id: "looking-ahead",
        navLabel: "Looking Ahead",
        heading: "Looking Ahead",
        paragraphs: [
          "Growing a true crime series and building a founder's executive brand look like different jobs. The content systems underneath them is identical.",
          "Both come down to whether you have a system that gets the work out on schedule, tests it against a real audience, and tells you which version earned the result. Most teams have opinions about what their audience wants. We build the content testing environment that answers it.",
          "If your content is going out and you cannot say what is working, book a strategy call and we will map out what your version looks like.",
        ],
      },
      {
        id: "see-the-work",
        navLabel: "See the Work",
        heading: "See the Work",
        links: [{ label: "Unseen on YouTube", url: "https://www.youtube.com/@unseentruecrime" }],
      },
    ],
  },
  {
    id: "ice-exchange",
    slug: "ice-exchange",
    title: "Ex-hockey player turned CEO created two pipelines: how Ice Exchange booked rink owners and investors from the same content engine",
    client: "Ice Exchange",
    clientLogo: "/logos/ice-exchange.png",
    description: "Chris Myhro was building pipeline for an ice rental marketplace and raising for it at the same time. We got inbound inquires in the first 30 days of posting content. Within 45 days of launching outbound, he was taking 10+ meetings a month.",
    industry: "Sports Tech — Marketplace",
    tags: ["Podcast Revenue System"],
    thumbnail: "/study3.png",
    thumbnailIsPlaceholder: true,
    heroVariant: "image",
    metrics: ["Inbound DMs within 30 days", "10+ meetings/month within 45 days", "5 channels fed by 1 hr/week"],
    sections: [
      {
        id: "overview",
        navLabel: "Overview",
        heading: "Why Chris came to us",
        paragraphs: [
          "Chris Myhro spent 30 years in hockey as a player, a coach, and an organizational director before he started Ice Exchange. Former pro and Division I player. Founding member of the United States Elite League. He knows what a rink manager deals with at 6am because he has been on the other side of that phone call.",
          "He came to us with two goals running at once. He needed pipeline with rink owners to build supply, and he needed to reach investors to fund the next developments of the marketplace.",
        ],
      },
      {
        id: "challenge",
        navLabel: "The Challenge",
        heading: "What was actually missing",
        paragraphs: [
          "Chris could see what LinkedIn and YouTube were doing for other founders. He had no content or outbound system for it, and he was too deep in building the business for trial & error.",
          "He had no way to consistently produce content in multiple formats without it eating his week and burning him out. He had no post-production team to cut that content in a look that reflected Ice Exchange's brand. Also he did not have a proven playbook to getting meetings booked in the LinkedIn DMs with investors and rink owners.",
        ],
      },
      {
        id: "solution",
        navLabel: "The Solution & Strategy",
        heading: "What we built",
        subsections: [
          {
            heading: "Phase 1: MarketFit Spinner™",
            paragraphs: [
              "Ice Exchange competes for attention with competitors that are VC-backed and run by people who have never managed a rink or played sports. Chris had a superpower to leverage. He is an actual hockey player that knows what it's like to be in his audience's shoes. He's one of the people and we built his positioning around that.",
              "We carried the same narrative across his social profiles and the Ice Exchange site so every touchpoint said the same thing: this platform is built by one of us.",
            ],
          },
          {
            heading: "Phase 2: Scroll-Stopping Engine™",
            paragraphs: [
              "Chris gave us 60 minutes a week on Riverside. We pulled out his career stories, his POV on where the sports rental space is broken, his bets on where it goes next, and his build-in-public updates as the marketplace momentum.",
              "Our post-production team cut each session into a flywheel of content running across LinkedIn, YouTube, TikTok, Instagram, and X, edited in Ice Exchange's own visual identity. Everything lands in a content asset bank the company owns and keeps.",
            ],
          },
          {
            heading: "Phase 3: Warm Outbound System™",
            paragraphs: [
              "The content did the heavy lifting first. Inbound inquiries started arriving in his LinkedIn DMs inside the first 30 days, before outbound was live.",
              "Once we launched the outbound campaign, we ran it against two account lists in parallel: rink owners on the supply side, and investors on the funding side. Within 45 days it was producing more than ten meetings a month across both.",
              "Paid amplification is the phase still waiting. Chris is at capacity with the traction he already has and heads-down on v2 of the product, so we are holding it until the bandwidth is there.",
            ],
          },
        ],
      },
      {
        id: "results",
        navLabel: "Key Results & Pipeline Impact",
        heading: "By the sixth session, Chris found his content flow",
        paragraphs: [
          "The first few content calls are always the hardest part of this work. Most executives are uncomfortable on camera and convinced they are bad at it, and that's because it's a new skill being formed.",
          "Somewhere around session six or eight, Chris has put in the reps where content production started to be in flow state. Less ums and uhs, and more confident communication and body language. He was naturally doing the best practices we shared in training. He started arriving with things he wanted to say instead of waiting to be interviewed.",
          "Then people began recognizing him in person from the content. That is the moment we all realized that the content was building Chris's reputation in the hockey and sports rental space.",
        ],
        bullets: [
          "Inbound LinkedIn inquiries within the first 30 days",
          "10+ meetings a month with rink owners and prospective investors within 45 days of outbound",
          "Five social media channels fed by 1hr/week of CEO's time",
          "A content asset bank Ice Exchange owns",
        ],
      },
      {
        id: "looking-ahead",
        navLabel: "Looking Ahead",
        heading: "Looking Ahead",
        paragraphs: [
          "Chris had the expertise before he met us. What he did not have was a way to get it in front of rink owners and investors every week without giving up the hours he needed to build the product.",
          "That is the whole job. If you are sitting on domain expertise your market never hears, book a strategy call and we will map out what your version looks like.",
        ],
      },
      {
        id: "see-the-work",
        navLabel: "See the Work",
        heading: "See the Work",
        links: [
          {
            label: "Post example 1",
            url: "https://www.linkedin.com/posts/chrismyhroicex_i-didnt-think-id-still-be-talking-about-activity-7407088486312325121-yotC",
          },
          {
            label: "Post example 2",
            url: "https://www.linkedin.com/posts/chrismyhroicex_hockeys-biggest-problem-isnt-talent-if-activity-7390749530285322240-1ri3",
          },
          {
            label: "Post example 3",
            url: "https://www.linkedin.com/posts/chrismyhroicex_hockey-is-a-rich-mans-gameand-thats-the-activity-7342174478514221057-f5vV",
          },
        ],
      },
    ],
  },
  {
    id: "psii",
    slug: "psii",
    title: "How PSII stopped losing to ADP and added $423K in revenue",
    client: "PSII",
    clientLogo: "/logos/psii.png",
    description: "PSII was burning Google Ads budget on meetings that went nowhere. We rebuilt the brand identity, company messaging, put the CEO's expertise in front of the market, and aligned the content with outbound. Sixteen meetings a month, $423K+ in attributed revenue, and a $1B shoe brand handing them their Europe payroll.",
    industry: "Payroll & Compliance — Cross-Border",
    tags: ["LinkedIn Revenue System"],
    thumbnail: "/study2.png",
    heroVariant: "image",
    quote: "The new branding and executive content resulted in dream accounts coming back to book a demo and thought we were a completely different company.",
    author: "Vik Saini",
    authorRole: "Head of Sales, PSII",
    authorAvatar: "/viksoni.png",
    metrics: ["$423K+ in attributed revenue", "~16 qualified meetings/month", "$1B shoe brand signed"],
    sections: [
      {
        id: "overview",
        navLabel: "Overview",
        heading: "Why PSII came to us",
        paragraphs: [
          "Payroll Solutions International handles payroll and compliance for companies operating across borders, out of offices in Canada, the US, Mexico, Costa Rica, the UK, and Ireland.",
          "Their pipeline came from referrals and Google Search Ads, and the spend was getting expensive for low-quality meetings. Wrong-fit companies, prospects outside their ICP, and no-shows who booked and vanished. Their sales team spent time on conversations that were never going to close, and the paid advertising bill arrived every month regardless.",
          "The deeper issue showed up during vetting. When a buyer compared PSII against ADP and the other large payroll platforms, nothing on the page explained why PSII was the right choice. Same category, same claims, smaller logo. A buyer with no reason to choose you defaults to the biggest name in the room.",
          "PSII could not keep paying for that, so they brought us in.",
        ],
      },
      {
        id: "challenge",
        navLabel: "The Challenge",
        heading: "What was actually missing",
        paragraphs: [
          "PSII's real strength is international payroll. Companies expanding into a new country face compliance problems and PSII solves those problems well. None of their online touchpoints said this messaging.",
          "You cannot outspend ADP. Bidding against a market leader on the same keywords, with the same value proposition, is buying the privilege of being the second option. The way out is to stop being comparable.",
          "That meant more than a messaging refresh. It meant rebuilding the brand and every touchpoint a buyer hits before they ever talk to sales.",
          "Also, PSII have a huge advantage by having their founder still active in the company to share his thought leadership and build an executive brand that attracts quality leads.",
        ],
      },
      {
        id: "solution",
        navLabel: "The Solution & Strategy",
        heading: "What we built",
        subsections: [
          {
            heading: "Phase 1: MarketFit Spinner™",
            paragraphs: [
              "We rebuilt PSII's visual identity around the founder's Indigenous heritage, which is a real part of who owns and runs this company.",
              "We sharpened the product and brand messaging around international payroll, then rebuilt the website experience end to end: new visual identity, a clear focus on cross-border payroll, and a narrative that creates a clear distinction and standards with international payroll. A buyer landing on the new site is no longer comparing PSII to ADP.",
              "We carried the same messaging across every online touchpoint so the story held wherever a buyer found them.",
            ],
          },
          {
            heading: "Phase 2: Scroll-Stopping Engine™",
            paragraphs: [
              "The founder, Michael Coté, has more than 20 years in accounting and payroll. That experience was the company's most persuasive asset and the market had never heard it in his own words.",
              "We built a founder-led content program on his personal LinkedIn covering his POV on international payroll, what those two decades taught him, and the methodology behind how PSII operates. We paired it with podcast placements to push the same message.",
            ],
          },
          {
            heading: "Phase 3: Warm Outbound System™",
            paragraphs: [
              "We worked directly with PSII's sales team to target content engagers and cold leads through LinkedIn with the new value proposition and the new narrative. The rebrand, the content, and the first line of a cold message now say the same thing.",
            ],
          },
        ],
      },
      {
        id: "results",
        navLabel: "Key Results & Pipeline Impact",
        heading: "Then a $1B shoe brand handed them Europe",
        paragraphs: [
          "PSII closed a $1B footwear brand, Lids Inc. for its entire European payroll.",
          "That is the kind of account that used to go to ADP by default, and it is the clearest evidence that the repositioning worked. Nothing about PSII's service changed. What changed is that a buyer at that scale could finally see why PSII was the right call, and had a reason to pick them over the name everyone already knows.",
        ],
        bullets: [
          "$423K+ in additional revenue, attributed by the client to this work",
          "~16 qualified meetings a month",
          "A $1B footwear brand signed for European payroll",
          "Dream accounts returning inbound to book demos",
        ],
        quote: {
          text: "The new branding and executive content resulted in dream accounts coming back to book a demo and thought we were a completely different company.",
          author: "Vik Saini",
          role: "Head of Sales, PSII",
          avatar: "/viksoni.png",
        },
      },
      {
        id: "looking-ahead",
        navLabel: "Looking Ahead",
        heading: "Looking Ahead",
        paragraphs: [
          "PSII continues to run the founder-led content and outbound motion as its primary channel for landing accounts that once defaulted to the market leader.",
        ],
      },
    ],
  },
  {
    id: "true-ally",
    slug: "true-ally",
    title: "Sharlene Gumbs started booking calls with our LinkedIn Revenue System",
    client: "True Ally",
    clientLogo: "/logos/true-ally.png",
    description: "Sharlene left a corporate career to build her own consulting practice but needed a brand that reflected her. We rebuilt the brand, packaged the service offer, and taught her to run the LinkedIn Revenue engine herself.",
    industry: "DEI & Workplace Culture Consulting",
    tags: ["LinkedIn Revenue System"],
    thumbnail: "/study1.png",
    heroVariant: "image",
    quote: "Manny came in and helped us streamline our social media distribution system and kept us up to date with the best strategies. We've seen massive growth the last 6 months.",
    author: "Sharlene Gumbs",
    authorRole: "Founder and Principal, True Ally",
    authorAvatar: "/sharlenegumbs.png",
    metrics: [
      "Full rebrand: Phoenix Wellness → True Ally",
      "First 10 posts co-produced, then self-run",
      "Inbound DMs from a previously silent audience",
    ],
    sections: [
      {
        id: "overview",
        navLabel: "Overview",
        heading: "Why Sharlene came to us",
        paragraphs: [
          "Sharlene Gumbs spent her career inside corporate organizations helping them build healthier, more inclusive workplaces. After COVID she left to do that work on her own terms.",
          "She could see what LinkedIn was doing for other independent consultants and she wanted in. What she did not have was a proven system. No strategies for what to post, no framework for what made a post land with a buyer, and no way to turn attention on the feed into a booked call.",
        ],
      },
      {
        id: "challenge",
        navLabel: "The Challenge",
        heading: "What was missing",
        paragraphs: ["Three problems, and the content one was the smallest of them."],
        bullets: [
          "The brand identity was wrong. She was operating as Phoenix Wellness, a name that said nothing about who she was or reflected Sharlene's unique experience. In a founder-led practice, the buyer is buying the founder. Sharlene hiding herself behind a corporate brand was working against her.",
          "The offer was not packaged. A decision maker reviewing her services could not tell what they were buying, in what shape, or what it would do for their organization.",
          "There was no way to create demand. Her pipeline had no repeatable source. She needed a push & pull motion that produced conversations consistently every month.",
        ],
      },
      {
        id: "solution",
        navLabel: "The Solution & Strategy",
        heading: "What we built",
        subsections: [
          {
            heading: "Phase 1: MarketFit Spinner™",
            paragraphs: [
              "We rebranded Phoenix Wellness to True Ally, a name that carries what she actually does for the organizations she works with. We applied it across the website and social presence.",
              "We rebuilt her personal and company LinkedIn page around the new brand and her unique point of view, written for the B2B decision makers who would be evaluating her.",
              "Then we packaged the service offerings into a clear, comparable set with an obvious value proposition, and carried that packaging across every touchpoint a buyer would hit.",
            ],
          },
          {
            heading: "Phase 2: Scroll-Stopping Engine™",
            paragraphs: [
              "Here we did something different. Instead of writing for her, we taught her how to write insightful binge-worthy posts.",
              "We ran her through what makes LinkedIn copy work, the structural difference between a post that gets scrolled past and one that stops a buyer, and how to build a narrative out of what she already knew.",
              "Then we worked alongside her to produce her first ten posts.",
            ],
          },
          {
            heading: "Phase 3: Warm Outbound System™",
            paragraphs: [
              "Content made her current audience start seeing. As the posts went out, inquiries started arriving in her DMs from people who had been quietly following her career.",
              "We taught her how to convert that. Social selling on the feed, how to handle interest in the DMs, and how to move a warm conversation to a booked call.",
            ],
          },
        ],
      },
      {
        id: "results",
        navLabel: "Key Results & Pipeline Impact",
        heading: "The point was to make ourselves unnecessary",
        paragraphs: [
          "Most agencies build a dependency. The content stops when the retainer stops, and everyone involved knows it.",
          "True Ally is a founder-led practice, and Sharlene needed to own this. So we built her the brand, the packaging, and the assets, then taught her the two skills that actually produce pipeline: writing posts her buyers respond to, and how to generate conversations in the DMs that turns into calls.",
        ],
        quote: {
          text: "Manny came in and helped us streamline our social media distribution system and kept us up to date with the best strategies. We've seen massive growth the last 6 months.",
          author: "Sharlene Gumbs",
          role: "Founder and Principal, True Ally",
          avatar: "/sharlenegumbs.png",
        },
      },
      {
        id: "looking-ahead",
        navLabel: "Looking Ahead",
        heading: "Looking Ahead",
        paragraphs: [
          "A founder-led practice lives or dies on whether the market can find the founder, understand what they sell, and see a reason to reach out or respond.",
          "If you have the expertise and no system carrying it to the people who need it, book a strategy call and we will map out what your version looks like.",
        ],
      },
      {
        id: "see-the-work",
        navLabel: "See the Work",
        heading: "See the Work",
        links: [
          {
            label: "Post example 1",
            url: "https://www.linkedin.com/posts/sharlenegumbs_im-a-black-woman-black-women-are-getting-activity-7224405963473137664-7Fr3",
          },
          {
            label: "Post example 2",
            url: "https://www.linkedin.com/posts/sharlenegumbs_celebrating-my-first-year-as-a-full-time-activity-7224078327790125057-y-f5",
          },
        ],
      },
    ],
  },
  {
    id: "easyaudit",
    slug: "easyaudit",
    title: "EasyAudit: a marketing-savvy CEO still wanted our LinkedIn Revenue System",
    client: "EasyAudit",
    description: "Christian Khoury already understood content flywheels and knew LinkedIn could carry his pipeline. He came to us for the system, not the labour. We ran a sprint, handed over the frameworks, and he runs the engine now.",
    industry: "Compliance / RegTech",
    tags: ["LinkedIn Revenue System"],
    thumbnail: "/easyaudit-case-study.jpg",
    videoUrl: "/EasyAuditVideo.mp4",
    heroVariant: "video",
    quote: "When an agency can produce results in 90 days, that's a very good sign. Very few agencies can actually say that. Extra Sauce is running a shop that produces results.",
    author: "Christian Khoury",
    authorRole: "CEO, EasyAudit",
    authorAvatar: "/christiankhoury.png",
    metrics: [
      "Results inside a 90-day sprint",
      "Outbound meetings booked in under 30 days",
      "Frameworks handed over, self-operated after",
    ],
    sections: [
      {
        id: "overview",
        navLabel: "Overview",
        heading: "Why Christian came to us",
        paragraphs: [
          "Christian Khoury is the CEO of EasyAudit, which takes the compliance work companies dread and runs it for them end to end.",
          "He arrived already fluent. He understood how content flywheels work, he had watched LinkedIn produce pipeline for other founders, and he had decided it would be his primary pipeline source. That is a more informed starting point than most executives have when they first call us.",
          "What he had also watched was the noise. Plenty of people on LinkedIn generating attention and no pipeline, plenty of advice that contradicts itself, and no clear way to tell which parts actually work. He did not want to spend a year sorting the signal from the rest of it.",
        ],
      },
      {
        id: "challenge",
        navLabel: "The Challenge",
        heading: "What was actually missing",
        paragraphs: [
          "Christian could do the work. What he lacked was the system underneath it.",
          "He wanted the frameworks and the workflows behind the Sauce Recipe™, the parts we spent years testing across client accounts to find out what holds. Buying that is faster than learning on his own.",
          "So we structured the engagement differently. Instead of a done-for-you retainer, we ran a sprint: a focused set of consulting calls to install the content engine inside his company, built for him to operate himself.",
        ],
      },
      {
        id: "solution",
        navLabel: "The Solution & Strategy",
        heading: "What we built",
        subsections: [
          {
            heading: "Phase 1: MarketFit Spinner™",
            paragraphs: [
              "We built the strategic narrative for EasyAudit, the argument that gives a prospect a reason to leave the way they handle compliance today and move to his. Not a feature list. A case for why the existing model is the problem.",
              "Then we rebuilt his LinkedIn profile to function as a landing page. When content sends someone to check him out, the profile has to hold them and carry the same narrative. Most executive profiles lose that traffic because of a poor first impression.",
            ],
          },
          {
            heading: "Phase 2: Scroll-Stopping Engine™",
            paragraphs: [
              "We worked with Christian to find the content ideas worth his time and package them as a point of view rather than commentary, so his audience had a reason to follow the journey he was on rather than just agree with a post.",
              "We audited his content, edited it, wrote hooks, and tightened how he expressed his ideas so they landed with the buyers he needed to reach.",
            ],
          },
          {
            heading: "Phase 3: Warm Outbound System™",
            paragraphs: [
              "We worked with Christian to achieve two outbound goals, to book meetings with his qualified ICP and with potential investors. We've set up outbound campaigns that started achieving these results in under 30 days of running.",
            ],
          },
        ],
      },
      {
        id: "results",
        navLabel: "Key Results & Pipeline Impact",
        heading: "Results",
        quote: {
          text: "When an agency can produce results in 90 days, that's a very good sign. Very few agencies can actually say that. Extra Sauce is running a shop that produces results.",
          author: "Christian Khoury",
          role: "CEO, EasyAudit",
          avatar: "/christiankhoury.png",
        },
      },
      {
        id: "looking-ahead",
        navLabel: "Looking Ahead",
        heading: "Looking Ahead",
        paragraphs: [
          "The executives who understand modern B2B buying are usually the ones who call us. They know what a LinkedIn revenue engine is worth. What they do not want is to spend a year discovering which parts of the advice hold up.",
          "We already ran that experiment. If you would rather buy the system than build it, book a strategy call and we will map out what your version looks like.",
        ],
      },
    ],
  },
  // Add more case studies as needed
];

// Returns the detail page's narrative sections for a case study — its own hand-written
// `sections` when present, otherwise a reasonable set derived from its summary fields.
export function getStorySections(story: CaseStudy): CaseStudySection[] {
  if (story.sections) return story.sections;

  const system = story.tags[0] ?? "content system";

  return [
    {
      id: "overview",
      navLabel: "Overview",
      heading: "Overview",
      paragraphs: [story.description],
    },
    {
      id: "challenge",
      navLabel: "The Challenge",
      heading: "The Challenge",
      paragraphs: [
        `Before working with Extra Sauce, ${story.client} needed a repeatable way to turn content into pipeline without adding headcount or ad spend.`,
      ],
    },
    {
      id: "solution",
      navLabel: "The Solution & Strategy",
      heading: "The Solution & Strategy",
      paragraphs: [
        `We implemented the ${system} — a structured content engine built around ${story.client}'s buyers, run end-to-end by Extra Sauce.`,
      ],
    },
    {
      id: "results",
      navLabel: "Key Results & Pipeline Impact",
      heading: "Key Results & Pipeline Impact",
      bullets: story.metrics,
      quote: story.quote
        ? {
            text: story.quote,
            author: story.author ?? story.client,
            role: story.authorRole ?? "",
            avatar: story.authorAvatar,
          }
        : undefined,
    },
    {
      id: "looking-ahead",
      navLabel: "Looking Ahead",
      heading: "Looking Ahead",
      paragraphs: [
        `${story.client} continues to scale this system as part of their ongoing growth motion.`,
      ],
    },
  ];
}

export const caseStudyFilters = [
  "All",
  "LinkedIn Revenue System",
  "Podcast Revenue System",
  "Webinar Revenue System",
] as const;

export interface Milestone {
  value: string;
  label: string;
  platform: string;
}

export const milestonesSection = {
  supportingText: "We are the content revenue engine busy marketing teams have been looking for.",
  milestones: [
    { value: "16M", label: "Views in 4 Months, 500K+ subscribers on YouTube", platform: "YouTube" },
    { value: "1M", label: "Views in 30 Days on Instagram", platform: "Instagram" },
    { value: "1.5M", label: "Impressions in 3 Months on LinkedIn", platform: "LinkedIn" },
  ] as Milestone[],
};

export const successStoriesCTA = {
  title: "Big Content Wins, Backed By Customers",
  microcopy: "No pressure — just a 15-minute conversation about your growth goals.",
  buttonLabel: "Apply Now",
  buttonHref: "/book-strategy-call",
};

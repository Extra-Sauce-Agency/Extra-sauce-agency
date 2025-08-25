import { futureBlogPost } from "../blogposts/future-of-content-led-growth";
import { executiveBlogPost } from "../blogposts/building-executive-thought-leadership";
import { videoContentBlogPost } from "../blogposts/video-content-that-converts";
import { newBlogPost } from "../blogposts/founder-led-marketing";
import { trendBlogPost } from "../blogposts/founder-led-marketing-101";
import { insightBlogPost } from "../blogposts/linkedin-led-generation";
import { marketingBlogPost } from "../blogposts/b2b-content-marketing";
import { masterOnePlatformBlogPost } from "../blogposts/master-one-platform";
import { b2bContentBlogPost } from "../blogposts/b2b-content-engine-win-buy-in";
import { storytellingBlogPost } from "../blogposts/storytelling-in-b2b-marketing";
import { b2bfoundersBlogPost } from "../blogposts/b2b-linkedin-strategy-for-founders";
import { linkedinstrategyBlogPost } from "../blogposts/how-b2b-founders-grow-on-linkedin";
import { fromOutboundToLinkedinGrowth } from "../blogposts/from-outbound-to-linkedin-growth";
import { linkedinStrategiesForb2bBlogPost } from "../blogposts/linkedin-strategies-for-b2b-founders";
import { howFoundersDriveBlogPost } from "../blogposts/how-founders-drive-b2b-buyers";
import { outboundevsBlogPost } from "../blogposts/outbound-vs-linkedin-b2b-growth";
import { socialMediaAgenciesDeadPost } from "../blogposts/social-media-agencies-dead";
import { trustBuildingBlogPost } from "../blogposts/trust-building-for-b2b-founders";
import { b2bYoutubeGrowthBlogPost } from "../blogposts/b2b-youtube-growth-strategy";
import { hubspotFounderBlogPost } from "../blogposts/hubspot-founder-led-marketing";
import { founderLedMarketingCaseBlogPost } from "../blogposts/founder-led-marketing-case-study";
import { extraSauceAgencyGrowthCaseStudy } from "../blogposts/extra-sauce-agency-growth-case-study";
import { founderLedContentEngineBlogPost } from "../blogposts/founder-led-content-engine-for-b2b-growth";
import { clientFulfillmentPrinciplesBlogPost } from "../blogposts/b2b-client-fulfillment-principles-that-build-trust";
import { clientOnboardingSystemBlogPost } from "../blogposts/b2b-client-onboarding-system";
import { linkedinGrowthStrategyBlogPost } from "../blogposts/linkedin-growth-strategies-for-b2b-founders";
import { b2bMarketingBudgetPlanBlogPost } from "../blogposts/b2b-marketing-budget-plan";
import { sevenSignsFounderContentBlogPost } from "../blogposts/7-signs-you-should-create-founder-content";
import { boostBDRrepliesWithfounderContentBlogPost } from "../blogposts/boost-bdr-replies-with-founder-content";
import { howContentLowersB2BAcquisitionCostsBlogPost } from "../blogposts/how-content-lowers-b2b-acquisition-costs";
import { LessonsFromFounderLedContentBlogPost } from "../blogposts/5-lessons-from-founder-led-content-in-b2b";
import { contentCreationBlogPost } from "../blogposts/content-creation-expectations-vs-reality";
import { whyB2BcontentBlogPost } from "../blogposts/why-b2b-needs-a-content-asset-bank";
import { b2bContentNeedsBlogPost } from "../blogposts/b2b-content-needs-strategic-narrative";
import { whyDistinctionWinsBlogPost } from "../blogposts/why-distinction-wins-in-b2b-branding";
import { personalBrandingVsFounderLedBlogPost } from "../blogposts/personal-branding-vs-founder-led-marketing";
import { founderLedAlignmentBlogPost } from "../blogposts/how-founder-led-marketing-aligns-sales-and-marketing";
import { whyFoundersFailOnLinkedinEngagementBlogPost } from "../blogposts/why-founders-fail-on-linkedin-engagement";




export interface BlogPost {
 id: string;
 title: string;
 excerpt: string;
 content: string;
 author: string;
 date: string;
 category: string;
 tags: string[];
 image?: string;
 slug: string;
 featured?: boolean;
 readTime?: string;
}


export const blogPosts: BlogPost[] = [
    futureBlogPost,
    executiveBlogPost,
    videoContentBlogPost,
    newBlogPost,
    trendBlogPost,
    insightBlogPost,
    marketingBlogPost,
    masterOnePlatformBlogPost,
    b2bContentBlogPost,
    storytellingBlogPost,
    b2bfoundersBlogPost,
    linkedinstrategyBlogPost ,
    fromOutboundToLinkedinGrowth,
    linkedinStrategiesForb2bBlogPost,
    howFoundersDriveBlogPost ,
    outboundevsBlogPost,
    socialMediaAgenciesDeadPost,
    trustBuildingBlogPost, 
    b2bYoutubeGrowthBlogPost,
    hubspotFounderBlogPost,
    founderLedMarketingCaseBlogPost,
    extraSauceAgencyGrowthCaseStudy,
    founderLedContentEngineBlogPost ,
    clientFulfillmentPrinciplesBlogPost,
    b2bMarketingBudgetPlanBlogPost,
    clientOnboardingSystemBlogPost,
    linkedinGrowthStrategyBlogPost,
    sevenSignsFounderContentBlogPost,
    boostBDRrepliesWithfounderContentBlogPost,
    howContentLowersB2BAcquisitionCostsBlogPost,
    LessonsFromFounderLedContentBlogPost,
    contentCreationBlogPost,
    whyB2BcontentBlogPost,
    b2bContentNeedsBlogPost,
    whyDistinctionWinsBlogPost,
    founderLedAlignmentBlogPost,
    personalBrandingVsFounderLedBlogPost,
    whyFoundersFailOnLinkedinEngagementBlogPost
];


export const blogCategories = [
 "All",
 "Strategy",
 "Leadership",
 "Video Marketing",
 "Case Studies",
 "Industry Insights"
];


export function getPostsByCategory(category: string): BlogPost[] {
 if (category === "All") return blogPosts;
 return blogPosts.filter(post => post.category === category);
}

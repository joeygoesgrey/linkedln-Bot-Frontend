export const STATS = [
  { label: "Impressions", value: 450000, suffix: "+" },
  { label: "Followers Grown", value: 50000, suffix: "" },
  { label: "Posts / Month", value: 120, suffix: "" },
  { label: "Posts with Engagement", value: 95, suffix: "%" },
];

export const TRANSFORMATION_CARDS = [
  {
    title: "Voice-perfect storytelling",
    subtitle: "Feed us your wins, CV, and past posts.",
    description:
      "LinkLift builds a tone model around your expertise so every headline, hook, and CTA reflects the way you actually speak to clients.",
  },
  {
    title: "Campaigns that run themselves",
    subtitle: "Queue posts, mentions, and follow-up tasks in minutes.",
    description:
      "Batch a week of LinkedIn content, auto-tag key accounts, and let smart scheduling publish for you while you stay focused on delivery.",
  },
  {
    title: "Pipeline momentum",
    subtitle: "Engage prospects with zero tab fatigue.",
    description:
      "Engage streams comment, like, and surface leads based on your rules so your profile shows up daily and conversations keep moving forward.",
  }
];

export const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Plug in your assets",
    description:
      "Import previous LinkedIn posts, case studies, and your positioning questionnaire so LinkLift understands what makes you different.",
  },
  {
    step: "2", 
    title: "Generate & schedule",
    description:
      "Spin up AI posts, hooks, and carousels, then schedule them on the calendar with mentions, images, and CTAs in one pass.",
  },
  {
    step: "3",
    title: "Engage & optimise", 
    description:
      "Activate engage streams to like, comment, and nurture prospects automatically while reporting shows what converts.",
  }
];

export const TESTIMONIALS = [
  {
    quote: "I went from 200 → 2,500 followers in 60 days—and closed 2 retainers from LinkedIn.",
    author: "Chidi",
    role: "Consultant",
    rating: 5
  },
  {
    quote: "The AI writes like me. Friends didn't notice I wasn't typing every post.",
    author: "Amaka", 
    role: "Creator",
    rating: 5
  },
  {
    quote: "One post landed me a ₦700k client. Worth every naira.",
    author: "Tobi",
    role: "Agency Owner", 
    rating: 5
  }
];

export const PRICING_PLANS = {
  starter: {
    name: "Starter",
    badge: "Kick-off",
    monthly: 30000,
    annual: 300000,
    description: "Start showing up consistently without burning out. We'll handle hooks and stories so you can stop overthinking and start posting.",
    features: [
      "15 posts written monthly (storytelling + hooks)",
      "Comment assist (up to 10/day)",
      "Image suggestions", 
      "Basic scheduling",
      "Email support"
    ],
    footnote: "Best for solo creators testing the waters."
  },
  pro: {
    name: "Pro",
    badge: "Most Popular",
    monthly: 70000,
    annual: 700000,
    popular: true,
    description: "Grow faster with a full content system—posting, engaging, and improving weekly. You focus on clients; we handle the feed.",
    features: [
      "30 posts + smart scheduling",
      "Comment generation (up to 30/day)", 
      "Weekly performance report + iteration",
      "Image suggestions (carousels & singles)",
      "Priority email support"
    ],
    footnote: "Ideal for consultants and agencies."
  },
  premium: {
    name: "Premium",
    badge: "Done-for-you", 
    monthly: 150000,
    annual: 1500000,
    description: "End-to-end LinkedIn growth. We operate your content engine, collaborate on strategy, and optimize for leads.",
    features: [
      "Full account management",
      "50–100 images/month (AI-assisted)",
      "Custom growth strategy + monthly call", 
      "Priority support (fast lane)",
      "Lead-gen oriented CTAs"
    ],
    footnote: "For founders ready to scale inbound."
  }
};

export type FAQItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Will posts really sound like me?",
    answer:
      "Yes. We train on your CV, past posts, and tone survey so every output reflects your vocabulary, pace, and point of view.",
  },
  {
    question: "Is LinkLift compliant with LinkedIn's policies?",
    answer:
      "LinkLift mimics human pacing, handles overlays safely, and uses native inputs—so your account stays protected while activity scales.",
  },
  {
    question: "Can I still edit posts before they go live?",
    answer:
      "Absolutely. Every post, hook, and comment is editable. Approve, tweak, or regenerate content before scheduling or publishing.",
  },
  {
    question: "Does LinkLift help with engagement?", 
    answer:
      "Yes—set engage streams to like, comment, and mention prospects automatically while you focus on calls and delivery.",
  },
  {
    question: "Who is LinkLift for?",
    answer:
      "Consultants, founders, and B2B teams that need consistent LinkedIn visibility without hiring a full social team.",
  }
];

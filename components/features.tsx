"use client";

import {
  Brain,
  CalendarClock,
  MessageSquareQuote,
  Workflow,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Everything you need to run LinkedIn like a revenue channel
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            LinkLift pairs AI writing with reliable automation so you can create, schedule, and engage on LinkedIn without another late-night content sprint.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Brain className="w-8 h-8 text-blue-600" />,
              title: "Voice DNA builder",
              description:
                "Upload posts, transcripts, decks, and tone prompts to teach LinkLift exactly how you frame wins and insights.",
            },
            {
              icon: <MessageSquareQuote className="w-8 h-8 text-blue-600" />,
              title: "Story sequencer",
              description:
                "Drag stories into proven frameworks for narratives, carousels, and conversation hooks your market responds to.",
            },
            {
              icon: <CalendarClock className="w-8 h-8 text-blue-600" />,
              title: "Revenue calendar",
              description:
                "Plan launches, repurpose assets, and auto-queue mentions so the right buyer sees you at the right moment.",
            },
            {
              icon: <Workflow className="w-8 h-8 text-blue-600" />,
              title: "Engage stream automation",
              description:
                "Target accounts, hashtags, or recent viewers and let LinkLift run human-paced likes, comments, and nudges.",
            },
            {
              icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
              title: "Signal tracking",
              description:
                "See which narratives spike reach, who engages, and when to follow up with warm prospects.",
            },
            {
              icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
              title: "Workspace controls",
              description:
                "Role-based access, audit trails, and safe automation guardrails keep leadership and compliance aligned.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

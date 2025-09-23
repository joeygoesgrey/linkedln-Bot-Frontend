"use client";

import { motion } from "framer-motion";
import { Briefcase, Sparkles, Users } from "lucide-react";

const personas = [
  {
    icon: Briefcase,
    title: "Consultants",
    description:
      "Showcase expertise, attract inbound clients, and stay top-of-mind with the organisations that already trust you.",
  },
  {
    icon: Sparkles,
    title: "Founders",
    description:
      "Tell your story, win trust, and generate pipeline without a big advertising budget or dedicated social team.",
  },
  {
    icon: Users,
    title: "B2B Teams",
    description:
      "Align your team’s LinkedIn activity, scale outreach, and spark sales conversations that convert faster.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { y: 24, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function WhoWeHelp() {
  return (
    <section id="who-we-help" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
            Who We Help
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-navy">
            If your business depends on relationships and visibility, LinkLift is built for you.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Consultants, founders, and B2B teams use LinkLift to turn everyday stories into consistent inbound pipeline.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {personas.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={item}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute -left-16 top-1/2 h-32 w-32 -translate-y-1/2 rotate-12 rounded-full bg-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon size={24} />
              </div>
              <h3 className="relative z-10 mt-6 text-xl font-semibold text-navy">
                {title}
              </h3>
              <p className="relative z-10 mt-3 text-gray-600 leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

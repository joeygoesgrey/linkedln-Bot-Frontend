"use client";

import { motion } from "framer-motion";
import {
  PenTool,
  CalendarClock,
  Share2,
  BarChart3,
} from "lucide-react";

const items = [
  {
    icon: PenTool,
    title: "AI-Powered Copywriting",
    description:
      "Instantly generate posts, hooks, and comments that sound like you and capture the wins your buyers care about.",
  },
  {
    icon: CalendarClock,
    title: "Smart Scheduling",
    description:
      "Automate posting, reposts, and targeted mentions in one simple workflow that keeps you consistently visible.",
  },
  {
    icon: Share2,
    title: "Engagement Engine",
    description:
      "Stay top-of-feed with safe, trackable activity that nurtures prospects while you focus on client work.",
  },
  {
    icon: BarChart3,
    title: "Proven Results",
    description:
      "More visibility, more conversations, more clients — all without pouring budget into ads.",
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

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-20 bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.6),_transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center justify-center rounded-full bg-primary/20 px-3 py-1 text-sm font-semibold text-primary">
            What We Do
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl font-bold">
            At LinkLift, we take the guesswork out of LinkedIn growth.
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Whether you’re building a personal brand or scaling a go-to-market team, LinkLift helps you turn LinkedIn into a client-generating machine.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-14 grid gap-6 md:grid-cols-2"
        >
          {items.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary">
                <Icon size={24} />
              </div>
              <h3 className="relative z-10 mt-6 text-xl font-semibold text-white">
                {title}
              </h3>
              <p className="relative z-10 mt-3 text-gray-300 leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

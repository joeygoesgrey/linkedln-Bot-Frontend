"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function InspirationDiscover() {
  const [niche, setNiche] = useState("");

  const isDisabled = niche.trim().length === 0;

  return (
    <section className="flex min-h-[calc(100vh-8rem)] items-center justify-center">
      <div className="w-full max-w-3xl space-y-10 text-center">
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold text-white">
            Discover trending topics and get curated post ideas for your niche
          </h1>
          <p className="text-gray-300">
            Tell us what you talk about—we'll surface hooks, angles, and stories that
            resonate with your audience.
          </p>
        </div>

        <div className="relative rounded-3xl border border-accent/40 bg-black/60 p-6 shadow-2xl shadow-navy/30">
          <textarea
            value={niche}
            onChange={(event) => setNiche(event.target.value)}
            placeholder="Enter your niche (e.g., AI/ML, Digital Marketing, SaaS)..."
            className="h-40 w-full resize-none rounded-2xl border border-white/5 bg-transparent px-5 py-4 text-lg text-white placeholder-gray-500 outline-none focus:border-primary focus:ring-1 focus:ring-primary/60"
          />

          <button
            type="button"
            disabled={isDisabled}
            className={`absolute bottom-6 right-6 grid h-12 w-12 place-items-center rounded-full text-white transition ${
              isDisabled
                ? "cursor-not-allowed bg-primary/40"
                : "bg-gradient-to-br from-primary to-emerald-500 hover:from-primary/90 hover:to-emerald-400"
            }`}
            aria-label="Generate inspiration"
          >
            <ArrowUpRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

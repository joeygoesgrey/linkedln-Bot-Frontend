"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function HooksComposer() {
  const [idea, setIdea] = useState("");
  const isDisabled = idea.trim().length === 0;

  return (
    <section className="flex min-h-[calc(100vh-8rem)] items-center justify-center">
      <div className="w-full max-w-3xl space-y-6">
        <h2 className="text-center text-2xl font-medium text-white">
          What idea do you want to craft hooks for?
        </h2>

        <div className="relative overflow-hidden rounded-3xl border border-accent/40 bg-gradient-to-br from-navy via-navy-light/80 to-[#0c1324] p-6 shadow-2xl">
          <textarea
            value={idea}
            onChange={(event) => setIdea(event.target.value)}
            placeholder="Describe your idea..."
            className="h-48 w-full resize-none bg-transparent text-lg text-white placeholder-accent/70 outline-none"
          />

          <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/5"></div>

          <button
            type="button"
            disabled={isDisabled}
            className={`absolute bottom-6 right-6 grid h-12 w-12 place-items-center rounded-full text-white transition ${
              isDisabled
                ? "bg-primary/40 cursor-not-allowed"
                : "bg-gradient-to-br from-primary to-emerald-500 hover:from-primary/90 hover:to-emerald-400"
            }`}
            aria-label="Generate hooks"
          >
            <ArrowUpRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

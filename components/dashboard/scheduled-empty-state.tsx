"use client";

import { Clock } from "lucide-react";

export default function ScheduledEmptyState() {
  return (
    <section className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center gap-6 text-center">
      <div className="grid h-20 w-20 place-items-center rounded-full bg-emerald-500/15 text-emerald-300">
        <div className="grid h-14 w-14 place-items-center rounded-full bg-emerald-500/20">
          <Clock size={28} />
        </div>
      </div>

      <div className="space-y-2">
        <h1 className="text-xl font-semibold text-white">No scheduled posts</h1>
        <p className="text-sm text-gray-300">
          Start scheduling your posts to see them here.
        </p>
      </div>

      <button className="rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-6 py-3 text-sm font-semibold text-navy shadow-lg shadow-emerald-500/30 transition hover:from-emerald-300 hover:to-emerald-400">
        Create Your First Scheduled Post
      </button>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Search, RefreshCcw, Copy, Trash2, ChevronDown, ChevronUp } from "lucide-react";

const SAMPLE_POSTS = [
  {
    id: "1",
    createdAt: "Sep 15, 2025",
    excerpt:
      "I just watched a 22-year-old founder pitch to investors. She was nervous. Stuttering. Her slides were basic. But something magical happened in minutes...",
    content:
      "I just watched a 22-year-old founder pitch to investors. She was nervous. Stuttering. Her slides were basic. But something magical happened in minutes. She paused, took a breath, and told the story of how she built her product for her mom. The room leaned in. Investors love numbers, but they fund conviction.",
  },
];

export default function PostsLibrary() {
  const [query, setQuery] = useState("");
  const [expandedPostId, setExpandedPostId] = useState<string | null>(null);

  const toggleExpand = (postId: string) => {
    setExpandedPostId((current) => (current === postId ? null : postId));
  };

  const filteredPosts = SAMPLE_POSTS.filter((post) =>
    post.content.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="space-y-10">
      <header className="space-y-4 text-center">
        <h1 className="text-3xl font-semibold text-white">
          Browse, search, and manage all your posts in one place
        </h1>
        <p className="text-gray-300">
          Quickly revisit drafts, copy winning posts, or clear the clutter.
        </p>
      </header>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <label className="group flex w-full max-w-xl items-center gap-3 rounded-full border border-accent/40 bg-black px-4 py-2 text-sm text-gray-300 transition hover:border-primary/60">
          <Search size={18} className="text-accent" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            placeholder="Search your posts..."
            className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none"
          />
        </label>

        <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-5 py-2 text-sm font-medium text-navy shadow-lg shadow-emerald-500/20 transition hover:from-emerald-300 hover:to-emerald-400">
          <RefreshCcw size={16} />
          Refresh
        </button>
      </div>

      <p className="text-center text-sm text-gray-300">
        {filteredPosts.length} post{filteredPosts.length === 1 ? "" : "s"} in your library
      </p>

      <div className="mx-auto flex w-full max-w-4xl flex-col gap-4">
        {filteredPosts.map((post) => {
          const isExpanded = expandedPostId === post.id;

          return (
            <article
              key={post.id}
              className="rounded-3xl border border-accent/40 bg-black/60 p-6 shadow-2xl shadow-navy/30 transition hover:border-primary/40"
            >
              <header className="flex items-center justify-between gap-4 border-b border-white/5 pb-4">
                <p className="text-sm text-gray-300">{post.createdAt}</p>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-gray-200 transition hover:bg-white/10"
                    aria-label="Copy post"
                  >
                    <Copy size={16} />
                  </button>
                  <button
                    type="button"
                    className="grid h-9 w-9 place-items-center rounded-full border border-red-500/30 bg-red-500/10 text-red-400 transition hover:bg-red-500/20"
                    aria-label="Delete post"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </header>

              <div className="py-4 text-left text-gray-200">
                <p className="text-sm leading-relaxed">
                  {isExpanded ? post.content : post.excerpt}
                </p>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => toggleExpand(post.id)}
                  className="flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary/20"
                >
                  {isExpanded ? "Click to collapse" : "Click to expand"}
                  {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
              </div>
            </article>
          );
        })}

        {filteredPosts.length === 0 && (
          <div className="rounded-3xl border border-dashed border-accent/30 bg-black/50 p-10 text-center text-gray-400">
            No posts match your search yet. Try another keyword or create something new.
          </div>
        )}
      </div>
    </section>
  );
}

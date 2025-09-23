"use client";

import { useState } from "react";
import { Search, Plus, RefreshCcw } from "lucide-react";

export default function EditorDrafts() {
  const [draftName, setDraftName] = useState("");
  const [draftContent, setDraftContent] = useState("");

  const handleCreateDraft = () => {
    // TODO: hook this up to backend once available
    console.log("Create draft", { draftName, draftContent });
  };

  const handleCancel = () => {
    setDraftName("");
    setDraftContent("");
  };

  return (
    <div className="space-y-10">
      <header className="space-y-4 text-center">
        <h1 className="text-3xl font-semibold text-white">Draft Manager</h1>
        <p className="text-gray-300">
          Browse, search, and manage all your drafts in one place
        </p>
      </header>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <label className="group flex w-full max-w-xl items-center gap-3 rounded-full border border-accent/40 bg-black px-4 py-2 text-sm text-gray-300 transition hover:border-primary/60">
          <Search size={18} className="text-accent" />
          <input
            type="text"
            placeholder="Search drafts by name or content..."
            className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none"
          />
        </label>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-5 py-2 text-sm font-medium text-navy shadow-lg shadow-emerald-500/20 transition hover:from-emerald-300 hover:to-emerald-400">
            <Plus size={16} />
            Create New Draft
          </button>
          <button className="flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-medium text-emerald-300 transition hover:bg-emerald-500/30">
            <RefreshCcw size={16} />
            Refresh
          </button>
        </div>
      </div>

      <section className="mx-auto w-full max-w-3xl rounded-3xl border border-accent/40 bg-black/60 p-8 shadow-2xl shadow-navy/30">
        <h2 className="text-xl font-semibold text-white">Create New Draft</h2>

        <div className="mt-6 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-accent">Draft Name</label>
            <input
              type="text"
              value={draftName}
              onChange={(event) => setDraftName(event.target.value)}
              placeholder="Enter draft name..."
              className="w-full rounded-lg border border-accent/30 bg-navy-light/40 px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-primary focus:ring-1 focus:ring-primary/50"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-accent">Draft Content</label>
            <textarea
              value={draftContent}
              onChange={(event) => setDraftContent(event.target.value)}
              placeholder="Enter your draft content..."
              className="h-40 w-full resize-none rounded-lg border border-accent/30 bg-navy-light/40 px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-primary focus:ring-1 focus:ring-primary/50"
            />
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={handleCreateDraft}
            className="rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-400 px-4 py-3 text-center text-sm font-semibold text-navy shadow-lg shadow-emerald-500/30 transition hover:from-emerald-400 hover:to-emerald-300"
          >
            Create Draft
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-gray-200 transition hover:bg-white/10"
          >
            Cancel
          </button>
        </div>
      </section>
    </div>
  );
}

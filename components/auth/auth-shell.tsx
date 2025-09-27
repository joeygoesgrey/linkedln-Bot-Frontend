"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type AuthShellProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  alternateAction?: {
    prompt: string;
    linkLabel: string;
    href: string;
  };
};

export default function AuthShell({
  title,
  subtitle,
  children,
  footer,
  alternateAction,
}: AuthShellProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_55%)]" />
      <div className="absolute inset-y-0 right-0 hidden w-[45%] lg:block">
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex h-full flex-col justify-between bg-gradient-to-br from-primary/40 via-primary/10 to-emerald-400/20 p-12"
        >
          <div>
            <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white/90">
              Powered by LinkLift AI
            </span>
            <h2 className="mt-8 text-3xl font-semibold leading-snug text-white">
              Craft irresistible LinkedIn posts, automate scheduling, and grow your pipeline while you sleep.
            </h2>
          </div>
          <div className="space-y-4 text-white/80">
            {[
              "Voice-trained copy that captures your real tone",
              "Campaign calendar with auto mentions and reposts",
              "Engage streams that nurture prospects safely",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15 text-sm text-white">
                  •
                </span>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-xl rounded-3xl border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-xl"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-lg font-bold text-primary">
              L
            </div>
            <span className="text-lg font-semibold text-white">LinkLift</span>
          </div>

          <div className="mt-8 space-y-3">
            <h1 className="text-3xl font-semibold text-white">{title}</h1>
            <p className="text-sm text-white/70">{subtitle}</p>
          </div>

          <div className="mt-8 space-y-6">{children}</div>

          {footer && <div className="mt-8 text-sm text-white/70">{footer}</div>}

          {alternateAction && (
            <p className="mt-8 text-sm text-white/60">
              {alternateAction.prompt}{" "}
              <Link href={alternateAction.href} className="font-semibold text-primary">
                {alternateAction.linkLabel}
              </Link>
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}

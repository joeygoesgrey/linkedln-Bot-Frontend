"use client";

import { cn } from "@/lib/utils";
import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";

type LinkedInButtonProps = {
  onClick?: () => void;
  label?: string;
  className?: string;
};

export default function LinkedInButton({ onClick, label = "Continue with LinkedIn", className }: LinkedInButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "flex w-full items-center justify-center gap-3 rounded-lg bg-[#0A66C2] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0A66C2]/30 transition hover:bg-[#0959A9] focus:outline-none focus:ring-2 focus:ring-[#0A66C2]/60",
        className
      )}
    >
      <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-white/10">
        <Linkedin className="h-4 w-4" />
      </span>
      {label}
    </motion.button>
  );
}

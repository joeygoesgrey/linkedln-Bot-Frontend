"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import AnimatedDots from "./animated-dots";

export default function Hero() {
  const router = useRouter();
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Animated background dots */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <AnimatedDots />
      </div>

      {/* Background shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl z-10"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/10 rounded-full blur-2xl z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy leading-tight">
              What if one LinkedIn post could bring you 3 new clients — without
              ads?
            </h1>

            <p className="text-lg text-muted mt-6 leading-relaxed">
              Will your next client find you through a story you share today?
              With LinkLift, our AI helps you write posts that win attention,
              schedule campaigns that keep you consistent, and engage prospects
              until they’re ready to buy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                size="lg"
                onClick={() => router.push("/dashboard")}
                className="bg-primary hover:bg-primary-600 text-white px-8 py-3 text-lg"
              >
                Start Free
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollTo("results")}
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg"
              >
                See Results
              </Button>
            </div>
          </motion.div>

          {/* Right content - Sample post */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{
              opacity: 1,
              x: 0,
              rotate: [0, -5, 5, 0],
              transition: {
                duration: 2.5,
                delay: 0.2,
                rotate: {
                  times: [0, 0.2, 0.4, 0.6],
                  duration: 2.5,
                  ease: "easeInOut",
                },
              },
            }}
            className="relative origin-center"
          >
            <div className="gradient-glow absolute -inset-8 rounded-3xl -rotate-1"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 max-w-md mx-auto">
              {/* Profile header */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div>
                  <div className="h-4 w-24 bg-gray-300 rounded mb-1"></div>
                  <div className="h-3 w-16 bg-gray-200 rounded"></div>
                </div>
              </div>

              {/* Post content */}
              <div className="space-y-3 mb-4">
                <p className="font-semibold text-navy">
                  How I landed 3 clients from one LinkedIn post (without ads).
                </p>
                <p className="text-sm text-gray-600">
                  Last Tuesday, I shared my biggest client win story.
                </p>
                <p className="text-sm text-gray-600">
                  Within 24 hours, my DMs were flooded.
                </p>
                <p className="text-sm font-medium text-navy">
                  What made this post different?
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  #LinkedIn
                </span>
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  #Clients
                </span>
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  #Growth
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

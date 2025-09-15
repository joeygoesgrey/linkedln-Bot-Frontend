'use client';

import { motion, useAnimation, Variants } from 'framer-motion';
import { HOW_IT_WORKS } from '@/lib/constants';
import { Brain, Calendar, TrendingUp } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { typography, textColor } from '@/lib/typography';

const icons = [Brain, Calendar, TrendingUp];

function AnimatedGradientBorder({ children, index }: { children: React.ReactNode, index: number }) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start({
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        transition: {
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        },
      });
    }
  }, [isInView, controls]);

  return (
    <div 
      ref={ref}
      className="relative p-0.5 rounded-2xl bg-gradient-to-r from-primary/30 via-primary/10 to-primary/30 overflow-hidden"
      style={{
        backgroundSize: '200% 100%',
      }}
    >
      <motion.div 
        className="absolute inset-0.5 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl"
        animate={controls}
      />
      <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-6 h-full">
        {children}
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className={`${typography.h2} ${textColor.primary} mb-4`}>
            How It Works
          </h2>
          <p className={`${typography.lead} ${textColor.secondary}`}>
            Transform your LinkedIn presence in just a few simple steps
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          variants={container}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-3 gap-8 relative z-10"
        >
          {HOW_IT_WORKS.map((step, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={step.step}
                variants={item}
                className="relative group"
              >
                {/* Step number */}
                <div className="relative mb-8">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-lg shadow-primary/20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {step.step}
                  </motion.div>
                  
                  {/* Animated connector line */}
                  {index < HOW_IT_WORKS.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-1 -translate-y-0.5 z-0 overflow-visible">
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/10"
                        initial={{ scaleX: 0, transformOrigin: 'left' }}
                        whileInView={{ 
                          scaleX: 1,
                        }}
                        transition={{ 
                          duration: 0.8, 
                          delay: 0.3 + (index * 0.2),
                          ease: "easeInOut"
                        }}
                      />
                      <motion.div 
                        className="absolute right-0 top-1/2 w-3 h-3 rounded-full bg-primary"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ 
                          opacity: 1, 
                          scale: 1,
                        }}
                        transition={{ 
                          duration: 0.6, 
                          delay: 0.8 + (index * 0.2),
                          ease: "easeInOut"
                        }}
                      />
                    </div>
                  )}
                </div>

                <AnimatedGradientBorder index={index}>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className={`${typography.h5} ${textColor.primary} mb-3`}>
                    {step.title}
                  </h3>
                  
                  <p className={`${typography.body1} ${textColor.secondary}`}>
                    {step.description}
                  </p>
                </AnimatedGradientBorder>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
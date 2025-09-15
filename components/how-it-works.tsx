'use client';

import { motion } from 'framer-motion';
import { HOW_IT_WORKS } from '@/lib/constants';
import { Brain, Calendar, TrendingUp } from 'lucide-react';

const icons = [Brain, Calendar, TrendingUp];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            How It Works
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {HOW_IT_WORKS.map((step, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative text-center"
              >
                {/* Step number */}
                <div className="relative mb-8">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {step.step}
                  </div>
                  
                  {/* Connector line */}
                  {index < HOW_IT_WORKS.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border -translate-y-0.5 z-0">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                        <div className="w-2 h-2 bg-border rounded-full"></div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="bg-soft rounded-2xl p-6 h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-navy mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
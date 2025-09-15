'use client';

import { motion } from 'framer-motion';
import { TRANSFORMATION_CARDS } from '@/lib/constants';
import { CheckCircle, TrendingUp, Users } from 'lucide-react';
import { typography, textColor } from '@/lib/typography';

const icons = [CheckCircle, TrendingUp, Users];

export default function Transformation() {
  return (
    <section id="features" className="py-20 bg-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className={`${typography.h2} ${textColor.primary} mb-6`}>
            From invisible to industry authority
          </h2>
          <p className={`${typography.lead} ${textColor.secondary}`}>
            Join thousands of professionals who transformed their LinkedIn presence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRANSFORMATION_CARDS.map((card, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className={`h-full flex flex-col bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300
                  hover:-translate-y-1 border border-gray-100`}
              >
                <div className="flex-shrink-0 mb-6">
                  <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className={`${typography.h5} ${textColor.primary} mb-3`}>
                    {card.title}
                  </h3>
                  <p className={`${typography.body1} ${textColor.secondary} mb-4`}>
                    {card.description}
                  </p>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-primary/5 flex items-center justify-center">
                        <span className={`${typography.body2} font-semibold text-primary`}>
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className={`${typography.small} ${textColor.muted}`}>
                        Step {index + 1} of {TRANSFORMATION_CARDS.length}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
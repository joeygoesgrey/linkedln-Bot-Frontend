'use client';

import { motion } from 'framer-motion';
import { TRANSFORMATION_CARDS } from '@/lib/constants';
import { CheckCircle, TrendingUp, Users } from 'lucide-react';

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
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            From invisible to industry authority
          </h2>
        </motion.div>

        <div className="space-y-8">
          {TRANSFORMATION_CARDS.map((card, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-navy mb-2">
                      {card.title}
                    </h3>
                    <p className="text-lg font-medium text-primary mb-4">
                      {card.subtitle}
                    </p>
                    <p className="text-muted leading-relaxed">
                      {card.description}
                    </p>
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
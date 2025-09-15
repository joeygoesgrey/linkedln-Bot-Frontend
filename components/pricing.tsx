'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { PRICING_PLANS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Choose Your Growth Plan
          </h2>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <span className={`font-medium ${!isAnnual ? 'text-navy' : 'text-muted'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-7 bg-gray-200 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              style={{ backgroundColor: isAnnual ? 'rgb(var(--primary))' : '#e5e7eb' }}
            >
              <motion.div
                className="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md"
                animate={{ x: isAnnual ? 28 : 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`font-medium ${isAnnual ? 'text-navy' : 'text-muted'}`}>
              Annual
              <span className="text-sm text-primary ml-1">(Save ~17%)</span>
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {Object.entries(PRICING_PLANS).map(([key, plan], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border ${
                plan.popular ? 'border-primary shadow-lg' : 'border-gray-200'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star size={16} className="fill-current" />
                    <span>{plan.badge}</span>
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-navy mb-2">
                  {plan.name}
                </h3>
                {!plan.popular && (
                  <p className="text-muted text-sm mb-4">{plan.badge}</p>
                )}
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-navy">
                    {formatPrice(isAnnual ? plan.annual : plan.monthly)}
                  </span>
                  <span className="text-muted">
                    /{isAnnual ? 'year' : 'month'}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted mb-6 leading-relaxed">
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                className={`w-full py-3 ${
                  plan.popular
                    ? 'bg-primary hover:bg-primary-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-navy'
                }`}
                onClick={() => scrollTo('final-cta')}
              >
                Start Free
              </Button>

              {/* Footnote */}
              <p className="text-xs text-muted mt-4 text-center">
                {plan.footnote}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Comparison note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-muted">
            All plans include: voice training, hook/CTA templates, and scheduling.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
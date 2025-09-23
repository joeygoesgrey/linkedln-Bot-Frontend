"use client";

import { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  // Don't render anything on the server
  if (!isMounted) {
    return (
      <section id="faq" className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            LinkedIn automation FAQs
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section id="faq" className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          LinkedIn automation FAQs
        </h2>
        
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-medium text-white pr-4">
                    {item.question}
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white">
                    {isOpen ? (
                      <Minus size={18} strokeWidth={2.5} className="w-4 h-4" />
                    ) : (
                      <Plus size={18} strokeWidth={2.5} className="w-4 h-4" />
                    )}
                  </span>
                </button>
                
                <div 
                  className={`${isOpen ? 'block' : 'hidden'} px-6 pb-6`}
                >
                  <p className="text-gray-300">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

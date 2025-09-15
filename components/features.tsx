'use client';

import { Clock, MessageSquare, ThumbsUp, Repeat2, Zap, CheckCircle } from 'lucide-react';

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful LinkedIn Automation</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Automate your LinkedIn presence with our powerful tools and grow your network effortlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Clock className="w-8 h-8 text-blue-600" />,
              title: 'Schedule Posts',
              description: 'Plan and schedule your content in advance with precise timing control.'
            },
            {
              icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
              title: 'Smart Commenting',
              description: 'Automate meaningful engagement with AI-powered comments and mentions.'
            },
            {
              icon: <ThumbsUp className="w-8 h-8 text-blue-600" />,
              title: 'Auto-Engagement',
              description: 'Like and comment on posts in your feed to stay active and visible.'
            },
            {
              icon: <Repeat2 className="w-8 h-8 text-blue-600" />,
              title: 'One-Click Reposts',
              description: 'Share valuable content with your thoughts in just one command.'
            },
            {
              icon: <Zap className="w-8 h-8 text-blue-600" />,
              title: 'AI-Powered Content',
              description: 'Generate engaging posts using AI or use your own custom templates.'
            },
            {
              icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
              title: 'Safe & Reliable',
              description: 'Built with safety in mind to comply with LinkedIn\'s terms of service.'
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

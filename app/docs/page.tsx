import { Metadata } from 'next';
import { ArrowRight, CheckCircle, Clock, MessageSquare, Repeat2, ThumbsUp, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'LinkedIn Automation - Powerful Engagement & Posting Tool',
  description: 'Automate your LinkedIn presence with our powerful Python library. Schedule posts, engage with your network, and grow your professional brand effortlessly.'
};

export default function DocsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Automate Your LinkedIn Growth
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Save hours each week with our powerful LinkedIn automation tool. Post, engage, and grow your network 
          without ever leaving your terminal.
        </p>
      </div>

      {/* Features Grid */}
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
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Quick Start */}
      <div className="bg-blue-50 rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-bold mb-6">Get Started in Minutes</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">1. Install the package</h3>
            <div className="bg-gray-800 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              pip install -r requirements.txt
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-2">2. Configure your credentials</h3>
            <div className="bg-gray-800 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              {`# .env file
LINKEDIN_USERNAME=your_email@example.com
LINKEDIN_PASSWORD=your_password
# Optional: Enable AI content generation
GEMINI_API_KEY=your_gemini_api_key`}
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-2">3. Start automating!</h3>
            <div className="space-y-2">
              <div className="bg-gray-800 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                # Post with AI
                python main.py --topics-file Topics.txt --images-dir ./img
              </div>
              <div className="bg-gray-800 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto whitespace-pre">
                {`# Engage with your network
python main.py --engage-stream both --stream-comment "Great insights!" --max-actions 10`}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Perfect For</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Content Creators',
              description: 'Maintain a consistent posting schedule without the manual work.'
            },
            {
              title: 'Entrepreneurs',
              description: 'Grow your personal brand while focusing on your business.'
            },
            {
              title: 'Recruiters',
              description: 'Engage with potential candidates at scale.'
            },
            {
              title: 'Marketers',
              description: 'Amplify your content reach with strategic engagement.'
            },
            {
              title: 'Agencies',
              description: 'Manage multiple client accounts efficiently.'
            },
            {
              title: 'Job Seekers',
              description: 'Increase visibility to potential employers.'
            }
          ].map((useCase, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-lg mb-2">{useCase.title}</h3>
              <p className="text-gray-600">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your LinkedIn Presence?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of professionals who save hours every week with our LinkedIn automation tool.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/#pricing" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors flex items-center justify-center"
          >
            View Pricing <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
          <Link 
            href="https://github.com/yourusername/linkedin-automation" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 px-8 rounded-lg border border-gray-200 transition-colors flex items-center justify-center"
          >
            View on GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}

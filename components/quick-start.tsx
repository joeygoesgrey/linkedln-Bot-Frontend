'use client';

export default function QuickStart() {
  return (
    <section className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Get Started in Minutes</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">1. Install the package</h3>
            <div className="bg-gray-800 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              pip install -r requirements.txt
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">2. Configure credentials</h3>
            <div className="bg-gray-800 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto whitespace-pre">
              {`# .env file
LINKEDIN_USERNAME=your_email@example.com
LINKEDIN_PASSWORD=your_password
# Optional: AI content generation
GEMINI_API_KEY=your_gemini_api_key`}
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">3. Start automating!</h3>
            <div className="space-y-3">
              <div className="bg-gray-800 text-gray-100 p-3 rounded-lg font-mono text-xs overflow-x-auto whitespace-pre">
                {`# Post with AI
python main.py --topics-file Topics.txt \
  --images-dir ./img`}
              </div>
              <div className="bg-gray-800 text-gray-100 p-3 rounded-lg font-mono text-xs overflow-x-auto whitespace-pre">
                {`# Engage with network
python main.py --engage-stream both \
  --stream-comment "Great insights!" \
  --max-actions 10`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

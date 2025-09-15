import { Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and copyright */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-primary rounded-md"></div>
            <span className="text-lg font-bold">LinkLift</span>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-8 mb-4 md:mb-0">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} LinkLift – All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
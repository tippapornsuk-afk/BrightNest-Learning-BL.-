
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 text-muted text-sm">
      <div className="max-w-[1120px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>© {new Date().getFullYear()} BrightNest Learning. All rights reserved.</div>
        <div className="flex items-center gap-8">
          <a href="#" className="hover:text-gold-100 transition-colors">Privacy</a>
          <a href="#" className="hover:text-gold-100 transition-colors">Terms</a>
          <a href="#faq" className="hover:text-gold-100 transition-colors">Support</a>
        </div>
        <div className="flex items-center gap-4 text-lg">
          <i className="fab fa-twitter hover:text-gold-100 cursor-pointer"></i>
          <i className="fab fa-linkedin hover:text-gold-100 cursor-pointer"></i>
          <i className="fab fa-instagram hover:text-gold-100 cursor-pointer"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { type MouseEvent } from 'react';
import { Phone, MapPin, Navigation, ExternalLink, ArrowUp, ShieldCheck } from 'lucide-react';
import { STATION_INFO } from '../types';
import { IndianOilLogo } from './IndianOilLogo';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Photos', href: '#photos' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#001D3D] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-xl p-3 inline-block shadow-sm">
              <IndianOilLogo />
            </div>

            <p className="text-sm text-slate-300 max-w-md leading-relaxed mt-3">
              <strong>Desai Petrol Pump</strong> (IndianOil – Desai Petroleums) is a registered retail fuel outlet providing quality motor spirit (Petrol) and diesel to travelers on the Jamkhandi–Athani Road, Abbihal, Karnataka.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-slate-400">
              <span className="w-2 h-2 rounded-full bg-[#F37021]" />
              <span>Retail Outlet #204827 · IndianOil Authorized</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-[#FF8C38] transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Station Info */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
              Station Contact
            </h4>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F37021] shrink-0 mt-1" />
                <span className="text-slate-300">
                  {STATION_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#F37021] shrink-0" />
                <a
                  href={STATION_INFO.phoneTel}
                  className="text-white hover:text-[#FF8C38] font-bold transition-colors"
                >
                  {STATION_INFO.phone}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={STATION_INFO.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#FF8C38] hover:text-white transition-colors underline underline-offset-2"
                >
                  <span>Official IOCL Locator Listing (#204827)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="space-y-1 text-center sm:text-left">
            <p className="font-medium text-slate-300">
              © 2026 Desai Petrol Pump. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-400">
              IndianOil branding and trademarks belong to Indian Oil Corporation Limited.
            </p>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <p className="text-xs font-medium text-slate-300">
              Made by <span className="font-bold text-[#FF8C38] tracking-wide">SIDDBUILDS</span>
            </p>

            <button
              onClick={scrollToTop}
              id="footer-back-to-top-btn"
              className="flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 px-3.5 py-2 rounded-lg transition-colors border border-slate-700 active:scale-95"
              aria-label="Scroll to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

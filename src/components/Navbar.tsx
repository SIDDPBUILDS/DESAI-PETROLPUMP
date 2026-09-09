import { useState, useEffect, type MouseEvent } from 'react';
import { Phone, Navigation, Menu, X, MapPin } from 'lucide-react';
import { STATION_INFO } from '../types';
import { IndianOilLogo } from './IndianOilLogo';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top micro-bar with status and phone for immediate access */}
      <header className="bg-[#002855] text-white text-xs border-b border-white/10 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-200">
              <MapPin className="w-3.5 h-3.5 text-[#F37021]" />
              Jamkhandi - Athani Rd, Abbihal, Karnataka
            </span>
            <span className="text-slate-300">
              IndianOil Retail Outlet #204827
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={STATION_INFO.phoneTel}
              id="topbar-call-link"
              className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#F37021]" />
              <span>{STATION_INFO.phone}</span>
            </a>
            <span className="text-white/30">|</span>
            <span className="text-slate-300 font-medium">IndianOil Authorized Dealer</span>
          </div>
        </div>
      </header>

      {/* Main sticky navigation bar */}
      <nav
        id="main-navbar"
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80'
            : 'bg-white py-4 shadow-sm border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              id="navbar-brand-link"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F37021] rounded-lg p-1"
            >
              <IndianOilLogo />
              <div className="hidden lg:block border-l border-slate-200 pl-3">
                <p className="text-xs font-semibold text-slate-500">Retail Outlet</p>
                <p className="text-xs font-bold text-slate-700">Abbihal, Athani</p>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-[#002855] hover:bg-slate-100/70 rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={STATION_INFO.phoneTel}
                id="navbar-call-btn"
                aria-label={`Call ${STATION_INFO.phone}`}
                className="inline-flex items-center justify-center p-2.5 text-slate-700 hover:text-[#002855] hover:bg-slate-100 rounded-full transition-colors border border-slate-200"
                title={`Call ${STATION_INFO.phone}`}
              >
                <Phone className="w-4 h-4 text-[#F37021]" />
              </a>

              <a
                href={STATION_INFO.mapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="navbar-directions-btn"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#F37021] hover:bg-[#D95305] text-white text-sm font-bold rounded-lg shadow-sm transition-all transform active:scale-95"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Mobile Right Controls */}
            <div className="flex items-center gap-2 md:hidden">
              <a
                href={STATION_INFO.mapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="mobile-nav-directions-btn"
                className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#F37021] hover:bg-[#D95305] text-white text-xs font-bold rounded-md shadow-sm"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Directions</span>
              </a>

              <button
                type="button"
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-[#002855] hover:bg-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F37021]"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden border-t border-slate-200 bg-white shadow-xl px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  id={`mobile-nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2.5 text-base font-semibold text-slate-700 hover:text-[#002855] hover:bg-slate-50 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={STATION_INFO.phoneTel}
                id="mobile-menu-call-btn"
                className="flex items-center justify-center gap-2 w-full py-2.5 border border-slate-300 rounded-lg text-sm font-bold text-slate-800 hover:bg-slate-50 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#F37021]" />
                <span>Call {STATION_INFO.phone}</span>
              </a>

              <a
                href={STATION_INFO.mapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="mobile-menu-directions-btn"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#002855] hover:bg-[#001D3D] text-white rounded-lg text-sm font-bold shadow-sm transition-colors"
              >
                <Navigation className="w-4 h-4 text-[#F37021]" />
                <span>Navigate in Google Maps</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

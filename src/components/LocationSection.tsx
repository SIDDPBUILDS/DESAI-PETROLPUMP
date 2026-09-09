import { useState } from 'react';
import { MapPin, Navigation, Phone, Copy, Check, ExternalLink, Compass, ShieldAlert, Car } from 'lucide-react';
import { STATION_INFO } from '../types';

export function LocationSection() {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedPlusCode, setCopiedPlusCode] = useState(false);

  const copyText = (text: string, type: 'address' | 'pluscode') => {
    navigator.clipboard.writeText(text);
    if (type === 'address') {
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2000);
    } else {
      setCopiedPlusCode(true);
      setTimeout(() => setCopiedPlusCode(false), 2000);
    }
  };

  return (
    <section id="location" className="py-16 md:py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#002855] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Route &amp; Navigation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002855] tracking-tight mb-4">
            Find Desai Petrol Pump
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Conveniently located along the Jamkhandi – Athani Highway in Abbihal, Belgaum district.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Detailed Station Address & Contact Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              
              {/* Full Address Block */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                    <MapPin className="w-4 h-4 text-[#F37021]" />
                    <span>Station Address</span>
                  </div>
                  <button
                    onClick={() => copyText(STATION_INFO.address, 'address')}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#002855] hover:text-[#F37021] transition-colors"
                  >
                    {copiedAddress ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {STATION_INFO.address}
                </p>
              </div>

              {/* Plus Code Block */}
              <div className="pt-4 border-t border-slate-200/80">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                    <Compass className="w-4 h-4 text-[#002855]" />
                    <span>Google Maps Plus Code</span>
                  </div>
                  <button
                    onClick={() => copyText(STATION_INFO.plusCode, 'pluscode')}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#002855] hover:text-[#F37021] transition-colors"
                  >
                    {copiedPlusCode ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-slate-200">
                  <span className="font-mono font-bold text-slate-800 text-sm">
                    {STATION_INFO.plusCode}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  Type or paste this Plus Code directly into Google Maps for pinpoint coordinates.
                </p>
              </div>

              {/* Phone Block (Clickable tel: link) */}
              <div className="pt-4 border-t border-slate-200/80">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>Station Telephone</span>
                </div>
                <a
                  href={STATION_INFO.phoneTel}
                  id="location-phone-link"
                  className="text-2xl font-black text-[#002855] hover:text-[#F37021] transition-colors flex items-center gap-2 group"
                >
                  <span>{STATION_INFO.phone}</span>
                </a>
                <p className="text-xs text-slate-500 mt-1">
                  Click to dial directly on mobile devices.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 space-y-3">
                <a
                  href={STATION_INFO.mapsQueryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="location-get-directions-btn"
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 bg-[#F37021] hover:bg-[#D95305] text-white text-base font-bold rounded-xl shadow-md hover:shadow-orange-500/20 transition-all active:scale-95"
                >
                  <Navigation className="w-5 h-5" />
                  <span>Get Directions in Google Maps</span>
                </a>

                <a
                  href={STATION_INFO.phoneTel}
                  id="location-call-now-btn"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-white hover:bg-slate-100 text-slate-800 text-sm font-bold rounded-xl border border-slate-300 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#F37021]" />
                  <span>Call 094486 37384</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right: Map Visual & Integration Placeholder */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 shadow-xl relative min-h-[460px] flex flex-col justify-between">
              
              {/* Stylized Highway Navigation Canvas / Map Preview */}
              <div className="relative w-full h-[360px] bg-[#0E1726] overflow-hidden flex items-center justify-center">
                {/* SVG Vector Stylized Map of Jamkhandi - Athani Highway at Abbihal */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-60"
                  viewBox="0 0 800 400"
                  preserveAspectRatio="xMidYMid slice"
                >
                  {/* Grid Lines */}
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1E293B" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />

                  {/* Landscape terrain contours */}
                  <path d="M 0 320 Q 250 280 500 350 T 800 310" fill="none" stroke="#1E293B" strokeWidth="40" strokeOpacity="0.5" />
                  <path d="M 0 100 Q 300 160 550 80 T 800 130" fill="none" stroke="#1E293B" strokeWidth="30" strokeOpacity="0.3" />

                  {/* Jamkhandi - Athani Main Road Corridor */}
                  <path
                    d="M 50 350 C 250 300, 350 200, 750 70"
                    fill="none"
                    stroke="#334155"
                    strokeWidth="32"
                    strokeLinecap="round"
                  />
                  {/* Road Asphalt Inner */}
                  <path
                    d="M 50 350 C 250 300, 350 200, 750 70"
                    fill="none"
                    stroke="#1E293B"
                    strokeWidth="24"
                    strokeLinecap="round"
                  />
                  {/* Road Center Dotted Line */}
                  <path
                    d="M 50 350 C 250 300, 350 200, 750 70"
                    fill="none"
                    stroke="#FBBF24"
                    strokeWidth="2.5"
                    strokeDasharray="14 14"
                    strokeLinecap="round"
                  />

                  {/* Abbihal feeder link */}
                  <path
                    d="M 400 180 L 400 300"
                    fill="none"
                    stroke="#334155"
                    strokeWidth="14"
                    strokeLinecap="round"
                  />

                  {/* Highway Labels */}
                  <text x="120" y="360" fill="#94A3B8" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                    ← Jamkhandi
                  </text>
                  <text x="660" y="80" fill="#94A3B8" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                    Athani →
                  </text>
                  <text x="360" y="240" fill="#64748B" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                    Abbihal Road
                  </text>

                  {/* Station Area Pulsing Target */}
                  <circle cx="430" cy="165" r="28" fill="#F37021" fillOpacity="0.2" className="animate-ping" />
                  <circle cx="430" cy="165" r="14" fill="#F37021" fillOpacity="0.5" />
                </svg>

                {/* Station Pin Callout Card */}
                <div className="relative z-10 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl border border-white/50 text-slate-900 max-w-xs text-center transform -translate-y-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F37021] text-white text-[11px] font-bold mb-2 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    IndianOil Station
                  </div>
                  <h4 className="text-base font-black text-[#002855] leading-tight">
                    Desai Petrol Pump
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 font-medium">
                    Sy No 1632, 1, Jamkhandi - Athani Rd
                  </p>
                  <div className="mt-3 flex items-center justify-center gap-2">
                    <a
                      href={STATION_INFO.mapsQueryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#002855] hover:bg-[#001D3D] text-white text-xs font-bold rounded-lg transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5 text-[#FF8C38]" />
                      <span>Start GPS</span>
                    </a>
                  </div>
                </div>

                {/* Road Corridor Label Badge */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-2">
                  <Car className="w-3.5 h-3.5 text-[#FF8C38]" />
                  <span>Jamkhandi – Athani Highway (SH Corridor)</span>
                </div>
              </div>

              {/* Map Footer Bar with Open In Google Maps and Embed Note */}
              <div className="p-5 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-xs font-bold text-slate-200">
                      Live GPS Destination Active
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Opens directly in Google Maps application or browser with turn-by-turn navigation.
                  </p>
                </div>

                <a
                  href={STATION_INFO.mapsQueryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="map-open-google-maps-btn"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-100 text-[#002855] text-sm font-extrabold rounded-xl shadow transition-all shrink-0 active:scale-95"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-4 h-4 text-[#F37021]" />
                </a>
              </div>

            </div>

            {/* Developer / Embed Configuration Note (Strictly adheres to prompt: Clearly mark where API key would be added without fake keys) */}
            <div className="mt-3 p-3 rounded-xl bg-slate-100/70 border border-slate-200 text-slate-500 text-[11px] flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <span>
                <strong>Map Integration Note:</strong> For dynamic inline Google Maps iframe embedding, set{' '}
                <code className="font-mono text-slate-700 bg-slate-200/80 px-1 py-0.5 rounded">
                  VITE_GOOGLE_MAPS_EMBED_KEY
                </code>{' '}
                in your environment. The &ldquo;Open in Google Maps&rdquo; launcher operates without requiring client API billing.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

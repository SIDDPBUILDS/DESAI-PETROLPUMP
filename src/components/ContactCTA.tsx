import { Phone, Navigation, ShieldCheck, MapPin, Fuel } from 'lucide-react';
import { STATION_INFO } from '../types';

export function ContactCTA() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-[#002855] text-white relative overflow-hidden">
      {/* Background IndianOil Brand Curves */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#F37021]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
      
      {/* Top Accent Strip */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#F37021] via-amber-400 to-[#002855]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FF8C38] text-xs font-bold uppercase tracking-wider mb-6">
            <Fuel className="w-3.5 h-3.5" />
            <span>Refuel With IndianOil</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 font-display">
            Need Fuel? We&apos;re Here.
          </h2>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Stop by Desai Petrol Pump on the Jamkhandi–Athani Road. Ready to serve you with prompt on-forecourt fueling.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={STATION_INFO.mapsQueryUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="cta-get-directions-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#F37021] hover:bg-[#D95305] text-white text-base font-bold rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all duration-200 transform active:scale-95"
            >
              <Navigation className="w-5 h-5" />
              <span>Get Directions</span>
            </a>

            <a
              href={STATION_INFO.phoneTel}
              id="cta-call-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-slate-100 text-[#002855] text-base font-bold rounded-xl shadow-md transition-all duration-200 active:scale-95"
            >
              <Phone className="w-5 h-5 text-[#F37021]" />
              <span>Call {STATION_INFO.phone}</span>
            </a>
          </div>

          {/* Station Status & Location Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            
            {/* Address */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#FF8C38] shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1">
                  Address
                </span>
                <p className="text-sm font-semibold text-white leading-snug">
                  Sy No 1632, 1, Jamkhandi - Athani Rd, Abbihal, Athani, Karnataka 591304
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1">
                  Phone
                </span>
                <a
                  href={STATION_INFO.phoneTel}
                  className="text-base font-bold text-white hover:text-[#FF8C38] transition-colors"
                >
                  {STATION_INFO.phone}
                </a>
                <span className="text-xs text-slate-300 block mt-0.5">Direct station contact</span>
              </div>
            </div>

            {/* Retail Outlet Info */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-amber-300 shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1">
                  Retail Outlet
                </span>
                <div className="text-white font-bold text-base">
                  RO #204827
                </div>
                <span className="text-xs text-slate-300 block mt-0.5">Indian Oil Corporation Limited</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

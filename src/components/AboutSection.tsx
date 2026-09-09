import { ShieldCheck, MapPin, Fuel, Navigation, CheckCircle2 } from 'lucide-react';
import { STATION_INFO } from '../types';
import aboutImage from '../assets/images/station_photo_2.jpg';

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Station Imagery & Highlights */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 group">
              <img
                src={aboutImage}
                alt="Real fuel dispensers at Desai Petrol Pump IndianOil in Abbihal"
                className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001D3D]/80 via-transparent to-transparent" />
              
              {/* Overlay card for verification */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-white/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#002855] text-white flex items-center justify-center font-bold text-base">
                    IOCL
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Official Outlet Code
                    </p>
                    <p className="text-sm font-extrabold text-[#002855]">
                      Desai Petroleums #204827
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    IndianOil Verified
                  </span>
                </div>
              </div>
            </div>

            {/* Corner Decorative Accent */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[#F37021] rounded-tl-2xl -z-10" />
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-[#002855] rounded-br-2xl -z-10" />
          </div>

          {/* Right Column: About Copy strictly following constraints */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#F37021] text-xs font-bold uppercase tracking-wider">
              <span>About The Station</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002855] tracking-tight leading-tight">
              Your Local IndianOil Fuel Station
            </h2>

            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p>
                <strong>Desai Petrol Pump (IndianOil – Desai Petroleums)</strong> is an authorized retail outlet of Indian Oil Corporation Limited, situated directly on the key <strong>Jamkhandi – Athani Road</strong> in Abbihal, Karnataka.
              </p>
              
              <p>
                Operating with standard IndianOil brand protocols, our station supplies <strong>Petrol</strong> and <strong>Diesel</strong> to fulfill the daily fuel needs of regional commuters, farming vehicles, transit trucks, and highway travelers passing through the Athani taluk.
              </p>

              <p>
                With convenient highway access and clear driveways, we focus on providing straightforward refuels with prompt on-ground service.
              </p>
            </div>

            {/* Factual Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <ShieldCheck className="w-5 h-5 text-[#F37021] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#002855]">IndianOil Branding</h4>
                  <p className="text-xs text-slate-600">Authorized retail dealership under Indian Oil Corporation.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <MapPin className="w-5 h-5 text-[#002855] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#002855]">Roadside Location</h4>
                  <p className="text-xs text-slate-600">Convenient stopover on Jamkhandi - Athani Highway.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <Fuel className="w-5 h-5 text-[#F37021] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#002855]">Petrol &amp; Diesel</h4>
                  <p className="text-xs text-slate-600">Dispensing standard automotive fuels at the forecourt.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#002855]">Quality &amp; Quantity Assured</h4>
                  <p className="text-xs text-slate-600">Pure IndianOil fuel dispensing with calibrated forecourt pumps.</p>
                </div>
              </div>
            </div>

            {/* Directions Action */}
            <div className="pt-2">
              <a
                href={STATION_INFO.mapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="about-directions-btn"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#002855] hover:text-[#F37021] transition-colors group"
              >
                <span>Find our pump on Jamkhandi - Athani Road</span>
                <Navigation className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

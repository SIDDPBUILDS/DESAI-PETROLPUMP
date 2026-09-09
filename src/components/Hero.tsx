import { Navigation, Phone, Fuel, Star, Users, CheckCircle2, ShieldCheck } from 'lucide-react';
import { STATION_INFO } from '../types';
import heroStationImage from '../assets/images/station_photo_1.jpg';

export function Hero() {
  return (
    <section id="home" className="relative bg-[#001D3D] text-white overflow-hidden">
      {/* Background Station Image with professional optical overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroStationImage}
          alt="Desai Petrol Pump IndianOil real station forecourt in Abbihal"
          className="w-full h-full object-cover object-center opacity-45 scale-105 transform transition-transform duration-1000"
          loading="eager"
        />
        {/* Gradients to ensure text contrast and IndianOil brand accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001833]/95 via-[#002855]/85 to-[#002855]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001529] via-transparent to-transparent" />
        
        {/* Subtle decorative IndianOil color bars along edge */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F37021] via-[#FF8C38] to-[#002855]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pt-20 md:pb-24 lg:pt-28 lg:pb-32">
        <div className="max-w-3xl">
          {/* IndianOil Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[#F37021] animate-ping" />
            <span className="text-[#FF8C38] font-bold">IndianOil</span>
            <span className="text-white/40">•</span>
            <span>Desai Petroleums</span>
          </div>

          {/* Main Display Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-tight font-display mb-4">
            DESAI PETROL PUMP
          </h1>

          {/* Slogan */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FF8C38] tracking-tight mb-4">
            &ldquo;Fueling Your Journey, Every Day.&rdquo;
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-normal mb-8 max-w-2xl">
            Your trusted IndianOil fuel station on the Jamkhandi–Athani Road, Abbihal.
            Providing quality Petrol and Diesel for local motorists and highway travelers.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <a
              href={STATION_INFO.mapsQueryUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-get-directions-btn"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#F37021] hover:bg-[#D95305] text-white text-base font-bold rounded-xl shadow-lg hover:shadow-orange-500/25 transition-all duration-200 transform active:scale-95 group"
            >
              <Navigation className="w-5 h-5 text-white transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              <span>Get Directions</span>
            </a>

            <a
              href={STATION_INFO.phoneTel}
              id="hero-call-now-btn"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/15 hover:bg-white/25 text-white text-base font-bold rounded-xl border border-white/30 backdrop-blur-md transition-all duration-200 active:scale-95 group"
            >
              <Phone className="w-5 h-5 text-[#FF8C38] transition-transform group-hover:rotate-12" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Compact Information Strip */}
          <div
            id="hero-info-strip"
            className="p-3.5 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-2 divide-y sm:divide-y-0 sm:divide-x divide-white/15 text-center sm:text-left">
              {/* Petrol */}
              <div className="flex items-center gap-3 px-2 pt-2 sm:pt-0">
                <div className="w-8 h-8 rounded-lg bg-[#F37021]/20 flex items-center justify-center text-[#FF8C38] shrink-0">
                  <Fuel className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-300 font-medium">Fuel</div>
                  <div className="text-sm font-bold text-white flex items-center gap-1">
                    Petrol
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>
                </div>
              </div>

              {/* Diesel */}
              <div className="flex items-center gap-3 px-2 pt-2 sm:pt-0">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-300 shrink-0">
                  <span className="text-sm font-bold">🛢</span>
                </div>
                <div>
                  <div className="text-xs text-slate-300 font-medium">Fuel</div>
                  <div className="text-sm font-bold text-white flex items-center gap-1">
                    Diesel
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3 px-2 pt-2 sm:pt-0">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-300 shrink-0">
                  <Star className="w-4 h-4 fill-amber-300" />
                </div>
                <div>
                  <div className="text-xs text-slate-300 font-medium">Rating</div>
                  <div className="text-sm font-bold text-white">4.0 / 5</div>
                </div>
              </div>

              {/* Reviews */}
              <div className="flex items-center gap-3 px-2 pt-2 sm:pt-0">
                <div className="w-8 h-8 rounded-lg bg-slate-500/20 flex items-center justify-center text-slate-200 shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-300 font-medium">Feedback</div>
                  <div className="text-sm font-bold text-white">53 Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

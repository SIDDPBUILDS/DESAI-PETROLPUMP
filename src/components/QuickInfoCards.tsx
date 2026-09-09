import { useState, type MouseEvent } from 'react';
import { Fuel, MapPin, Star, Phone, Check, Copy, ArrowRight } from 'lucide-react';
import { STATION_INFO } from '../types';

export function QuickInfoCards() {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyAddress = (e: MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(`${STATION_INFO.name}, ${STATION_INFO.address}`);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  return (
    <section className="relative -mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Card 1: Fuel */}
        <div
          id="info-card-fuel"
          className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-slate-100 hover:border-[#F37021]/30 transition-all duration-300 transform hover:-translate-y-1 group"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F37021] flex items-center justify-center group-hover:bg-[#F37021] group-hover:text-white transition-colors">
              <Fuel className="w-6 h-6" />
            </div>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-100">
              In Stock
            </span>
          </div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
            Fuel Types
          </h3>
          <p className="text-xl font-black text-[#002855] mb-2">
            Petrol &amp; Diesel
          </p>
          <p className="text-sm text-slate-600">
            Standard motor fuels available for passenger and commercial transit.
          </p>
        </div>

        {/* Card 2: Location */}
        <div
          id="info-card-location"
          onClick={() => window.open(STATION_INFO.mapsQueryUrl, '_blank')}
          className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-slate-100 hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#002855] flex items-center justify-center group-hover:bg-[#002855] group-hover:text-white transition-colors">
              <MapPin className="w-6 h-6" />
            </div>
            <button
              onClick={handleCopyAddress}
              title="Copy Address"
              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors"
              aria-label="Copy station address"
            >
              {copiedAddress ? (
                <Check className="w-4 h-4 text-emerald-600" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
            Location
          </h3>
          <p className="text-xl font-black text-[#002855] mb-2">
            Abbihal, Athani
          </p>
          <p className="text-sm text-slate-600 line-clamp-2">
            Jamkhandi - Athani Rd, Karnataka 591304
          </p>
          <div className="mt-3 flex items-center gap-1 text-xs font-bold text-[#002855] group-hover:text-[#F37021] transition-colors">
            <span>Open Directions</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Card 3: Rating */}
        <div
          id="info-card-rating"
          className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-slate-100 hover:border-amber-300 transition-all duration-300 transform hover:-translate-y-1 group"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors">
              <Star className="w-6 h-6 fill-current" />
            </div>
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
              <Star className="w-3.5 h-3.5 text-slate-300" />
            </div>
          </div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
            Station Rating
          </h3>
          <p className="text-xl font-black text-[#002855] mb-2 flex items-baseline gap-1.5">
            4.0 <span className="text-sm font-semibold text-slate-500">/ 5.0</span>
          </p>
          <p className="text-sm text-slate-600">
            Based on 53 Google customer reviews for IndianOil Desai Petroleums.
          </p>
        </div>

        {/* Card 4: Contact & Highway Assistance */}
        <div
          id="info-card-contact"
          onClick={() => window.location.href = STATION_INFO.phoneTel}
          className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-slate-100 hover:border-orange-300 transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F37021] flex items-center justify-center group-hover:bg-[#F37021] group-hover:text-white transition-colors">
              <Phone className="w-6 h-6" />
            </div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-800">
              Assistance
            </span>
          </div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
            Station Helpline
          </h3>
          <p className="text-xl font-black text-[#002855] mb-2">
            {STATION_INFO.phone}
          </p>
          <p className="text-sm text-slate-600">
            Direct phone line for traveler inquiries and fuel assistance.
          </p>
          <div className="mt-3 flex items-center gap-1 text-xs font-bold text-[#F37021] group-hover:underline">
            <span>Tap to Call</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  );
}

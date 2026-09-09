import { Fuel, AlertCircle, CheckCircle, Info, HelpCircle } from 'lucide-react';
import { STATION_INFO } from '../types';

export function FuelServices() {
  const unconfirmedFacilities = [
    { name: 'Air Filling Machine', status: 'Not confirmed' },
    { name: 'EV Charging Point', status: 'Not confirmed' },
    { name: 'Public Restrooms / Toilets', status: 'Not confirmed' },
    { name: 'Automated Car Wash', status: 'Not confirmed' },
    { name: 'On-site ATM', status: 'Not confirmed' },
    { name: 'Premium / XP Fuels', status: 'Not confirmed' },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#002855] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Core Dispensing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002855] tracking-tight mb-4">
            Available Fuel Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Desai Petrol Pump provides essential motor fuels dispensed directly from certified IndianOil electronic meters.
          </p>
        </div>

        {/* Primary Fuel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          
          {/* Petrol Card */}
          <div
            id="fuel-card-petrol"
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-slate-200/80 hover:border-[#F37021] transition-all duration-300 relative overflow-hidden group"
          >
            {/* IndianOil Orange Top Accent */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#F37021] to-[#FF8C38]" />
            
            <div className="flex items-start justify-between mb-6">
              <div className="w-16 h-16 rounded-2xl bg-orange-50 text-[#F37021] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Fuel className="w-8 h-8" />
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                Available at station
              </span>
            </div>

            <div className="mb-4">
              <span className="text-xs font-extrabold text-[#F37021] uppercase tracking-wider">
                Motor Spirit (MS)
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#002855] tracking-tight mt-1">
                Petrol
              </h3>
            </div>

            <p className="text-slate-600 text-base leading-relaxed mb-6">
              Reliable fuel for everyday journeys. Suitable for motorbikes, scooters, personal cars, and petrol-engine vehicles.
            </p>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-slate-700">Dispenser Type:</span>
              <span className="font-mono bg-slate-100 px-2 py-1 rounded text-slate-800 font-medium">
                Standard IndianOil Meter
              </span>
            </div>
          </div>

          {/* Diesel Card */}
          <div
            id="fuel-card-diesel"
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-slate-200/80 hover:border-[#002855] transition-all duration-300 relative overflow-hidden group"
          >
            {/* IndianOil Navy Blue Top Accent */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#002855] to-[#0A4D8C]" />

            <div className="flex items-start justify-between mb-6">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#002855] flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-3xl font-black leading-none">🛢</span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                Available at station
              </span>
            </div>

            <div className="mb-4">
              <span className="text-xs font-extrabold text-[#002855] uppercase tracking-wider">
                High Speed Diesel (HSD)
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#002855] tracking-tight mt-1">
                Diesel
              </h3>
            </div>

            <p className="text-slate-600 text-base leading-relaxed mb-6">
              Diesel fuel available for compatible vehicles. Designed for SUVs, agricultural machinery, transport trucks, and commercial diesel vehicles.
            </p>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-slate-700">Dispenser Type:</span>
              <span className="font-mono bg-slate-100 px-2 py-1 rounded text-slate-800 font-medium">
                Standard IndianOil Meter
              </span>
            </div>
          </div>
        </div>

        {/* Mandatory Price & Availability Disclaimer */}
        <div
          id="fuel-disclaimer"
          className="max-w-4xl mx-auto p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-900 flex items-start sm:items-center gap-3 mb-10"
        >
          <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-xs sm:text-sm font-medium">
            <strong>Notice:</strong> Fuel availability and prices may change. Please confirm at the station.
          </p>
        </div>

        {/* Facility Transparency Card - Explicitly marks unconfirmed facilities to avoid misleading visitors */}
        <div
          id="facility-status-box"
          className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm"
        >
          <div className="flex items-center gap-2.5 mb-3">
            <HelpCircle className="w-5 h-5 text-slate-400" />
            <h4 className="text-base font-extrabold text-[#002855]">
              Station Facility &amp; Amenity Status
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 mb-5">
            To ensure genuine customer transparency, we only confirm facilities verified on record. For additional convenience amenities, please check their operational status upon arrival:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {unconfirmedFacilities.map((fac) => (
              <div
                key={fac.name}
                className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-100"
              >
                <span className="text-xs font-semibold text-slate-700">{fac.name}</span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-600">
                  {fac.status}
                </span>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-slate-400 mt-4 italic">
            * Note: Customer feedback indicates air-filling services were previously unavailable. Please verify current availability with the forecourt attendant.
          </p>
        </div>

      </div>
    </section>
  );
}

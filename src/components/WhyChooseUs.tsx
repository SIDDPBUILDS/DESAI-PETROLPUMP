import { Award, Fuel, MapPin, Users, CheckCircle2 } from 'lucide-react';

export function WhyChooseUs() {
  const points = [
    {
      id: 'why-indianoil',
      title: 'IndianOil Station',
      category: 'Official Brand Network',
      description:
        'Operates under Indian Oil Corporation Limited (IOCL) retail standards, giving you peace of mind with authorized dispensing.',
      icon: Award,
      badge: 'Certified Retail Outlet',
      color: 'from-orange-500 to-amber-600',
      iconBg: 'bg-orange-50 text-[#F37021]',
    },
    {
      id: 'why-fuels',
      title: 'Petrol & Diesel',
      category: 'Fuel Variety',
      description:
        'Standard Motor Spirit (Petrol) and High Speed Diesel (Diesel) available to cater to both two-wheelers, four-wheelers, and commercial vehicles.',
      icon: Fuel,
      badge: 'Core Fuel Stocked',
      color: 'from-blue-600 to-indigo-700',
      iconBg: 'bg-blue-50 text-[#002855]',
    },
    {
      id: 'why-location',
      title: 'Convenient Roadside Location',
      category: 'Highway Accessibility',
      description:
        'Situated right on the Jamkhandi – Athani Road in Abbihal, offering easy forecourt ingress and egress without navigating crowded town centers.',
      icon: MapPin,
      badge: 'Jamkhandi-Athani Rd',
      color: 'from-emerald-600 to-teal-700',
      iconBg: 'bg-emerald-50 text-emerald-700',
    },
    {
      id: 'why-service',
      title: 'Local Customer Service',
      category: 'On-Ground Support',
      description:
        'Dedicated forecourt attendants available on-site to assist local residents, transit operators, and highway travelers with prompt refueling.',
      icon: Users,
      badge: 'Prompt On-Site Help',
      color: 'from-slate-700 to-slate-900',
      iconBg: 'bg-slate-100 text-slate-800',
    },
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#F37021] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Why Stop Here</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002855] tracking-tight mb-4">
            A Convenient Stop on Your Journey
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Factual advantages based on our verified retail outlet location and core fuel dispensing.
          </p>
        </div>

        {/* 4 Defensible Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt) => {
            const Icon = pt.icon;
            return (
              <div
                key={pt.id}
                id={pt.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl ${pt.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                      {pt.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-[#002855] mb-2 group-hover:text-[#F37021] transition-colors">
                    {pt.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {pt.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{pt.badge}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

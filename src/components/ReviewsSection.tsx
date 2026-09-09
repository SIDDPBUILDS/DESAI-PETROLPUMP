import { Star, MessageSquare, ExternalLink, ThumbsUp, AlertTriangle } from 'lucide-react';
import { STATION_INFO, REVIEWS_DATA } from '../types';

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-[#F8FAFC] border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Google Customer Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002855] tracking-tight mb-4">
            Customer Reviews &amp; Ratings
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Real feedback from local drivers and travelers who have refueled at Desai Petroleums.
          </p>
        </div>

        {/* Rating Overview Box */}
        <div
          id="reviews-summary-card"
          className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-12 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Big Rating Number */}
          <div className="flex items-center gap-6 text-center sm:text-left">
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-5xl sm:text-6xl font-black text-[#002855] tracking-tight font-display">
                4.0
              </span>
              <div className="flex items-center gap-1 my-1.5 text-amber-400">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                <Star className="w-5 h-5 text-slate-300" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Overall Google Score
              </span>
            </div>

            <div className="hidden sm:block h-16 w-px bg-slate-200" />

            <div className="text-left">
              <p className="text-xl font-bold text-slate-900">53 Google Reviews</p>
              <p className="text-xs text-slate-500 mt-1 max-w-xs">
                Verified public customer ratings recorded for Desai Petrol Pump, Abbihal on Jamkhandi-Athani Rd.
              </p>
            </div>
          </div>

          {/* Action Button: View More Reviews */}
          <div className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-3">
            <a
              href={STATION_INFO.mapsQueryUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="view-more-reviews-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#002855] hover:bg-[#001D3D] text-white text-sm font-bold rounded-xl shadow-sm transition-all transform active:scale-95 group"
            >
              <span>View More Reviews on Google</span>
              <ExternalLink className="w-4 h-4 text-[#FF8C38] group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* The 3 Exact Supplied Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          {REVIEWS_DATA.map((review) => {
            const isNegativeOrMixed = review.rating < 4;
            return (
              <div
                key={review.id}
                id={review.id}
                className={`bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl border transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5 ${
                  isNegativeOrMixed
                    ? 'border-slate-200 hover:border-amber-300 bg-gradient-to-b from-white to-slate-50/50'
                    : 'border-slate-200 hover:border-[#F37021]/40'
                }`}
              >
                <div>
                  {/* Top card bar with stars and badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-slate-300'
                          }`}
                        />
                      ))}
                    </div>

                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                        isNegativeOrMixed
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {review.highlight}
                    </span>
                  </div>

                  {/* Review Quote */}
                  <blockquote className="text-slate-700 text-base leading-relaxed mb-6 font-medium italic">
                    &ldquo;{review.text}&rdquo;
                  </blockquote>
                </div>

                {/* Footer of card */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600">
                      {review.author[0]}
                    </div>
                    <div>
                      <span className="font-bold text-slate-800 block">{review.author}</span>
                      <span className="text-[11px] text-slate-400">{review.date}</span>
                    </div>
                  </div>

                  {isNegativeOrMixed ? (
                    <div className="flex items-center gap-1 text-amber-600 font-semibold text-[11px]">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>Facility Note</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 text-emerald-600 font-semibold text-[11px]">
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span>Verified Visit</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Link to Official IOCL Listing */}
        <div className="text-center">
          <p className="text-xs text-slate-500">
            For official corporation directory details, check the{' '}
            <a
              href={STATION_INFO.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#002855] hover:text-[#F37021] font-semibold underline underline-offset-2"
            >
              IndianOil Official Dealer Locator #204827
            </a>
            .
          </p>
        </div>

      </div>
    </section>
  );
}

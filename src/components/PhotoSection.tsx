import { useState } from 'react';
import { Camera, ExternalLink, Maximize2, X, MapPin, CheckCircle2 } from 'lucide-react';
import { REAL_STATION_PHOTOS, type StationPhoto } from '../types';

export function PhotoSection() {
  const [selectedPhoto, setSelectedPhoto] = useState<StationPhoto | null>(null);

  return (
    <section id="photos" className="py-16 md:py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#F37021] text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Station Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002855] tracking-tight mb-4">
            Real Station Photographs
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Actual on-ground photos of Desai Petrol Pump (IndianOil – Desai Petroleums) on the Jamkhandi–Athani Road, Abbihal.
          </p>
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {REAL_STATION_PHOTOS.map((photo) => (
            <div
              key={photo.id}
              id={`station-photo-card-${photo.id}`}
              className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Container with Zoom Trigger */}
              <div className="relative h-72 sm:h-80 overflow-hidden bg-slate-900 cursor-pointer" onClick={() => setSelectedPhoto(photo)}>
                <img
                  src={photo.imageUrl}
                  alt={`${photo.title} - Desai Petrol Pump IndianOil Abbihal`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-bold border border-white/20">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    {photo.tag}
                  </span>
                </div>

                {/* Enlarge Hint */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPhoto(photo);
                  }}
                  aria-label={`Enlarge photo: ${photo.title}`}
                  className="absolute bottom-4 right-4 p-2.5 rounded-xl bg-white/90 hover:bg-white text-slate-900 shadow-lg backdrop-blur-sm transition-all transform active:scale-95 group-hover:bg-[#F37021] group-hover:text-white"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Photo Caption & Direct Google Maps Photo Link */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 mb-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Google Maps Photo</span>
                  </div>
                  <h3 className="text-xl font-black text-[#002855] mb-2 tracking-tight">
                    {photo.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {photo.caption}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#F37021]" />
                    Jamkhandi - Athani Rd
                  </span>

                  <a
                    href={photo.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#002855] hover:text-[#F37021] transition-colors"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.title}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:px-6 bg-slate-950/80 border-b border-white/10 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#F37021] text-white">
                  {selectedPhoto.tag}
                </span>
                <h4 className="text-sm sm:text-base font-bold truncate">
                  {selectedPhoto.title}
                </h4>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={selectedPhoto.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#FF8C38]" />
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedPhoto(null)}
                  aria-label="Close photo preview"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Display */}
            <div className="flex-1 overflow-auto flex items-center justify-center p-2 sm:p-4 bg-black/50">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg shadow-md"
              />
            </div>

            {/* Modal Footer Description */}
            <div className="p-4 bg-slate-950/90 border-t border-white/10 text-slate-300 text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-slate-300 text-center sm:text-left">
                {selectedPhoto.caption}
              </p>
              <a
                href={selectedPhoto.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden text-xs font-bold text-[#FF8C38] flex items-center gap-1"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

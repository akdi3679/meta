const REVIEWS = [
  { id: 1, name: "David Chen", location: "Perth", rating: 5, text: "Watching the tear-off video showed us exactly why the old roof was failing. The new Colorbond roof looks incredible and the price never moved from the quote.", date: "2 weeks ago" },
  { id: 2, name: "Karen Mitchell", location: "Gosnells", rating: 5, text: "The before and after video was unbelievable — same roof, twenty years younger. Our street has three neighbours booking them since.", date: "1 month ago" },
  { id: 3, name: "Paul Nguyen", location: "Armadale", rating: 5, text: "They found a cracked valley tray our last three roofers missed. Fixed the same day, and the video showed our insurance assessor everything.", date: "3 weeks ago" },
  { id: 4, name: "Emma Rossi", location: "Kelmscott", rating: 5, text: "The flow-test video was such a simple thing but it proved the job was done properly. First gutter cleaner we will ever rebook.", date: "1 week ago" },
  { id: 5, name: "Sophie Turner", location: "Canning Vale", rating: 5, text: "They water-tested the skylight on video before they left. Two winters later, not a single drop. Our hallway is transformed.", date: "2 months ago" },
  { id: 6, name: "Mark Thompson", location: "Forrestfield", rating: 5, text: "Our upstairs was unusable in summer. After the ventilation install the difference was immediate — and the temperature readings proved it.", date: "5 weeks ago" }
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

export function Testimonials() {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Premium Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-blue-600 rounded-full"></span>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-navy-900">Testimonials</span>
            <span className="h-[2px] w-8 bg-blue-600 rounded-full"></span>
          </div>
          <h3 className="text-3xl font-extrabold text-navy-900 sm:text-4xl">What Our Clients Say</h3>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-600">Verified reviews from real Perth homeowners and businesses.</p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {[...REVIEWS, ...REVIEWS].map((review, i) => (
              <div key={i} className="mx-4 w-80 flex-shrink-0 rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <GoogleIcon />
                  <StarRating rating={review.rating} />
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-4 line-clamp-4">&ldquo;{review.text}&rdquo;</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-sm font-bold text-navy-900">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.location} · {review.date}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    Verified
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="https://www.google.com/maps/place/Meta+Roofing+%26+Co" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 rounded-lg border-2 border-gray-200 bg-white px-6 py-3 text-sm font-bold text-navy-900 transition-all duration-300 hover:border-blue-600 hover:shadow-lg">
            <GoogleIcon />
            Leave a Review on Google
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
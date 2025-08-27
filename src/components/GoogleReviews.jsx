import React, { useEffect, useState, useRef } from 'react';
import { config } from '../config';
import FadeIn from './FadeIn';

const GoogleReviews = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [total, setTotal] = useState(0);
  const [reviews, setReviews] = useState([]);
  const trackRef = useRef(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const hasPlaceId = !!config.GOOGLE_PLACE_ID;
        const hasQuery = !!config.GOOGLE_PLACE_QUERY;
        if (!hasPlaceId && !hasQuery) {
          setError('Google Place ID not configured');
          setLoading(false);
          return;
        }
        const url = hasPlaceId
          ? `${process.env.NODE_ENV === 'production' ? '' : ''}/google-reviews?placeId=${encodeURIComponent(config.GOOGLE_PLACE_ID)}`
          : `${process.env.NODE_ENV === 'production' ? '' : ''}/google-reviews?query=${encodeURIComponent(config.GOOGLE_PLACE_QUERY)}`;
        const resp = await fetch(url);
        const json = await resp.json();
        if (!json.success) {
          throw new Error(json.error || 'Failed to load reviews');
        }
        setName(json.name || '');
        setRating(json.rating || 0);
        setTotal(json.totalReviews || 0);
        setReviews(Array.isArray(json.reviews) ? json.reviews : []);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  // Simple continuous scroll effect for the track
  useEffect(() => {
    if (!trackRef.current) return;
    if (!reviews || reviews.length === 0) return;
    let animationId;
    const el = trackRef.current;
    let offset = 0;
    const step = () => {
      offset += 0.5; // pixels per frame
      el.style.transform = `translateX(-${offset}px)`;
      // If we scrolled past half (because we duplicate content), reset
      if (el.scrollWidth / 2 - offset <= 0) {
        offset = 0;
        el.style.transform = 'translateX(0)';
      }
      animationId = requestAnimationFrame(step);
    };
    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, [reviews]);

  const RatingHeader = () => (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
      <div className="flex items-center gap-3">
        <div className="text-2xl font-bold text-textPrimary">Google Rating</div>
        <div className="text-2xl font-bold text-primary">{rating.toFixed(1)}</div>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`text-xl ${i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
          ))}
        </div>
      </div>
      <div className="text-textSecondary">{total} reviews</div>
      <a
        href={name ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name)}` : 'https://www.google.com/maps'}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary"
      >
        Write a Review
      </a>
    </div>
  );

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0.2} direction="down" fullWidth>
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary mb-4">
              What Our <span className="text-gradient">Students Say</span>
            </h2>
            <p className="text-lg text-textSecondary max-w-3xl mx-auto">
              {name ? `Verified Google reviews for ${name}` : 'Verified Google reviews for our academy'}
            </p>
          </div>
        </FadeIn>

        <div className="card p-6">
          {loading && <div className="text-center text-textSecondary">Loading reviews…</div>}
          {!loading && error && <div className="text-center text-error">{error}</div>}

          {!loading && !error && (
            <>
              <RatingHeader />

              {reviews.length > 0 ? (
                <div className="relative overflow-hidden">
                  {/* Track: duplicate content for seamless loop */}
                  <div className="flex gap-6 will-change-transform" ref={trackRef} style={{ width: 'max-content' }}>
                    {[...reviews, ...reviews].map((r, idx) => (
                      <div key={idx} className="min-w-[320px] max-w-[360px] card p-5">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                            {r.profile_photo_url ? (
                              <img
                                src={`/google-photo?url=${encodeURIComponent(r.profile_photo_url)}`}
                                alt={r.author_name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  const fallback = `https://ui-avatars.com/api/?name=${encodeURIComponent(r.author_name || 'User')}&background=E5E7EB&color=374151&size=64`;
                                  if (e.currentTarget.src !== fallback) {
                                    e.currentTarget.src = fallback;
                                  }
                                }}
                              />
                            ) : (
                              <span className="text-textSecondary text-sm">
                                {r.author_name?.split(' ').map(n => n[0]).join('').slice(0,2)}
                              </span>
                            )}
                          </div>
                          <div>
                            <div className="font-semibold text-textPrimary">{r.author_name}</div>
                            <div className="text-xs text-textSecondary">{r.relative_time_description}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={`text-sm ${i < (r.rating || 0) ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                          ))}
                        </div>
                        <p className="text-textSecondary text-sm leading-relaxed line-clamp-3">{r.text}</p>
                        {r.author_url && (
                          <a href={r.author_url} target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-semibold mt-3 inline-block">
                            View on Google →
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  {/* Fallback embed so comments show immediately if API returns no snippets */}
                  <div className="rounded-2xl overflow-hidden" style={{ height: '600px' }}>
                    <iframe
                      src="https://widgets.sociablekit.com/google-reviews/iframe/25592747"
                      title="Google Reviews"
                      frameBorder="0"
                      width="100%"
                      height="100%"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;

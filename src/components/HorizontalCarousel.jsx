import React, { useEffect, useRef } from 'react';

const HorizontalCarousel = ({
  children,
  itemWidthPx = 256,
  gapPx = 16,
  autoPlay = true,
  intervalMs = 4000,
  ariaLabel = 'carousel',
  draggable = false
}) => {
  const scrollerRef = useRef(null);
  const timerRef = useRef(null);

  const scrollByAmount = (amount) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  const next = () => scrollByAmount(itemWidthPx + gapPx);
  const prev = () => scrollByAmount(-(itemWidthPx + gapPx));

  useEffect(() => {
    if (!autoPlay) return undefined;
    timerRef.current = setInterval(() => {
      next();
    }, intervalMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoPlay, intervalMs, next]);

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className={`flex ${draggable ? 'overflow-x-auto hide-scrollbar' : 'overflow-x-hidden'} snap-x snap-mandatory scroll-smooth gap-4 pb-2`}
        aria-label={ariaLabel}
      >
        {React.Children.map(children, (child, index) => (
          <div
            className="shrink-0 snap-start"
            style={{ width: `${itemWidthPx}px` }}
            key={index}
          >
            {child}
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between">
        <button
          type="button"
          onClick={prev}
          className="pointer-events-auto ml-[-8px] rounded-full bg-white/90 border border-border shadow p-2 hover:bg-white"
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={next}
          className="pointer-events-auto mr-[-8px] rounded-full bg-white/90 border border-border shadow p-2 hover:bg-white"
          aria-label="Next"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default HorizontalCarousel;



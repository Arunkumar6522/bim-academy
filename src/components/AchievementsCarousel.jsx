import React, { useEffect, useRef } from 'react';
import FadeIn from './FadeIn';

// Simple image + content carousel for Achievements section
// Uses native horizontal scroll with snap and gentle auto-scroll
const AchievementsCarousel = () => {
  const scrollRef = useRef(null);

  // Demo data – replace images/texts as needed
  const items = [
    {
      image: '/logo512.png',
      title: '5000+ Students Trained',
      description: 'Practical BIM & BAS training with portfolio-ready projects.',
    },
    {
      image: '/logo192.png',
      title: '200+ Hiring Partners',
      description: 'Strong industry network enabling interviews and placements.',
    },
    {
      image: '/logo.svg',
      title: '95% Placement Rate',
      description: 'Dedicated placement assistance and interview preparation.',
    },
    {
      image: '/favicon.ico',
      title: 'International Projects',
      description: 'Exposure to workflows used across global projects.',
    },
  ];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let timerId;
    let isHovering = false;

    const getStep = () => {
      const firstSlide = el.querySelector('.achv-slide');
      if (!firstSlide) return 0;
      const style = window.getComputedStyle(el);
      const gap = parseInt(style.columnGap || style.gap || '0', 10) || 0;
      return firstSlide.clientWidth + gap;
    };

    const advance = () => {
      if (isHovering) return;
      const step = getStep();
      if (!step) return;

      const atEnd = Math.ceil(el.scrollLeft + el.clientWidth + 2) >= el.scrollWidth;
      if (atEnd) {
        // Jump to start instantly, then move to first slide smoothly after a small delay
        el.scrollTo({ left: 0, behavior: 'instant' });
        setTimeout(() => {
          el.scrollBy({ left: step, behavior: 'smooth' });
        }, 50);
      } else {
        el.scrollBy({ left: step, behavior: 'smooth' });
      }
    };

    const start = () => {
      stop();
      timerId = setInterval(advance, 3000); // change slide every 3s
    };
    const stop = () => {
      if (timerId) clearInterval(timerId);
    };

    const onEnter = () => { isHovering = true; stop(); };
    const onLeave = () => { isHovering = false; start(); };

    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
    start();

    return () => {
      stop();
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto hide-scrollbar scroll-smooth snap-x snap-mandatory pb-2"
      >
        {items.map((item, idx) => (
          <FadeIn key={idx} delay={0.15 + idx * 0.05} direction="up">
            <div className="achv-slide flex-none w-80 sm:w-96 snap-start">
              <div className="card overflow-hidden hover:shadow-glow transition-all duration-500 ease-smooth">
                <div className="h-44 sm:h-56 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-textPrimary mb-2">{item.title}</h3>
                  <p className="text-textSecondary text-sm sm:text-base">{item.description}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default AchievementsCarousel;



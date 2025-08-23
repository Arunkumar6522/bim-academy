import React from 'react';
import imageOne from '../assets/image 1.jpg';
import { products } from '../data';
import HorizontalCarousel from '../components/HorizontalCarousel';

const HomePopularCourses = () => {
  const popular = products.slice(0, 4);
  return (
    <>
      <HorizontalCarousel ariaLabel="Popular courses" itemWidthPx={260} gapPx={16} autoPlay={false} draggable={false}>
        {popular.map((c, idx) => (
          <div key={c.title} className="rounded-2xl ring-1 ring-border bg-white overflow-hidden hover:shadow-lg transition">
            <img src={imageOne} alt="course" className="w-full h-40 object-cover" />
            <div className="p-3">
              <div className="text-sm font-semibold text-textPrimary line-clamp-2">{c.title}</div>
              <div className="mt-2 flex items-center gap-2 text-xs">
                <div className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold">{(4.6 + (idx*0.1)).toFixed(1)}★</div>
                <div className="text-textPrimary font-medium">{150 + idx * 37} reviews</div>
              </div>
            </div>
          </div>
        ))}
      </HorizontalCarousel>
      <a href="/courses" className="mt-3 inline-block text-primary font-semibold hover:underline">Browse all courses →</a>
    </>
  );
};

export default HomePopularCourses;



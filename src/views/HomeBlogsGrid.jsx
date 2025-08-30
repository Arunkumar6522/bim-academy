import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HorizontalCarousel from '../components/HorizontalCarousel';

const fetchJsonp = (feedUrl) => new Promise((resolve, reject) => {
  const cb = `__home_blog_${Date.now()}_${Math.floor(Math.random()*10000)}`;
  const s = document.createElement('script');
  window[cb] = (data) => { try { resolve(data); } finally { delete window[cb]; document.body.removeChild(s); } };
  s.onerror = () => { delete window[cb]; document.body.removeChild(s); reject(new Error('JSONP load error')); };
  s.src = `${feedUrl}?alt=json-in-script&max-results=6&callback=${cb}`;
  document.body.appendChild(s);
});

const HomeBlogsGrid = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const data = await fetchJsonp('https://bimbytesacademy.blogspot.com/feeds/posts/default');
        const entries = data?.feed?.entry || [];
        const parsed = entries.slice(0, 6).map((e) => {
          const entryId = e?.id?.$t || '';
          const postId = (entryId.match(/post-(\d+)/) || [])[1];
          const title = e?.title?.$t || 'Untitled';
          const link = (e?.link || []).find((l) => l.rel === 'alternate')?.href || '#';
          const rawContent = e?.content?.$t || e?.summary?.$t || '';
          const m = rawContent.match(/<img [^>]*src=['"]([^'"]+)['"]/i);
          const image = (e?.['media$thumbnail']?.url) || (m ? m[1] : undefined);
          return { postId, title, link, image };
        });
        setPosts(parsed);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="animate-pulse h-28 rounded-xl bg-gray-100" />
        ))}
      </div>
    );
  }

  return (
    <HorizontalCarousel ariaLabel="Latest blog posts" itemWidthPx={260} gapPx={16} autoPlay={true} draggable={true}>
      {posts.map((p) => (
        <Link key={p.link} to={p.postId ? `/blog/${p.postId}` : '/blog'} className="block rounded-2xl ring-1 ring-border bg-white overflow-hidden hover:shadow-lg transition">
          {p.image ? (
            <img src={p.image} alt="thumb" className="w-full h-40 object-cover" />
          ) : (
            <div className="w-full h-40 bg-gray-100" />
          )}
          <div className="p-3 text-sm font-semibold text-textPrimary line-clamp-2">{p.title}</div>
        </Link>
      ))}
    </HorizontalCarousel>
  );
};

export default HomeBlogsGrid;



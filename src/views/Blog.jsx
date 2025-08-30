import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import imageOne from '../assets/image 1.jpg';

const Blog = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(1);
  const pageSize = 6;
  const totalPages = Math.max(1, Math.ceil(allPosts.length / pageSize));
  const currentPosts = useMemo(() => {
    const start = (page - 1) * pageSize;
    return allPosts.slice(start, start + pageSize);
  }, [allPosts, page]);

  const goTo = (p) => setPage(Math.min(Math.max(1, p), totalPages));

  useEffect(() => {
    const fetchJsonp = (feedUrl) => new Promise((resolve, reject) => {
      const cbName = `__blogger_cb_${Date.now()}_${Math.floor(Math.random()*10000)}`;
      const script = document.createElement('script');
      window[cbName] = (data) => {
        try {
          resolve(data);
        } finally {
          delete window[cbName];
          document.body.removeChild(script);
        }
      };
      script.onerror = () => {
        delete window[cbName];
        document.body.removeChild(script);
        reject(new Error('JSONP load error'));
      };
      script.src = `${feedUrl}?alt=json-in-script&max-results=150&callback=${cbName}`;
      document.body.appendChild(script);
    });

    const load = async () => {
      try {
        setLoading(true);
        const data = await fetchJsonp('https://bimbytesacademy.blogspot.com/feeds/posts/default');
        const entries = data?.feed?.entry || [];
        const parsed = entries.map((e) => {
          const title = e?.title?.$t || 'Untitled';
          const link = (e?.link || []).find((l) => l.rel === 'alternate')?.href || '#';
          const date = e?.published?.$t || e?.updated?.$t || '';
          const entryId = e?.id?.$t || '';
          const postId = (() => {
            const m = entryId.match(/post-(\d+)/);
            return m ? m[1] : undefined;
          })();
          const blogId = (() => {
            const m = entryId.match(/blog-(\d+)/);
            return m ? m[1] : undefined;
          })();
          const rawContent = e?.content?.$t || e?.summary?.$t || '';
          const imgFromTag = (() => {
            const m = rawContent.match(/<img [^>]*src=['"]([^'"]+)['"]/i);
            return m ? m[1] : null;
          })();
          const image = e?.['media$thumbnail']?.url || imgFromTag || imageOne;
          const textOnly = rawContent.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
          const excerpt = textOnly.slice(0, 160) + (textOnly.length > 160 ? '…' : '');
          return { id: link, title, excerpt, date, image, url: link, postId, blogId };
        });
        setAllPosts(parsed);
        setError(null);
      } catch (err) {
        console.error('Failed to load Blogger feed', err);
        setError('Failed to load blog posts.');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <section className="py-10 sm:py-12 bg-gradient-to-br from-light to-white min-h-screen">

      {/* Paginated posts */}
      <FadeIn delay={0.6} direction="up" fullWidth>
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="animate-pulse bg-white rounded-2xl shadow-md overflow-hidden ring-1 ring-border/50">
                  <div className="w-full h-44 bg-gray-200" />
                  <div className="p-5 space-y-3">
                    <div className="h-3 w-24 bg-gray-200 rounded" />
                    <div className="h-5 w-3/4 bg-gray-200 rounded" />
                    <div className="h-4 w-full bg-gray-200 rounded" />
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center text-textSecondary py-12">{error}</div>
          ) : allPosts.length === 0 ? (
            <div className="text-center text-textSecondary py-12">No posts found.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-md overflow-hidden ring-1 ring-border/50">
                  <img src={post.image} alt="Blog thumbnail" className="w-full h-44 object-cover" />
                  <div className="p-5">
                    <div className="text-xs text-textSecondary mb-2">
                      {post.date ? new Date(post.date).toLocaleDateString() : ''}
                    </div>
                    <h3 className="text-lg font-semibold text-textPrimary mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-sm text-textSecondary mb-4 line-clamp-3">{post.excerpt}</p>
                    {post.postId ? (
                      <Link to={`/blog/${post.postId}`} className="text-primary font-semibold hover:underline">Read more →</Link>
                    ) : (
                      <a href={post.url} target="_blank" rel="noreferrer" className="text-primary font-semibold hover:underline">Read more →</a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Pagination controls */}
          {!loading && allPosts.length > 0 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            <button
              onClick={() => goTo(page - 1)}
              disabled={page === 1}
              className={`px-3 py-2 rounded-lg border ${page === 1 ? 'text-textMuted border-border cursor-not-allowed' : 'text-textPrimary hover:bg-gray-50 border-border'}`}
            >
              Prev
            </button>
            {Array.from({ length: totalPages }).map((_, i) => {
              const p = i + 1;
              const isActive = p === page;
              return (
                <button
                  key={p}
                  onClick={() => goTo(p)}
                  className={`w-9 h-9 rounded-lg text-sm font-semibold border ${isActive ? 'bg-primary text-white border-primary' : 'border-border text-textPrimary hover:bg-gray-50'}`}
                >
                  {p}
                </button>
              );
            })}
            <button
              onClick={() => goTo(page + 1)}
              disabled={page === totalPages}
              className={`px-3 py-2 rounded-lg border ${page === totalPages ? 'text-textMuted border-border cursor-not-allowed' : 'text-textPrimary hover:bg-gray-50 border-border'}`}
            >
              Next
            </button>
          </div>
          )}
        </div>
      </FadeIn>

      {/* Newsletter Signup */}
      <FadeIn delay={0.8} direction="up" fullWidth>
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-lg mb-6 opacity-90">
              Subscribe to our newsletter for the latest BIM insights and course updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Blog;

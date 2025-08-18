import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

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
  script.src = `${feedUrl}?alt=json-in-script&max-results=200&callback=${cbName}`;
  document.body.appendChild(script);
});

const BlogPost = () => {
  const { postId } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const data = await fetchJsonp('https://artstarofficial.blogspot.com/feeds/posts/default');
        const list = (data?.feed?.entry || []).map((e) => ({
          entryId: e?.id?.$t || '',
          title: e?.title?.$t || 'Untitled',
          date: e?.published?.$t || e?.updated?.$t || '',
          content: e?.content?.$t || e?.summary?.$t || '',
          link: (e?.link || []).find((l) => l.rel === 'alternate')?.href || '#',
        }));
        setEntries(list);
        setError(null);
      } catch (err) {
        setError('Failed to load post.');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const { current, nextThree } = useMemo(() => {
    const getPostId = (entryId) => {
      const m = (entryId || '').match(/post-(\d+)/);
      return m ? m[1] : undefined;
    };
    const idx = entries.findIndex((e) => getPostId(e.entryId) === postId);
    const current = idx >= 0 ? entries[idx] : null;
    const next = entries.filter((_, i) => i !== idx).slice(0, 3);
    return { current, nextThree: next };
  }, [entries, postId]);

  return (
    <section className="py-10 sm:py-12 bg-gradient-to-br from-light to-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="animate-pulse space-y-4">
            <div className="h-8 w-2/3 bg-gray-200 rounded" />
            <div className="h-4 w-1/3 bg-gray-200 rounded" />
            <div className="h-64 w-full bg-gray-200 rounded" />
          </div>
        ) : error ? (
          <div className="text-center text-textSecondary py-12">{error}</div>
        ) : !current ? (
          <div className="text-center text-textSecondary py-12">Post not found.</div>
        ) : (
          <>
            <FadeIn delay={0.1} direction="down" fullWidth>
              <h1 className="text-3xl sm:text-4xl font-bold text-textPrimary mb-3">{current.title}</h1>
            </FadeIn>
            <div className="text-sm text-textSecondary mb-6">
              {current.date ? new Date(current.date).toLocaleDateString() : ''}
            </div>
            <article className="prose max-w-none prose-headings:text-textPrimary prose-p:text-textSecondary">
              <div dangerouslySetInnerHTML={{ __html: current.content }} />
            </article>

            {nextThree.length > 0 && (
              <div className="mt-12 border-t border-border pt-8">
                <h2 className="text-xl font-semibold text-textPrimary mb-4">You might also like</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {nextThree.map((p) => {
                    const pid = (p.entryId.match(/post-(\d+)/) || [])[1];
                    return (
                      <Link key={p.entryId} to={`/blog/${pid}`} className="block p-4 rounded-xl bg-white shadow border border-border hover:shadow-md transition">
                        <div className="text-sm text-textSecondary mb-1">{p.date ? new Date(p.date).toLocaleDateString() : ''}</div>
                        <div className="text-sm font-semibold text-textPrimary line-clamp-2">{p.title}</div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default BlogPost;



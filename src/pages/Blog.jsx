import React, { useState } from 'react';
import Footer from "../views/Footer";
import FadeIn from "../components/FadeIn";

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const fetchJsonp = (feedUrl) => new Promise((resolve, reject) => {
    const cb = `__blog_${Date.now()}_${Math.floor(Math.random()*10000)}`;
    const s = document.createElement('script');
    window[cb] = (data) => { try { resolve(data); } finally { delete window[cb]; document.body.removeChild(s); } };
    s.onerror = () => { delete window[cb]; document.body.removeChild(s); reject(new Error('JSONP load error')); };
    s.src = `${feedUrl}${feedUrl.includes('?') ? '&' : '?'}alt=json-in-script&callback=${cb}`;
    document.body.appendChild(s);
  });

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const data = await fetchJsonp('https://bimbytesacademy.blogspot.com/feeds/posts/default');
        const entries = data?.feed?.entry || [];
        const parsed = entries.map((e) => {
          const entryId = e?.id?.$t || '';
          const postId = (entryId.match(/post-(\d+)/) || [])[1];
          const title = e?.title?.$t || 'Untitled';
          const link = (e?.link || []).find((l) => l.rel === 'alternate')?.href || '#';
          const rawContent = e?.content?.$t || e?.summary?.$t || '';
          const m = rawContent.match(/<img [^>]*src=['"]([^'"]+)['"]/i);
          const image = (e?.['media$thumbnail']?.url) || (m ? m[1] : undefined);
          const published = e?.published?.$t || '';
          const author = e?.author?.[0]?.name?.$t || 'Unknown Author';
          
          return { postId, title, link, image, published, author, content: rawContent };
        });
        setPosts(parsed);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const openBlog = (blog) => {
    setSelectedBlog(blog);
  };

  const closeBlog = () => {
    setSelectedBlog(null);
  };

  if (selectedBlog) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button 
            onClick={closeBlog}
            className="mb-6 px-4 py-2 bg-crimson text-white rounded-lg hover:bg-crimson/90 transition-colors"
          >
            ← Back to Blogs
          </button>
          
          <article className="prose prose-lg max-w-none">
            <h1 className="text-3xl sm:text-4xl font-bold text-textPrimary mb-4">
              {selectedBlog.title}
            </h1>
            
            <div className="flex items-center gap-4 text-textSecondary mb-6">
              <span>By {selectedBlog.author}</span>
              <span>•</span>
              <span>{formatDate(selectedBlog.published)}</span>
            </div>
            
            {selectedBlog.image && (
              <img 
                src={selectedBlog.image} 
                alt={selectedBlog.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            )}
            
            <div 
              className="text-textSecondary leading-relaxed"
              dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
            />
          </article>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <FadeIn delay={0.2} direction="down" fullWidth>
            <div className="text-center mb-0">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-textPrimary">
                Our <span className="text-gradient">Blog</span>
              </h1>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <FadeIn key={post.postId} delay={0.1 + index * 0.05} direction="up">
                  <article 
                    className="bg-white rounded-xl shadow-sm ring-1 ring-border hover:shadow-md transition-all duration-300 ease-smooth cursor-pointer group"
                    onClick={() => openBlog(post)}
                  >
                    {post.image ? (
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 object-cover rounded-t-xl group-hover:opacity-90 transition-opacity"
                      />
                    ) : (
                      <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-t-xl flex items-center justify-center">
                        <span className="text-4xl">📝</span>
                      </div>
                    )}
                    
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-textPrimary mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <div className="flex items-center justify-between text-sm text-textSecondary">
                        <span>{post.author}</span>
                        <span>{formatDate(post.published)}</span>
                      </div>
                      
                      
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blog;

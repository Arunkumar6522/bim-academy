import React, { useState } from 'react';
import Footer from "../views/Footer";
import FadeIn from "../components/FadeIn";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'bim', name: 'BIM Technology' },
    { id: 'revit', name: 'Revit Tips' },
    { id: 'career', name: 'Career Guide' },
    { id: 'industry', name: 'Industry News' }
  ];

  const blogPosts = [
    {
      id: 1,
      category: 'bim',
      title: "The Future of BIM in Construction Industry",
      excerpt: "Discover how Building Information Modeling is revolutionizing the construction sector and what it means for professionals.",
      author: "Rajesh Kumar",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "/api/placeholder/400/250",
      tags: ["BIM", "Construction", "Technology", "Future"]
    },
    {
      id: 2,
      category: 'revit',
      title: "10 Essential Revit Shortcuts Every Professional Should Know",
      excerpt: "Master these keyboard shortcuts to significantly improve your Revit workflow and productivity.",
      author: "Priya Sharma",
      date: "March 12, 2024",
      readTime: "3 min read",
      image: "/api/placeholder/400/250",
      tags: ["Revit", "Shortcuts", "Productivity", "Tips"]
    },
    {
      id: 3,
      category: 'career',
      title: "How to Build a Strong BIM Portfolio",
      excerpt: "Learn the essential elements of creating a compelling BIM portfolio that will impress potential employers.",
      author: "Arun Patel",
      date: "March 10, 2024",
      readTime: "7 min read",
      image: "/api/placeholder/400/250",
      tags: ["Portfolio", "Career", "BIM", "Employment"]
    },
    {
      id: 4,
      category: 'industry',
      title: "Latest Trends in MEP Coordination",
      excerpt: "Explore the newest developments in Mechanical, Electrical, and Plumbing coordination workflows.",
      author: "Meera Iyer",
      date: "March 8, 2024",
      readTime: "6 min read",
      image: "/api/placeholder/400/250",
      tags: ["MEP", "Coordination", "Trends", "Industry"]
    },
    {
      id: 5,
      category: 'bim',
      title: "BIM vs Traditional CAD: A Comprehensive Comparison",
      excerpt: "Understand the key differences between BIM and traditional CAD approaches in modern construction.",
      author: "Rajesh Kumar",
      date: "March 5, 2024",
      readTime: "8 min read",
      image: "/api/placeholder/400/250",
      tags: ["BIM", "CAD", "Comparison", "Construction"]
    },
    {
      id: 6,
      category: 'revit',
      title: "Creating Custom Revit Families: A Step-by-Step Guide",
      excerpt: "Master the art of creating custom Revit families to enhance your modeling capabilities.",
      author: "Priya Sharma",
      date: "March 3, 2024",
      readTime: "10 min read",
      image: "/api/placeholder/400/250",
      tags: ["Revit", "Families", "Custom", "Modeling"]
    },
    {
      id: 7,
      category: 'career',
      title: "Top BIM Job Opportunities in 2024",
      excerpt: "Explore the most in-demand BIM positions and the skills required to land these high-paying roles.",
      author: "Arun Patel",
      date: "March 1, 2024",
      readTime: "6 min read",
      image: "/api/placeholder/400/250",
      tags: ["Jobs", "Career", "BIM", "2024"]
    },
    {
      id: 8,
      category: 'industry',
      title: "Sustainable Building Design with BIM",
      excerpt: "Learn how BIM technology is enabling more sustainable and environmentally friendly building designs.",
      author: "Meera Iyer",
      date: "February 28, 2024",
      readTime: "7 min read",
      image: "/api/placeholder/400/250",
      tags: ["Sustainability", "Green Building", "BIM", "Design"]
    }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = blogPosts[0];

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <FadeIn delay={0.2} direction="down" fullWidth>
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-textPrimary mb-6">
                Our <span className="text-gradient">Blog</span>
              </h1>
              <p className="text-xl text-textSecondary max-w-3xl mx-auto">
                Stay updated with the latest insights, tips, and trends in BIM technology, 
                Revit workflows, and the construction industry.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.2} direction="up" fullWidth>
            <div className="card overflow-hidden hover:shadow-glow transition-all duration-500 ease-smooth">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <div className="w-full h-64 lg:h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-textSecondary text-lg">Featured Image</span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-white text-sm rounded-full font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-textSecondary mb-4">
                    <span>{featuredPost.category.toUpperCase()}</span>
                    <span>•</span>
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  
                  <h2 className="text-2xl lg:text-3xl font-bold text-textPrimary mb-4 hover:text-primary transition-colors duration-300 ease-smooth cursor-pointer">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-textSecondary mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-semibold">
                          {featuredPost.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="text-textPrimary font-medium">{featuredPost.author}</span>
                    </div>
                    
                    <button className="btn-primary px-6 py-3">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding bg-gradient-to-br from-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.3} direction="up" fullWidth>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ease-smooth ${
                    activeCategory === category.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-white text-textSecondary hover:bg-primary/10 hover:text-primary shadow-sm'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <FadeIn key={post.id} delay={0.1 + index * 0.05} direction="up">
                <article className="card overflow-hidden hover:shadow-glow transition-all duration-500 ease-smooth group">
                  <div className="relative overflow-hidden">
                    <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <span className="text-textSecondary text-lg">Blog Image</span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary/90 text-white text-xs rounded-full font-medium">
                        {post.category.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-textSecondary mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-textPrimary mb-3 group-hover:text-primary transition-colors duration-300 ease-smooth cursor-pointer line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-textSecondary mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary text-sm font-semibold">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <span className="text-textPrimary text-sm font-medium">{post.author}</span>
                      </div>
                      
                      <button className="text-primary font-semibold hover:text-secondary transition-colors duration-300 ease-smooth">
                        Read More →
                      </button>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="section-padding bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn delay={0.2} direction="up" fullWidth>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Stay Updated with BIM Insights
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest BIM tips, industry news, and career opportunities delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary text-textPrimary"
              />
              <button className="btn-secondary px-8 py-4 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            
            <p className="text-white/70 text-sm mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="section-padding bg-gradient-to-br from-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.2} direction="down" fullWidth>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary mb-4">
                Popular <span className="text-gradient">Topics</span>
              </h2>
              <p className="text-lg text-textSecondary max-w-3xl mx-auto">
                Explore our most-read articles and trending discussions
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { topic: "Revit Tips & Tricks", count: "45 articles", icon: "💡" },
              { topic: "BIM Implementation", count: "32 articles", icon: "🏗️" },
              { topic: "Career Development", count: "28 articles", icon: "🚀" },
              { topic: "Industry Trends", count: "41 articles", icon: "📈" }
            ].map((item, index) => (
              <FadeIn key={index} delay={0.2 + index * 0.1} direction="up">
                <div className="card p-6 text-center hover:shadow-glow transition-all duration-500 ease-smooth cursor-pointer">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-textPrimary mb-2">{item.topic}</h3>
                  <p className="text-textSecondary">{item.count}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blog;

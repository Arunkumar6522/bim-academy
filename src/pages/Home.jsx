import React from 'react';
import Hero from "../views/Hero";
import Services from "../views/Services";
import Footer from "../views/Footer";
import HomeBlogsGrid from "../views/HomeBlogsGrid";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      {/* Home Blogs */}
      <section className="section-padding bg-gradient-to-br from-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6">
            {/* Blogs Card */}
            <div className="bg-white rounded-2xl shadow ring-1 ring-border p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-textPrimary">Latest from our Blog</h3>
                <a href="/blog" className="text-primary font-semibold hover:underline">View all</a>
              </div>
              <HomeBlogsGrid />
            </div>
          </div>
        </div>
      </section>
      {/* Location Map */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div>
              <h2 className="text-2xl font-bold text-textPrimary">Find Us</h2>
              <p className="text-textSecondary">Bim Bytes Academy — Chennai & Online</p>
            </div>
            <a href="/brochure.pdf" download className="btn-primary px-6 py-3">Download Brochure</a>
          </div>
          <div className="rounded-2xl overflow-hidden shadow ring-1 ring-border">
            <iframe
              title="Bim Bytes Academy Location"
              src="https://www.google.com/maps?q=Chennai&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;

import React from 'react';
import Footer from "../views/Footer";
import FadeIn from "../components/FadeIn";

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <FadeIn delay={0.2} direction="down" fullWidth>
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-textPrimary mb-6">
                <span className="text-gradient">Contact Us</span>
              </h1>
              <p className="text-xl text-textSecondary max-w-3xl mx-auto">
                Get in touch with us today to learn more about our training programs and take the first step towards your BIM career.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <div>
              <h2 className="text-2xl font-bold text-textPrimary">Find Us</h2>
              <p className="text-textSecondary">Bim Bytes Academy — Chennai & Online</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow ring-1 ring-border">
            <iframe
              title="Bim Bytes Academy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.7410347221407!2d80.10356067580467!3d13.115585111703712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52633fd7b23c87%3A0x6e207c138841be94!2sBIM%20BYTES%20ACADEMY!5e0!3m2!1sen!2sin!4v1756291115823!5m2!1sen!2sin"
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

export default Contact;

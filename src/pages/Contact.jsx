import React from 'react';
import Footer from "../views/Footer";
import FadeIn from "../components/FadeIn";
import EnquiryForm from "../components/EnquiryForm";

const Contact = () => {
  return (
    <>
             {/* Hero Section */}
               <section>
         <div>
                     <FadeIn delay={0.2} direction="down" fullWidth>
             <div className="text-center mb-12">
             </div>
           </FadeIn>
        </div>
      </section>

             {/* Contact Cards */}
       <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.2} direction="down" fullWidth>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary mb-4">
                Get in <span className="text-gradient">Touch</span>
              </h2>
              <p className="text-lg text-textSecondary max-w-3xl mx-auto">
                Reach out to us through any of these channels for quick assistance
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Location Card */}
            <FadeIn delay={0.3} direction="up">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 text-center group hover:shadow-xl transition-all duration-300 border border-primary/10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-textPrimary mb-3">Our Location</h3>
                                 <p className="text-textSecondary leading-relaxed">
                   BimBytes Academy, Avadi
                 </p>
              </div>
            </FadeIn>

            {/* Phone Card */}
            <FadeIn delay={0.4} direction="up">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 text-center group hover:shadow-xl transition-all duration-300 border border-primary/10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-textPrimary mb-3">Phone Number</h3>
                <p className="text-textSecondary leading-relaxed">
                  <a href="tel:+918807740059" className="text-primary hover:text-primary/80 transition-colors font-medium">
                    +91 88077 40059
                  </a>
                </p>
              </div>
            </FadeIn>

            {/* Email Card */}
            <FadeIn delay={0.5} direction="up">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 text-center group hover:shadow-xl transition-all duration-300 border border-primary/10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-textPrimary mb-3">Email Address</h3>
                <p className="text-textSecondary leading-relaxed">
                  <a href="mailto:info@bimbytesacademy.com" className="text-primary hover:text-primary/80 transition-colors font-medium">
                    info@bimbytesacademy.com
                  </a>
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

             {/* Enquiry Form */}
       <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.2} direction="up" fullWidth>
            <EnquiryForm />
          </FadeIn>
        </div>
      </section>

             {/* Map */}
       <section className="bg-white">
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

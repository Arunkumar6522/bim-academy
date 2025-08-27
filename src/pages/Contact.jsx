import React, { useState } from 'react';
import Footer from "../views/Footer";
import FadeIn from "../components/FadeIn";
import LeadCaptureModal from "../components/LeadCaptureModal";

const Contact = () => {
  const [showLeadModal, setShowLeadModal] = useState(false);

  const openLeadModal = () => setShowLeadModal(true);
  const closeLeadModal = () => setShowLeadModal(false);

  const contactInfo = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Visit Us",
      details: [
        "BimBytes Academy",
        "123 Tech Park, Anna Nagar",
        "Chennai, Tamil Nadu 600040",
        "India"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Call Us",
      details: [
        "+91 98765 43210",
        "+91 87654 32109",
        "Mon - Sat: 9:00 AM - 7:00 PM"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Us",
      details: [
        "info@bimbytesacademy.com",
        "admissions@bimbytesacademy.com",
        "support@bimbytesacademy.com"
      ]
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: "📘", url: "#" },
    { name: "LinkedIn", icon: "💼", url: "#" },
    { name: "Instagram", icon: "📷", url: "#" },
    { name: "YouTube", icon: "📺", url: "#" },
    { name: "WhatsApp", icon: "💬", url: "#" }
  ];

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
                Get in touch with us for any questions about our BIM training programs, 
                enrollment, or career guidance. We're here to help you succeed!
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <FadeIn key={index} delay={0.2 + index * 0.1} direction="up">
                <div className="card p-8 text-center hover:shadow-glow transition-all duration-500 ease-smooth">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl text-primary mb-4">
                      {info.icon}
                    </div>
                    <h3 className="text-xl font-bold text-textPrimary mb-4">{info.title}</h3>
                    <div className="space-y-2">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-textSecondary">{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-gradient-to-br from-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <FadeIn delay={0.2} direction="left">
              <div>
                <h2 className="text-3xl font-bold text-textPrimary mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-textPrimary mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 ease-smooth"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-textPrimary mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 ease-smooth"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-textPrimary mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 ease-smooth"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-textPrimary mb-2">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 ease-smooth"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-textPrimary mb-2">Subject</label>
                    <select className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 ease-smooth">
                      <option value="">Select a subject</option>
                      <option value="course-enquiry">Course Enquiry</option>
                      <option value="admission">Admission</option>
                      <option value="placement">Placement</option>
                      <option value="general">General Information</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-textPrimary mb-2">Message</label>
                    <textarea
                      rows="5"
                      className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 ease-smooth resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full btn-primary py-4 text-lg font-semibold"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </FadeIn>

            {/* Map */}
            <FadeIn delay={0.2} direction="right">
              <div>
                <h2 className="text-3xl font-bold text-textPrimary mb-6">Find Us</h2>
                <div className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-border">
                  <iframe
                    title="BimBytes Academy Location"
                    src="https://www.google.com/maps?q=Chennai+Anna+Nagar&output=embed"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                
                {/* Quick Contact */}
                <div className="mt-8 p-6 bg-white rounded-2xl shadow-lg ring-1 ring-border">
                  <h3 className="text-xl font-bold text-textPrimary mb-4">Quick Contact</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-primary">📞</span>
                      <span className="text-textSecondary">+91 98765 43210</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-primary">📧</span>
                      <span className="text-textSecondary">info@bimbytesacademy.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-primary">🕒</span>
                      <span className="text-textSecondary">Mon - Sat: 9:00 AM - 7:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Social Media & CTA */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.2} direction="up" fullWidth>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-textPrimary mb-4">Connect With Us</h2>
              <p className="text-lg text-textSecondary max-w-2xl mx-auto">
                Follow us on social media for the latest updates, tips, and industry insights
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} direction="up" fullWidth>
            <div className="flex justify-center gap-6 mb-12">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center text-2xl hover:from-primary/20 hover:to-secondary/20 hover:scale-110 transition-all duration-300 ease-smooth"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.4} direction="up" fullWidth>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-textPrimary mb-4">Ready to Start Your BIM Journey?</h3>
              <p className="text-lg text-textSecondary mb-8 max-w-2xl mx-auto">
                Get in touch with us today to learn more about our training programs and take the first step towards your BIM career.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={openLeadModal} className="btn-primary px-8 py-4 text-lg">
                  Book Free Counselling
                </button>
                <button className="btn-secondary px-8 py-4 text-lg">
                  Download Brochure
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
      
      <LeadCaptureModal isOpen={showLeadModal} onClose={closeLeadModal} />
    </>
  );
};

export default Contact;

import React from 'react';
import FadeIn from '../components/FadeIn';
import imageOne from '../assets/image 1.jpg';

const About = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-light to-white min-h-screen">
      {/* Header */}
      <div className="section-inner text-center mb-16">
        <FadeIn delay={0.1} direction="down" fullWidth>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-textPrimary mb-6 leading-tight">
            About BimBytes Academy
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.2} direction="down" fullWidth>
          <p className="text-lg sm:text-xl text-textSecondary max-w-4xl mx-auto leading-relaxed">
            A premier BIM training institute dedicated to transforming professionals into industry-ready 
            BIM experts through comprehensive training, live project experience, and career guidance.
          </p>
        </FadeIn>
      </div>

      {/* Stats Section */}
      <FadeIn delay={0.2} direction="up" fullWidth>
        <div className="section-inner grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 ease-out hover:-translate-y-1">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10+</div>
            <div className="text-textPrimary font-medium">Years Experience</div>
          </div>
          <div className="text-center bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 ease-out hover:-translate-y-1">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-textPrimary font-medium">Students Trained</div>
          </div>
          <div className="text-center bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 ease-out hover:-translate-y-1">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
            <div className="text-textPrimary font-medium">Placement Rate</div>
          </div>
          <div className="text-center bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 ease-out hover:-translate-y-1">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-textPrimary font-medium">Live Projects</div>
          </div>
        </div>
      </FadeIn>

      {/* Mission & Vision */}
      <div className="section-inner grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <FadeIn delay={0.3} direction="left">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-textPrimary mb-4">Our Mission</h3>
            <p className="text-textSecondary leading-relaxed">
              To provide affordable, high-quality BIM training that is 100% industry-relevant and prepares 
              students for real-world challenges in the AEC industry. We bridge the gap between theory 
              and practical application through live project training.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.4} direction="right">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-textPrimary mb-4">Our Vision</h3>
            <p className="text-textSecondary leading-relaxed">
              To become the leading BIM training institute that produces industry-ready professionals 
              who can immediately contribute to the growing demand for BIM expertise in construction 
              and engineering sectors worldwide.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Core Values */}
      <FadeIn delay={0.4} direction="up" fullWidth>
        <div className="section-inner text-center mb-12">
          <h2 className="text-3xl font-bold text-textPrimary mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-textPrimary mb-2">Innovation</h3>
              <p className="text-textSecondary">Continuously evolving our training methods to match industry standards</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-textPrimary mb-2">Excellence</h3>
              <p className="text-textSecondary">Maintaining the highest standards in training quality and student outcomes</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-textPrimary mb-2">Results</h3>
              <p className="text-textSecondary">Focusing on measurable outcomes and career success for our students</p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Why Choose Us Section */}
      <FadeIn delay={0.5} direction="up" fullWidth>
        <div className="section-inner text-center mb-12">
          <h2 className="text-3xl font-bold text-textPrimary mb-8">Why Choose BimBytes Academy?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-textPrimary mb-2">10+ Years Industry Experience</h3>
              <p className="text-textSecondary">Learn from professionals with extensive real-world project experience</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-textPrimary mb-2">Live Project Training</h3>
              <p className="text-textSecondary">Work on real client projects from concept to completion</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-textPrimary mb-2">Placement Assistance</h3>
              <p className="text-textSecondary">Get job interview support, portfolio preparation, and industry connections</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-textPrimary mb-2">Certified Trainers</h3>
              <p className="text-textSecondary">Learn from certified professionals with years of project experience</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-textPrimary mb-2">Updated Curriculum</h3>
              <p className="text-textSecondary">Our courses match the latest BIM standards and industry workflows</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-textPrimary mb-2">Career Growth Focus</h3>
              <p className="text-textSecondary">We prepare students for high-paying BIM jobs in India and abroad</p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Team Section */}
      <FadeIn delay={0.6} direction="up" fullWidth>
        <div className="section-inner text-center mb-12">
          <h2 className="text-3xl font-bold text-textPrimary mb-8">Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <img src={imageOne} alt="BIM Expert" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-bold text-textPrimary mb-2">Senior BIM Trainer</h3>
              <p className="text-textSecondary">10+ years experience in MEP and Architecture</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <img src={imageOne} alt="Structural Expert" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-bold text-textPrimary mb-2">Structural BIM Specialist</h3>
              <p className="text-textSecondary">Expert in Revit Structural and analysis</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <img src={imageOne} alt="Coordination Expert" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-bold text-textPrimary mb-2">BIM Coordinator</h3>
              <p className="text-textSecondary">Specialist in multi-discipline coordination</p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* CTA Section */}
      <FadeIn delay={0.7} direction="up" fullWidth>
        <div className="section-inner text-center bg-gradient-to-r from-primary to-primary/80 text-white p-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your BIM Journey?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join hundreds of successful professionals who have transformed their careers with our training
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
            Explore Our Courses
          </button>
        </div>
      </FadeIn>
    </section>
  );
};

export default About;

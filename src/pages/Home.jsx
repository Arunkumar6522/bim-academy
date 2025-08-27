import React from 'react';
import Hero from "../views/Hero";
import Footer from "../views/Footer";
import HomeBlogsGrid from "../views/HomeBlogsGrid";
import FadeIn from "../components/FadeIn";
import GoogleReviews from "../components/GoogleReviews";

const Home = () => {
  return (
    <>
      <Hero />
      
      {/* Why Choose BimBytes Section */}
      <section className="section-padding bg-gradient-to-br from-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.2} direction="down" fullWidth>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary mb-4">
                Why Choose <span className="text-gradient">BimBytes Academy</span>?
              </h2>
              <p className="text-lg text-textSecondary max-w-3xl mx-auto">
                We provide industry-driven BIM training that bridges the gap between theory and real-world application, 
                preparing you for high-demand careers in the AEC industry.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🚀",
                title: "Skill Development",
                description: "Comprehensive training programs designed to develop practical BIM skills through hands-on projects and real-world scenarios."
              },
              {
                icon: "🏗️",
                title: "On-Site Opportunities",
                description: "Direct access to live project sites and industry partnerships for practical learning and networking."
              },
              {
                icon: "👥",
                title: "Mentored 500+ Students",
                description: "Proven track record of successfully mentoring and placing hundreds of students in top BIM positions."
              },
              {
                icon: "🌍",
                title: "International Project Experience",
                description: "Exposure to global BIM standards and international projects to prepare you for worldwide opportunities."
              }
            ].map((feature, index) => (
              <FadeIn key={index} delay={0.2 + index * 0.1} direction="up">
                <div className="card p-8 text-center group hover:shadow-glow transition-all duration-500 ease-smooth">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-500 ease-smooth">
                      <span className="text-3xl">{feature.icon}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-textPrimary mb-3 group-hover:text-primary transition-colors duration-300 ease-smooth">
                    {feature.title}
                  </h3>
                  
                  <p className="text-textSecondary leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-smooth">
                    <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews (API-based, no map) */}
      <GoogleReviews />

      {/* Existing Courses Section */}
      <section className="section-padding bg-gradient-to-br from-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.2} direction="down" fullWidth>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary mb-4">
                Our <span className="text-gradient">Training Programs</span>
              </h2>
              <p className="text-lg text-textSecondary max-w-3xl mx-auto">
                Industry-driven BIM training programs designed to make you job-ready
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Revit MEP (Mechanical, Electrical & Plumbing)",
                duration: "3-4 Months",
                level: "Beginner to Advanced",
                price: "₹45,000",
                originalPrice: "₹60,000",
                description: "Comprehensive training on MEP modeling covering HVAC, electrical, plumbing, and fire-fighting systems."
              },
              {
                title: "Revit Architecture",
                duration: "3-4 Months",
                level: "Beginner to Advanced",
                price: "₹40,000",
                originalPrice: "₹55,000",
                description: "Master architectural design and BIM workflows with advanced detailing and rendering techniques."
              },
              {
                title: "Revit Structural",
                duration: "3-4 Months",
                level: "Beginner to Advanced",
                price: "₹42,000",
                originalPrice: "₹58,000",
                description: "Learn structural modeling, analysis integration, and clash detection for engineering projects."
              }
            ].map((course, index) => (
              <FadeIn key={index} delay={0.2 + index * 0.1} direction="up">
                <div className="card overflow-hidden hover:shadow-glow transition-all duration-500 ease-smooth group">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-textPrimary mb-3 group-hover:text-primary transition-colors duration-300 ease-smooth">
                      {course.title}
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="text-center p-2 bg-primary/5 rounded-lg">
                        <div className="text-xs text-textSecondary mb-1">Duration</div>
                        <div className="font-semibold text-textPrimary text-sm">{course.duration}</div>
                      </div>
                      <div className="text-center p-2 bg-secondary/5 rounded-lg">
                        <div className="text-xs text-textSecondary mb-1">Level</div>
                        <div className="font-semibold text-textPrimary text-sm">{course.level}</div>
                      </div>
                    </div>
                    
                    <p className="text-textSecondary text-sm mb-4 leading-relaxed">
                      {course.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-primary">{course.price}</span>
                        <span className="text-sm text-textSecondary line-through">{course.originalPrice}</span>
                      </div>
                      <button className="btn-primary px-4 py-2 text-sm">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <FadeIn delay={0.4} direction="up" fullWidth>
            <div className="text-center mt-12">
              <button className="btn-secondary px-8 py-4 text-lg">
                View All Courses
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.2} direction="down" fullWidth>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary mb-4">
                Our <span className="text-gradient">Achievements</span>
              </h2>
              <p className="text-lg text-textSecondary max-w-3xl mx-auto">
                Milestones that showcase our commitment to excellence in BIM education
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "14+", label: "Years Experience", icon: "🎯" },
              { number: "5000+", label: "Students Trained", icon: "👥" },
              { number: "200+", label: "Companies Partnered", icon: "🤝" },
              { number: "95%", label: "Placement Rate", icon: "📈" }
            ].map((achievement, index) => (
              <FadeIn key={index} delay={0.2 + index * 0.1} direction="up">
                <div className="card p-8 text-center hover:shadow-glow transition-all duration-500 ease-smooth">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl mb-4">
                      <span className="text-3xl">{achievement.icon}</span>
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">{achievement.number}</div>
                    <div className="text-textPrimary font-semibold">{achievement.label}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

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

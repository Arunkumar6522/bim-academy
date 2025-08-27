import React from 'react';
import Hero from "../views/Hero";
import Footer from "../views/Footer";
import HomeBlogsGrid from "../views/HomeBlogsGrid";
import FadeIn from "../components/FadeIn";
import AchievementsCarousel from "../components/AchievementsCarousel";
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
                description: "Beginner to Advanced training on MEP modeling. Covers HVAC, electrical, plumbing, and fire-fighting systems. Includes project-based learning with real industry scenarios.",
                careerPath: "MEP Modeler, BIM MEP Coordinator, BIM MEP Engineer"
              },
              {
                title: "Revit Architecture",
                description: "Comprehensive training on architectural design and BIM workflows. Learn building design, space planning, family creation, and rendering. Advanced detailing and documentation for construction drawings.",
                careerPath: "Architectural BIM Modeler, BIM Architect"
              },
              {
                title: "Revit Structural",
                description: "Learn to model structural elements such as beams, columns, foundations, and rebar. Structural analysis integration and clash detection techniques. Focused training for civil and structural engineering workflows.",
                careerPath: "Structural BIM Modeler, Structural Engineer (BIM)"
              },
              {
                title: "Navisworks Manage",
                description: "Training on clash detection, coordination, and 4D simulation. Learn to integrate models from multiple disciplines for seamless collaboration. Master project review, visualization, and BIM coordination workflows.",
                careerPath: "BIM Coordinator, BIM Manager"
              },
              {
                title: "MEP Modeler Course",
                description: "Combination of Revit MEP and basic Navisworks Manage. Hands-on training on mechanical, electrical, and plumbing modeling. Includes coordination fundamentals.",
                careerPath: "MEP Modeler, BIM MEP Coordinator"
              },
              {
                title: "MEP BIM Coordinator Course",
                description: "Advanced MEP modeling with Navisworks coordination. Clash detection, model management, and communication with stakeholders. Practical exposure to BIM execution plans and standards.",
                careerPath: "MEP BIM Coordinator, BIM MEP Manager"
              },
              {
                title: "BIM Manager Course",
                description: "Complete BIM lifecycle management training. Covers multi-discipline coordination, team leadership, and project delivery standards. Includes exposure to BIM360, documentation control, and QA/QC workflows.",
                careerPath: "BIM Manager, BIM Director"
              }
            ].map((course, index) => (
              <FadeIn key={index} delay={0.2 + index * 0.1} direction="up">
                <div className="card overflow-hidden hover:shadow-glow transition-all duration-500 ease-smooth group">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-textPrimary mb-3 group-hover:text-primary transition-colors duration-300 ease-smooth">
                      {course.title}
                    </h3>
                    
                    <p className="text-textSecondary text-sm mb-4 leading-relaxed">
                      {course.description}
                    </p>
                    
                    <div className="bg-primary/5 p-3 rounded-lg mb-4">
                      <span className="text-xs text-primary uppercase tracking-wide font-semibold">Career Path: </span>
                      <span className="text-sm text-textPrimary">{course.careerPath}</span>
                    </div>
                    
                    <div className="flex justify-center">
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

      {/* Achievements Section - Carousel */}
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

          {/* Image + text cards carousel */}
          <AchievementsCarousel />
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

export default Home;

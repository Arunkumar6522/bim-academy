import React from 'react';
import Footer from "../views/Footer";
import FadeIn from "../components/FadeIn";

const Placement = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <FadeIn delay={0.2} direction="down" fullWidth>
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-textPrimary mb-6">
                <span className="text-gradient">Placement & Internships</span>
              </h1>
              <p className="text-xl text-textSecondary max-w-3xl mx-auto">
                Launch your BIM career with our comprehensive placement assistance and internship programs. 
                Connect with top companies and gain real-world experience.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Placement Statistics */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.3} direction="up" fullWidth>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-textPrimary font-semibold">Placement Rate</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-secondary/10 to-accent/10">
                <div className="text-4xl font-bold text-secondary mb-2">200+</div>
                <div className="text-textPrimary font-semibold">Companies Partnered</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10">
                <div className="text-4xl font-bold text-accent mb-2">₹8-15L</div>
                <div className="text-textPrimary font-semibold">Average Salary</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-success/10 to-primary/10">
                <div className="text-4xl font-bold text-success mb-2">50+</div>
                <div className="text-textPrimary font-semibold">Internship Positions</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Placement Process */}
      <section className="section-padding bg-gradient-to-br from-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.2} direction="down" fullWidth>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary mb-4">
                Our <span className="text-gradient">Placement Process</span>
              </h2>
              <p className="text-lg text-textSecondary max-w-3xl mx-auto">
                A structured approach to ensure you land the perfect BIM role
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Skill Assessment",
                description: "Comprehensive evaluation of your BIM skills and project portfolio"
              },
              {
                step: "02",
                title: "Career Counseling",
                description: "One-on-one guidance to identify your career path and goals"
              },
              {
                step: "03",
                title: "Interview Preparation",
                description: "Mock interviews, technical assessments, and soft skills training"
              },
              {
                step: "04",
                title: "Company Matching",
                description: "Connect with companies that align with your skills and aspirations"
              },
              {
                step: "05",
                title: "Interview Support",
                description: "Accompany you through the entire interview process"
              },
              {
                step: "06",
                title: "Post-Placement",
                description: "Ongoing support and guidance in your new role"
              }
            ].map((item, index) => (
              <FadeIn key={index} delay={0.2 + index * 0.1} direction="up">
                <div className="card p-8 text-center group hover:shadow-glow transition-all duration-500 ease-smooth">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full text-white text-2xl font-bold">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-textPrimary mb-3">{item.title}</h3>
                  <p className="text-textSecondary">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Programs */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.2} direction="down" fullWidth>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary mb-4">
                <span className="text-gradient">Internship Programs</span>
              </h2>
              <p className="text-lg text-textSecondary max-w-3xl mx-auto">
                Gain hands-on experience with real projects and industry professionals
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Summer Internship",
                duration: "2-3 Months",
                stipend: "₹15,000 - ₹25,000",
                description: "Intensive summer program with live project exposure",
                features: ["Real client projects", "Mentorship", "Certificate", "Potential full-time offer"]
              },
              {
                title: "Semester Internship",
                duration: "6 Months",
                stipend: "₹20,000 - ₹35,000",
                description: "Extended internship for comprehensive learning",
                features: ["Multiple project exposure", "Industry networking", "Portfolio building", "Career guidance"]
              }
            ].map((program, index) => (
              <FadeIn key={index} delay={0.2 + index * 0.1} direction="up">
                <div className="card p-8 hover:shadow-glow transition-all duration-500 ease-smooth">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-textPrimary mb-2">{program.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-textSecondary mb-4">
                      <span>Duration: {program.duration}</span>
                      <span>Stipend: {program.stipend}</span>
                    </div>
                    <p className="text-textSecondary mb-4">{program.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-textSecondary">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="btn-primary w-full mt-6">Apply Now</button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Companies */}
      <section className="section-padding bg-gradient-to-br from-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.2} direction="down" fullWidth>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary mb-4">
                Our <span className="text-gradient">Partner Companies</span>
              </h2>
              <p className="text-lg text-textSecondary max-w-3xl mx-auto">
                Leading companies trust us for their BIM talent needs
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "L&T Construction", "Godrej Properties", "DLF", "Prestige Group",
              "Brigade Group", "Sobha Limited", "Puravankara", "Ashok Leyland",
              "TVS Motors", "Wipro", "Infosys", "TCS"
            ].map((company, index) => (
              <FadeIn key={index} delay={0.1 + index * 0.05} direction="up">
                <div className="card p-6 text-center hover:shadow-lg transition-all duration-300 ease-smooth">
                  <div className="text-lg font-semibold text-textPrimary">{company}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.2} direction="down" fullWidth>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary mb-4">
                <span className="text-gradient">Success Stories</span>
              </h2>
              <p className="text-lg text-textSecondary max-w-3xl mx-auto">
                Hear from our graduates who have successfully launched their BIM careers
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "BIM Modeler at L&T",
                salary: "₹8.5 LPA",
                story: "The hands-on project training helped me understand real-world BIM workflows. I got placed within 2 weeks of completing the course."
              },
              {
                name: "Rahul Kumar",
                role: "MEP Coordinator at Godrej",
                salary: "₹12 LPA",
                story: "The internship program gave me the confidence to handle complex projects. The placement team was incredibly supportive throughout."
              },
              {
                name: "Anjali Patel",
                role: "BIM Manager at DLF",
                salary: "₹15 LPA",
                story: "From learning Revit basics to managing BIM teams, the journey has been amazing. The academy's industry connections are invaluable."
              }
            ].map((story, index) => (
              <FadeIn key={index} delay={0.2 + index * 0.1} direction="up">
                <div className="card p-8 hover:shadow-glow transition-all duration-500 ease-smooth">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4"></div>
                    <h3 className="text-xl font-bold text-textPrimary mb-1">{story.name}</h3>
                    <p className="text-primary font-semibold mb-2">{story.role}</p>
                    <p className="text-success font-bold text-lg">{story.salary}</p>
                  </div>
                  <p className="text-textSecondary italic">"{story.story}"</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn delay={0.2} direction="up" fullWidth>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Launch Your BIM Career?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join our placement program and connect with top companies in the AEC industry
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary px-8 py-4 text-lg">Apply for Placement</button>
              <button className="btn-white px-8 py-4 text-lg">Internship Programs</button>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Placement;

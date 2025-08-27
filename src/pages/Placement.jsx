import React from 'react';
import Footer from "../views/Footer";
import FadeIn from "../components/FadeIn";

const Placement = () => {
  return (
    <>
      {/* Hero Section */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                     <FadeIn delay={0.2} direction="down" fullWidth>
             <div className="text-center mb-12">
             </div>
           </FadeIn>
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
                    <div className="text-sm text-textSecondary mb-4">
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



      {/* CTA Section */}
      <section>
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

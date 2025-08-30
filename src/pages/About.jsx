import React from 'react';
import Footer from "../views/Footer";
import FadeIn from "../components/FadeIn";

const About = () => {

  const milestones = [
    { year: "2010", title: "Founded", description: "Started as a small training center in Chennai" },
    { year: "2013", title: "Expansion", description: "Added MEP and Structural training programs" },
    { year: "2016", title: "Industry Recognition", description: "Partnered with 50+ companies" },
    { year: "2019", title: "Digital Transformation", description: "Launched online training programs" },
    { year: "2022", title: "National Presence", description: "Expanded to 5 major cities" },
    { year: "2024", title: "Innovation Hub", description: "Became leading BIM training institute" }
  ];



  return (
    <>
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.2} direction="down" fullWidth>
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-textPrimary mb-6">
                <span className="text-gradient">About Us</span>
              </h1>
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-textPrimary mb-6 italic">
                "The value of knowledge is realized only when it transform into action and innovation"
              </blockquote>
              <p className="text-lg text-textSecondary mb-8">- Y. Mohanakrishnan</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Description & Team Photo Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.2} direction="left">
              <div>
                <p className="text-lg text-textSecondary leading-relaxed">
                  BIM Bytes Academy helps engineers enhance their skills and transform into industry-ready professionals. We focus on practical learning and real-world applications, guiding engineers to grow with confidence and reach their career goals. We are dedicated to building engineers who are ready to excel in every challenge.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} direction="right">
              <div className="flex justify-center">
                <div className="w-80 h-80 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border-2 border-dashed border-primary/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👥</div>
                    <p className="text-textSecondary font-medium">Team Photo</p>
                    <p className="text-sm text-textSecondary">Placeholder</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.2} direction="down" fullWidth>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary mb-4">
                Our <span className="text-gradient">Mission & Vision</span>
              </h2>
              <p className="text-lg text-textSecondary max-w-3xl mx-auto">
                Driving innovation and excellence in BIM education
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FadeIn delay={0.3} direction="left">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-crimson/10 to-black/20 rounded-3xl"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-lg ring-1 ring-crimson/20">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-crimson rounded-2xl mb-4">
                      <span className="text-2xl text-white">🎯</span>
                    </div>
                    <h3 className="text-2xl font-bold text-textPrimary mb-3">Our Mission</h3>
                  </div>
                  <p className="text-lg text-textSecondary leading-relaxed text-center">
                    To bridge the gap between academic knowledge and industry requirements by providing 
                    hands-on, project-based BIM training that prepares students for successful careers 
                    in the AEC industry.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4} direction="right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-crimson/20 rounded-3xl"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-lg ring-1 ring-black/20">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-crimson rounded-2xl mb-4">
                      <span className="text-2xl text-white">🚀</span>
                    </div>
                    <h3 className="text-2xl font-bold text-textPrimary mb-3">Our Vision</h3>
                  </div>
                  <p className="text-lg text-textSecondary leading-relaxed text-center">
                    To become the most trusted and preferred BIM training institute in India, 
                    recognized for producing industry-ready professionals who drive innovation 
                    and excellence in the construction sector.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Responsibilities */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.2} direction="down" fullWidth>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary mb-4">
                Our <span className="text-gradient">Responsibilities</span>
              </h2>
              <p className="text-lg text-textSecondary max-w-3xl mx-auto">
                We take our commitment to student success seriously
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Education",
                description: "Delivering industry-standard BIM training with practical, hands-on experience",
                icon: "🎓"
              },
              {
                title: "Career Development",
                description: "Providing placement assistance and career guidance to all students",
                icon: "💼"
              },
              {
                title: "Industry Connection",
                description: "Building strong partnerships with companies for internship and job opportunities",
                icon: "🤝"
              },
              {
                title: "Continuous Support",
                description: "Offering ongoing mentorship and technical support even after course completion",
                icon: "🔄"
              },
              {
                title: "Skill Enhancement",
                description: "Regular curriculum updates to match evolving industry requirements",
                icon: "📈"
              },
              {
                title: "Student Success",
                description: "Ensuring every student achieves their career goals and professional growth",
                icon: "🎯"
              }
            ].map((responsibility, index) => (
              <FadeIn key={index} delay={0.2 + index * 0.1} direction="up">
                <div className="card p-6 text-center hover:shadow-glow transition-all duration-500 ease-smooth">
                  <div className="mb-4">
                    <div className="text-4xl mb-3">{responsibility.icon}</div>
                    <h3 className="text-lg font-bold text-textPrimary mb-2">{responsibility.title}</h3>
                    <p className="text-textSecondary text-sm">{responsibility.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>



      {/* Company Journey */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.2} direction="down" fullWidth>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary mb-4">
                Our <span className="text-gradient">Journey</span>
              </h2>
              <p className="text-lg text-textSecondary max-w-3xl mx-auto">
                From humble beginnings to becoming India's leading BIM training institute
              </p>
            </div>
          </FadeIn>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary to-secondary"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <FadeIn key={index} delay={0.2 + index * 0.1} direction={index % 2 === 0 ? "left" : "right"}>
                  <div className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="card p-6 hover:shadow-glow transition-all duration-500 ease-smooth">
                        <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-textPrimary mb-2">{milestone.title}</h3>
                        <p className="text-textSecondary">{milestone.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="bg-crimson py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn delay={0.2} direction="up" fullWidth>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Join the BimBytes Family
            </h2>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Be part of our success story and start your journey towards a rewarding BIM career
            </p>
            <button className="btn-white px-6 py-3 text-base">Explore Courses</button>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;

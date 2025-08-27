import React from 'react';
import Footer from "../views/Footer";
import FadeIn from "../components/FadeIn";

const About = () => {
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      experience: "15+ Years",
      expertise: "BIM Strategy & Implementation",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Priya Sharma",
      role: "Head of Training",
      experience: "12+ Years",
      expertise: "Revit & BIM Training",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Arun Patel",
      role: "Technical Director",
      experience: "18+ Years",
      expertise: "MEP & Structural Design",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Meera Iyer",
      role: "Placement Head",
      experience: "10+ Years",
      expertise: "Career Development",
      image: "/api/placeholder/300/300"
    }
  ];

  const milestones = [
    { year: "2010", title: "Founded", description: "Started as a small training center in Chennai" },
    { year: "2013", title: "Expansion", description: "Added MEP and Structural training programs" },
    { year: "2016", title: "Industry Recognition", description: "Partnered with 50+ companies" },
    { year: "2019", title: "Digital Transformation", description: "Launched online training programs" },
    { year: "2022", title: "National Presence", description: "Expanded to 5 major cities" },
    { year: "2024", title: "Innovation Hub", description: "Became leading BIM training institute" }
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in every aspect of our training and services",
      icon: "⭐"
    },
    {
      title: "Innovation",
      description: "Constantly evolving our curriculum to match industry standards",
      icon: "🚀"
    },
    {
      title: "Integrity",
      description: "Building trust through honest and transparent relationships",
      icon: "🤝"
    },
    {
      title: "Student Success",
      description: "Your success is our primary goal and measure of achievement",
      icon: "🎯"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <FadeIn delay={0.2} direction="down" fullWidth>
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-textPrimary mb-6">
                <span className="text-gradient">About Us</span>
              </h1>
              <p className="text-xl text-textSecondary max-w-3xl mx-auto">
                BimBytes Academy is India's premier BIM training institute, dedicated to transforming 
                careers in the Architecture, Engineering, and Construction industry through expert-led training.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn delay={0.2} direction="left">
              <div>
                <h2 className="text-3xl font-bold text-textPrimary mb-6">Our Mission</h2>
                <p className="text-lg text-textSecondary mb-6 leading-relaxed">
                  To bridge the gap between academic knowledge and industry requirements by providing 
                  hands-on, project-based BIM training that prepares students for successful careers 
                  in the AEC industry.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-textSecondary">Industry-aligned curriculum</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-textSecondary">Expert-led training programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-textSecondary">100% placement assistance</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="right">
              <div>
                <h2 className="text-3xl font-bold text-textPrimary mb-6">Our Vision</h2>
                <p className="text-lg text-textSecondary mb-6 leading-relaxed">
                  To become the most trusted and preferred BIM training institute in India, 
                  recognized for producing industry-ready professionals who drive innovation 
                  and excellence in the construction sector.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-textSecondary">National recognition</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-textSecondary">Industry partnerships</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-textSecondary">Innovation leadership</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="section-padding bg-gradient-to-br from-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.2} direction="down" fullWidth>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary mb-4">
                Our <span className="text-gradient">Core Values</span>
              </h2>
              <p className="text-lg text-textSecondary max-w-3xl mx-auto">
                The principles that guide everything we do at BimBytes Academy
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FadeIn key={index} delay={0.2 + index * 0.1} direction="up">
                <div className="card p-8 text-center hover:shadow-glow transition-all duration-500 ease-smooth">
                  <div className="mb-6">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-bold text-textPrimary mb-3">{value.title}</h3>
                    <p className="text-textSecondary">{value.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Company Journey */}
      <section className="section-padding bg-white">
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

      {/* Team Section */}
      <section className="section-padding bg-gradient-to-br from-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.2} direction="down" fullWidth>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary mb-4">
                Meet Our <span className="text-gradient">Expert Team</span>
              </h2>
              <p className="text-lg text-textSecondary max-w-3xl mx-auto">
                Industry professionals with decades of experience in BIM and construction
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <FadeIn key={index} delay={0.2 + index * 0.1} direction="up">
                <div className="card p-6 text-center hover:shadow-glow transition-all duration-500 ease-smooth">
                  <div className="mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-textSecondary text-lg">Photo</span>
                    </div>
                    <h3 className="text-xl font-bold text-textPrimary mb-1">{member.name}</h3>
                    <p className="text-primary font-semibold mb-2">{member.role}</p>
                    <p className="text-success font-bold text-sm mb-2">{member.experience}</p>
                    <p className="text-textSecondary text-sm">{member.expertise}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.2} direction="up" fullWidth>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10">
                <div className="text-4xl font-bold text-primary mb-2">14+</div>
                <div className="text-textPrimary font-semibold">Years Experience</div>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-secondary/10 to-accent/10">
                <div className="text-4xl font-bold text-secondary mb-2">5000+</div>
                <div className="text-textPrimary font-semibold">Students Trained</div>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10">
                <div className="text-4xl font-bold text-accent mb-2">200+</div>
                <div className="text-textPrimary font-semibold">Companies Partnered</div>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-success/10 to-primary/10">
                <div className="text-4xl font-bold text-success mb-2">95%</div>
                <div className="text-textPrimary font-semibold">Placement Rate</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn delay={0.2} direction="up" fullWidth>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Join the BimBytes Family
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Be part of our success story and start your journey towards a rewarding BIM career
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary px-8 py-4 text-lg">Explore Courses</button>
              <button className="btn-white px-8 py-4 text-lg">Contact Us</button>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;

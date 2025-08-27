import React, { useState } from 'react';
import Footer from "../views/Footer";
import FadeIn from "../components/FadeIn";
import LeadCaptureModal from "../components/LeadCaptureModal";

const Courses = () => {
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const openLeadModal = () => setShowLeadModal(true);
  const closeLeadModal = () => setShowLeadModal(false);

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'revit', name: 'Revit Training' },
    { id: 'bim', name: 'BIM Management' },
    { id: 'coordination', name: 'Coordination' },
    { id: 'specialized', name: 'Specialized' }
  ];

  const courses = [
    {
      id: 1,
      category: 'revit',
      title: "Revit MEP (Mechanical, Electrical & Plumbing)",
      duration: "3-4 Months",
      level: "Beginner to Advanced",
      price: "₹45,000",
      originalPrice: "₹60,000",
      description: "Comprehensive training on MEP modeling covering HVAC, electrical, plumbing, and fire-fighting systems with real project scenarios.",
      features: [
        "HVAC system design & modeling",
        "Electrical system planning",
        "Plumbing & fire-fighting",
        "Live project training",
        "Industry certification",
        "Placement assistance"
      ],
      software: ["Revit MEP", "AutoCAD", "Navisworks"],
      projects: 3,
      hours: 80
    },
    {
      id: 2,
      category: 'revit',
      title: "Revit Architecture",
      duration: "3-4 Months",
      level: "Beginner to Advanced",
      price: "₹40,000",
      originalPrice: "₹55,000",
      description: "Master architectural design and BIM workflows with advanced detailing, family creation, and rendering techniques.",
      features: [
        "Building design & modeling",
        "Space planning & optimization",
        "Family creation & customization",
        "Advanced rendering",
        "Construction documentation",
        "Portfolio development"
      ],
      software: ["Revit Architecture", "AutoCAD", "3ds Max"],
      projects: 4,
      hours: 75
    },
    {
      id: 3,
      category: 'revit',
      title: "Revit Structural",
      duration: "3-4 Months",
      level: "Beginner to Advanced",
      price: "₹42,000",
      originalPrice: "₹58,000",
      description: "Learn structural modeling, analysis integration, and clash detection for civil and structural engineering projects.",
      features: [
        "Structural element modeling",
        "Foundation design",
        "Rebar detailing",
        "Analysis integration",
        "Clash detection",
        "Construction drawings"
      ],
      software: ["Revit Structure", "AutoCAD", "ETABS"],
      projects: 3,
      hours: 80
    },
    {
      id: 4,
      category: 'coordination',
      title: "Navisworks Manage",
      duration: "2-3 Months",
      level: "Intermediate to Advanced",
      price: "₹35,000",
      originalPrice: "₹45,000",
      description: "Master clash detection, coordination, and 4D simulation for seamless project collaboration.",
      features: [
        "Clash detection & resolution",
        "4D simulation & planning",
        "Model coordination",
        "Project review workflows",
        "Reporting & documentation",
        "Team collaboration"
      ],
      software: ["Navisworks Manage", "Revit", "AutoCAD"],
      projects: 2,
      hours: 60
    },
    {
      id: 5,
      category: 'bim',
      title: "BIM Manager Course",
      duration: "4-5 Months",
      level: "Advanced",
      price: "₹65,000",
      originalPrice: "₹80,000",
      description: "Complete BIM lifecycle management training covering coordination, team leadership, and project delivery standards.",
      features: [
        "BIM execution planning",
        "Team management",
        "Quality control",
        "Standards development",
        "Project delivery",
        "BIM360 management"
      ],
      software: ["Revit", "Navisworks", "BIM360", "AutoCAD"],
      projects: 5,
      hours: 120
    },
    {
      id: 6,
      category: 'specialized',
      title: "MEP BIM Coordinator",
      duration: "4-5 Months",
      level: "Intermediate to Advanced",
      price: "₹55,000",
      originalPrice: "₹70,000",
      description: "Advanced MEP coordination with Navisworks, clash detection, and stakeholder communication skills.",
      features: [
        "Advanced MEP modeling",
        "Coordination workflows",
        "Clash management",
        "Stakeholder communication",
        "BIM execution plans",
        "Quality assurance"
      ],
      software: ["Revit MEP", "Navisworks", "AutoCAD"],
      projects: 4,
      hours: 100
    }
  ];

  const filteredCourses = activeCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <FadeIn delay={0.2} direction="down" fullWidth>
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-textPrimary mb-6">
                Our <span className="text-gradient">Training Programs</span>
              </h1>
              <p className="text-xl text-textSecondary max-w-3xl mx-auto">
                Industry-driven BIM training programs designed to make you job-ready. 
                Learn from experts, work on real projects, and build a strong portfolio.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Course Categories Filter */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.3} direction="up" fullWidth>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ease-smooth ${
                    activeCategory === category.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-gray-100 text-textSecondary hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section-padding bg-gradient-to-br from-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCourses.map((course, index) => (
              <FadeIn key={course.id} delay={0.1 + index * 0.05} direction="up">
                <div className="card overflow-hidden hover:shadow-glow transition-all duration-500 ease-smooth group">
                  <div className="p-8">
                    {/* Course Header */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-textPrimary mb-3 group-hover:text-primary transition-colors duration-300 ease-smooth">
                        {course.title}
                      </h3>
                      <p className="text-textSecondary leading-relaxed mb-4">
                        {course.description}
                      </p>
                    </div>

                    {/* Course Details */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-primary/5 rounded-xl">
                        <div className="text-sm text-textSecondary mb-1">Duration</div>
                        <div className="font-semibold text-textPrimary">{course.duration}</div>
                      </div>
                      <div className="text-center p-3 bg-secondary/5 rounded-xl">
                        <div className="text-sm text-textSecondary mb-1">Level</div>
                        <div className="font-semibold text-textPrimary">{course.level}</div>
                      </div>
                      <div className="text-center p-3 bg-accent/5 rounded-xl">
                        <div className="text-sm text-textSecondary mb-1">Projects</div>
                        <div className="font-semibold text-textPrimary">{course.projects}</div>
                      </div>
                      <div className="text-center p-3 bg-success/5 rounded-xl">
                        <div className="text-sm text-textSecondary mb-1">Hours</div>
                        <div className="font-semibold text-textPrimary">{course.hours}</div>
                      </div>
                    </div>

                    {/* Software & Features */}
                    <div className="mb-6">
                      <div className="mb-3">
                        <span className="text-sm font-semibold text-textPrimary">Software:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {course.software.map((software, softwareIndex) => (
                            <span
                              key={softwareIndex}
                              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                            >
                              {software}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <span className="text-sm font-semibold text-textPrimary">Key Features:</span>
                        <ul className="mt-2 space-y-1">
                          {course.features.slice(0, 3).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2 text-sm text-textSecondary">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold text-primary">{course.price}</span>
                        <span className="text-lg text-textSecondary line-through">{course.originalPrice}</span>
                      </div>
                      <button 
                        onClick={openLeadModal}
                        className="btn-primary px-6 py-3 group-hover:bg-secondary transition-colors duration-300 ease-smooth"
                      >
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Courses */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.2} direction="down" fullWidth>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary mb-4">
                Why Choose <span className="text-gradient">Our Courses</span>
              </h2>
              <p className="text-lg text-textSecondary max-w-3xl mx-auto">
                Industry-focused training that gives you the edge in your BIM career
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Industry Aligned",
                description: "Curriculum designed by industry experts to match current market requirements"
              },
              {
                icon: "👥",
                title: "Expert Instructors",
                description: "Learn from certified professionals with 10+ years of industry experience"
              },
              {
                icon: "📚",
                title: "Project-Based Learning",
                description: "Work on real client projects to build a strong portfolio"
              },
              {
                icon: "💼",
                title: "Placement Support",
                description: "100% placement assistance with our network of 200+ companies"
              },
              {
                icon: "🔄",
                title: "Lifetime Access",
                description: "Access to course materials and updates even after completion"
              },
              {
                icon: "📱",
                title: "Flexible Learning",
                description: "Choose between online, offline, or hybrid learning modes"
              }
            ].map((feature, index) => (
              <FadeIn key={index} delay={0.2 + index * 0.1} direction="up">
                <div className="card p-8 text-center hover:shadow-glow transition-all duration-500 ease-smooth">
                  <div className="mb-6">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-textPrimary mb-3">{feature.title}</h3>
                    <p className="text-textSecondary">{feature.description}</p>
                  </div>
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
              Ready to Start Your BIM Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Choose the right course for your career goals and get started with expert-led training
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={openLeadModal} className="btn-secondary px-8 py-4 text-lg">
                Book Free Counselling
              </button>
              <button className="btn-white px-8 py-4 text-lg">Download Brochure</button>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
      
      <LeadCaptureModal isOpen={showLeadModal} onClose={closeLeadModal} />
    </>
  );
};

export default Courses;

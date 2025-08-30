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
      description: "Beginner to Advanced training on MEP modeling. Covers HVAC, electrical, plumbing, and fire-fighting systems. Includes project-based learning with real industry scenarios.",
      careerPath: "MEP Modeler, BIM MEP Coordinator, BIM MEP Engineer"
    },
    {
      id: 2,
      category: 'revit',
      title: "Revit Architecture",
      description: "Comprehensive training on architectural design and BIM workflows. Learn building design, space planning, family creation, and rendering. Advanced detailing and documentation for construction drawings.",
      careerPath: "Architectural BIM Modeler, BIM Architect"
    },
    {
      id: 3,
      category: 'revit',
      title: "Revit Structural",
      description: "Learn to model structural elements such as beams, columns, foundations, and rebar. Structural analysis integration and clash detection techniques. Focused training for civil and structural engineering workflows.",
      careerPath: "Structural BIM Modeler, Structural Engineer (BIM)"
    },
    {
      id: 4,
      category: 'coordination',
      title: "Navisworks Manage",
      description: "Training on clash detection, coordination, and 4D simulation. Learn to integrate models from multiple disciplines for seamless collaboration. Master project review, visualization, and BIM coordination workflows.",
      careerPath: "BIM Coordinator, BIM Manager"
    },
    {
      id: 5,
      category: 'specialized',
      title: "MEP Modeler Course",
      description: "Combination of Revit MEP and basic Navisworks Manage. Hands-on training on mechanical, electrical, and plumbing modeling. Includes coordination fundamentals.",
      careerPath: "MEP Modeler, BIM MEP Coordinator"
    },
    {
      id: 6,
      category: 'specialized',
      title: "MEP BIM Coordinator Course",
      description: "Advanced MEP modeling with Navisworks coordination. Clash detection, model management, and communication with stakeholders. Practical exposure to BIM execution plans and standards.",
      careerPath: "MEP BIM Coordinator, BIM MEP Manager"
    },
    {
      id: 7,
      category: 'bim',
      title: "BIM Manager Course",
      description: "Complete BIM lifecycle management training. Covers multi-discipline coordination, team leadership, and project delivery standards. Includes exposure to BIM360, documentation control, and QA/QC workflows.",
      careerPath: "BIM Manager, BIM Director"
    }
  ];

  // Load images from assets whose filenames start with "WhatsApp"
  let whatsappImages = [];
  try {
    // CRA/webpack: require.context is available
    const ctx = require.context('../assets', false, /^\.\/WhatsApp.*\.(png|jpe?g|webp|svg)$/i);
    whatsappImages = ctx.keys().map(ctx);
  } catch (err) {
    whatsappImages = [];
  }

  const filteredCourses = activeCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      <section className="bg-white py-16">
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
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course, index) => (
              <FadeIn key={course.id} delay={0.1 + index * 0.05} direction="up">
                <div className="bg-white rounded-xl shadow-sm ring-1 ring-border hover:shadow-md transition-all duration-300 ease-smooth group overflow-hidden">
                  {whatsappImages.length > 0 && (
                                         <img
                       src={whatsappImages[index % whatsappImages.length]}
                       alt={course.title}
                       className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                     />
                  )}
                  <div className="p-6">
                    {/* Course Header */}
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-textPrimary mb-3">
                        {course.title}
                      </h3>
                      <p className="text-textSecondary text-sm leading-relaxed mb-3">
                        {course.description}
                      </p>
                      <div className="bg-primary/5 p-3 rounded-lg">
                        <span className="text-xs text-primary uppercase tracking-wide font-semibold">Career Path: </span>
                        <span className="text-sm text-textPrimary">{course.careerPath}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex justify-between items-center">
                      <button 
                        onClick={() => {
                          // Show course details - you can implement a modal or expand the card
                          console.log('View details for:', course.title);
                        }}
                        className="px-4 py-2 border border-crimson text-crimson text-sm font-medium rounded-lg hover:bg-crimson hover:text-white transition-colors duration-200"
                      >
                        View Details
                      </button>
                      <button 
                        onClick={openLeadModal}
                        className="px-4 py-2 bg-crimson text-white text-sm font-medium rounded-lg hover:bg-crimson/90 transition-colors duration-200"
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



      {/* CTA Section */}
      <section className="bg-crimson py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn delay={0.2} direction="up" fullWidth>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Start Your BIM Journey?
            </h2>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Choose the right course for your career goals and get started with expert-led training
            </p>
            <button onClick={openLeadModal} className="btn-white px-6 py-3 text-base">
              Book Free Counselling
            </button>
          </FadeIn>
        </div>
      </section>

      <Footer />
      
      <LeadCaptureModal isOpen={showLeadModal} onClose={closeLeadModal} />
    </>
  );
};

export default Courses;

import React, { useState } from 'react';
import { productsTitle, products } from "../data";
import imageOne from "../assets/image 1.jpg";
import FadeIn from "../components/FadeIn";
import CourseDetailsModal from "../components/CourseDetailsModal";
import CourseEnquiryModal from "../components/CourseEnquiryModal";
import starsIcon from "../assets/stars-icon.svg";

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showCourseDetails, setShowCourseDetails] = useState(false);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setShowCourseDetails(true);
  };

  const handleEnquire = (course) => {
    setSelectedCourse(course);
    setShowEnquiryModal(true);
  };

  const courseCategories = [
    {
      title: "Revit Training",
      description: "Master the industry-standard BIM software",
      courses: ["Revit Architecture", "Revit MEP", "Revit Structural"]
    },
    {
      title: "BIM Management",
      description: "Lead BIM projects and teams effectively",
      courses: ["BIM Manager Course", "BIM Coordinator", "BIM Execution Planning"]
    },
    {
      title: "Specialized Skills",
      description: "Advanced techniques and workflows",
      courses: ["Navisworks", "Dynamo", "BIM 360"]
    }
  ];

  return (
    <section id="courses" className="section-padding bg-gradient-to-br from-light to-white min-h-screen">
      <div className="section-inner">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn delay={0.2} direction="down" fullWidth>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-textPrimary mb-6 leading-tight">
              {productsTitle}
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.4} direction="down" fullWidth>
            <p className="text-lg sm:text-xl text-textSecondary max-w-3xl mx-auto leading-relaxed">
              Comprehensive BIM training programs designed by industry experts. 
              Choose from our specialized courses and start your BIM career journey.
            </p>
          </FadeIn>
        </div>

        {/* Course Categories */}
        <div className="mb-16">
          <FadeIn delay={0.6} direction="up" fullWidth>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {courseCategories.map((category, index) => (
                <div key={index} className="card p-8 text-center group hover:shadow-glow transition-all duration-500 ease-smooth">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-500 ease-smooth">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-xl font-bold">{index + 1}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-textPrimary mb-4 group-hover:text-primary transition-colors duration-300 ease-smooth">
                    {category.title}
                  </h3>
                  
                  <p className="text-textSecondary mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {category.courses.map((course, courseIndex) => (
                      <li key={courseIndex} className="text-textSecondary">
                        • {course}
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={() => handleEnquire({ title: category.title })}
                    className="btn-primary w-full"
                  >
                    Enquire Now
                  </button>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Individual Courses */}
        <div className="mb-16">
          <FadeIn delay={0.8} direction="up" fullWidth>
            <h2 className="text-3xl font-bold text-textPrimary text-center mb-12">
              Available Courses
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <FadeIn key={index} delay={0.3 + index * 0.1} direction="up">
                <div 
                  className="card p-6 group hover:shadow-glow transition-all duration-500 ease-smooth cursor-pointer"
                  onClick={() => handleCourseClick(product)}
                >
                  {/* Course Image */}
                  <div className="relative mb-4 sm:mb-6">
                    <div className="w-full h-32 sm:h-48 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-500 ease-smooth overflow-hidden">
                      <img
                        src={imageOne}
                        alt={product.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-smooth"
                      />
                    </div>
                  </div>

                  {/* Course Info */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-textPrimary mb-3 group-hover:text-primary transition-colors duration-300 ease-smooth">
                      {product.title}
                    </h3>
                    
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <img key={i} src={starsIcon} alt="Star" className="w-4 h-4" />
                        ))}
                      </div>
                      <span className="text-sm text-textMuted">(4.9/5)</span>
                    </div>
                    
                    <p className="text-textSecondary text-sm mb-6 hidden sm:block">
                      {product.description}
                    </p>
                    
                    <div className="flex gap-3">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCourseClick(product);
                        }}
                        className="flex-1 btn-outline text-sm py-2"
                      >
                        View Details
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEnquire(product);
                        }}
                        className="flex-1 btn-primary text-sm py-2"
                      >
                        Enquire Now
                      </button>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <FadeIn delay={1.0} direction="up" fullWidth>
          <div className="text-center bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-textPrimary mb-4">
              Ready to Start Your BIM Journey?
            </h3>
            <p className="text-textSecondary mb-8 max-w-2xl mx-auto">
              Join hundreds of successful BIM professionals who started their careers with our training programs.
            </p>
            <button 
              onClick={() => handleEnquire({ title: "General Course Information" })}
              className="btn-primary text-lg px-8 py-4"
            >
              Get Course Information
            </button>
          </div>
        </FadeIn>
      </div>

      {/* Modals */}
      <CourseDetailsModal
        isOpen={showCourseDetails}
        onClose={() => setShowCourseDetails(false)}
        course={selectedCourse}
        onEnquire={() => {
          setShowCourseDetails(false);
          setShowEnquiryModal(true);
        }}
      />

      <CourseEnquiryModal
        isOpen={showEnquiryModal}
        onClose={() => setShowEnquiryModal(false)}
        selectedCourse={selectedCourse}
      />
    </section>
  );
};

export default Courses;

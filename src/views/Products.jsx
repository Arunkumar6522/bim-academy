// React
import { useState } from "react";

// local imports
import { productsTitle, productsBtnText, products } from "../data";

import arrowIcon from "../assets/arrow-icon.svg";
import starsIcon from "../assets/stars-icon.svg";
import plusIcon from "../assets/plus-icon.svg";
import imageOne from "../assets/image 1.jpg";

import FadeIn from "../components/FadeIn";
import CourseDetailsModal from "../components/CourseDetailsModal";
import CourseEnquiryModal from "../components/CourseEnquiryModal";

const Products = () => {
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

  const closeCourseDetails = () => {
    setShowCourseDetails(false);
    setSelectedCourse(null);
  };

  const closeEnquiryModal = () => {
    setShowEnquiryModal(false);
    setSelectedCourse(null);
  };

  return (
    <section
      id="products"
      className="section-padding bg-white"
    >
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Column - Title and Button */}
          <FadeIn delay={0.2} direction="right">
            <div className="text-center lg:text-left mb-12 lg:mb-0">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-textPrimary mb-6 leading-tight">
                {productsTitle}
              </h2>
              <p className="text-lg text-textSecondary mb-8 max-w-lg lg:max-w-none">
                Discover our carefully curated collection of premium BIM training programs designed by industry experts. 
                Get hands-on experience with live projects and advance your career in the AEC industry.
              </p>
              <button className="btn-outline group">
                <span className="flex items-center gap-3">
                  <span className="text-lg font-semibold">{productsBtnText}</span>
                  <img 
                    src={arrowIcon} 
                    alt="Arrow" 
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 ease-smooth" 
                  />
                </span>
              </button>
            </div>
          </FadeIn>

          {/* Right Column - Courses Grid */}
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {products.map((product, i) => (
                <FadeIn key={i} delay={0.3 + i * 0.1} direction="up" fullWidth>
                  <div className="card p-4 sm:p-6 text-center group hover:shadow-glow transition-all duration-500 ease-smooth cursor-pointer"
                       onClick={() => handleCourseClick(product)}>
                    {/* Course Image Container */}
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
                    <div className="space-y-3 sm:space-y-4">
                      <h3 className="text-lg sm:text-xl font-bold text-textPrimary group-hover:text-primary transition-colors duration-300 ease-smooth leading-tight">
                        {product.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-textSecondary leading-relaxed hidden sm:block">
                        {product.description}
                      </p>
                      
                      <div className="flex justify-center">
                        <img src={starsIcon} alt="Rating" className="h-4 sm:h-5 w-auto" />
                      </div>
                      
                      <div className="flex justify-center">
                        <button 
                          className="p-2 sm:p-3 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-glow transform hover:scale-110 active:scale-95 transition-all duration-300 ease-smooth"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEnquire(product);
                          }}
                        >
                          <img src={plusIcon} alt="Enquire" className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Click to View Details Hint */}
                    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-border">
                      <p className="text-xs text-textMuted">
                        Tap to view details
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* Course Categories - Mobile Optimized */}
        <FadeIn delay={0.8} direction="up" fullWidth>
          <div className="mt-16 sm:mt-20 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-textPrimary mb-6 sm:mb-8">
              All Course Categories
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { name: "Revit MEP", duration: "8-10 weeks", level: "Beginner to Advanced" },
                { name: "Revit Architecture", duration: "6-8 weeks", level: "Beginner to Advanced" },
                { name: "Revit Structural", duration: "8-10 weeks", level: "Intermediate to Advanced" },
                { name: "Navisworks", duration: "4-6 weeks", level: "Intermediate" }
              ].map((course, i) => (
                <div key={i} className="p-4 sm:p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 ease-smooth group cursor-pointer"
                     onClick={() => handleEnquire({ title: course.name })}>
                  <h4 className="font-bold text-textPrimary mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300 ease-smooth text-sm sm:text-base">
                    {course.name}
                  </h4>
                  <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-textSecondary">
                    <p>Duration: {course.duration}</p>
                    <p>Level: {course.level}</p>
                  </div>
                  <div className="mt-3 sm:mt-4">
                    <button className="text-xs sm:text-sm text-primary font-medium hover:underline">
                      Enquire Now →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Course Details Modal */}
      <CourseDetailsModal
        isOpen={showCourseDetails}
        onClose={closeCourseDetails}
        course={selectedCourse}
        onEnquire={handleEnquire}
      />

      {/* Course Enquiry Modal */}
      <CourseEnquiryModal
        isOpen={showEnquiryModal}
        onClose={closeEnquiryModal}
        selectedCourse={selectedCourse}
      />
    </section>
  );
};

export default Products;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CourseEnquiryModal = ({ isOpen, onClose, selectedCourse }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: ''
  });

  // Auto-bind course when modal opens
  useEffect(() => {
    if (selectedCourse) {
      setFormData(prev => ({
        ...prev,
        course: selectedCourse.title
      }));
    }
  }, [selectedCourse]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enquiry submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your enquiry! We will contact you soon.');
    onClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-textPrimary mb-2">
              Course Enquiry
            </h2>
            <p className="text-textSecondary">
              We'll reach out to you with course details
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-textPrimary mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="input-field"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-textPrimary mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="input-field"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-textPrimary mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="input-field"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label htmlFor="course" className="block text-sm font-medium text-textPrimary mb-2">
                Selected Course
              </label>
              <input
                type="text"
                id="course"
                name="course"
                value={formData.course}
                readOnly
                className="input-field bg-gray-50 cursor-not-allowed"
              />
            </div>

            <button
              type="submit"
              className="w-full btn-primary py-3 text-lg"
            >
              Submit Enquiry
            </button>
          </form>

          {/* Footer */}
          <div className="text-center mt-6">
            <p className="text-sm text-textMuted">
              We'll contact you within 24 hours
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CourseEnquiryModal;

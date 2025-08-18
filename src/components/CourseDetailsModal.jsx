import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CourseDetailsModal = ({ isOpen, onClose, course, onEnquire }) => {
  if (!isOpen || !course) return null;

  const courseDetails = {
    "Revit MEP (Mechanical, Electrical & Plumbing)": {
      duration: "8-10 weeks",
      level: "Beginner to Advanced",
      highlights: [
        "HVAC, electrical, plumbing, and fire-fighting systems modeling",
        "Project-based learning with real industry scenarios",
        "Live project training on actual client projects",
        "Industry-standard workflows and best practices",
        "Hands-on practice with real BIM models"
      ],
      outcomes: [
        "Master MEP modeling in Revit",
        "Understand coordination between different systems",
        "Create construction-ready documentation",
        "Handle complex project requirements",
        "Prepare for MEP Modeler roles"
      ]
    },
    "Revit Architecture": {
      duration: "6-8 weeks",
      level: "Beginner to Intermediate",
      highlights: [
        "Building design and space planning",
        "Family creation and customization",
        "Advanced detailing and documentation",
        "Rendering and visualization techniques",
        "Construction drawing preparation"
      ],
      outcomes: [
        "Design complete architectural projects",
        "Create custom families and components",
        "Generate construction documentation",
        "Produce professional renderings",
        "Work with real project workflows"
      ]
    },
    "Revit Structural": {
      duration: "6-8 weeks",
      level: "Intermediate to Advanced",
      highlights: [
        "Structural elements modeling (beams, columns, foundations)",
        "Rebar detailing and reinforcement",
        "Structural analysis integration",
        "Clash detection techniques",
        "Civil and structural engineering workflows"
      ],
      outcomes: [
        "Model complex structural systems",
        "Integrate with analysis software",
        "Coordinate with other disciplines",
        "Create detailed structural drawings",
        "Handle large-scale infrastructure projects"
      ]
    },
    "Navisworks Manage": {
      duration: "4-6 weeks",
      level: "Intermediate to Advanced",
      highlights: [
        "Clash detection and coordination",
        "4D construction simulation",
        "Multi-discipline model integration",
        "Project review and visualization",
        "BIM coordination workflows"
      ],
      outcomes: [
        "Lead project coordination efforts",
        "Resolve design conflicts efficiently",
        "Create construction schedules",
        "Manage large project teams",
        "Ensure project quality standards"
      ]
    },
    "MEP Modeler Course": {
      duration: "10-12 weeks",
      level: "Beginner to Intermediate",
      highlights: [
        "Revit MEP fundamentals",
        "Basic Navisworks coordination",
        "Mechanical, electrical, and plumbing modeling",
        "Coordination fundamentals",
        "Project-based learning approach"
      ],
      outcomes: [
        "Become proficient in MEP modeling",
        "Understand coordination principles",
        "Work on live industry projects",
        "Prepare for MEP Modeler positions",
        "Build a strong portfolio"
      ]
    },
    "MEP BIM Coordinator Course": {
      duration: "8-10 weeks",
      level: "Intermediate to Advanced",
      highlights: [
        "Advanced MEP modeling techniques",
        "Navisworks coordination expertise",
        "Clash detection and resolution",
        "BIM execution planning",
        "Stakeholder communication"
      ],
      outcomes: [
        "Lead MEP coordination efforts",
        "Manage complex project workflows",
        "Implement BIM standards",
        "Coordinate multiple disciplines",
        "Advance to leadership roles"
      ]
    },
    "BIM Manager Course": {
      duration: "12-16 weeks",
      level: "Advanced",
      highlights: [
        "Complete BIM lifecycle management",
        "Multi-discipline coordination",
        "Team leadership and management",
        "BIM360 and documentation control",
        "QA/QC workflows and standards"
      ],
      outcomes: [
        "Lead BIM implementation across projects",
        "Manage large BIM teams",
        "Develop BIM execution strategies",
        "Ensure project delivery standards",
        "Advance to senior management roles"
      ]
    }
  };

  const details = courseDetails[course.title] || {
    duration: "6-8 weeks",
    level: "Beginner to Advanced",
    highlights: [
      "Comprehensive BIM training",
      "Live project experience",
      "Industry-standard workflows",
      "Hands-on practice",
      "Career guidance and support"
    ],
    outcomes: [
      "Master BIM software and workflows",
      "Gain real project experience",
      "Prepare for industry roles",
      "Build professional portfolio",
      "Advance your career"
    ]
  };

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
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-8 border-b border-border">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-bold text-textPrimary">{course.title}</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <svg className="w-6 h-6 text-textSecondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-textSecondary text-lg leading-relaxed">
              {course.description}
            </p>
          </div>

          {/* Course Info */}
          <div className="p-8 border-b border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">{details.duration}</div>
                <div className="text-textSecondary">Duration</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">{details.level}</div>
                <div className="text-textSecondary">Level</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">Live Projects</div>
                <div className="text-textSecondary">Training Method</div>
              </div>
            </div>
          </div>

          {/* What You'll Learn */}
          <div className="p-8 border-b border-border">
            <h3 className="text-2xl font-bold text-textPrimary mb-6">What You'll Learn</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {details.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-textSecondary">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Outcomes */}
          <div className="p-8 border-b border-border">
            <h3 className="text-2xl font-bold text-textPrimary mb-6">Learning Outcomes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {details.outcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-textSecondary">{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-textPrimary mb-4">
                Ready to Start This Course?
              </h3>
              <p className="text-textSecondary mb-6">
                Get detailed information about pricing, schedules, and enrollment process.
              </p>
              <button
                onClick={onEnquire}
                className="btn-primary text-lg px-8 py-4"
              >
                Enquire About This Course
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CourseDetailsModal;

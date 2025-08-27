import React, { useState } from 'react';
import Footer from "../views/Footer";
import FadeIn from "../components/FadeIn";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'projects', name: 'Student Projects' },
    { id: 'training', name: 'Training Sessions' },
    { id: 'facilities', name: 'Academy Facilities' },
    { id: 'events', name: 'Events & Workshops' }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'projects',
      title: 'Commercial Building MEP Model',
      description: 'Complete MEP system design for a 20-story commercial complex',
      image: '/api/placeholder/400/300',
      tags: ['Revit MEP', 'HVAC', 'Electrical', 'Plumbing']
    },
    {
      id: 2,
      category: 'projects',
      title: 'Residential Complex Design',
      description: 'Multi-unit residential project with detailed architectural modeling',
      image: '/api/placeholder/400/300',
      tags: ['Revit Architecture', '3D Modeling', 'Rendering']
    },
    {
      id: 3,
      category: 'training',
      title: 'Hands-on Revit Training',
      description: 'Students working on live projects during training sessions',
      image: '/api/placeholder/400/300',
      tags: ['Training', 'Revit', 'Live Projects']
    },
    {
      id: 4,
      category: 'facilities',
      title: 'Computer Lab Setup',
      description: 'State-of-the-art computer lab with latest BIM software',
      image: '/api/placeholder/400/300',
      tags: ['Facilities', 'Computer Lab', 'BIM Software']
    },
    {
      id: 5,
      category: 'events',
      title: 'BIM Industry Meet',
      description: 'Annual industry meet with leading BIM professionals',
      image: '/api/placeholder/400/300',
      tags: ['Events', 'Industry Meet', 'Networking']
    },
    {
      id: 6,
      category: 'projects',
      title: 'Hospital MEP Coordination',
      description: 'Complex hospital MEP coordination with clash detection',
      image: '/api/placeholder/400/300',
      tags: ['MEP Coordination', 'Clash Detection', 'Healthcare']
    },
    {
      id: 7,
      category: 'training',
      title: 'Navisworks Workshop',
      description: 'Advanced Navisworks training for coordination workflows',
      image: '/api/placeholder/400/300',
      tags: ['Navisworks', 'Coordination', 'Workshop']
    },
    {
      id: 8,
      category: 'facilities',
      title: 'Conference Room',
      description: 'Modern conference room for presentations and meetings',
      image: '/api/placeholder/400/300',
      tags: ['Facilities', 'Conference', 'Presentations']
    },
    {
      id: 9,
      category: 'events',
      title: 'Student Portfolio Showcase',
      description: 'Annual showcase of student projects and achievements',
      image: '/api/placeholder/400/300',
      tags: ['Portfolio', 'Showcase', 'Student Work']
    },
    {
      id: 10,
      category: 'projects',
      title: 'Industrial Plant Design',
      description: 'Complete industrial facility with structural and MEP systems',
      image: '/api/placeholder/400/300',
      tags: ['Industrial', 'Structural', 'MEP Systems']
    },
    {
      id: 11,
      category: 'training',
      title: 'Family Creation Workshop',
      description: 'Custom Revit family creation and parameterization',
      image: '/api/placeholder/400/300',
      tags: ['Revit Families', 'Parameters', 'Customization']
    },
    {
      id: 12,
      category: 'facilities',
      title: 'Library & Study Area',
      description: 'Comfortable study area with BIM resources and materials',
      image: '/api/placeholder/400/300',
      tags: ['Library', 'Study Area', 'Resources']
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <FadeIn delay={0.2} direction="down" fullWidth>
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-textPrimary mb-6">
                Our <span className="text-gradient">Gallery</span>
              </h1>
              <p className="text-xl text-textSecondary max-w-3xl mx-auto">
                Explore our student projects, training sessions, facilities, and events. 
                See the quality of work and learning environment at BimBytes Academy.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Category Filter */}
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

      {/* Gallery Grid */}
      <section className="section-padding bg-gradient-to-br from-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <FadeIn key={item.id} delay={0.1 + index * 0.05} direction="up">
                <div className="card overflow-hidden hover:shadow-glow transition-all duration-500 ease-smooth group">
                  <div className="relative overflow-hidden">
                    <div className="w-full h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <span className="text-textSecondary text-lg">Image Placeholder</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-smooth" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-textPrimary mb-2 group-hover:text-primary transition-colors duration-300 ease-smooth">
                      {item.title}
                    </h3>
                    <p className="text-textSecondary mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button className="w-full btn-primary group-hover:bg-secondary transition-colors duration-300 ease-smooth">
                      View Details
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.2} direction="up" fullWidth>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-textPrimary font-semibold">Projects Completed</div>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-secondary/10 to-accent/10">
                <div className="text-4xl font-bold text-secondary mb-2">1000+</div>
                <div className="text-textPrimary font-semibold">Students Trained</div>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10">
                <div className="text-4xl font-bold text-accent mb-2">50+</div>
                <div className="text-textPrimary font-semibold">Industry Partners</div>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-success/10 to-primary/10">
                <div className="text-4xl font-bold text-success mb-2">95%</div>
                <div className="text-textPrimary font-semibold">Success Rate</div>
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
              Ready to Join Our Academy?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Start your BIM journey and create projects that will be featured in our gallery
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary px-8 py-4 text-lg">View Courses</button>
              <button className="btn-white px-8 py-4 text-lg">Contact Us</button>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Gallery;

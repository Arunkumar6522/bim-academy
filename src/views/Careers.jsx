import React from 'react';
import FadeIn from "../components/FadeIn";
import imageOne from "../assets/image 1.jpg";

const Careers = () => {
  const careerPaths = [
    {
      title: "BIM Modeler / MEP Modeler",
      description: "Create accurate 3D models for mechanical, electrical, and plumbing systems with industry-standard workflows.",
      salary: "₹3.5L - ₹8L per annum",
      experience: "0-3 years",
      skills: ["Revit MEP", "AutoCAD", "BIM Standards", "Coordination"],
      icon: "🏗️"
    },
    {
      title: "BIM Coordinator",
      description: "Lead interdisciplinary coordination, clash resolution, and project workflow management for complex projects.",
      salary: "₹6L - ₹12L per annum",
      experience: "2-5 years",
      skills: ["Navisworks", "Clash Detection", "Project Management", "Communication"],
      icon: "🔗"
    },
    {
      title: "BIM Manager",
      description: "Oversee BIM execution planning, team management, and strategic project delivery across multiple projects.",
      salary: "₹10L - ₹20L per annum",
      experience: "5+ years",
      skills: ["BIM Execution Planning", "Team Leadership", "Strategic Planning", "Client Management"],
      icon: "👨‍💼"
    },
    {
      title: "Revit Specialist",
      description: "Become an expert in Revit Architecture, Structure, or MEP with advanced modeling and automation skills.",
      salary: "₹5L - ₹15L per annum",
      experience: "1-6 years",
      skills: ["Revit", "Dynamo", "Automation", "Advanced Modeling"],
      icon: "⚡"
    }
  ];

  const industries = [
    {
      name: "Construction & Infrastructure",
      description: "Highways, bridges, airports, and large-scale construction projects",
      opportunities: "High demand for BIM professionals",
      icon: "🏢"
    },
    {
      name: "Real Estate Development",
      description: "Commercial, residential, and mixed-use development projects",
      opportunities: "Growing BIM adoption in real estate",
      icon: "🏠"
    },
    {
      name: "Engineering Consultancy",
      description: "MEP, structural, and architectural consulting firms",
      opportunities: "Expert-level BIM roles available",
      icon: "📐"
    },
    {
      name: "Government Projects",
      description: "Smart cities, public infrastructure, and government buildings",
      opportunities: "Stable long-term projects",
      icon: "🏛️"
    }
  ];

  const successStories = [
    {
      name: "Rahul Sharma",
      role: "BIM MEP Coordinator",
      company: "L&T Construction",
      story: "Started as a fresh graduate, now leading MEP coordination for metro projects worth ₹500+ crores.",
      salary: "₹12L per annum"
    },
    {
      name: "Priya Patel",
      role: "BIM Manager",
      company: "Godrej Properties",
      story: "Transformed career from AutoCAD drafter to BIM Manager in just 3 years.",
      salary: "₹18L per annum"
    },
    {
      name: "Amit Kumar",
      role: "Revit Specialist",
      company: "Hiranandani Group",
      story: "Specialized in Revit Architecture, now handling luxury residential projects.",
      salary: "₹10L per annum"
    }
  ];

  const placementSupport = [
    {
      title: "Portfolio Development",
      description: "Create professional portfolios showcasing your BIM projects and skills",
      icon: "📁"
    },
    {
      title: "Interview Preparation",
      description: "Mock interviews, technical questions, and industry insights",
      icon: "🎯"
    },
    {
      title: "Industry Connections",
      description: "Direct access to hiring managers and industry professionals",
      icon: "🤝"
    },
    {
      title: "Career Counseling",
      description: "Personalized guidance on career paths and skill development",
      icon: "💡"
    }
  ];

  return (
    <section id="careers" className="section-padding bg-gradient-to-br from-light to-white min-h-screen">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn delay={0.2} direction="down" fullWidth>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-textPrimary mb-6 leading-tight">
              Career Opportunities After Training
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.4} direction="down" fullWidth>
            <p className="text-lg sm:text-xl text-textSecondary max-w-4xl mx-auto leading-relaxed">
              Transform your career with BIM training that opens doors to high-paying jobs in construction, 
              infrastructure, and engineering sectors. Our graduates work with top companies worldwide.
            </p>
          </FadeIn>
        </div>

        {/* Career Paths */}
        <div className="mb-20">
          <FadeIn delay={0.6} direction="up" fullWidth>
            <h2 className="text-3xl font-bold text-textPrimary text-center mb-12">
              Popular Career Paths
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {careerPaths.map((career, index) => (
              <FadeIn key={index} delay={0.3 + index * 0.1} direction="up">
                <div className="card p-8 group hover:shadow-glow transition-all duration-500 ease-smooth">
                  <div className="flex items-start gap-6">
                    <div className="text-4xl">{career.icon}</div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-textPrimary mb-3 group-hover:text-primary transition-colors duration-300 ease-smooth">
                        {career.title}
                      </h3>
                      
                      <p className="text-textSecondary mb-4 leading-relaxed">
                        {career.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <span className="text-sm font-medium text-textMuted">Salary Range:</span>
                          <p className="text-primary font-bold">{career.salary}</p>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-textMuted">Experience:</span>
                          <p className="text-textSecondary font-medium">{career.experience}</p>
                        </div>
                      </div>
                      
                      <div>
                        <span className="text-sm font-medium text-textMuted mb-2 block">Key Skills:</span>
                        <div className="flex flex-wrap gap-2">
                          {career.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Industries */}
        <div className="mb-20">
          <FadeIn delay={0.8} direction="up" fullWidth>
            <h2 className="text-3xl font-bold text-textPrimary text-center mb-12">
              Industries Hiring BIM Professionals
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <FadeIn key={index} delay={0.3 + index * 0.1} direction="up">
                <div className="card p-6 text-center group hover:shadow-glow transition-all duration-500 ease-smooth">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  
                  <h3 className="text-xl font-bold text-textPrimary mb-3 group-hover:text-primary transition-colors duration-300 ease-smooth">
                    {industry.name}
                  </h3>
                  
                  <p className="text-textSecondary mb-4 leading-relaxed">
                    {industry.description}
                  </p>
                  
                  <span className="inline-block px-4 py-2 bg-success/10 text-success text-sm font-medium rounded-full">
                    {industry.opportunities}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-20">
          <FadeIn delay={1.0} direction="up" fullWidth>
            <h2 className="text-3xl font-bold text-textPrimary text-center mb-12">
              Success Stories
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <FadeIn key={index} delay={0.3 + index * 0.1} direction="up">
                <div className="card p-8 text-center group hover:shadow-glow transition-all duration-500 ease-smooth">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-500 ease-smooth">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-xl font-bold">{index + 1}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-textPrimary mb-2 group-hover:text-primary transition-colors duration-300 ease-smooth">
                    {story.name}
                  </h3>
                  
                  <p className="text-primary font-medium mb-2">
                    {story.role}
                  </p>
                  
                  <p className="text-textSecondary mb-4">
                    {story.company}
                  </p>
                  
                  <p className="text-textSecondary mb-4 leading-relaxed">
                    {story.story}
                  </p>
                  
                  <div className="text-lg font-bold text-success">
                    {story.salary}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Placement Support */}
        <div className="mb-20">
          <FadeIn delay={1.2} direction="up" fullWidth>
            <h2 className="text-3xl font-bold text-textPrimary text-center mb-12">
              Our Placement Support
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {placementSupport.map((support, index) => (
              <FadeIn key={index} delay={0.3 + index * 0.1} direction="up">
                <div className="card p-6 text-center group hover:shadow-glow transition-all duration-500 ease-smooth">
                  <div className="text-4xl mb-4">{support.icon}</div>
                  
                  <h3 className="text-xl font-bold text-textPrimary mb-3 group-hover:text-primary transition-colors duration-300 ease-smooth">
                    {support.title}
                  </h3>
                  
                  <p className="text-textSecondary leading-relaxed">
                    {support.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Global Opportunities */}
        <div className="mb-20">
          <FadeIn delay={1.4} direction="up" fullWidth>
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-textPrimary mb-6">
                    Global Opportunities
                  </h2>
                  <p className="text-textSecondary text-lg leading-relaxed mb-6">
                    With global demand for BIM professionals growing every year, our courses open doors to 
                    international job opportunities in construction, infrastructure, and engineering sectors.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-textSecondary">Middle East (UAE, Saudi Arabia, Qatar)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-textSecondary">Europe (UK, Germany, Netherlands)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-textSecondary">Asia Pacific (Singapore, Australia, Japan)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-textSecondary">North America (USA, Canada)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl transform -rotate-3 scale-105"></div>
                  <img 
                    src={imageOne} 
                    alt="Global BIM Opportunities" 
                    className="relative z-10 w-full h-auto rounded-3xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* CTA Section */}
        <FadeIn delay={1.6} direction="up" fullWidth>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-textPrimary mb-6">
              Ready to Transform Your Career?
            </h3>
            <p className="text-textSecondary mb-8 max-w-2xl mx-auto">
              Join hundreds of successful BIM professionals who transformed their careers with our training programs.
            </p>
            <button className="btn-primary text-lg px-8 py-4">
              Start Your BIM Journey
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Careers;

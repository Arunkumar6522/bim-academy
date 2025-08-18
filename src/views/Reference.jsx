// local imports
import { referenceTitle, referenceSubtitle } from "../data";

import imageOne from "../assets/image 1.jpg";

import FadeIn from "../components/FadeIn";

const Reference = () => {
  return (
    <section id="reference" className="section-padding bg-gradient-to-br from-light to-white">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn delay={0.2} direction="down" fullWidth>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-textPrimary mb-6 leading-tight">
              {referenceTitle}
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.4} direction="down" fullWidth>
            <p className="text-lg text-textSecondary max-w-4xl mx-auto leading-relaxed">
              {referenceSubtitle}
            </p>
          </FadeIn>
        </div>

        {/* Stats Section */}
        <FadeIn delay={0.6} direction="up" fullWidth>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {[
              { number: "500+", label: "Students Trained" },
              { number: "50+", label: "Live Projects" },
              { number: "95%", label: "Placement Rate" },
              { number: "10+", label: "Years Experience" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-textSecondary font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - About Content */}
          <FadeIn delay={0.3} direction="right">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-textPrimary">
                  About BimBytes Academy
                </h3>
                <p className="text-textSecondary leading-relaxed">
                  At BimBytes Academy, we are committed to shaping the next generation of BIM professionals 
                  through world-class, industry-focused training programs. As the training division of BimBytes Solutions, 
                  we bring 10+ years of proven expertise in the Architecture, Engineering, and Construction (AEC) industry.
                </p>
                <p className="text-textSecondary leading-relaxed">
                  We specialize in live, hands-on project training that bridges the gap between theory and industry application. 
                  Our students work on real BIM models from active projects, gaining practical experience that prepares them 
                  to step into high-demand BIM careers from day one.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-textPrimary">
                  Our Mission
                </h4>
                <p className="text-textSecondary leading-relaxed">
                  To provide affordable, high-quality BIM training in India that is 100% industry-relevant 
                  and prepares students for real-world challenges in the AEC industry.
                </p>
              </div>
            </div>
          </FadeIn>
          
          {/* Right Column - Images */}
          <div className="space-y-8">
            <FadeIn delay={0.5} direction="left">
              <div className="group">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-glow transition-all duration-500 ease-smooth">
                  <img 
                    src={imageOne} 
                    alt="BIM Training and Education" 
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700 ease-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-smooth"></div>
                </div>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-2 gap-6">
              <FadeIn delay={0.7} direction="up">
                <div className="group">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-glow transition-all duration-500 ease-smooth">
                    <img 
                      src={imageOne} 
                      alt="Revit and BIM Software Training" 
                      className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700 ease-smooth"
                    />
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.8} direction="up">
                <div className="group">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-glow transition-all duration-500 ease-smooth">
                    <img 
                      src={imageOne} 
                      alt="BIM Project Coordination and Management" 
                      className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700 ease-smooth"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reference;

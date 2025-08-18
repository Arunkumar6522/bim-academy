// local imports
import { services } from "../data";
import FadeIn from "../components/FadeIn";
import { ExperienceIcon, ProjectIcon, PlacementIcon } from "../components/CustomIcons";

const Services = () => {
  const customIcons = [ExperienceIcon, ProjectIcon, PlacementIcon];

  return (
    <section
      id="services"
      className="section-padding bg-gradient-to-br from-light to-white"
    >
      <div className="container-width">
        <FadeIn delay={0.2} direction="down" fullWidth>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary mb-4">
              Why Choose <span className="text-gradient">BimBytes Academy</span>
            </h2>
            <p className="text-lg text-textSecondary max-w-3xl mx-auto">
              We provide industry-driven BIM training that bridges the gap between theory and real-world application, 
              preparing you for high-demand careers in the AEC industry.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, i) => {
            const IconComponent = customIcons[i];
            return (
              <FadeIn key={i} delay={0.2 + i * 0.1} direction="up">
                <div className="card p-8 text-center group hover:shadow-glow transition-all duration-500 ease-smooth">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-500 ease-smooth">
                      <IconComponent />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-textPrimary mb-3 group-hover:text-primary transition-colors duration-300 ease-smooth">
                    {service.title}
                  </h3>
                  
                  <p className="text-textSecondary leading-relaxed">
                    {service.subtitle}
                  </p>
                  
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-smooth">
                    <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Additional Benefits */}
        <FadeIn delay={0.6} direction="up" fullWidth>
          <div className="mt-20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-textPrimary">Additional Benefits</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Industry Experts", desc: "Learn from certified BIM professionals", icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-primary"><path fill="currentColor" d="M12 12a5 5 0 100-10 5 5 0 000 10zm-7 9a7 7 0 0114 0H5z"/></svg>
                ) },
                { title: "Updated Curriculum", desc: "Latest BIM standards and workflows", icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-primary"><path fill="currentColor" d="M4 4h16v2H4V4zm0 4h10v2H4V8zm0 4h16v2H4v-2zm0 4h10v2H4v-2z"/></svg>
                ) },
                { title: "Career Growth", desc: "High-paying BIM jobs in India & abroad", icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-primary"><path fill="currentColor" d="M3 13h2v8H3v-8zm4-4h2v12H7V9zm4 2h2v10h-2V11zm4-6h2v16h-2V5zm4 8h2v8h-2v-8z"/></svg>
                ) },
                { title: "Flexible Learning", desc: "Online and offline training options", icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-primary"><path fill="currentColor" d="M4 6h16v10H4V6zm0 12h16v2H4v-2z"/></svg>
                ) }
              ].map((benefit, i) => (
                <div key={i} className="p-6 bg-white rounded-2xl border border-border hover:shadow-lg hover:border-primary/40 transition-all duration-300 ease-smooth">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      {benefit.icon}
                    </div>
                    <h4 className="font-semibold text-textPrimary">{benefit.title}</h4>
                  </div>
                  <p className="text-sm text-textSecondary leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Services;

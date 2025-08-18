// local imports
import { careTitle, careSubtitle, careList } from "../data";
import imageOne from "../assets/image 1.jpg";
import FadeIn from "../components/FadeIn";

const Care = () => {
  return (
    <section id="care" className="section-padding bg-gradient-to-br from-light to-white">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn delay={0.2} direction="down" fullWidth>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-textPrimary mb-6 leading-tight">
              {careTitle}
            </h2>
          </FadeIn>

          <FadeIn delay={0.4} direction="down" fullWidth>
            <p className="text-lg text-textSecondary max-w-3xl mx-auto leading-relaxed">
              {careSubtitle}
            </p>
          </FadeIn>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Care Tips */}
          <div className="space-y-8">
            {careList.map((item, i) => (
              <FadeIn key={i} delay={0.3 + i * 0.1} direction="left">
                <div className="card p-6 group hover:shadow-glow transition-all duration-500 ease-smooth">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-500 ease-smooth">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-textPrimary mb-3 group-hover:text-primary transition-colors duration-300 ease-smooth">
                        {item.title}
                      </h3>
                      <p className="text-textSecondary leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Right Column - Image */}
          <FadeIn delay={0.6} direction="right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl transform rotate-3 scale-105"></div>
              <img 
                src={imageOne} 
                alt="BIM Training and Career Development" 
                className="relative z-10 w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Care;

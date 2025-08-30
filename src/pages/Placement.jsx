import React from 'react';
import Footer from "../views/Footer";
import FadeIn from "../components/FadeIn";
import PlacementOpportunities from "../components/PlacementOpportunities";
import EnquiryForm from "../components/EnquiryForm";

const Placement = () => {
  return (
    <>




      {/* Placement Opportunities */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.2} direction="down" fullWidth>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary mb-4">
                <span className="text-gradient">Current Opportunities</span>
              </h2>
              <p className="text-lg text-textSecondary max-w-3xl mx-auto">
                Explore available placement and internship positions from our partner companies
              </p>
            </div>
          </FadeIn>

          <PlacementOpportunities />
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.2} direction="up" fullWidth>
            <EnquiryForm />
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Placement;

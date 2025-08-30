import React, { useState, useEffect } from 'react';
import { config } from '../config';
import FadeIn from './FadeIn';

const PlacementOpportunities = () => {
  const [placements, setPlacements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPlacements();
  }, []);

  const fetchPlacements = async () => {
    try {
      setLoading(true);
      console.log('🔍 Fetching placements from:', config.GOOGLE_APPS_SCRIPT_URL);
      
      const response = await fetch(config.GOOGLE_APPS_SCRIPT_URL);
      console.log('📡 Response status:', response.status);
      
      const data = await response.json();
      console.log('📊 Response data:', data);
      
      if (data.success) {
        console.log('✅ Success! Placements:', data.data);
        setPlacements(data.data || []);
        setError(null);
      } else {
        console.log('❌ Error:', data.error);
        setError(data.error || 'Failed to fetch placements');
      }
    } catch (err) {
      console.error('❌ Error fetching placements:', err);
      setError('Failed to load placement opportunities');
    } finally {
      setLoading(false);
    }
  };

  const handleApplyNow = (link) => {
    if (link && link !== '#') {
      // Add protocol if not present
      let fullUrl = link;
      if (!link.startsWith('http://') && !link.startsWith('https://')) {
        fullUrl = 'https://' + link;
      }
      window.open(fullUrl, '_blank');
    }
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-gray-200 h-48 rounded-t-2xl"></div>
            <div className="bg-white p-6 rounded-b-2xl">
              <div className="h-6 bg-gray-200 rounded mb-3"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-4"></div>
              <div className="h-10 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-500 text-lg mb-4">⚠️</div>
        <p className="text-textSecondary">{error}</p>
        <button 
          onClick={fetchPlacements}
          className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (placements.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-4xl mb-4">📋</div>
        <p className="text-textSecondary text-lg">No placement opportunities available at the moment.</p>
        <p className="text-textSecondary">Check back later for new opportunities!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {placements.map((placement, index) => (
          <FadeIn key={`placement-${index}`} delay={index * 0.1} direction="up">
                         <div className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
               (placement.Status === 'Closed' || placement.status === 'Closed') ? 'opacity-60' : ''
             }`}>
              <div className="h-64 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="text-7xl text-primary">💼</div>
              </div>
              
              <div className="p-10">
                                 <div className="mb-8">
                   <h3 className="text-2xl font-bold text-textPrimary mb-4">{placement.Title || placement.title}</h3>
                   <p className="text-primary font-medium mb-4 text-lg">{placement['Sub Heading'] || placement.subheading}</p>
                   <p className="text-textSecondary leading-relaxed">{placement.Description || placement.description}</p>
                 </div>
                
                <div className="flex justify-center">
                                     {placement.Status === 'Yes' || placement.status === 'Yes' ? (
                     <button
                       onClick={() => handleApplyNow(placement.Link || placement.link)}
                       className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 text-lg"
                     >
                       Apply Now
                     </button>
                   ) : placement.Status === 'Closed' || placement.status === 'Closed' ? (
                    <div className="bg-gray-100 text-gray-600 px-8 py-4 rounded-xl font-semibold text-lg">
                      Closed
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    );
};

export default PlacementOpportunities;

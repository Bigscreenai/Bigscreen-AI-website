import React from 'react';
import Hero from '../components/Hero';
import TrustSection from '../components/TrustSection';
import ServicesSection from '../components/ServicesSection';
import LeadForm from '../components/LeadForm';
import AboutSection from '../components/AboutSection';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TrustSection />
      <ServicesSection />
      <LeadForm />
      <AboutSection />
    </div>
  );
};

export default HomePage;
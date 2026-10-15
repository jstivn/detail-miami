import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { HeroBoxes } from './components/HeroBoxes';
import { ServicesSection } from './components/ServicesSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { PreFooter } from './components/PreFooter';
import { FooterSection } from './components/FooterSection';
import { CallbackModal } from './components/CallbackModal';
import { AppointmentModal } from './components/AppointmentModal';

export const App: React.FC = () => {
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [callbackOpen, setCallbackOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Signature Hand Car Wash ($95)');

  const handleOpenAppointment = (service?: string) => {
    if (service) {
      if (service.includes('Wash')) setSelectedService('Signature Hand Car Wash ($95)');
      else if (service.includes('Polish')) setSelectedService('Car Polish & Paint Correction ($450)');
      else if (service.includes('Ceramic') || service.includes('PPF')) setSelectedService('Ceramic & XPEL PPF Armor ($1,850)');
      else if (service.includes('Detailing')) setSelectedService('Complete Detailing Reconditioning ($280)');
      else setSelectedService(service);
    }
    setAppointmentOpen(true);
  };

  const handleOpenCallback = () => {
    setCallbackOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-[#e5e5e7] selection:bg-red-600 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* 1. Sticky Navigation with dynamic Book Now button */}
      <Navigation
        onOpenAppointment={() => handleOpenAppointment()}
        onOpenCallback={handleOpenCallback}
      />

      {/* 2. Hero Section with Video & Instant CTA Triggers */}
      <Hero
        onOpenAppointment={() => handleOpenAppointment()}
        onOpenCallback={handleOpenCallback}
      />

      {/* 3. Hero Double Boxes: Map (Miami Design District) & Brand Logos + Google 4.9 Stars */}
      <HeroBoxes />

      {/* 4. Core Services (Car Wash, Polish, Ceramic & PPF, Detailing) */}
      <ServicesSection
        onSelectService={(serviceTitle) => handleOpenAppointment(serviceTitle)}
      />

      {/* 5. Interactive Before & After Slider */}
      <BeforeAfterSection />

      {/* 6. Client Testimonials (Verified Google Reviews) */}
      <TestimonialsSection />

      {/* 7. Frequently Asked Questions Accordion */}
      <FaqSection />

      {/* 9. Pre-Footer Call to Action Banner */}
      <PreFooter
        onOpenAppointment={() => handleOpenAppointment()}
      />

      {/* 10. Official Trust Footer with GBP Florida Registration */}
      <FooterSection />

      {/* 11. Request A Call Back Modal */}
      <CallbackModal
        isOpen={callbackOpen}
        onClose={() => setCallbackOpen(false)}
      />

      {/* 12. Book An Appointment Modal */}
      <AppointmentModal
        isOpen={appointmentOpen}
        onClose={() => setAppointmentOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
};

export default App;

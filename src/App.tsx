import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClimateDefense } from './components/ClimateDefense';
import { PricingMatrix } from './components/PricingMatrix';
import { CaseStudies } from './components/CaseStudies';
import { CleanroomStandards } from './components/CleanroomStandards';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export const App: React.FC = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('FULL BODY ARMOUR (10-Mil PPF)');

  const handleOpenBooking = (service?: string) => {
    if (service) {
      setSelectedService(service);
    }
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-[#e5e5e7] selection:bg-[#0A84FF] selection:text-white">
      {/* Floating Liquid Glass Navigation Bar with 1-Tap SMS & Call */}
      <Navbar onOpenBookingModal={handleOpenBooking} />

      {/* Hero Section with DetailX Supercar Ignition Loop & 1-Tap SMS / GPS triggers */}
      <Hero onOpenBookingModal={handleOpenBooking} />

      {/* Sunbelt & Coastal Climate Defense Specifications */}
      <ClimateDefense />

      {/* Transparent USD Commission Schedule */}
      <PricingMatrix />

      {/* Commissioned US Hypercar Case Studies (Miami / Palm Beach) */}
      <CaseStudies />

      {/* Cleanroom Standards & Miami Design District Tooling */}
      <CleanroomStandards />

      {/* Hypercar Owner Technical FAQ */}
      <FAQ />

      {/* Google Business Profile & State Trust Footer */}
      <Footer />

      {/* Direct 1-Tap SMS & Confidential Dossier Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
};

export default App;

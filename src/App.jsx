import React from 'react';
import Navbar from '../components/Navbar';
import {HeroSection} from '../sections/HeroSection'
import {TripOverview} from '../sections/TripOverview';
import {DetailedItinerary} from '../sections/Itinerary';
import {InclusionsExclusions} from '../sections/IN_EX';
import {PricingSection} from '../sections/PriceSection';
import {TrustSection} from '../sections/TrustSection';
import {TripCarousel} from '../sections/Carousel';
import {Footer} from '../sections/FooterSection';


const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <TripOverview />
      <DetailedItinerary />
      <InclusionsExclusions />
      <PricingSection />
      <TrustSection />
      <TripCarousel />
      <Footer />
    </div>
  );
};
export default App;
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FloatingPetals from "./wedding/FloatingPetals";
import HeroSection from "./wedding/HeroSection";
import CountdownTimer from "./wedding/CountdownTimer";
import FamilySection from "./wedding/FamilySection";
import EventsTimeline from "./wedding/EventsTimeline";
import VenueSection from "./wedding/VenueSection";

function App() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <FloatingPetals />
      <HeroSection />
      <CountdownTimer />
      <FamilySection />
      <EventsTimeline />
      <VenueSection />
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import Navigation from "../src/components/Navigation/index";
import Footer from "../src/components/Footer/index";
import HeroSection from "../src/components/HeroSection/Hero";
import Mentor from "../src/sections/mentor";
import Reviews from "./sections/reviews";
import Classes from "./sections/classes";
export default function App() {
  return (
    <div>
      {/*Navigation*/}
      <div>
        <Navigation />
      </div>
      {/*HeroSection*/}
      <div>
        <HeroSection />
      </div>
      {/*Classes*/}
      <div>
        <Classes />
      </div>
      {/*Mentor*/}
      <div>
        <Mentor />
      </div>
      {/*reviews*/}
      <div>
        <Reviews />
      </div>
      {/*Footer*/}
      <div>
        <Footer />
      </div>
    </div>
  );
}

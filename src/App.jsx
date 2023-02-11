import React from "react";
import Navigation from "../src/components/Navigation/index";
import Footer from "../src/components/Footer/index";
import HeroSection from "../src/components/HeroSection/Hero";
import Mentor from "../src/components/Mentor/index";
import Reviews from "../src/components/Reviews/index";
import CalltoAction from "./components/CTA/CalltoAction";
import Courses from "./components/Courses";
export default function App() {
  return (
    <div className="overflow-hidden">
      {/*Navigation*/}
      <div>
        <Navigation />
      </div>
      {/*HeroSection*/}
      <div>
        <HeroSection />
      </div>
      {/* CTA */}
      <div>
        <CalltoAction />
      </div>
      {/* Courses */}
      <div>
        <Courses />
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

      {/*Footer*/}
      <div>
        <Footer />
      </div>
    </div>
  );
}

import React from "react";
import Navigation from "../src/components/Navigation/index";
import Footer from "../src/components/Footer/index";
import HeroSection from "../src/components/HeroSection/Hero";
import CalltoAction from "./components/CTA/CalltoAction";
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
        <CalltoAction/>
      </div>
      {/*Footer*/}
      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
}

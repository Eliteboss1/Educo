import React from "react";
import Navigation from "../src/components/Navigation/index";
import Footer from "../src/components/Footer/index";
import HeroSection from "../src/components/HeroSection/Hero";
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
      {/*Footer*/}
      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
}

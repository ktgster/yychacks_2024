import React from "react";
import NavBar from "../components/Navbar";
import Hero from "../components/Hero";

export default function LandingPage() {
  return (
    <div>
      <div className="bg-black">
        <NavBar />
        <Hero />
      </div>
    </div>
  );
}

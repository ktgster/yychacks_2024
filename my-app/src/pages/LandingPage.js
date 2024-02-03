import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <h1 className="text-4xl">Landing Page</h1>

      <div>
        <Footer />
      </div>
    </div>
  );
}

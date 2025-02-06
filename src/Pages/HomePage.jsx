import React from "react";
import Hero from "../components/HomePage/Hero/Hero";
import Skills from "../components/HomePage/Skills";
import Profile from "../components/HomePage/Profile/Profile";
import Project from "../components/HomePage/Projects/Project";

function HomePage() {
  return (
    <div>
      <Hero />
      <Skills />
      <Profile />
      <Project />
    </div>
  );
}

export default HomePage;

import React from "react";
import Navbar from "./components/Navbar";
import { AboutMe } from "./pages/aboutme";
import Home from "./pages/home";
import Gallery from "./pages/gallery";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Gallery />
    </div>
  );
};

export default App;

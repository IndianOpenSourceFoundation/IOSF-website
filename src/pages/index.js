import React from "react";
import Header from "../components/Header";
import LearningPaths from "../components/LearningPaths";
import Bootcamps from "../components/LearningPaths";
import Contribute from "../components/Contribute";
import Footer from "../components/Footer";

const HomePage = () => (
  <div className="Homepage">
    <Header />
    <LearningPaths />
    <Bootcamps />
    <Contribute />
    <Footer />
  </div>
);



export default HomePage;
import React from "react";
import ChoseUs from "../ChoseUs/ChoseUs";
import OurPackages from "../OurPackages/OurPackages";
import Slider from "../Slider/Slider";
import TourGuides from "../TourGuides/TourGuides";

const Home = () => {
  return (
    <div>
      <Slider />
      <OurPackages/>
      <ChoseUs />
      <TourGuides />
    </div>
  );
};

export default Home;

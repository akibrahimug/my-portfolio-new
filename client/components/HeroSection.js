import React, { useContext, useEffect, useState } from "react";
import Avarta from "./Avarta";
import Bio from "./Bio";
import ProfileDesc from "./ProfileDesc";
import { Context } from "../pages/Context";
const cetified = [
  "Search Engine Optimization",
  "Content Accessibility Guidelines",
  "E-Commerce systems experience",
  "Testing and Debugging",
  "Algorithm and Data Structure",
  "Front End Libraries",
  "Data Visualization",
  "APIs",
  "Agile Methodologies",
  "Responsive Web Design",
  "Progressive Web Apps",
  "GCP Infrastructure and Services",
];
function HeroSection() {
  const { backend } = useContext(Context);
  const [avatar, setAvatar] = useState("");

  return (
    <div className="grid ll:grid-cols-2 relative mb-32">
      <ProfileDesc cetified={cetified} />
      <Avarta />
    </div>
  );
}

export default HeroSection;

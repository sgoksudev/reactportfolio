import React from "react";
import { Timeline } from "../components/ui/Timeline";
import { workExperience } from "../assets";
const Experience = () => {
  return (
    <div id="experience" className="w-full">
      <Timeline data={workExperience} />
    </div>
  );
};

export default Experience;

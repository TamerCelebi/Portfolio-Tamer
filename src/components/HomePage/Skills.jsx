import React from "react";
import { useUser } from "../../contextAPI/UserContext";
import Skill from "./Skill";

function Skills() {
  const { user } = useUser();
  return (
    <div className="w-full max-w-6xl mx-auto text-center py-10">
      <h4 className="text-3xl font-bold mb-6">{user.skillsSection.title}</h4>

      <ul className="flex flex-wrap justify-center gap-6 md:gap-10">
        {user.skillsSection.skills.map((skill, index) => (
          <Skill skill={skill} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default Skills;

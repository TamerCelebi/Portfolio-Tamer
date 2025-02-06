import React from "react";

function Skill({ skill }) {
  return (
    <li className="flex flex-col items-center">
      <img
        src={`/assets/${skill.logo.toLowerCase()}.svg`}
        className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain"
        alt={skill.name}
      />
      <p className="text-gray-700 text-sm md:text-base mt-2">{skill.name}</p>
    </li>
  );
}

export default Skill;

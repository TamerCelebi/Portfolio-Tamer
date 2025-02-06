import React from "react";

function AboutMe({ info }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-blue-700 mb-4 border-b pb-2">
        About me
      </h3>
      <p className="text-gray-700">{info}</p>
    </div>
  );
}

export default AboutMe;

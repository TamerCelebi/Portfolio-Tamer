import React from "react";

function Basicinfos({ info }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg max-w-lg mx-auto">
      <h3 className="text-3xl font-bold text-pink-600 mb-8 pb-10">
        {info.title}
      </h3>

      <ul className="grid grid-cols-1 gap-y-4">
        {info.content.map((item, index) => (
          <li key={index} className="grid grid-cols-2">
            <span className="font-semibold text-gray-900">
              {item.question}:
            </span>
            <span className="text-gray-700">{item.answer}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Basicinfos;

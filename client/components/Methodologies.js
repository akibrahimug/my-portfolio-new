import React from "react";

function Methodologies() {
  // development methodologies
  const methodologies = [
    "Agile",
    "Scrum",
    "DRY",
    "KISS",
    "Object Oriented Programming",
    "REST",
    "SASS",
    "Mobile First",
    "Responsive Web Design",
    "Progresive Web Apps",
    "Test Driven Development",
  ];

  return (
    <>
      <h2 id="methods" className="font-bold text-2xl text-gray-600">
        My Methodologies
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 xl:grid-cols-6 gap-2">
        {methodologies.map((methodology, i) => (
          <div
            key={i}
            className="flex flex-col bg-white shadow-md rounded-lg p-4 my-2"
          >
            <h3 className="font-bold text-xl text-gray-500">{methodology}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default Methodologies;

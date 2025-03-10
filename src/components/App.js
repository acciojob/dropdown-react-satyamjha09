import React, { useState } from "react";

const data = [
  {
    name: "Madhya Pradesh",
    description: "A state in central India.",
    cities: [
      {
        name: "Bhopal",
        description: "Capital of Madhya Pradesh.",
        landmarks: [
          { name: "Taj-ul-Masjid", description: "Largest mosque in India." },
          { name: "Upper Lake", description: "A famous artificial lake." },
        ],
      },
      {
        name: "Indore",
        description: "Largest city in Madhya Pradesh.",
        landmarks: [
          { name: "Rajwada", description: "Historical palace in Indore." },
          { name: "Patalpani", description: "A scenic waterfall." },
        ],
      },
    ],
  },
  {
    name: "Maharashtra",
    description: "A state in western India.",
    cities: [
      {
        name: "Mumbai",
        description: "Financial capital of India.",
        landmarks: [
          { name: "Gateway of India", description: "Iconic Mumbai monument." },
          { name: "Marine Drive", description: "Famous coastal road." },
        ],
      },
      {
        name: "Pune",
        description: "Educational hub of Maharashtra.",
        landmarks: [
          { name: "Shaniwar Wada", description: "Historic fortification." },
          { name: "Aga Khan Palace", description: "Mahatma Gandhi memorial." },
        ],
      },
    ],
  },
];

const App = () => {
  const [selectedStateIndex, setSelectedStateIndex] = useState(0);
  const [selectedCityIndex, setSelectedCityIndex] = useState(0);
  const [selectedLandmarkIndex, setSelectedLandmarkIndex] = useState(0);

  const selectedState = data[selectedStateIndex];
  const selectedCity = selectedState.cities[selectedCityIndex];
  const selectedLandmark = selectedCity.landmarks[selectedLandmarkIndex];

  const handleStateChange = (e) => {
    setSelectedStateIndex(parseInt(e.target.value));
    setSelectedCityIndex(0);
    setSelectedLandmarkIndex(0);
  };

  const handleCityChange = (e) => {
    setSelectedCityIndex(parseInt(e.target.value));
    setSelectedLandmarkIndex(0);
  };

  const handleLandmarkChange = (e) => {
    setSelectedLandmarkIndex(parseInt(e.target.value));
  };

  return (
    <div>
      <h2>Dynamic Dropdown Selection</h2>

      {/* State Dropdown */}
      <label htmlFor="state">Select State:</label>
      <select id="state" value={selectedStateIndex} onChange={handleStateChange}>
        {data.map((state, index) => (
          <option key={index} value={index}>
            {state.name}
          </option>
        ))}
      </select>

      {/* City Dropdown */}
      <label htmlFor="city">Select City:</label>
      <select id="city" value={selectedCityIndex} onChange={handleCityChange}>
        {selectedState.cities.map((city, index) => (
          <option key={index} value={index}>
            {city.name}
          </option>
        ))}
      </select>

      {/* Landmark Dropdown */}
      <label htmlFor="landmark">Select Landmark:</label>
      <select id="landmark" value={selectedLandmarkIndex} onChange={handleLandmarkChange}>
        {selectedCity.landmarks.map((landmark, index) => (
          <option key={index} value={index}>
            {landmark.name}
          </option>
        ))}
      </select>

      {/* Display Selection Details */}
      <div>
        <h3>Selected State</h3>
        <p id="state-name"><strong>Name:</strong> {selectedState.name}</p>
        <p id="state-description"><strong>Description:</strong> {selectedState.description}</p>

        <h3>Selected City</h3>
        <p id="city-name"><strong>Name:</strong> {selectedCity.name}</p>
        <p id="city-description"><strong>Description:</strong> {selectedCity.description}</p>

        <h3>Selected Landmark</h3>
        <p id="landmark-name"><strong>Name:</strong> {selectedLandmark.name}</p>
        <p id="landmark-description"><strong>Description:</strong> {selectedLandmark.description}</p>
      </div>
    </div>
  );
};

export default App;

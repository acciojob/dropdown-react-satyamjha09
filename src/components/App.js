import React, { useState } from "react";

const data = {
  states: [
    {
      name: "Madhya Pradesh",
      description: "A central Indian state with rich cultural heritage.",
      cities: [
        {
          name: "Indore",
          description: "The cleanest city of India.",
          landmarks: [
            { name: "Rajwada", description: "A historic palace in Indore." },
            { name: "Sarafa Bazaar", description: "Famous food street." },
          ],
        },
        {
          name: "Bhopal",
          description: "The city of lakes.",
          landmarks: [
            { name: "Taj-ul-Masajid", description: "One of the largest mosques in India." },
            { name: "Van Vihar", description: "A national park in Bhopal." },
          ],
        },
      ],
    },
    {
      name: "Maharashtra",
      description: "A western Indian state known for Mumbai and Pune.",
      cities: [
        {
          name: "Mumbai",
          description: "The financial capital of India.",
          landmarks: [
            { name: "Gateway of India", description: "A historic monument in Mumbai." },
            { name: "Marine Drive", description: "A beautiful coastline road." },
          ],
        },
        {
          name: "Pune",
          description: "An educational hub of India.",
          landmarks: [
            { name: "Shaniwar Wada", description: "A historical fortification." },
            { name: "Aga Khan Palace", description: "A historical palace." },
          ],
        },
      ],
    },
  ],
};

const App = () => {
  const [selectedStateIndex, setSelectedStateIndex] = useState(0);
  const [selectedCityIndex, setSelectedCityIndex] = useState(0);
  const [selectedLandmarkIndex, setSelectedLandmarkIndex] = useState(0);

  const selectedState = data.states[selectedStateIndex];
  const selectedCity = selectedState.cities[selectedCityIndex];
  const selectedLandmark = selectedCity.landmarks[selectedLandmarkIndex];

  return (
    <div>
      <h2>Dynamic Dropdown Example</h2>

      {/* State Dropdown */}
      <label>State: </label>
      <select
        id="state"
        value={selectedStateIndex}
        onChange={(e) => {
          setSelectedStateIndex(e.target.value);
          setSelectedCityIndex(0); // Reset city when state changes
          setSelectedLandmarkIndex(0); // Reset landmark when city changes
        }}
      >
        {data.states.map((state, index) => (
          <option key={index} value={index}>
            {state.name}
          </option>
        ))}
      </select>

      {/* City Dropdown */}
      <label>City: </label>
      <select
        id="city"
        value={selectedCityIndex}
        onChange={(e) => {
          setSelectedCityIndex(e.target.value);
          setSelectedLandmarkIndex(0); // Reset landmark when city changes
        }}
      >
        {selectedState.cities.map((city, index) => (
          <option key={index} value={index}>
            {city.name}
          </option>
        ))}
      </select>

      {/* Landmark Dropdown */}
      <label>Landmark: </label>
      <select
        id="landmark"
        value={selectedLandmarkIndex}
        onChange={(e) => setSelectedLandmarkIndex(e.target.value)}
      >
        {selectedCity.landmarks.map((landmark, index) => (
          <option key={index} value={index}>
            {landmark.name}
          </option>
        ))}
      </select>

      {/* Display Selected Info */}
      <div>
        <h3>Selected Information:</h3>
        <p id="state-name"><strong>State:</strong> {selectedState.name}</p>
        <p id="state-description">{selectedState.description}</p>
        
        <p id="city-name"><strong>City:</strong> {selectedCity.name}</p>
        <p id="city-description">{selectedCity.description}</p>

        <p id="landmark-name"><strong>Landmark:</strong> {selectedLandmark.name}</p>
        <p id="landmark-description">{selectedLandmark.description}</p>
      </div>
    </div>
  );
};

export default App;

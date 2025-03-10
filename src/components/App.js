import React, { useState, useEffect } from "react";

const data = [
  {
    name: "Madhya Pradesh",
    description: "A central Indian state known for historical sites.",
    cities: [
      {
        name: "Indore",
        description: "Commercial capital of Madhya Pradesh.",
        landmarks: [
          { name: "Rajwada", description: "Historical palace in Indore." },
          { name: "Sarafa Bazaar", description: "Famous food market." },
        ],
      },
      {
        name: "Bhopal",
        description: "The capital city of Madhya Pradesh.",
        landmarks: [
          { name: "Taj-ul-Masjid", description: "One of India's largest mosques." },
          { name: "Upper Lake", description: "A beautiful lake in Bhopal." },
        ],
      },
    ],
  },
  {
    name: "Maharashtra",
    description: "A western Indian state, home to Mumbai.",
    cities: [
      {
        name: "Mumbai",
        description: "Financial capital of India.",
        landmarks: [
          { name: "Gateway of India", description: "Iconic monument of Mumbai." },
          { name: "Marine Drive", description: "Scenic coastal road." },
        ],
      },
      {
        name: "Pune",
        description: "Known for educational institutions.",
        landmarks: [
          { name: "Shaniwar Wada", description: "Historical fort in Pune." },
          { name: "Aga Khan Palace", description: "Famous for Gandhi's imprisonment." },
        ],
      },
    ],
  },
];

function App() {
  const [stateIndex, setStateIndex] = useState(0);
  const [cityIndex, setCityIndex] = useState(0);
  const [landmarkIndex, setLandmarkIndex] = useState(0);

  useEffect(() => {
    setCityIndex(0);
    setLandmarkIndex(0);
  }, [stateIndex]);

  useEffect(() => {
    setLandmarkIndex(0);
  }, [cityIndex]);

  const selectedState = data[stateIndex];
  const selectedCity = selectedState.cities[cityIndex];
  const selectedLandmark = selectedCity.landmarks[landmarkIndex];

  return (
    <div>
      {/* State Dropdown */}
      <label htmlFor="state">Select State:</label>
      <select id="state" value={stateIndex} onChange={(e) => setStateIndex(Number(e.target.value))}>
        {data.map((state, index) => (
          <option key={index} value={index}>
            {state.name}
          </option>
        ))}
      </select>

      {/* City Dropdown */}
      <label htmlFor="city">Select City:</label>
      <select id="city" value={cityIndex} onChange={(e) => setCityIndex(Number(e.target.value))}>
        {selectedState.cities.map((city, index) => (
          <option key={index} value={index}>
            {city.name}
          </option>
        ))}
      </select>

      {/* Landmark Dropdown */}
      <label htmlFor="landmark">Select Landmark:</label>
      <select id="landmark" value={landmarkIndex} onChange={(e) => setLandmarkIndex(Number(e.target.value))}>
        {selectedCity.landmarks.map((landmark, index) => (
          <option key={index} value={index}>
            {landmark.name}
          </option>
        ))}
      </select>

      {/* Display Selected Data */}
      <div id="state-name"><strong>State:</strong> {selectedState.name}</div>
      <div id="state-description">{selectedState.description}</div>

      <div id="city-name"><strong>City:</strong> {selectedCity.name}</div>
      <div id="city-description">{selectedCity.description}</div>

      <div id="landmark-name"><strong>Landmark:</strong> {selectedLandmark.name}</div>
      <div id="landmark-description">{selectedLandmark.description}</div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  // Data for states, cities, and landmarks
  const data = [
    {
      name: "Madhya Pradesh",
      description: "Heart of India",
      cities: [
        {
          name: "Indore",
          description: "Food Capital",
          landmarks: [
            { name: "Rajwada", description: "Historical Palace" },
            { name: "Lal Bagh", description: "Beautiful Garden" },
          ],
        },
        {
          name: "Bhopal",
          description: "City of Lakes",
          landmarks: [
            { name: "Upper Lake", description: "Largest Artificial Lake" },
            { name: "Taj-ul-Masajid", description: "Largest Mosque in India" },
          ],
        },
      ],
    },
    {
      name: "Maharashtra",
      description: "Land of Diversity",
      cities: [
        {
          name: "Mumbai",
          description: "Financial Capital",
          landmarks: [
            { name: "Gateway of India", description: "Iconic Monument" },
            { name: "Marine Drive", description: "Scenic Promenade" },
          ],
        },
        {
          name: "Pune",
          description: "Cultural Capital",
          landmarks: [
            { name: "Shaniwar Wada", description: "Historical Fort" },
            { name: "Aga Khan Palace", description: "Historical Monument" },
          ],
        },
      ],
    },
  ];

  // State for selected state, city, and landmark
  const [selectedState, setSelectedState] = useState(0);
  const [selectedCity, setSelectedCity] = useState(0);
  const [selectedLandmark, setSelectedLandmark] = useState(0);

  // Event handlers for dropdown changes
  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedCity(0); // Reset city selection
    setSelectedLandmark(0); // Reset landmark selection
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setSelectedLandmark(0); // Reset landmark selection
  };

  const handleLandmarkChange = (e) => {
    setSelectedLandmark(e.target.value);
  };

  // Get selected state, city, and landmark data
  const state = data[selectedState];
  const city = state.cities[selectedCity];
  const landmark = city.landmarks[selectedLandmark];

  return (
    <div className="App">
      <h1>Dropdown React</h1>

      {/* State Dropdown */}
      <div>
        <label htmlFor="state">State:</label>
        <select id="state" value={selectedState} onChange={handleStateChange}>
          {data.map((state, index) => (
            <option key={index} value={index}>
              {state.name}
            </option>
          ))}
        </select>
        <div id="state-name">{state.name}</div>
        <div id="state-description">{state.description}</div>
      </div>

      {/* City Dropdown */}
      <div>
        <label htmlFor="city">City:</label>
        <select id="city" value={selectedCity} onChange={handleCityChange}>
          {state.cities.map((city, index) => (
            <option key={index} value={index}>
              {city.name}
            </option>
          ))}
        </select>
        <div id="city-name">{city.name}</div>
        <div id="city-description">{city.description}</div>
      </div>

      {/* Landmark Dropdown */}
      <div>
        <label htmlFor="landmark">Landmark:</label>
        <select
          id="landmark"
          value={selectedLandmark}
          onChange={handleLandmarkChange}
        >
          {city.landmarks.map((landmark, index) => (
            <option key={index} value={index}>
              {landmark.name}
            </option>
          ))}
        </select>
        <div id="landmark-name">{landmark.name}</div>
        <div id="landmark-description">{landmark.description}</div>
      </div>
    </div>
  );
};

export default App;
import React, { useState } from 'react';
import Card from './Card';

const list = [
  {
    name: "Madhya Pradesh",
    description: "Heart of India",
    cities: [
      {
        name: "Indore",
        description: "Cleanest city",
        landmarks: [
          { name: "Rajwada", description: "Historical palace" },
          { name: "Lal Bagh Palace", description: "Royal residence" }
        ]
      },
      {
        name: "Bhopal",
        description: "City of Lakes",
        landmarks: [
          { name: "Upper Lake", description: "Large artificial lake" },
          { name: "Taj-ul-Masajid", description: "Mosque with white domes" }
        ]
      }
    ]
  },
  {
    name: "Maharashtra",
    description: "Economic hub of India",
    cities: [
      {
        name: "Mumbai",
        description: "Financial capital",
        landmarks: [
          { name: "Gateway of India", description: "Historic monument" },
          { name: "Marine Drive", description: "Scenic coastline" }
        ]
      },
      {
        name: "Pune",
        description: "Cultural capital",
        landmarks: [
          { name: "Shaniwar Wada", description: "Historical fortification" },
          { name: "Aga Khan Palace", description: "Historical palace" }
        ]
      }
    ]
  }
];

function App() {
  const [selectedState, setSelectedState] = useState(0);
  const [selectedCity, setSelectedCity] = useState(0);
  const [selectedLandmark, setSelectedLandmark] = useState(0);

  const currentState = list[selectedState];
  const currentCity = currentState.cities[selectedCity];
  const currentLandmark = currentCity.landmarks[selectedLandmark];

  const handleStateChange = (e) => {
    setSelectedState(Number(e.target.value));
    setSelectedCity(0);
    setSelectedLandmark(0);
  };

  const handleCityChange = (e) => {
    setSelectedCity(Number(e.target.value));
    setSelectedLandmark(0);
  };

  const handleLandmarkChange = (e) => {
    setSelectedLandmark(Number(e.target.value));
  };

  return (
    <div className="App">
      <select id="state" value={selectedState} onChange={handleStateChange}>
        {list.map((state, index) => (
          <option key={index} value={index}>{state.name}</option>
        ))}
      </select>

      <select id="city" value={selectedCity} onChange={handleCityChange}>
        {currentState.cities.map((city, index) => (
          <option key={index} value={index}>{city.name}</option>
        ))}
      </select>

      <select id="landmark" value={selectedLandmark} onChange={handleLandmarkChange}>
        {currentCity.landmarks.map((landmark, index) => (
          <option key={index} value={index}>{landmark.name}</option>
        ))}
      </select>

      <Card item={currentState} prefix="state" />
      <Card item={currentCity} prefix="city" />
      <Card item={currentLandmark} prefix="landmark" />
    </div>
  );
}

export default App;
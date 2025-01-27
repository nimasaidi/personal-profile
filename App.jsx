import React from 'react';
import ProfileCard from './ProfileCard';
import './App.css';
import myself from './assets/myself.jpg';

function App() {
  return (
    <div className="App">
      <div className="profile-container">
        <ProfileCard
          image={myself}
          name="Anima"
          description="Front-end developer"
        />
        <ProfileCard
          image=""
          name="Maziar Bahmani"
          description="Back-end developer"
        />
        <ProfileCard
          image=""
          name="vian salahian"
          description="Front-end developer"
        />
      </div>
    </div>
  );
}

export default App;


import './App.css';
import React from 'react';
import ProfilePhoto from './component/profile/ProfilePhoto';
import FullName from './component/profile/FullName';
import Adresses  from './component/profile/Adresses';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ProfilePhoto></ProfilePhoto>
      <FullName></FullName>
      <Adresses></Adresses>
      </header>
    </div>
  );
}

export default App;

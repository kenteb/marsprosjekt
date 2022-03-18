import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { NameForm } from './NameForm';
import { GuestList } from './GuestList';

function App() {
  let [updateCount, setUpdateCount] = useState(0);

  const handleUpdateCount = () => {
    setUpdateCount(updateCount+1);
  }

  return (
    <div className="Outer">
      <div className="Visitors">
        <GuestList updateCount={updateCount} />
      </div>
      <div className="Main">
        <NameForm updateCount={updateCount} handleUpdateCount={handleUpdateCount}/>
      </div>
      <div></div>
    </div>
  );
}

export default App;

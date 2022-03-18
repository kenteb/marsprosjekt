import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NameForm } from './NameForm';
import { GuestList } from './GuestList';

function App() {
  return (
    <div className="Outer">
      <div className="Visitors">
        <GuestList />
      </div>
      <div className="Main">
        <NameForm />
      </div>
      <div></div>
    </div>
  );
}

export default App;

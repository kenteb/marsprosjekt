import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NameForm } from './NameForm';
import { GuestList } from './GuestList';

function App() {
  return (
    <div className="Main">
      <GuestList />
      <NameForm />
    </div>
  );
}

export default App;

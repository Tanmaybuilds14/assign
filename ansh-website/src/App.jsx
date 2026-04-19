import React from 'react';
import FlipBook from './components/FlipBook';
import './index.css';

function App() {
  return (
    <>
      <div className="background-texture"></div>
      <main className="container">
        <header className="header">
          <h1 className="logo">Memories.</h1>
          <p className="subtitle">A collection of moments</p>
        </header>
        <FlipBook />
      </main>
    </>
  );
}

export default App;

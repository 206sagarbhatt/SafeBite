// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-bold">Welcome to My App</h1>
        {/* Other content here */}
      </main>
    </div>
  );
}

export default App;
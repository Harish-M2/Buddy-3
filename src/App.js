import React, { useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import Sports from './Pages/Sports';
import Settings from './Pages/Settings';

function App() {
  const [activeTab, setActiveTab] = useState('Home');

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <Home />;
      case 'Sports':
        return <Sports />;
      case 'Settings':
        return <Settings />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <div className="tabs">
        <button onClick={() => setActiveTab('Home')}>Home</button>
        <button onClick={() => setActiveTab('Sports')}>Sports</button>
        <button onClick={() => setActiveTab('Settings')}>Settings</button>
      </div>
      <div className="tab-content">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;


// import React from 'react';
// import Allcom from './Allcom';
// function App() {
//   return (
//     <div>
//     <Allcom/>

//     </div>
//   );
// }

// export default App;
// Dashboard.js
import React from 'react';
 import './App.css';

function App() {
  return (
    <div className="dashboard">
      <header className="header">
        <h1>Plant Intel</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/monitor">Monitor Plants</a></li>
            <li><a href="/reports">Health Reports</a></li>
            <li><a href="/settings">Settings</a></li>
            <li><a href="/logout">Logout</a></li>
          </ul>
        </nav>
      </header>

      <div className="content">
        <aside className="plant-overview">
          <h2>Your Plants</h2>
          <ul>
            <li>Plant 1</li>
            <li>Plant 2</li>
            <li>Plant 3</li>
          </ul>
          <button className="add-plant">+ Add Plant</button>
        </aside>

        <main className="plant-details">
          <h2>Plant Health</h2>
          <div className="image-upload">
            <h3>Upload Image or View Live Feed</h3>
            <input type="file" />
            {/* Live Feed Component can go here */}
          </div>

          <div className="health-status">
            <h3>Health Status: <span className="status">Healthy</span></h3>
          </div>

          <div className="metrics">
            <h3>Environmental Metrics</h3>
            <ul>
              <li>Soil Moisture: 40%</li>
              <li>Temperature: 25°C</li>
              <li>Light Levels: Moderate</li>
            </ul>
          </div>

          <div className="alerts">
            <h3>Alerts</h3>
            <p>No issues detected.</p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

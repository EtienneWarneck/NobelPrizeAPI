import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Toolbar from './components/Toolbar/Toolbar'

function App() {
  return (
    <div class="card">
            <div class="card-body">
              <h5 class="card-title">Steve Jobs</h5>
              <h6 class="card-subtitle mb-2 text-muted">steve@apple.com</h6>
              <p class="card-text">Stay Hungry, Stay Foolish</p>
            </div>
            <Toolbar></Toolbar>
          </div>
  );
}

export default App;

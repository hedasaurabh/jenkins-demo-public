import React from 'react';
import logo from './image.png';
import './App.css';
import packageJson from '../package.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello Howdie .
        </p>
        <a
          className="App-link"
          href="https://jenkins.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to Jenkins.
        </a>      
      </header>
      <p>
          The current version of this app is: {packageJson.version}
      </p>
    </div>
  );
}
console.log(packageJson.version);
export default App;

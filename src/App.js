import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar.js'
import React from 'react';
import Feed from './Feed';
import TechFeed from './TechFeed';

function App() {
  return (
    <div className="App">
      

      {/*Nav Bar*/}
      <NavBar/>
       {/*horiz feed*/}
       <Feed/>
        {/*Tech Stack carousel*/}
        <TechFeed/>
    </div>
  );
}

export default App;

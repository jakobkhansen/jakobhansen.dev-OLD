import React from 'react';
import headshot from '../resources/headshot.png';
import './FrontPage.css';

function FrontPage() {
  return (
    <div className="FrontPage">
      <header className="FrontPage-header">
        <img src={headshot} className="headshot" alt="Headshot" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="FrontPage-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default FrontPage;

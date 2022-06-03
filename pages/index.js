import React from "react";
import HeadComponent from '../components/Head';

// Constants
const TWITTER_HANDLE = "ilikeyourmath";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  
  
  return (
    <div className="App">
      <HeadComponent/>
      <div className="container">
        <header className="header-container">
          <p className="header">   🖼 ILYM Virtual Gallery 🖼  </p>
          <p className="sub-text">The official I Like Your Math marketplace</p>
        </header>

        <main>
          <img src="https://media.giphy.com/media/3o6ZtqyrkPXluOy5oc/giphy.gif" alt="emoji" />
        </main>

        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src="twitter-logo.svg" />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`find us @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;

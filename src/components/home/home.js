import React from "react";

/**
 * Home Component
 * This will just display some news for the users, and inform them of the website.
 */
class Home extends React.Component {
  render = () => {
    return (
      <div className="component">
        <h1 className="welcome">
          Welcome to vgBay - Your go to shop for games!
        </h1>
        <span>New Ads:</span>
      </div>
    );
  };
}

export default Home;

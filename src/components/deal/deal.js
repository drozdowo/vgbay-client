import React from "react";
import "./deal.css";

/**
 * Deal Component
 * This will just display some news for the users, and inform them of the website.
 */
class Deal extends React.Component {
  render = () => {
    return (
      <div className="deal">
        <span className="category"> {this.props.category} </span>
        <span className="name"> {this.props.name} </span>
        <span className="percent"> {this.props.percentOff}% off! </span>
      </div>
    );
  };
}

export default Deal;

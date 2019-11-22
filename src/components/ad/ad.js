import React from "react";
import "./ad.css";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";

/**
 * Home Component
 * This will just display some news for the users, and inform them of the website.
 */
class Ad extends React.Component {
  clicked = () => {
    window.App.swapActiveComponent(`ad:${this.props.itemId}`);
  };
  render = () => {
    let price = this.props.price ? this.props.price.toString() : undefined;
    if (!price) {
      price = "Offer";
    } else {
      if (price.indexOf("$") < 0) {
        price = "$" + price;
      }
    }

    return (
      <ListItem className="ad-item" onClick={this.clicked}>
        <Avatar className="image">temp</Avatar>
        <div className="itemInfo">
          <span className="itemName">{this.props.name}</span>
          <span className="category">
            in <i>{this.props.category}</i>
          </span>
          <span className="poster">
            {" "}
            Posted By: {this.props.poster} on {this.props.date}
          </span>
          <div className="price">{price}</div>
        </div>
      </ListItem>
    );
  };
}

export default Ad;

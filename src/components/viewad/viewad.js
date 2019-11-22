import React from "react";
import {
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select
} from "@material-ui/core";
import Axios from "axios";
import qs from "qs";

/**
 * ViewAd Component
 */
class ViewAd extends React.Component {
  constructor() {
    super();
    this.state = {
      ad: null
    };
  }

  componentDidMount = async () => {
    this.getAd();
  };

  getAd = async () => {
    let result = await Axios({
      method: "GET",
      url: `http://localhost:3000/user/adview/${this.props.ad}`,
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    });
    this.setState({ ad: result.data.data[0] });
  };

  getPrice = price => {
    price += "";
    if (price.indexOf("$") < 0) {
      return "$" + price;
    }
    return price;
  };

  render = () => {
    if (!this.state.ad) {
      return (
        <div className="component">
          <h1 className="welcome"> Loading Ad...</h1>
        </div>
      );
    }
    return (
      <div className="component">
        <h1 className="welcome"> Viewing Ad</h1>
        <h3 className="adData">
          <span className="adHeader"> Name:</span>{" "}
          <span className="adInfo">{this.state.ad.name}</span>{" "}
        </h3>
        <h3 className="adData">
          <span className="adHeader"> Category:</span>{" "}
          <span className="adInfo">{this.state.ad.category}</span>
        </h3>
        <h3 className="adData">
          <span className="adHeader"> Description:</span>{" "}
          <span className="adInfo">{this.state.ad.description}</span>
        </h3>
        <h3 className="adData">
          <span className="adHeader"> Price:</span>{" "}
          <span className="adInfo">{this.getPrice(this.state.ad.price)}</span>
        </h3>

        <Button variant="outlined"> Send Email</Button>
      </div>
    );
  };
}

export default ViewAd;

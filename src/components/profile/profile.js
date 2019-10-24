import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/List";
import Axios from "axios";
import Ad from "../ad/ad";
import { TextField, Button } from "@material-ui/core";

/**
 * Profile Component
 */
class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      city: "",
      phone: "",
      postal: "",
      address: ""
    };
  }

  handleChange = evt => {
    let field = evt.target.name;
    let val = evt.target.value;
    let state = {};
    state[field] = val;
    this.setState(state);
    console.log("state", this.state);
  };

  saveProfile = async () => {};

  render = () => {
    return (
      <div className="component">
        <h1 className="welcome">Your Profile</h1>
        <TextField
          name="email"
          title="Email"
          label="Email"
          onChange={this.handleChange}
        ></TextField>
        <TextField
          name="city"
          title="City"
          label="City"
          onChange={this.handleChange}
        ></TextField>
        <TextField
          name="postal"
          title="Postal Code"
          label="Postal Code"
          onChange={this.handleChange}
        ></TextField>
        <TextField
          name="phone"
          title="Phone Number"
          label="Phone Number"
          onChange={this.handleChange}
        ></TextField>
        <TextField
          name="address"
          title="Address"
          label="Address"
          onChange={this.handleChange}
        ></TextField>
        <Button variant="outlined">Save</Button>
      </div>
    );
  };
}

export default Profile;

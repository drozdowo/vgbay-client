import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/List";
import Axios from "axios";
import Ad from "../ad/ad";
import "./profile.css";
import { TextField, Button, Modal } from "@material-ui/core";

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
      postalcode: "",
      address: "",
      data: {},
      showModal: false,
      modalText: ""
    };
  }

  open = () => {
    return this.state.showModal;
  };

  handleClose = () => {
    this.setState({ showModal: false });
  };

  getProfileInfo = async () => {
    let token = localStorage.getItem("token");
    if (!token) {
      return null;
    }
    let profile = await Axios.get("http://localhost:3000/user/getmyprofile", {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log(profile);
    if (profile.status === 200) {
      if (profile.data.dataType === "profile") {
        this.setState({
          data: profile.data.data
        });
      } else {
        console.log("error invalid datatype from backend");
      }
    }
  };

  componentWillMount = async () => {
    //make call to backend and get our profile information to display
    this.getProfileInfo();
  };

  handleChange = evt => {
    let field = evt.target.name;
    let val = evt.target.value;
    let state = {};
    state[field] = val;
    this.setState(state);
    console.log("state", this.state);
  };

  saveProfile = async () => {
    let res = await Axios.post(
      "http://localhost:3000/user/updatemyprofile",
      {
        email: this.state.email,
        postalcode: this.state.postalcode,
        city: this.state.city,
        address: this.state.address,
        phone: this.state.phone
      },
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    );

    if (res.status === 200) {
      this.setState({
        modalText: "Successfully updated profile",
        showModal: true
      });
      this.getProfileInfo();
    } else {
      this.setState({
        modalText: "There was an error - " + res.data.data,
        showModal: true
      });
    }
  };

  render = () => {
    let modal;
    if (this.state.showModal) {
      modal = (
        <Modal open={true} onClose={this.handleClose}>
          <div className="modaldiv">{this.state.modalText}</div>
        </Modal>
      );
    }
    return (
      <div className="component">
        {modal}
        <h1 className="welcome">Your Profile</h1>
        <div className="profilePage">
          <div className="current">
            <h1> Current Information </h1>
            <span>
              <b>
                <u>Email:</u>
              </b>{" "}
              {this.state.data.email}
            </span>
            <span>
              <b>
                <u>City:</u>
              </b>{" "}
              {this.state.data.city}
            </span>
            <span>
              <b>
                <u>Postal Code:</u>
              </b>{" "}
              {this.state.data.postalcode}
            </span>
            <span>
              <b>
                <u>Phone Number:</u>
              </b>{" "}
              {this.state.data.phone}
            </span>
            <span>
              <b>
                <u>Address:</u>
              </b>{" "}
              {this.state.data.address}
            </span>
          </div>
          <div className="update">
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
              name="postalcode"
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
            <Button variant="outlined" onClick={this.saveProfile}>
              Save
            </Button>
          </div>
        </div>
      </div>
    );
  };
}

export default Profile;

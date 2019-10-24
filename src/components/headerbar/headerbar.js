import React from "react";
import ReactDOM from "react-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import "./headerbar.css";

class HeaderBar extends React.Component {
  render = () => {
    let username;
    let bar;

    if (!this.props.user || !this.props.user.username) {
      bar = (
        <div>
          <Button
            height="100%"
            className="button"
            onClick={() => {
              this.props.setActiveComponent("Signup");
            }}
          >
            Sign Up
          </Button>
          <Button
            className="button"
            height="100%"
            onClick={() => {
              this.props.setActiveComponent("Login");
            }}
          >
            Log In
          </Button>
        </div>
      );
    } else {
      //we're logged in, and we have  a user object.
      username = this.props.user.username;
      bar = (
        <span>
          Logged in as {username}
          <Button
            className="button"
            onClick={() => {
              this.props.setActiveComponent("Profile");
            }}
          >
            Profile
          </Button>
          <Button
            className="button"
            onClick={() => {
              this.props.setActiveComponent("Search");
            }}
          >
            Search Ads
          </Button>
          <Button
            className="button"
            onClick={() => {
              this.props.setActiveComponent("Login");
            }}
          >
            Post Ad
          </Button>
          <Button
            className="button"
            onClick={() => {
              this.props.setActiveComponent("Login");
            }}
          >
            Messages
          </Button>
          <Button
            className="button"
            onClick={() => {
              this.props.onLogout();
            }}
          >
            Log Out
          </Button>
        </span>
      );
    }

    return (
      <AppBar position="relative">
        <Toolbar>
          <Button
            className="button"
            onClick={() => {
              this.props.setActiveComponent("Home");
            }}
          >
            🏠 vgBay
          </Button>
          <div className="spacer" />
          {bar}
        </Toolbar>
      </AppBar>
    );
  };
}

export default HeaderBar;

import React from "react";
import ReactDOM from "react-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import "./headerbar.css";

class HeaderBar extends React.Component {
  render = () => {
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
        </Toolbar>
      </AppBar>
    );
  };
}

export default HeaderBar;

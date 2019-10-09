import React from "react";
import ReactDOM from "react-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import "./headerbar.css";

class HeaderBar extends React.Component {
  render = () => {
    return (
      <AppBar>
        <Toolbar className="toolbar" position="fixed">
          <Button
            className="button"
            onClick={() => {
              this.props.setActiveComponent("Signup");
            }}
          >
            Sign Up
          </Button>
          <Button
            className="button"
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

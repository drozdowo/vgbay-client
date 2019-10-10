import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./signup.css";

class Signup extends React.Component {
  render = () => {
    return (
      <div className="component">
        <h1> Sign Up: </h1>
        <TextField className="textinput" label="Username" name="Username" />
        <TextField className="textinput" label="Password" name="Password" />
        <Button variant="outlined" className="button2">
          {" "}
          Sign Up{" "}
        </Button>
      </div>
    );
  };
}

export default Signup;

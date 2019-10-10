import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./signup.css";
import Axios from "axios";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }
  signUp = async () => {
    let user = this.state.username;
    let pass = this.state.password; //TODO: add some form of encryption to passwords
    let res = await Axios.post("http://localhost:3000/user/signup", {
      username: user,
      password: pass
    });
    console.log("res", res);
  };

  inputUpdate = evt => {
    let field = evt.target.name;
    let val = evt.target.value;
    let state = {};
    state[field] = val;
    this.setState(state);
    console.log(this.state);
  };

  render = () => {
    return (
      <div className="component">
        <h1> Sign Up: </h1>
        <TextField
          className="textinput"
          label="Username"
          name="username"
          onChange={this.inputUpdate}
        />
        <TextField
          className="textinput"
          label="Password"
          type="password"
          name="password"
          onChange={this.inputUpdate}
        />
        <Button variant="outlined" className="button2" onClick={this.signUp}>
          {" "}
          Sign Up{" "}
        </Button>
      </div>
    );
  };
}

export default Signup;

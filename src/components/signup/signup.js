import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import "./signup.css";
import Axios from "axios";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      showModal: false,
      modalHeader: "",
      modalText: ""
    };
  }
  signUp = async () => {
    let user = this.state.username;
    let pass = this.state.password; //TODO: add some form of encryption to passwords
    let res = await Axios.post("http://localhost:3000/user/signup", {
      username: user,
      password: pass
    });
    console.log(res);
    this.setState({
      showModal: true,
      modalHeader: "Sign Up",
      modalText: res.data
    });
  };

  inputUpdate = evt => {
    let field = evt.target.name;
    let val = evt.target.value;
    let state = {};
    state[field] = val;
    this.setState(state);
    console.log(this.state);
  };

  open = () => {
    return this.state.showModal;
  };

  handleClose = () => {
    this.setState({ showModal: false });
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

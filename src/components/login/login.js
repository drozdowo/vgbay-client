import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Axios from "axios";
import "./login.css";

class Login extends React.Component {
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
  logIn = async () => {
    let user = this.state.username;
    let pass = this.state.password; //TODO: add some form of encryption to passwords
    let res = await Axios.post("http://localhost:3000/user/login", {
      username: user,
      password: pass
    });
    console.log(res);
    this.setState({
      showModal: true,
      modalHeader: "Log in",
      modalText: res.data
    });
  };

  inputUpdate = evt => {
    let field = evt.target.name;
    let val = evt.target.value;
    let state = {};
    state[field] = val;
    this.setState(state);
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
        <h1> Log In: </h1>
        <TextField
          className="textinput"
          label="Username"
          name="username"
          onChange={this.inputUpdate}
        />
        <TextField
          className="textinput"
          label="Password"
          name="password"
          type="password"
          onChange={this.inputUpdate}
        />
        <Button variant="outlined" className="button2" onClick={this.logIn}>
          {" "}
          Login{" "}
        </Button>
      </div>
    );
  };
}

export default Login;

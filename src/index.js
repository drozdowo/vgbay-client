import React from "react";
import ReactDOM from "react-dom";
import HeaderBar from "./components/headerbar/headerbar";
import Home from "./components/home/home";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";

import "./index.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeComponent: "Home",
      user: {}
    };
  }

  componentWillUpdate = () => {
    console.log("update home");
  };

  onLogin = (username, token) => {
    console.log("fired login");
    let userObj = {
      username,
      token
    };
    this.setState({ user: userObj });
  };

  swapActiveComponent = newComponent => {
    this.setState({ activeComponent: newComponent });
  };

  render() {
    let comp;
    if (this.state.activeComponent === "Home") {
      comp = <Home />;
    }
    if (this.state.activeComponent === "Login") {
      comp = <Login onLogin={this.onLogin} />;
    }
    if (this.state.activeComponent === "Signup") {
      comp = <Signup />;
    }
    return (
      <div className="main">
        <HeaderBar
          setActiveComponent={this.swapActiveComponent}
          user={this.state.user}
        />
        {comp}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

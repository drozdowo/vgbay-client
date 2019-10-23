import React from "react";
import ReactDOM from "react-dom";
import HeaderBar from "./components/headerbar/headerbar";
import Home from "./components/home/home";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import Search from "./components/search/search";

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

  componentWillMount = () => {
    if (localStorage.getItem("username") && localStorage.getItem("token")) {
      //user is already logged in
      console.log("logged in");
      this.onLogin(
        localStorage.getItem("username"),
        localStorage.getItem("token")
      );
    }
  };

  onLogin = (username, token) => {
    let userObj = {
      username,
      token
    };
    this.setState({ user: userObj });
  };

  onLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    this.setState({ user: {} });
  };

  swapActiveComponent = newComponent => {
    this.setState({ activeComponent: newComponent });
  };

  render() {
    let comp;
    if (this.state.activeComponent === "Home") {
      comp = <Home />;
    }
    if (this.state.activeComponent === "Search") {
      comp = <Search />;
    }
    if (this.state.activeComponent === "Login") {
      comp = (
        <Login
          onLogin={this.onLogin}
          setActiveComponent={this.swapActiveComponent}
        />
      );
    }
    if (this.state.activeComponent === "Signup") {
      comp = <Signup />;
    }
    return (
      <div className="main">
        <HeaderBar
          setActiveComponent={this.swapActiveComponent}
          user={this.state.user}
          onLogout={this.onLogout}
        />
        {comp}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

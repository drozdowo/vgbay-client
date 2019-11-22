import React from "react";
import ReactDOM from "react-dom";
import HeaderBar from "./components/headerbar/headerbar";
import Home from "./components/home/home";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import Search from "./components/search/search";
import PostAd from "./components/postad/postad";
import ViewAd from "./components/viewad/viewad";

import "./index.css";
import Profile from "./components/profile/profile";
import MyAd from "./components/myad/myad";

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
    if (this.state.activeComponent.indexOf("ad:") > -1) {
      //viewing an ad
      let adId = this.state.activeComponent.split(":")[1];
      comp = <ViewAd ad={adId} />;
    }
    if (this.state.activeComponent === "Home") {
      comp = <Home />;
    }
    if (this.state.activeComponent === "Search") {
      comp = <Search />;
    }
    if (this.state.activeComponent === "Profile") {
      comp = <Profile />;
    }
    if (this.state.activeComponent === "PostAd") {
      comp = <PostAd />;
    }
    if (this.state.activeComponent === "MyAd") {
      comp = <MyAd />;
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

ReactDOM.render(
  <App
    ref={App => {
      window.App = App;
    }}
  />,
  document.getElementById("root")
);

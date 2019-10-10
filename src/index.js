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
      activeComponent: "Home"
    };
  }

  swapActiveComponent = newComponent => {
    this.setState({ activeComponent: newComponent });
  };

  render() {
    let comp;
    if (this.state.activeComponent === "Home") {
      comp = <Home />;
    }
    if (this.state.activeComponent === "Login") {
      comp = <Login />;
    }
    if (this.state.activeComponent === "Signup") {
      comp = <Signup />;
    }
    return (
      <div className="main">
        <HeaderBar setActiveComponent={this.swapActiveComponent} />
        {comp}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

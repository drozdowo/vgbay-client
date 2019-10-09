import React from "react";
import ReactDOM from "react-dom";
import HeaderBar from "./components/headerbar/headerbar";
import Home from "./components/home/home";
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
    console.log("swapping to: ", newComponent);
  };

  render() {
    let comp;
    if (this.state.activeComponent === "Home") {
      comp = <Home />;
    }
    return (
      <div className="main">
        <div className="header">
          <HeaderBar setActiveComponent={this.swapActiveComponent} />
        </div>
        {comp}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";
import HeaderBar from "./components/headerbar";
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="header">
          <HeaderBar />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

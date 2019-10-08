import React from "react";
import ReactDOM from "react-dom";
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import './index.css'

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="header">
          <AppBar className="header"> 
            <Toolbar position="static">
              <Button> test </Button>
            </Toolbar>
          </AppBar>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

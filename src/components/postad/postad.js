import React from "react";
import { TextField, Button } from "@material-ui/core";

/**
 * PostAd Component
 */
class PostAd extends React.Component {
  constructor() {
    super();
    this.state = {
      category: "",
      name: "",
      description: "",
      price: ""
    };
  }

  handleChange = evt => {
    let field = evt.target.name;
    let val = evt.target.value;
    let state = {};
    state[field] = val;
    this.setState(state);
    console.log("state", this.state);
  };

  render = () => {
    return (
      <div className="component">
        <h1 className="welcome"> Post a new ad </h1>
        <TextField
          name="category"
          title="Category"
          label="Category"
          variant="outlined"
          onChange={this.handleChange}
        ></TextField>
        <TextField
          name="name"
          title="Name"
          label="Name"
          variant="outlined"
          onChange={this.handleChange}
        ></TextField>
        <TextField
          name="description"
          title="Description"
          label="Description"
          variant="outlined"
          rows="4"
          rowsMax="4"
          onChange={this.handleChange}
          multiline
        ></TextField>
        <TextField
          name="category"
          title="Category"
          label="Category"
          variant="outlined"
          onChange={this.handleChange}
        ></TextField>
        <Button variant="outlined"> Post Ad </Button>
      </div>
    );
  };
}

export default PostAd;

import React from "react";
import {
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select
} from "@material-ui/core";
import Axios from "axios";

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
      price: "",
      categories: []
    };
  }

  componentWillMount = async () => {
    this.getCategories();
  };

  postAd = async () => {
    let result = await Axios.post(
      "http://localhost:3000/user/createad",
      {
        category: this.state.categories[this.state.category + 1].category,
        name: this.state.name,
        description: this.state.description,
        price: this.state.price
      },
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    );
    console.log(result);
  };

  getCategories = async () => {
    let result = await Axios.get("http://localhost:3000/search/categories");
    if (result.status === 200 && result.data.dataType == "categories") {
      this.setState({ categories: result.data.data });
    }
  };

  handleChange = evt => {
    let field = evt.target.name;
    let val = evt.target.value;
    let state = {};
    state[field] = val;
    this.setState(state);
  };

  formatCategories = () => {
    let categories = this.state.categories;
    let menuItems = [];
    for (let i = 0; i < categories.length; i++) {
      let categoryObj = categories[i];
      menuItems.push(
        <MenuItem key={categoryObj.id} value={categoryObj.id}>
          {categoryObj.category}
        </MenuItem>
      );
    }
    return menuItems;
  };

  setCategory = evt => {
    console.log(evt.target);
    this.setState({ category: evt.target.value });
  };

  render = () => {
    return (
      <div className="component">
        <h1 className="welcome"> Post a new ad </h1>
        <FormControl className="categorySelect">
          <InputLabel id="label">Category</InputLabel>
          <Select
            id="demo-simple-select"
            value={this.state.category}
            onChange={this.setCategory}
          >
            {this.formatCategories()}
          </Select>
        </FormControl>
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
          name="price"
          title="Price"
          label="Price"
          variant="outlined"
          onChange={this.handleChange}
        ></TextField>
        <Button variant="outlined" onClick={this.postAd}>
          {" "}
          Post Ad{" "}
        </Button>
      </div>
    );
  };
}

export default PostAd;

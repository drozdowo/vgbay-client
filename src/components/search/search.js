import React from "react";
import {
  Input,
  Button,
  FormControl,
  MenuItem,
  InputLabel,
  Select
} from "@material-ui/core";
import Ad from "../ad/ad";
import Axios from "axios";

/**
 * Home Component
 * This will just display some news for the users, and inform them of the website.
 */
class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      term: "",
      ads: [],
      city: null,
      category: null,
      cities: [],
      categories: []
    };
  }
  doSearch = async () => {
    let res = await Axios.post("http://localhost:3000/search/searchterm", {
      term: this.state.term
    });
    if (res.status == 200) {
      if (res.data.dataType == "search") {
        this.setState({
          ads: this.dataToListItems(res.data.data)
        });
      }
    }
  };
  typed = async evt => {
    let val = evt.target.value;
    this.setState({
      term: val
    });
  };

  componentDidMount = () => {
    this.getFilterData();
  };

  getFilterData = async () => {
    let cities = await Axios.get("http://localhost:3000/search/getcities");
    let categories = await Axios.get("http://localhost:3000/search/categories");
    if (cities.status === 200 && categories.status === 200) {
      if (
        cities.data.dataType === "cities" &&
        categories.data.dataType === "categories"
      ) {
        this.setState({ cities: cities, categories: categories });
      }
    } else {
      console.log("err getting data");
    }
  };

  dataToListItems = data => {
    let ads = [];
    data.map(item => {
      let listItem = (
        <Ad
          key={item.id}
          itemId={item.id}
          name={item.name}
          price={item.price}
          poster={item.poster}
          date={item.datePosted}
          category={item.category}
          setActiveComponent={this.props.setActiveComponent}
        />
      );
      ads.push(listItem);
    });
    return ads;
  };

  formatCities = () => {
    let cities = this.state.cities;
    let menuItems = [];
    for (let i = 0; i < cities.length; i++) {
      let cityObj = cities[i];
      menuItems.push(
        <MenuItem key={cityObj.city_id} value={cityObj.city_id}>
          {cityObj.city_name}
        </MenuItem>
      );
    }
    return menuItems;
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

  render = () => {
    let comp;
    if (this.state.ads) {
      if (this.state.ads.length > 0)
        comp = (
          <div>
            <h1 className="welcome"> Results </h1>
            <div className="adHolder">{this.state.ads}</div>
          </div>
        );
    }
    return (
      <div className="component">
        <h1 className="welcome"> Search for Ads </h1>
        <Input onChange={this.typed}></Input>
        <Button variant="outlined" onClick={this.doSearch}>
          {" "}
          Search{" "}
        </Button>
        <h3 className="welcome"> Filters </h3>
        <div className="filters">
          <FormControl>
            <InputLabel id="label">City</InputLabel>
            <Select
              name="City"
              title="City"
              id="demo-simple-select"
              value={this.state.city}
              onChange={this.setCity}
            >
              {this.formatCities()}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="label">Category</InputLabel>
            <Select
              name="Category"
              title="Category"
              id="demo-simple-select"
              value={this.state.category}
              onChange={this.setCategory}
            >
              {this.formatCategories()}
            </Select>
          </FormControl>
        </div>
        {comp}
      </div>
    );
  };
}

export default Search;

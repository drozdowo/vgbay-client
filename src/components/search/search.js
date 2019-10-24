import React from "react";
import { Input, Button, ListItem } from "@material-ui/core";
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
      ads: []
    };
  }
  doSearch = async () => {
    let res = await Axios.post("http://localhost:3000/search/searchterm", {
      term: this.state.term
    });
    if ((res.status = 200)) {
      if (res.data.dataType == "search") {
        console.log("got ", res.data.data);
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
        {comp}
      </div>
    );
  };
}

export default Search;

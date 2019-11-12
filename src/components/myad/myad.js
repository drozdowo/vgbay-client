import React from "react";
import Ad from "../ad/ad";
import Axios from "axios";

class MyAd extends React.Component {
  constructor() {
    super();
    this.state = {
      ads: []
    };
  }

  componentDidMount = () => {
    this.getMyAds();
  };

  getMyAds = async () => {
    let res = await Axios.get("http://localhost:3000/user/myads", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    });
    if ((res.status = 200)) {
      if (res.data.dataType == "myads") {
        this.setState({
          ads: this.dataToListItems(res.data.data)
        });
      }
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
        <h1 className="welcome"> Your Ads </h1>
        {comp}
      </div>
    );
  };
}

export default MyAd;

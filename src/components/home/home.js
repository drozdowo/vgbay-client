import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/List";
import Axios from "axios";
import Ad from "../ad/ad";
import Deal from "../deal/deal";

/**
 * Home Component
 */
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      ads: []
    };
  }

  getAds = async () => {
    let res = await Axios.get("http://localhost:3000/search/homepageads");
    console.log(res);
    if (res.status == 200) {
      if (res.data.dataType == "homepageads") {
        let ads = this.dataToListItems(res.data.data);
        this.setState({ ads: ads });
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

  componentDidMount = async () => {
    this.getAds();
  };

  componentWillUpdate = () => {
    console.log("update homepage", this.state);
  };

  render = () => {
    let ads;
    if (this.state.ads.length > 0) {
      //ads exist
      ads = this.state.ads;
    }
    return (
      <div className="component">
        <h1 className="welcome">
          Welcome to vgBay - Your go to shop for games!
        </h1>
        <span> Deals: </span>
        <div className="dealBox">
          <Deal
            category="Games (Accounts)"
            name="LEM CS:GO Account"
            percentOff="33"
          />
          <Deal
            category="Games (Boxed)"
            name="Call of Duty: Modern Warfare"
            percentOff="10"
          />
          <Deal category="Consoles" name="Nintendo Switch" percentOff="20" />
        </div>
        <span>New Ads:</span>
        <div className="adHolder">{ads}</div>
      </div>
    );
  };
}

export default Home;

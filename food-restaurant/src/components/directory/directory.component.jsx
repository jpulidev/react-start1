import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "Pulled Pork",
          imageUrl: "https://source.unsplash.com/random/?food,pork",
          id: 1,
          linkUrl: "hats",
        },
        {
          title: "Brisket",
          imageUrl: "https://source.unsplash.com/random/?food,brisket",
          id: 2,
          linkUrl: "",
        },
        {
          title: "Fries",
          imageUrl: "https://source.unsplash.com/random/?food,fries",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "Burgers",
          imageUrl: "https://source.unsplash.com/random/?food,burger",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "Desserts",
          imageUrl: "https://source.unsplash.com/random/?food,desserts",
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}
export default Directory;

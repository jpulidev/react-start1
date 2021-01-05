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
          imageUrl: "https://source.unsplash.com/random/?pork",
          id: 1,
          linkUrl: "shop/hats",
        },
        {
          title: "Brisket",
          imageUrl: "https://source.unsplash.com/random/?brisket",
          id: 2,
          linkUrl: "shop/hats",
        },
        {
          title: "Fries",
          imageUrl: "https://source.unsplash.com/random/?fries",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "Burgers",
          imageUrl: "https://source.unsplash.com/random/?burger",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "Desserts",
          imageUrl: "https://source.unsplash.com/random/?fruit",
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

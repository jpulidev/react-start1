import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "Pull Pork",
          imageUrl: "https://images.unsplash.com/photo-1589534754338-0f179a88edce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          id: 1,
          linkUrl: "hats",
        },
        {
          title: "Brisket",
          imageUrl: "https://images.unsplash.com/photo-1592894869086-f828b161e90a?ixlib=rb-1.2.1&auto=format&fit=crop&w=557&q=80",
          id: 2,
          linkUrl: "",
        },
        {
          title: "Fries",
          imageUrl: "https://images.unsplash.com/photo-1584378868074-1ebfd5a636c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "Burgers",
          imageUrl: "https://images.unsplash.com/photo-1585730315692-5252e57d4b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=626&q=80",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "Desserts",
          imageUrl: "https://images.unsplash.com/photo-1600239448128-917653c5bf77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
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

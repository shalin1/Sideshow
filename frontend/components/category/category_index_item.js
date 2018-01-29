import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import lodash from 'lodash';

class CategoryIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const categoryName = this.props.category.name;
    this.props.history.push(`/browse/${_.lowerCase(categoryName)}`);
  }

  render() {
    const {
      name,
      description,
      category_image_url
    } = this.props.category;

    const categoryImage = {
      backgroundImage: `url(${category_image_url})`
    };

    return (
      <div className="category-index-item" onClick={this.handleClick}>
        <div className="category-index-item-background" style={categoryImage}>
          <span className="category-index-item-name">{name}</span>
          <br />
          <span className="category-index-item-description">{description}</span>
        </div>
      </div>
    );
  }
}

export default withRouter(CategoryIndexItem);

import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class CategoryIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const categoryId = this.props.category.id;
    this.props.history.push(`/categories/${categoryId}`);
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
      <article className="category-index-item-container" onClick={this.handleClick}>
        <div className="category-index-item-background" style={categoryImage}>
          {name}
          {description}
        </div>
      </article>
    );
  }
}

export default withRouter(CategoryIndexItem);

import React from 'react'
import lodash from 'lodash';

class CategoryLink extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(categoryName) {
    this.props.fetchCategory(categoryName);
    this.props.history.push(`/browse/${_.lowerCase(categoryName)}`)
  }

  render() {
    const category = this.props.category;

    return(
      <button onClick={(e) => this.handleClick(category.name, e)} key={category.id}>
        <li key={category.id}>
          {category.name}
        </li>
      </button>
    );
  }
}

export default CategoryLink;

import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class BrowseFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(categoryName) {
    this.props.fetchCategory(categoryName);
    this.props.history.push(`/browse/${categoryName}`)
  }

  render() {
    let categoryLinks
    if (!this.props.categories) {
      return(<h1>loading...</h1>)
    } else {

      categoryLinks = this.props.categories.map( category => (
        <button onClick={(e) => this.handleClick(category.name, e)} key={category.id}>
          <li key={category.id}>
            {category.name}
          </li>
        </button>
      ))
      categoryLinks.unshift(<li><Link to='/browse'>All Categories</Link></li>)

          }
          {`images/${this.props.image}`}
    return(
      <ul className='browse-filter-container'>
        <li>
          <h1 className='browse-filter-header'>
            CATEGORIES
          </h1>
        </li>
        {categoryLinks}
      </ul>
    )
  }
}

export default BrowseFilters;

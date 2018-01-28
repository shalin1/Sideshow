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

  handleClick() {
    console.log('click detected')

  }

  render() {
    let categoryLinks
    if (!this.props.categories) {
      return(<h1>loading...</h1>)
    } else {
      categoryLinks = this.props.categories.map( category => (
        <Link to={`/browse/${category.name}`} key={category.id}>
          <li>
            {category.name}
          </li>
        </Link>
          ))
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

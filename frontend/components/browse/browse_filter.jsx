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
    debugger
  }

  render() {
    let categoryLinks
    if (!this.props.categories) {
      return(<h1>loading...</h1>)
    } else {
      categoryLinks = this.props.categories.map( category => (
        <Link to='browse' id={category.id}>
          <li>
            #{category.name}
          </li>
        </Link>
      ))
    }

    return(
      <ul className='categoryLinksContainer'>
        {categoryLinks}
      </ul>
    )
  }
}

export default BrowseFilters;

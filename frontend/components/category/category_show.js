import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

class CategoryShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.pageIsLoading();
    this.props.fetchCategory(this.props.match.params.id).then(
      () => this.props.pageFinishedLoading()
    )
    window.scrollTo(0,0);
  }

  render() {
    if (this.props.isLoading) {
      return (
        <li className="loading-container">loading...</li>
      );
    } else {
      categoryEvents = this.props.categories[this.props.match.params.id].events.map( event => (
        <li>{categoryEvents.name}</li>
      ))
      return(<ul>{categoryEvents}</ul>)
    }

  }
};

export default withRouter(CategoryShow);

import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

class CategoryShow extends React.Component {
  constructor(props) {
    super(props);
    const categoryId = this.props.match.params.id
  }

  componentWillMount() {
    this.props.pageIsLoading();
    this.props.fetchCategory(this.props.match.params.id).then(
      () => this.props.pageFinishedLoading()
    )
    window.scrollTo(0,0);
  }

  render() {
    if (this.props.loading) {
      console.log('loading...');
      return (
        <h1>loading....</h1>
      );
    } else {
      let events = this.props.categories.categoryId.events;
      console.log (`here's ${events}`)
      return(<h1>foo</h1>)
    }

  }
};

export default withRouter(CategoryShow);

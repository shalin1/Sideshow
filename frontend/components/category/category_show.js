import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import moment from 'moment';

class CategoryShow extends React.Component {
  componentWillMount() {
    this.props.fetchCategory(this.props.categoryId).then(console.log('events fetched'));
  }

  render() {
    let category_show_items;
    if (!this.props.entities.events) {
      category_show_items = <h1>loading...</h1>
    } else {
      console.log('category.show working!')
      category_show_items = <h1>Console show render is here!'</h1>;
    }

    return category_show_items
  }
};

export default (CategoryShow);

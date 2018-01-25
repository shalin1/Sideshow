import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import moment from 'moment';

class CategoryShow extends React.Component {
  componentWillMount() {
    this.props.fetchCategory(this.props.categoryId);
  }

  render() {
    if (!this.props.events) {
      category_show_items = <h1>loading...</h1>
    } else {
      let category_show_item;
    }
  }

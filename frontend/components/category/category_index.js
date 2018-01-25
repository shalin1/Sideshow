import React from 'react';
import CategoryIndexItem from './category_index_item';

class CategoryIndex extends React.Component {
  componentWillMount() {
    this.props.fetchCategories();
  }

  render() {
    if (this.props.categories) {
      const category_index_items = this.props.categories.map( event => (
        <CategoryIndexItem
          category={category}
          key={category.id}
        />
      ));
    }

    return (
      <section className="category-container">
        <div className="category-header">
          Browse by Top Categories
        </div>

        <section>
          {category_index_items}
        </section>
      </section>
    )
  }
}
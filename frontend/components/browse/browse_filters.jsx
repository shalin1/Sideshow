import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import lodash from 'lodash';
import CategoryLink from '../category/category_link';

class BrowseFilters extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filter: ''
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(categoryName) {
		this.props.fetchCategory(categoryName);
		this.props.history.push(`/browse/${_.lowerCase(categoryName)}`);
	}

	render() {
		let categoryLinks;
		if (!this.props.categories) {
			return <h1 className="loading-container" />;
		} else {
			categoryLinks = this.props.categories.map(category => (
				<li key={category.id}>
					<CategoryLink
						category={category}
						fetchCategory={this.props.fetchCategory}
						history={this.props.history}
						key={category.id}
					/>
				</li>
			));
			categoryLinks.unshift(
				<li key="first">
					<Link to="/browse">All Categories</Link>
				</li>
			);
		}
		{
			`images/${this.props.image}`;
		}
		return (
			<ul className="browse-filter-container">
				<li>
					<h1 className="browse-filter-header">CATEGORIES</h1>
				</li>
				{categoryLinks}
			</ul>
		);
	}
}

export default BrowseFilters;

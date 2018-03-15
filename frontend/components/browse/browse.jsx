import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import BrowseItem from './browse_item';
import BrowseFilters from './browse_filters';
import lodash from 'lodash';

class Browse extends React.Component {
	componentWillMount() {
		if (this.props.match.params.name) {
			this.props.fetchCategory(this.props.match.params.name);
		} else {
			this.props.fetchEvents();
		}
		this.props.fetchCategories();
	}

	render() {
		let filteredEvents;
		if (!this.props.events) {
			filteredEvents = <h1 className="filteredEvents">loading...</h1>;
		} else {
			filteredEvents = this.props.events.map(event => (
				<BrowseItem
					event={event}
					key={event.id}
					currentUser={this.props.currentUser}
					removeBookmark={this.props.removeBookmark}
					addBookmark={this.props.addBookmark}
					fetchCategory={this.props.fetchCategory}
					history={this.props.history}
				/>
			));
		}
		let category = 'All';
		let browseFilters;
		if (!this.props.categories) {
			browseFilters = <h1>loading...</h1>;
		} else {
			browseFilters = (
				<BrowseFilters
					categories={this.props.categories}
					fetchCategory={this.props.fetchCategory}
					history={this.props.history}
				/>
			);
		}
		if (this.props.match.params.name) {
			category = _.capitalize(this.props.match.params.name);
		}

		return (
			<div className="browse-container">
				<section>{browseFilters}</section>
				<section className="browse-event-list">
					<h1 className="browse-headline">{category} events in Brooklyn, NY</h1>
					{filteredEvents}
				</section>
			</div>
		);
	}
}

export default withRouter(Browse);

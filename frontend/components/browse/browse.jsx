import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import EventBrowseItem from './browse_item';
import BrowseFilters from './browse_filter';

class Browse extends React.Component {
  componentWillMount(){
    this.props.fetchEvents();
    this.props.fetchCategories();
  }

  render() {
    let filteredEvents;
    if (!this.props.events) {
      filteredEvents = <h1 className='filteredEvents'>loading...</h1>
    } else {
      filteredEvents = this.props.events.map( event => (
        <EventBrowseItem
          event={event}
          key={event.id}
          currentUser={this.props.currentUser}
          removeBookmark={this.props.removeBookmark}
          addBookmark={this.props.addBookmark}
        />
      ));
    }

    let browseFilters;
    if(!this.props.categories) {
      browseFilters = <h1>loading...</h1>
    } else {
      browseFilters = <BrowseFilters categories={this.props.categories} />;
    }


    return(
    <div className="browse-container">
      <section className='browse-filter-container'>
        {browseFilters}
      </section>
      <section className="event-browse-grid">
        {filteredEvents}
      </section>
    </div>
    );

  }

}

export default Browse;

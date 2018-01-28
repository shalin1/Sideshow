import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import BrowseItem from './browse_item';
import BrowseFilters from './browse_filters';

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
        <BrowseItem
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
      <section>
        {browseFilters}
      </section>
      <section className="browse-event-list">
        {filteredEvents}
      </section>
    </div>
    );
  }
}

export default Browse;

import React from 'react';
import EventBrowseItem from './browse_item';


class Browse extends React.Component {
  componentWillMount(){
    this.props.fetchEvents()
  }

  render() {
    let filteredEvents;
    if (!this.props.events) {
      filteredEvents = <h1>loading...</h1>
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

    return(
      <section className="event-browse-grid">
        {filteredEvents}
      </section>
    );
  }

}

export default Browse;

import React from 'react';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {
  componentWillMount() {
    this.props.fetchEvents();
  }

  render () {
    
    let event_index_items;
    if (!this.props.events) {
      event_index_items = <h1>loading....</h1>;
    } else {
      event_index_items = this.props.events.map( event => (
        <EventIndexItem
          event={event}
          key={event.id}
          currentUser={this.props.currentUser}
          removeBookmark={this.props.removeBookmark}
          addBookmark={this.props.addBookmark}
        />
    ));
    }

    return (
      <section className="home-container">
        <div className="home-hero-image">
        </div>
        <section className="home-content">
          <article className="event-index-search-box">

            <h1 className="font-header-search-box">Find your next experience</h1>
          </article>
          <article className="event-index-intro">
            <h3 className="">Events for you in Brooklyn, NY, United States</h3>
          </article>
          <section className="event-index-grid">
            {event_index_items}
          </section>
        </section>
      </section>
    );
  }
}

export default EventIndex;

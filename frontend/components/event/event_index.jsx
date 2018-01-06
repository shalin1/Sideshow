import React from 'react';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {
  componentWillMount() {
    this.props.fetchEvents();
  }


  render () {
    let content;
    if (!this.props.events) {
      content = <h1>loading....</h1>;
    } else {
      content = this.props.events.map( event => (
        <EventIndexItem
          event={event}
          key={event.id}
        />
    ));
    }

    return (
      <section className="home-flex-box">
        <div className="home-hero-image"></div>

        <section className="home-content">

          <article className="welcome-box">
            <h1 className="welcome-text">Find your next experience</h1>
          </article>

          <article className="ui-text-box">
            <h3 className="ui-text">Events for you in Brooklyn, NY</h3>
          </article>

          <section className="event-index-grid">
            {content}
          </section>

        </section>

    </section>
    );
  }
}

export default EventIndex;

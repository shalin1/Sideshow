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
      <div>
        <div className="home-hero-image">
          <img src="https://cdn.glitch.com/a5121e34-96b3-4a70-8227-040c51e64fae%2Fbg.jpg?1509627430438" />
        </div>
        <div className="welcome-box">
          <h1 className="homepage-header">Find your next experience</h1>
        </div>
        <div className="ui-text-subhead">
          Events for you in Brooklyn, NY
        </div>
        <section className="cards">
          {content}
        </section>
      </div>
    );
  }
}

export default EventIndex;

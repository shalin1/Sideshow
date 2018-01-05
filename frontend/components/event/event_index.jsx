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
        <section class="leading">
        </section>
        <span className="ui-text-subhead">Events for you in Brooklyn, NY </span>
          {content}
      </div>
    );
  }
}

export default EventIndex;

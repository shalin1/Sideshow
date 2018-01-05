import React from 'react';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {
  componentWillMount() {
    this.props.fetchEvents();
  }

  render () {
    return (
      <div>
        <h1>Events: </h1>
        {
          this.props.events.map( event => (
            <EventIndexItem
              event={event}
              key={event.id}
            />
          ))
        }
      </div>
    );
  }
}

export default EventIndex;

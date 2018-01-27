import React from 'react';
import EventIndexItem from './event_index_item';

class Browse extends React.Component {
  componentWillMount(){
    this.props.fetchEvents()
  }
}

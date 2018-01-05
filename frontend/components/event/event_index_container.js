import { connect } from 'react-redux';

import EventIndex from './event_index';
import { fetchEvents } from '../../actions/event_actions';

const mapStateToProps = state => ({
  events: Object.values(state.entities.events)
});

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents())
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(EventIndex);

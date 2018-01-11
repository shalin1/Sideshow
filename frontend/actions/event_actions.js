import * as APIUtil from '../util/event_api_util';

import { resetErrors } from './error_actions';
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const RECEIVE_EVENT_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_EVENT = "REMOVE_EVENT";
import { Route } from 'react-router-dom';

const receiveEvents = events => {

  return {
    type: RECEIVE_EVENTS,
    events
  };
};

const receiveErrors = errors => {
  return {
    type: RECEIVE_EVENT_ERRORS,
    errors
  };
};

const receiveEvent = event => {
  return {
    type: RECEIVE_EVENT,
    event
  };
};

const removeEvent = event => {
  return {
    type: REMOVE_EVENT,
    event
  };
};

export const fetchEvents = () => dispatch => (
  APIUtil.fetchEvents().then( events => (
    dispatch(receiveEvents(events))
  ))
);

export const fetchEvent = id => dispatch => (
  APIUtil.fetchEvent(id).then( event => (
    dispatch(receiveEvent(event)))
  )
);

export const createEvent = event => dispatch => (
  APIUtil.createEvent(event).then(event => {
    dispatch(receiveEvent(event));
    return event;
  }, err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const updateEvent = event => dispatch => (
  APIUtil.updateEvent(event).then(event => {
    dispatch(receiveEvent(event));
    return event;
  }, err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const deleteEvent = event => dispatch => (
  APIUtil.deleteEvent(event).then( (event) => (
    dispatch(removeEvent(event))
  ))
);

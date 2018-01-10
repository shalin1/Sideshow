import * as APIUtil from '../util/event_api_util';

import { receiveErrors, resetErrors } from './error_actions';
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
import {Route } from 'react-router-dom';

const receiveEvents = events => ({
  type: RECEIVE_EVENTS,
  events
});

const receiveEvent = event => {
  return {
    type: RECEIVE_EVENT,
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
    return dispatch(receiveEvent(event));
  }
)
);

export const updateEvent = event => dispatch => {
  debugger
  return (
    APIUtil.updateEvent(event).then(event => {
      dispatch(clearErrors());
      return dispatch(receiveEvent(event));
  },
  err => dispatch(receiveErrors(err.responseJSON)))
  );
};

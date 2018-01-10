import * as APIUtil from '../util/event_api_util';

import { resetErrors } from './error_actions';
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const RECEIVE_EVENT_ERRORS = "RECEIVE_ERRORS";
import {Route } from 'react-router-dom';

const receiveEvents = events => ({
  type: RECEIVE_EVENTS,
  events
});

const receiveErrors = errors => ({
  type: RECEIVE_EVENT_ERRORS,
  errors
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
  APIUtil.createEvent(event).then(event => (
    dispatch(receiveEvent(event))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const updateEvent = event => dispatch => (
  APIUtil.updateEvent(event).then(event => (
    dispatch(receiveEvent(event))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

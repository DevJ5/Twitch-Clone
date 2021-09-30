import _ from 'lodash';
import {
  FETCH_STREAMS,
  FETCH_STREAM,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from '../actions/types';

const initialState = {};

const streamReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_STREAMS:
      const newState = { ...state };
      payload.forEach((stream) => (newState[stream.id] = stream));
      return newState;
    case FETCH_STREAM:
      return { ...state, [payload.id]: payload };
    case CREATE_STREAM:
      return { ...state, [payload.id]: payload };
    case EDIT_STREAM:
      return { ...state, [payload.id]: payload };
    case DELETE_STREAM:
      return _.omit(state, payload);
    default:
      return state;
  }
};

export default streamReducer;

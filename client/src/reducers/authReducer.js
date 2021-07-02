import { SIGN_IN, SIGN_OUT } from '../actions/types';

const initialState = { isSignedIn: null, userId: null };

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_IN:
      return { isSignedIn: true, userId: payload };
    case SIGN_OUT:
      return { isSignedIn: false, userId: null };

    default:
      return state;
  }
};

import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { signIn, signOut } from '../actions';

const GoogleAuth = () => {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  const dispatch = useDispatch();

  const auth = useRef('');

  useEffect(() => {
    const onAuthChange = (isSignedIn) => {
      if (isSignedIn) dispatch(signIn(auth.current.currentUser.get().getId()));
      else dispatch(signOut());
    };

    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '407575221166-jin406g2dv36pahorjtn595qrlqht2bf.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          auth.current = window.gapi.auth2.getAuthInstance();

          onAuthChange(auth.current.isSignedIn.get());
          auth.current.isSignedIn.listen(onAuthChange);
        });
    });
  }, [dispatch]);

  const signInHandler = () => {
    auth.current.signIn();
  };

  const signOutHandler = () => {
    auth.current.signOut();
  };

  const renderAuthButton = () => {
    let content;
    if (isSignedIn === null) {
      content = null;
    } else if (!isSignedIn) {
      content = (
        <button className="btn btn--sign-in" onClick={signInHandler}>
          Sign in with G
        </button>
      );
    } else {
      content = (
        <button className="btn btn--sign-out" onClick={signOutHandler}>
          Sign out
        </button>
      );
    }
    return content;
  };

  return <div>{renderAuthButton()}</div>;
};

export default GoogleAuth;

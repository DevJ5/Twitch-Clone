import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../actions';

const GoogleAuth = ({ isSignedIn, signIn, signOut }) => {
  const auth = useRef('');
  useEffect(() => {
    const onAuthChange = (isSignedIn) => {
      if (isSignedIn) signIn(auth.current.currentUser.get().getId());
      else signOut();
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
  }, [signIn, signOut]);

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

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);

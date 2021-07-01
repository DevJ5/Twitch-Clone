import React, { Component } from 'react';

export default class GoogleAuth extends Component {
  state = {
    isSignedIn: null,
  };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '407575221166-jin406g2dv36pahorjtn595qrlqht2bf.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  signIn = () => {
    this.auth.signIn();
  };

  signOut = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    let content;
    if (this.state.isSignedIn === null) {
      content = null;
    } else if (!this.state.isSignedIn) {
      content = (
        <button className="btn btn--sign-in" onClick={this.signIn}>
          Sign in with G
        </button>
      );
    } else {
      content = (
        <button className="btn btn--sign-out" onClick={this.signOut}>
          Sign out
        </button>
      );
    }
    return content;
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

const StreamList = (props) => {
  console.log(props);
  useEffect(() => {
    const streams = props.fetchStreams();
    console.log(streams);
  }, []);

  const renderList = () => {
    const renderButtons = (stream) => {
      if (props.auth.userId === stream.userId)
        return (
          <div className="streams__buttons">
            <Link
              to={`/streams/edit/${stream.id}`}
              className="streams__button streams__button--edit">
              Edit
            </Link>
            <button className="streams__button streams__button--delete">
              Delete
            </button>
          </div>
        );
    };
    return (
      <ul className="streams__list">
        {props.streams.map((stream) => (
          <li className="streams__item">
            <img
              src="camera-logo.png"
              alt="camera logo"
              className="streams__camera"
            />
            <div className="streams__content">
              <div className="streams__title">{stream.title}</div>
              <div className="streams__description">{stream.description}</div>
            </div>
            {renderButtons(stream)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="streams">
      <h2>Streams</h2>
      {renderList()}
      {props.auth.isSignedIn ? (
        <Link
          to="/streams/new"
          className="streams__button streams__button--create">
          Create stream
        </Link>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  streams: Object.values(state.streams),
  auth: state.auth,
});

export default connect(mapStateToProps, { fetchStreams })(StreamList);

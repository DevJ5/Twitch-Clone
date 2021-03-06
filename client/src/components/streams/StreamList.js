import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStreams } from '../../actions';

const StreamList = () => {
  const dispatch = useDispatch();
  const streams = useSelector((state) => Object.values(state.streams));
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchStreams());
  }, [dispatch]);

  const renderList = () => {
    const renderButtons = (stream) => {
      if (auth.userId === stream.userId)
        return (
          <div className="streams__buttons">
            <Link
              to={`/streams/edit/${stream.id}`}
              className="streams__button streams__button--edit">
              Edit
            </Link>
            <Link
              to={`/streams/delete/${stream.id}`}
              className="streams__button streams__button--delete">
              Delete
            </Link>
          </div>
        );
    };
    return (
      <ul className="streams__list">
        {streams.map((stream) => (
          <li className="streams__item" key={stream.id}>
            <img
              src="camera-logo.png"
              alt="camera logo"
              className="streams__camera"
            />
            <div className="streams__content">
              <Link to={`/streams/${stream.id}`} className="streams__title">
                {stream.title}
              </Link>
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
      {auth.isSignedIn ? (
        <Link
          to="/streams/new"
          className="streams__button streams__button--create">
          Create stream
        </Link>
      ) : null}
    </div>
  );
};

export default StreamList;

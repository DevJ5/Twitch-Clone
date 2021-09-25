import React, { useEffect, useRef } from 'react';
import flv from 'flv.js';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStream } from '../../actions';
import Spinner from '../Spinner';

const StreamShow = ({ match }) => {
  const stream = useSelector((state) => state.streams[match.params.id]);
  const dispatch = useDispatch();
  const videoRef = useRef(null);

  const { id } = match.params;

  useEffect(() => {
    dispatch(fetchStream(id));
  }, [dispatch, id]);

  useEffect(() => {
    let flvPlayer;
    if (stream) {
      flvPlayer = flv.createPlayer({
        type: 'flv',
        url: `http://localhost:8000/live/${id}.flv`,
      });
      flvPlayer.attachMediaElement(videoRef.current);
      flvPlayer.load();
    }

    return () => {
      console.log('Unmounted');
      if (flvPlayer) flvPlayer.destroy();
    };
  }, [stream, id]);

  if (!stream) return <Spinner></Spinner>;

  return (
    <div>
      <video src="" ref={videoRef} style={{ width: '100%' }} controls></video>
      <h1>{stream.title}</h1>
      <p>{stream.description}</p>
    </div>
  );
};

export default StreamShow;

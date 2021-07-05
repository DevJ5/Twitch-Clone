import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
import Spinner from '../Spinner';

const StreamShow = (props) => {
  const { fetchStream } = props;
  const { id } = props.match.params;
  console.log(props);
  useEffect(() => {
    fetchStream(id);
  }, [fetchStream, id]);

  if (!props.stream) return <Spinner></Spinner>;

  return (
    <div>
      <h1>{props.stream.title}</h1>
      <p>{props.stream.description}</p>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);

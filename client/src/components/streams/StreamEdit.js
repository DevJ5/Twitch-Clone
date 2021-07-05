import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import StreamForm from './StreamForm';

import { fetchStream, editStream } from '../../actions';

const StreamEdit = ({ match, fetchStream, editStream, stream }) => {
  useEffect(() => {
    fetchStream(match.params.id);
  }, [fetchStream, match.params.id]);

  const onSubmit = (formValues) => {
    console.log(formValues);
    editStream(match.params.id, formValues);
  };

  return (
    <StreamForm
      onSubmit={onSubmit}
      initialValues={{
        title: stream.title,
        description: stream.description,
      }}></StreamForm>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);

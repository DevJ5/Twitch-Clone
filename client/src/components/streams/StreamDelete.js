import React, { useEffect } from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';
import { Link } from 'react-router-dom';

const StreamDelete = (props) => {
  const { fetchStream } = props;
  const { id } = props.match.params;
  useEffect(() => {
    fetchStream(id);
  }, [fetchStream, id]);

  const renderContent = () => {
    if (!props.stream) return `Are you sure you want to delete this stream?`;
    else
      return `Are you sure you want to delete the stream with title: ${props.stream.title}`;
  };

  const renderActions = () => (
    <React.Fragment>
      <button
        className="modal__button modal__button--delete"
        onClick={() => {
          props.deleteStream(id);
        }}>
        Delete
      </button>
      <Link to="/" className="modal__button modal__button--cancel">
        Cancel
      </Link>
    </React.Fragment>
  );

  return (
    <div>
      <Modal
        title="Delete Stream"
        content={renderContent()}
        actions={renderActions()}
        onDismiss={() => history.push('/')}></Modal>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id],
});

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { fetchStream } from '../../actions';

const StreamEdit = (props) => {
  useEffect(() => {
    props.fetchStream(props.match.params.id);
  }, []);
  console.log(props);

  const onTheSubmit = () => {};

  const renderInput = (formProps) => {
    return (
      <div className="create-stream-form__field">
        <label htmlFor="" className="create-stream-form__label">
          {formProps.label}
        </label>
        <input
          type="text"
          className="create-stream-form__input"
          {...formProps.input}
        />
      </div>
    );
  };

  return (
    <form
      onSubmit={props.handleSubmit(onTheSubmit)}
      className="create-stream-form">
      <Field name="title" component={renderInput} label="Enter Title" />
      <Field
        name="description"
        component={renderInput}
        label="Enter Description"
      />
      <button className="btn create-stream-form__button">Submit</button>
    </form>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) errors.title = 'You must enter a title.';
  if (!formValues.description)
    errors.description = 'You must enter a description.';

  return errors;
};

const formWrapped = reduxForm({
  form: 'streamEdit',
  validate,
})(StreamEdit);

export default connect(mapStateToProps, { fetchStream })(formWrapped);

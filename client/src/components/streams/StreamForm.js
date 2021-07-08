import React from 'react';
// import { Field, reduxForm } from 'redux-form';
import { Field, Form } from 'react-final-form';

class StreamForm extends React.Component {
  renderError = ({ error, touched }) => {
    if (error && touched) {
      return <div>{error}</div>;
    }
  };

  renderInput = (formProps) => {
    const formFieldClass =
      formProps.meta.error && formProps.meta.touched
        ? 'create-stream-form__field--baseline'
        : 'create-stream-form__field';

    return (
      <div className={formFieldClass}>
        <label htmlFor="" className="create-stream-form__label">
          {formProps.label}
        </label>
        <div>
          <input
            autoComplete="off"
            className="create-stream-form__input"
            {...formProps.input}
            // value={formProps.input.value}
            // onChange={formProps.input.onChange}
          />
          {this.renderError(formProps.meta)}
        </div>
      </div>
    );
  };

  onTheSubmit = (formValues) => {
    // Prevent default is already done by the package
    console.log(formValues);
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <Form
        initialValues={this.props.initialValues}
        onSubmit={this.onTheSubmit}
        validate={(formValues) => {
          const errors = {};

          if (!formValues.title) errors.title = 'You must enter a title.';
          if (!formValues.description)
            errors.description = 'You must enter a description.';

          return errors;
        }}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="create-stream-form">
            <Field
              name="title"
              component={this.renderInput}
              label="Enter Title"
            />
            <Field
              name="description"
              component={this.renderInput}
              label="Enter Description"
            />
            <button className="btn create-stream-form__button">Submit</button>
          </form>
        )}
      />
    );
  }
}

export default StreamForm;

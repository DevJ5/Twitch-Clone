import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderInput(formProps) {
    console.log(formProps);
    return (
      <div className="create-stream-form__field">
        <label htmlFor="" className="create-stream-form__label">
          {formProps.label}
        </label>
        <input
          className="create-stream-form__input"
          {...formProps.input}
          // value={formProps.input.value}
          // onChange={formProps.input.onChange}
        />
      </div>
    );
  }

  onTheSubmit = (formValues) => {
    // Prevent default is already done by redux forms
    console.log(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onTheSubmit)}
        className="create-stream-form">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="btn create-stream-form__button">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'streamCreate',
})(StreamCreate);

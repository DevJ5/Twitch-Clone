import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3 className="heading-tertiary">Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit}></StreamForm>;
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);

// class StreamCreate extends React.Component {
//   renderError = ({ error, touched }) => {
//     if (error && touched) {
//       return <div>{error}</div>;
//     }
//   };

//   renderInput = (formProps) => {
//     const formFieldClass =
//       formProps.meta.error && formProps.meta.touched
//         ? 'create-stream-form__field--baseline'
//         : 'create-stream-form__field';

//     return (
//       <div className={formFieldClass}>
//         <label htmlFor="" className="create-stream-form__label">
//           {formProps.label}
//         </label>
//         <div>
//           <input
//             autoComplete="off"
//             className="create-stream-form__input"
//             {...formProps.input}
//             // value={formProps.input.value}
//             // onChange={formProps.input.onChange}
//           />
//           {this.renderError(formProps.meta)}
//         </div>
//       </div>
//     );
//   };

//   onTheSubmit = (formValues) => {
//     // Prevent default is already done by redux forms
//     console.log(formValues);
//     this.props.createStream(formValues);
//   };

//   render() {
//     return (
//       <form
//         onSubmit={this.props.handleSubmit(this.onTheSubmit)}
//         className="create-stream-form">
//         <Field name="title" component={this.renderInput} label="Enter Title" />
//         <Field
//           name="description"
//           component={this.renderInput}
//           label="Enter Description"
//         />
//         <button className="btn create-stream-form__button">Submit</button>
//       </form>
//     );
//   }
// }

// const validate = (formValues) => {
//   const errors = {};

//   if (!formValues.title) errors.title = 'You must enter a title.';
//   if (!formValues.description)
//     errors.description = 'You must enter a description.';

//   return errors;
// };

// const formWrapped = reduxForm({
//   form: 'streamCreate',
//   validate,
// })(StreamCreate);

// export default connect(null, { createStream })(formWrapped);

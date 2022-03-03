import React from 'react';
import FormInput from 'components/form-input/formInput.component';
import CustomButton from 'components/buttons/buttons.component';

import './_sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = (event) => {
    //pull values from event
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span className='title'>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            label='email'
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />

         
          <FormInput
            name='password'
            type='password'
            label='password'
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />       

          <CustomButton type='submit' value='Submit Form'>Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;

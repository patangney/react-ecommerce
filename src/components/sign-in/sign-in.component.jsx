import React from 'react';
import FormInput from '../../components/form-input/formInput.component';
import CustomButton from '../../components/buttons/buttons.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './_sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
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

          <div className='buttons'>
            <CustomButton type='submit' value='Submit Form'>
              Sign In
            </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;

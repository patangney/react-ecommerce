import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from 'components/sign-up/signup.Component';

import './_signInSignUp.styles.scss';


const SignInSignUpPage = ()  => (

    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>

);

export default SignInSignUpPage;
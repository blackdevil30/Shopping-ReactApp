import React from 'react';


import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import {SignInAndSignupContainer} from './signin-signup-page.styles';
const SigninAndSignupPage = ()=> (
    <SignInAndSignupContainer>
        <SignIn/>
        <SignUp/>
    </SignInAndSignupContainer>
);

export default SigninAndSignupPage;
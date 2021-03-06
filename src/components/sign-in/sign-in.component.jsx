import React from 'react';

import FormInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';

import {auth,signInWithGoogle} from '../../firebase/firebase.utils';

import {
    SignInContainer,
    TitleHeaderContainer,
    ButtonContainer
} from './sign-in.styles';


class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email,password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email: '', password: ''});
        }catch(err){
            console.log(err);
        }    
       
    }
       
    
    
    handleChange = event => {
        const {value,name} = event.target;

        this.setState({ [name]: value});
      
    }
        
        
    

    render(){
        return(
            <SignInContainer>
                <TitleHeaderContainer>I already have an account </TitleHeaderContainer>
                <span className="title">Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name="email" 
                        value= {this.state.email} 
                        handleChange= {this.handleChange}
                        label="E-mail"
                        required/>
                   
                    <FormInput 
                        type="password" 
                        name="password" 
                        value= {this.state.password} 
                        handleChange= {this.handleChange}
                        label="Password"
                        required/>
                   <ButtonContainer>
                        <CustomButton type="submit">SIGN IN</ CustomButton>
                        <CustomButton type="button" onClick = {signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</ CustomButton>
                    </ButtonContainer>
                    
                </form>
            </SignInContainer>
        );
    };
}

export default SignIn;
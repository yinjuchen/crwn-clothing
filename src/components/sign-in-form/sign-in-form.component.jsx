import {useState} from 'react';
import FormInput from '../form-input/form-input.componenet';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  signInWithGooglePopup, 
  // createUserDocumentFromAuth,
  signInAuthUserWithEmalAndPassword} from '../../utils/firebase/firebase.utils';

import './sign-in-form.styles.jsx';
import { SignInContainer, ButtonContainer } from './sign-in-form.styles.jsx';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields;
  


  // console.log(formFields)

  const signInWithGoogle = async() => {
    await signInWithGooglePopup()
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields)

  }

  const handleSubmit = async(event) => {
  event.preventDefault()


  try {
    const {user} = await signInAuthUserWithEmalAndPassword(
      email,password
      )
    

      resetFormFields()
  } catch(error) {
    switch(error.code) {
      case'auth/user-not-found': 
        alert('no user associated with this email')
        break
      case'auth/wrong-password': 
        alert('incorrect password for email')
        break
      default:
        console.log(error)
    }
  }
}

  // creare a function for change
  const handleChange = (event) => {
    const {name, value} = event.target
    setFormFields({...formFields,[name]:value})

  }

  return(
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
    
        <FormInput 
          label="Email"
          type="email" 
          required 
          onChange={handleChange} 
          name="email"
          value={email}
        />

        <FormInput 
          label="Password"
          type="password" 
          required 
          onChange={handleChange}
          name="password"
          value={password}
        />
          <ButtonContainer>
            <Button type="submit">Sign In</Button>
            <Button type='button'  
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}>
            Google sign in
            </Button>   
          </ButtonContainer>
        </form>
    </SignInContainer>
  )
}

export default SignInForm
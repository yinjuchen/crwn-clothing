import {useState} from 'react'
import {createAuthUserWithEmalAndPassword, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.componenet'
import  './sign-up-form.styles.scss'
import Button from '../button/button.component'


const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''

}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const {displayName, email, password, confirmPassword} = formFields

  console.log(formFields)

  const resetFormFields = () => {
    setFormFields(defaultFormFields)

  }

  const handleSubmit = async(event) => {
  event.preventDefault()

  // first we need check if password match
  if(password !== confirmPassword) {
    alert("passwords do not match")
    return
  }

  try {
    const {user} = await createAuthUserWithEmalAndPassword(email, password)
    await createUserDocumentFromAuth(user, {displayName})
    resetFormFields()

  } catch(error) {
    if (error.code === 'auth/email-already-in-use') {
      alert('email alreay in used')
    } else {
        console.log('user creation encountered an error',error)
    }
  }
}

  // creare a function for change
  const handleChange = (event) => {
    const {name, value} = event.target
    setFormFields({...formFields,[name]:value})

  }

  return(
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          label="Display Name"
          tyle="text"
          required 
          onChange={handleChange} 
          name="displayName"
          value={displayName}
        />

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

        <FormInput 
          label="Confirm Password"
          type="password" 
          required 
          onChange={handleChange} 
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUpForm
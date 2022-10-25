import { useState } from "react";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss';
import Button from "../button/button.component";

const defaultFormValues = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormValues);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormValues);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Check if password and confirm password match
        if (password !== confirmPassword) {
            alert('Passwords do not match');
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch (e) {
            console.log('Error setting up user', e.message);
        }
        // call  the createAuthUserMethod
    }
    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({ ...formFields, [name]: value})
    }

  return(
      <div className="sign-up-container">
          <h2>Don't have an account</h2>
          <span>Sign up with your email and password</span>
          <form onSubmit={handleSubmit}>
              <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName} />
              <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
              <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
              <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />
              <Button type="submit">Sign Up</Button>
          </form>
      </div>
  );
}

export default SignUpForm;
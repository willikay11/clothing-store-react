import { useState } from "react";
import {
    signInAuthWithEmailAndPassword,
    signInWithGooglePopup
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss';
import Button from "../button/button.component";

const defaultFormValues = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormValues);
    const { email, password } = formFields;

    const logGoogleUser = async () => {
        await signInWithGooglePopup();
    }

    const resetFormFields = () => {
        setFormFields(defaultFormValues);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInAuthWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (e) {
            if (e.code === 'auth/wrong-password') {
                alert('Incorrect Password');
            }
        }
        // call  the createAuthUserMethod
    }
    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({ ...formFields, [name]: value})
    }

  return(
      <div className="auth-container">
          <h2>Already have an account</h2>
          <span>Sign in with your email and password</span>
          <form onSubmit={handleSubmit}>
              <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
              <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
              <div className="buttons-container">
                  <Button type="submit">Sign In</Button>
                  <Button type="button" buttonType="google" onClick={logGoogleUser}>Google Sign In</Button>
              </div>
          </form>
      </div>
  );
}

export default SignInForm;
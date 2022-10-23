import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        await createUserDocumentFromAuth(response.user);
    }

  return (
      <>
        <h1>Sign In Page</h1>
          <button onClick={logGoogleUser}>Sign In With Google Pop Up</button>
          <SignUpForm />
      </>
  )
}

export default SignIn;
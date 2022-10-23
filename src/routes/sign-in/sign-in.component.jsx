import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log('response', response);
        const userDocRef = await createUserDocumentFromAuth(response.user);
    }
  return (
      <>
        <h1>Sign In Page</h1>
          <button onClick={logGoogleUser}>Sign In With Google Pop Up</button>
      </>
  )
}

export default SignIn;
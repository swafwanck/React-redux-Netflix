import React, { useRef } from "react";
import { auth } from "../../firebase.js";
import "./SignupScreen.css";

const SignInScreen = () => {
  const emialRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
      emialRef.current.value,
      passwordRef.current.value
    ).then((authUser)=>{
       console.log(authUser);
    }).catch(error=>{
      alert(error.message);
    });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(
      emialRef.current.value,
      passwordRef.current.value
    ).then((authUser)=>{
       console.log(authUser);
      
    }).catch(error=>{
      alert(error.message);
    });
  };

  return (
    <>
      <div className="signup">
        <form>
          <h1>sign in </h1>
          <input
            ref={emialRef}
            type="email"
            placeholder="Email Address"
            required="required"
          />
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
          <button onClick={signIn}>sign in</button>

          <h4>
            New to Netflix? <span onClick={register}>Sign up now.</span>
          </h4>
        </form>
      </div>
    </>
  );
};

export default SignInScreen;

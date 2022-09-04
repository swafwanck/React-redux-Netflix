import React , {useState }  from "react";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen.js";

export const LoginScreen = () => {

  const[signIn,setSignIn]= useState(false);


  return (
    <>
      <div className="loginScreen">
        <div className="navbar">
          <h1>
            <img
              src={require("./assets/images/logo.png")}
              alt="Background_Image"
            />
          </h1>
          <button className="btn" onClick={() =>setSignIn(true)} >sign in</button>
          <div className="login_gredient"></div>
        </div>
        <div className="login_body">
          {signIn ?(<SignupScreen />):(  <div className="login_head">
            <h2>
              Unlimited films, TV programmes and more.
            </h2>
            <h3>Watch anywhere. Cancel at any time</h3>
            <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
            <div className="login_input">
              <form>
                  <input type="email" placeholder="Enter your email" required />
                  <button onClick={() => setSignIn(true)} className="login_button">Get Start</button>
              </form>
            </div>
          </div>
          )}
        
        </div>
      </div>
    </>
  );
};

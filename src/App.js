import React from "react";
import "./App.css";
import {BrowserRouter as  Router,Routes, Route, } from "react-router-dom";
import { LoginScreen } from "./components/screens/LoginScreen.js";
import { HomeScreen } from "./components/screens/HomeScreen.js";
import { useEffect } from "react";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";
import { useDispatch, useSelector} from "react-redux/es/exports";




function App() {
  const user = useSelector(state=>state.user.user);

  const dispatch = useDispatch(user);

  useEffect(()=>{
   const unsubscribe = auth.onAuthStateChanged(userAuth=>{
       if(userAuth){
        //Logged in
        dispatch(login({
        uid:userAuth.uid,
        email:userAuth.email,
        

        }))
        
       }else{
        //Logged out
        dispatch(logout());
       }
     });
     return unsubscribe;
  },[dispatch])


  return (
    <>
    <Router>
      
      {!user ? (
       <LoginScreen />
      ) : (
        <div className="app">
          <Routes> 
            <Route exact path="/" element={<HomeScreen />} />
          </Routes>
        </div>
      )}
     </Router>
    </>
  );
}

export default App;

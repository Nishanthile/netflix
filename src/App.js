import React, { useEffect } from 'react';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import { auth } from "./firebase";
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectuser } from './features/counter/userSlice';
import ProfileScreen from './screens/ProfileScreen';

function App() {

  const user = useSelector(selectuser)
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      } else {
        //logged out
        dispatch(logout());

      }
    });
    return unsubscribe;
  }, [dispatch])
  return (
    <div className="App">

      {!user ?
        (<LoginScreen />) :
        (
          <Router>
            <Routes>
              <Route path="/profile" element={<ProfileScreen />}/>
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Router>
        )
      }


    </div>
  );
}

export default App;

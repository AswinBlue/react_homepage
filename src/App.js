import AppRouter from './components/AppRouter';
import React, { useState, useEffect } from 'react';
import { authService } from './components/AppFirebase';

function App() {
  // authService.currentUser;  // know whether user is logged in or not
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  const [init, setInit] = useState(false);
  useEffect( () => {
    // when screen prepared, check auth state
    authService.onAuthStateChanged( (user) => {
      // check whether logged in
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      // init is done
      setInit(true);
    });
  }, []);
  return (
    <>
      { init ? <AppRouter isLoggedIn = {isLoggedIn}/> : "Initializing..."}
    </>
  );
}

export default App;

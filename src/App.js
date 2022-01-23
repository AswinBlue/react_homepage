import AppRouter from './components/Router';
import React, { useState } from 'react';
import { authService } from './components/AppFirebase';

function App() {
  // authService.currentUser;  // know whether user is logged in or not
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <AppRouter isLoggedIn = {isLoggedIn}/>
    </>
  );
}

export default App;

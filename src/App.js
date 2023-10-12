import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Offers from './pages/Offers';
import ForgotPassword from './pages/ForgotPassword';
import Profile from './pages/Profile';

function App() {
  return(
    <>
      <Router>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/sign-in' element={ <SignIn/> }/>
          <Route path='/sign-up' element={ <SignUp/> }/>
          <Route path='/profiles' element={ <Profile/> }/>
          <Route path='/offers' element={ <Offers/> }/>
          <Route path='/forgot-password' element={ <ForgotPassword/> }/>
        </Routes>
      </Router>
    </>
  )
}

export default App;

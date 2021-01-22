import React from 'react';
import './App.css';
import HomePage from './pages/home/homepage.component';

import {Route,Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SigninAndSignupPage from './pages/signin-signup-page/signin-signup-page.component';

function App() {
  return (
    <div >
      <Header></Header>
      <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route  path='/shop' component={ShopPage}/>
          <Route  path='/signin' component={SigninAndSignupPage}/>
      </Switch>
     
    </div>
  );
}

export default App;

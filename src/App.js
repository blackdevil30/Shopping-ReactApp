import React from 'react';
import './App.css';
import HomePage from './pages/home/homepage.component';

import {Route,Switch,Redirect} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SigninAndSignupPage from './pages/signin-signup-page/signin-signup-page.component';
import { auth, createUserProfileDocument} from './firebase/firebase.utils';

import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/users.action';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user.selectors';
import checkoutPage from './pages/checkout/checkout.component';



class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser } = this.props;
   this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {

    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);

      // console.log(userRef); 

      userRef.onSnapshot(snapShot => {
       setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        // console.log(this.state);
      });
     
    }


    setCurrentUser(userAuth);
    
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
    return (
      <div >
        <Header />
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route exact path='/signin' render= {() => this.props.currentUser ?(<Redirect to="/" />):(<SigninAndSignupPage />)}  />
            <Route exact path='/checkout' component= {checkoutPage}  />
        </Switch>
       
      </div>
    );
  }
  
 
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
 
});

const mapDispatachToProps = dispatch=> ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatachToProps)(App);

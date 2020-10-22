import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Checkout from './Components/Checkout/Checkout';
import Payment from './Components/Payment/Payment';
import Orders from './Components/Orders/Orders';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useStateValue } from './Components/StateProvider/StateProvider';
import { auth } from './firebase';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  'pk_test_51HQqD0IoetHlmd9KAyrrJ1KLpmL9jpkZFWdgFSFuFCyhrvAfKd8rZM6urk2F3fMpFLZjnBqq6mRGTWYsoMwoWLkP00xhoCH1FV'
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/orders'>
            <Header />
            <Orders />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

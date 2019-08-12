import React from "react";

import Login from './component/login';
import Register from './component/register';
import Beranda from './component/beranda';
import Premium from './component/premium';
import Overview from './component/overview';
import Listmusic from './component/listmusic';
import { Provider } from "react-redux";
import configureStore from "../src/store/configureStore";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

// import home from './pages/home';
import './App.css';
import './css/boostrap.css';
const store = configureStore();

function Routes() {
  return (
    <Provider store={store}>
      <Router>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/beranda" component={Beranda} />
          <Route exact path="/premium" component={Premium} />
          <Route exact path="/overview" component={Overview} />
          <Route exact path="/listmusic" component={Listmusic} />
          {/* <Route path="/home" component={home} /> */}
      </Router>
    </Provider>
  );
}







export default Routes;



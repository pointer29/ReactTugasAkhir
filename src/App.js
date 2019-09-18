import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import configureStore from "../src/store/configureStore";
// import home from './pages/home';
import "./App.css";
import Listmusic from "./component/listmusic";
import Login from "./component/login";
import Register from "./component/register";
import "./css/boostrap.css";

const store = configureStore();

function Routes() {
  return (
    <Provider store={store}>
      <Router>
        <Route
          exact
          path="/"
          render={() => <Redirect to="/login" />}
        />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/listmusic" component={Listmusic} />
      </Router>
    </Provider>
  );
}

export default Routes;

import React  from 'react';
// import logo from './logo.svg';
// import './App.css';
// import './css/boostrap.css';
// import { withRouter } from "react-router-dom";
import './../css/boostrap2.css';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { postLogin } from "./../action/auth";
import axios from 'axios';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  onChange = e => {
    const {
      target: { value, id }
    } = e;
    // console.log("e", e);
    // console.log("value", value);
    this.setState({
      [id]: value
    });
  };

  componentWillReceiveProps(nextProps){
    console.log('nextprops', nextProps)

    const {dataAuth: {isValid}} = nextProps
    if (this.props !== nextProps){
      console.log('isValid', isValid)
      if (isValid){
        this.props.history.push('/listmusic ')
      }
    }
  }

  handleSubmit = () => {
    var vusername = this.state.username;
    var vpassword = this.state.password;
    if(vusername==='' || vpassword ===''){
      alert('Username/Password is Empty');
    }else{
      this.props.dispatch(postLogin({username: this.state.username, password: this.state.password}))

    }

   
   };

  render(){
  
    return (
      <div className="container-fluid login ng-scope">
        <div class="head ">
          <a class="spotify-logo" tabindex="-1" title="Spotify" ng-href="/en" href="/en"></a>
        </div>
        <div class="content">
          <div class="row">
            <div class="col-xs-12 text-center">
                    <span id="login-to-continue" class="h5">To continue, log in to Spotify.</span>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <a class="btn btn-block btn-darkblue" href="#"> Log In With Facebook</a>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <div class="divider">
                <strong class="divider-title ">or</strong>
              </div>
            </div>
          </div>
          {/* <form action=""> */}
          <div class="row">
            <div class="col-xs-12">
              
                <input required type="text" class="form-control" placeholder="email address" value={this.state.username}
                id="username"
                onChange={this.onChange}></input>
              
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              
                <input required type="password" class="form-control" placeholder="password" value={this.state.password}
                id="password"
                onChange={this.onChange}></input>
              
            </div>
          </div>
          <div class="col-xs-12 col-sm-6">
            <div class="checkbox">
              <label class=" " style={{ textAlign:'left' }}>
                <input ng-model="form.remember" type="checkbox"  class="ng-pristine ng-untouched " />
                Remember Me
                <span class="control-indicator"></span>
              </label>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <a class="btn btn-block btn-green" href="#" onClick={this.handleSubmit}>Sign In</a>
            </div>
          </div>
          {/* </form> */}
          <div class="row">
            <div class="col-xs-12 text-center">
              <p>
                <a href="#">Forgot your password?</a>
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <div class="divider">
                
              </div>
            </div>
          </div>
          <div class="row text-center">
            <div class="h4">Don't have an account?</div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <a class="btn btn-block btn-default" href="/register">Sign UP Sportify</a>
            </div>
          </div>

          <div class="col-xs-12">
            <div class="divider"></div>
            <p class="text-muted disclaimer text-center ng-binding" >If you click "Log in with Facebook" and are not a Spotify user, you will be registered and you agree to Spotify's <a href="#" >Terms &amp; Conditions</a> and <a href="#" >Privacy Policy</a>.</p>
          </div>
        </div>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.auth.isFetching,
    isAuthenticated: state.auth.isAuthenticated,
    errorMessage: state.auth.errorMessage,
    dataAuth: state.auth.data,
    logOut: state.logOut,
  };
}

export default withRouter(connect(mapStateToProps)(Login));
// export default (App);

import React from "react";
// import logo from './logo.svg';
// import style from './test.css';
// import './css/boostrap.css';
// import { withRouter } from "react-router-dom";
import "./../css/boostrap2.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { postRegister } from "./../action/auth";
import axios from "axios";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      hari: "",
      bulan: "",
      tahun: "",
      jenis_kelamin: "",
      ttl: ""
    };
  }

  onChange = e => {
    const {
      target: { value, id }
    } = e;
    //console.log("e", e);
    // console.log("value", value);
    this.setState({
      [id]: value
    });
  };

  componentWillReceiveProps(nextProps) {
    //console.log('nextprops', nextProps)
    // console.log("bambang"+this.props);
    const {
      Registered: { RegisterSuccess }
    } = nextProps;
    if (this.props !== nextProps) {
      //console.log('isValid', isValid)
      if (RegisterSuccess) {
        alert("Register Success!! Please Login");
        this.props.history.push("/login ");
        window.location.reload();
      }
    }
  }

  handleSubmit = () => {
    let variable = this.state;
    // console.log(variable.email);
    // console.log(variable.password);
    // console.log(variable.jenis_kelamin);
    // console.log(variable.hari+"/"+variable.bulan+"/"+variable.tahun);
    var vusername = variable.email;
    var vpassword = variable.password;
    var vrepassword = variable.repassword;
    var vreusername = variable.reemail;
    var vjenis_kelamin = variable.jenis_kelamin;
    var vttl = variable.hari + "/" + variable.bulan + "/" + variable.tahun;
    if (vpassword !== vrepassword || vusername !== vreusername) {
      alert("username / password did not match!");
    } else if (
      vusername == "" ||
      vpassword == "" ||
      vjenis_kelamin == "" ||
      vttl == ""
    ) {
      alert("Username/Password is Empty");
    } else {
      // alert('kesini');
      // console.log()
      this.props.dispatch(
        postRegister({
          username: vusername,
          password: variable.password,
          jenis_kelamin: variable.jenis_kelamin,
          ttl: variable.hari + "/" + variable.bulan + "/" + variable.tahun
        })
      );
    }
  };

  render() {
    return (
      <div className="container-fluid login ng-scope">
        <div class="head ">
          <a
            class="spotify-logo"
            tabindex="-1"
            title="Spotify"
            ng-href="/en"
            href="/en"
          ></a>
        </div>
        <div class="content">
          <div class="row">
            <div class="col-xs-12">
              <a class="btn btn-block btn-darkblue" href="#">
                {" "}
                Daftar dengan Facebook
              </a>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <div class="divider">
                <strong class="divider-title ">or</strong>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 text-center">
              <span id="login-to-continue" class="h5">
                Daftar dengan alamat emailmu.
              </span>
            </div>
          </div>
          <form method="post" action="">
            <div class="row">
              <div class="col-xs-12">
                <input
                  required
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  id="email"
                  onChange={this.onChange}
                ></input>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <input
                  required
                  type="email"
                  class="form-control"
                  placeholder="Kofirmasi Email"
                  id="reemail"
                  onChange={this.onChange}
                ></input>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <input
                  required
                  type="password"
                  class="form-control"
                  placeholder="Kata Sandi"
                  id="password"
                  onChange={this.onChange}
                ></input>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <input
                  required
                  type="password"
                  class="form-control"
                  placeholder="Konfirmasi Sandi"
                  id="repassword"
                  onChange={this.onChange}
                ></input>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-3">
                <input
                  min="0"
                  max="31"
                  required
                  type="number"
                  class="form-control"
                  placeholder="Hari"
                  id="hari"
                  onChange={this.onChange}
                ></input>
              </div>
              <div class="col-xs-5">
                <select
                  required
                  type="number"
                  class="dob-dob"
                  id="bulan"
                  onChange={this.onChange}
                >
                  <option value="" selected="selected">
                    bulan
                  </option>
                  <option value="01">Januari</option>
                  <option value="02">Februari</option>
                  <option value="03">Maret</option>
                  <option value="04">April</option>
                  <option value="05">Mei</option>
                  <option value="06">Juni</option>
                  <option value="07">Juli</option>
                  <option value="08">Agustus</option>
                  <option value="09">September</option>
                  <option value="10">Oktober</option>
                  <option value="11">November</option>
                  <option value="12">Desember</option>
                </select>
              </div>
              <div class="col-xs-4">
                <input
                  required
                  type="number"
                  class="form-control"
                  placeholder="Tahun"
                  id="tahun"
                  onChange={this.onChange}
                ></input>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-6">
                <div class="checkbox">
                  <label class=" " style={{ textAlign: "left" }}>
                    <input
                      ng-model="form.remember"
                      type="radio"
                      name="jenis_kelamin"
                      value="lakilaki"
                      id="jenis_kelamin"
                      onChange={this.onChange}
                    />
                    Laki Laki
                  </label>
                </div>
              </div>
              <div class="col-xs-6">
                <div class="checkbox">
                  <label class=" " style={{ textAlign: "left" }}>
                    <input
                      ng-model="form.remember"
                      type="radio"
                      name="jenis_kelamin"
                      value="perempuan"
                      id="jenis_kelamin"
                      onChange={this.onChange}
                    />
                    Perempuan
                  </label>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6">
              <div class="checkbox">
                <label class=" " style={{ textAlign: "left" }}>
                  <input
                    ng-model="form.remember"
                    type="checkbox"
                    class="ng-pristine ng-untouched "
                  />
                  Remember Me
                  <span class="control-indicator"></span>
                </label>
              </div>
            </div>

            <div class="col-xs-12">
              <p
                style={{ color: "black" }}
                class="text-muted disclaimer text-center ng-binding"
              >
                Dengan mengklik Daftar, Anda menyetujui Syarat dan Ketentuan
                Penggunaan Spotify.{" "}
              </p>
            </div>
            <div class="col-xs-12">
              <p
                style={{ color: "black" }}
                class="text-muted disclaimer text-center ng-binding"
              >
                Untuk mengetahui selengkapnya tentang bagaimana Spotify
                mengumpulkan, menggunakan, membagikan, dan melindungi data
                pribadi Anda, baca <a href="#">Kebijakan Privasi Spotify</a> .
              </p>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <a
                  class="btn btn-block btn-green"
                  href="#"
                  onClick={this.handleSubmit}
                >
                  Daftar
                </a>
              </div>
            </div>

            <div class="col-xs-12">
              <p
                style={{ fontSize: 19, color: "black" }}
                class="text-muted disclaimer text-center ng-binding"
              >
                Sudah punya akun? <a href="/login">Masuk</a>
              </p>
            </div>
          </form>
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
    Registered: state.reducerRegister
  };
}
export default withRouter(connect(mapStateToProps)(Register));
// export default (App);

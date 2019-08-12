import React  from 'react';
// import logo from './logo.svg';
// import './App.css';
// import './css/boostrap.css';
// import { withRouter } from "react-router-dom";
import './../css/boostrap.css';
import './../css/beranda.css';

function Overview() {
  return (
    <div >
      <div class="wrap">
        <header id="js-navbar" className="navbar navbar-default navbar-fixed-top navbar-semi-transparent navbar-highlight-green" role="banner">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="sidepanel" data-target="#navbar-nav">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <ul class="nav">
                      <li class="dropdown">
                          <a href="/id/account/overview/" class="user-link dropdown-toggle hidden-xs hidden-sm" data-toggle="dropdown">
                              <div class="user-icon-container img-circle navbar-user-img">
                                  <svg class="user-icon">
                                  <i class="fab fa-accessible-icon"></i>
                                   </svg>
                              </div>

                          </a>
                          <a href="/id/account/overview/" class="user-link hidden-md hidden-lg" data-tracking="{&quot;category&quot;: &quot;menu&quot;, &quot;action&quot;: &quot;account&quot;}">
                              <div class="user-icon-container img-circle navbar-user-img">
                                  <svg class="user-icon">
                                  <i class="fab fa-accessible-icon"></i>
                                  </svg>
                              </div>

                          </a>
                          <ul class="dropdown-menu dropdown-menu-right">
                              <li>
                                  <a href="/id/account/overview/" data-tracking="{&quot;category&quot;: &quot;menu&quot;, &quot;action&quot;: &quot;account&quot;}">Akun</a>
                              </li>
                              <li>
                                  <a href="/id/logout/" data-tracking="{&quot;category&quot;: &quot;menu&quot;, &quot;action&quot;: &quot;log-out&quot;}">Keluar</a>
                              </li>
                          </ul>
                      </li>
                  </ul>
                    
                    <a href="/id/account/overview/" className="user-link hidden">
                        <div className="user-icon-container img-circle navbar-user-img">
                            <svg className="user-icon">
                            <i class="fab fa-accessible-icon"></i>    
                            </svg>
                        </div>
                    </a>
                    <a className="navbar-brand" href="/beranda">
                        <span className="navbar-logo">Spotify</span>
                    </a>
                </div>
                {/*
                <div class="mobile mobile-one">
                    <div class="header">
                        <div class="menu-toggle">
                            <div class="line"></div>
                            <div class="line"></div>
                        </div>
                    </div>
                    <div class="mobile-nav">
                        <h2>Navigation</h2>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div> */}
                <nav className="collapse navbar-collapse" id="navbar-nav" role="navigation">

                    <ul className="nav navbar-nav navbar-right nav-main">

                        <li>
                            <a href="#" id="nav-link-premium" data-ga-category="menu" data-ga-action="premium">
                    Premium
                                </a>
                        </li>

                        <li>
                            <a href="https://support.spotify.com/?utm_source=www.spotify.com&amp;utm_medium=www_header" id="nav-link-help" data-ga-category="menu" data-ga-action="help">
                    Bantuan
                                </a>
                        </li>

                        <li>
                            <a href="/id/download/" id="nav-link-download" className="js-get-spotify js-gtm-event" data-ga-category="menu" data-ga-action="download" data-gtm-event-name="download_spotify_button_clicked" data-tracking="{&quot;category&quot;: &quot;download&quot;, &quot;action&quot;: &quot;download start&quot;, &quot;label&quot;: &quot;download-navbar&quot;}">Download
                </a>
                        </li>

                        <li role="separator" className="divider"></li>

                        <li className="alternate sidepanel-item-small ">
                            <a href="/id/signup/" id="nav-link-sign-up" data-ga-category="menu" data-ga-action="sign-up">
                    Daftar
                                </a>
                        </li>

                        <li className="alternate sidepanel-item-small">
                            <a href="/id/login/" id="header-login-link" className="user-link" data-tracking="{&quot;category&quot;: &quot;menu&quot;, &quot;action&quot;: &quot;log-in&quot;}">
                                <span className="user-text navbar-user-text">Masuk</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

        <div class="content-wrapper">

        <div class="container container-jumbotron ">
            <div class="jumbotron jumbotron-hero jumbotron-inverse ">
                <div class="row">
                    <div class="col-sm-7 col-lg-6 col-lg-offset-1">
                        <h2 class="h1" data-hj-suppress="">Musik tanpa batas</h2>
                        <p>
                            Dengan Premium, kamu bisa memainkan lagu apa saja, kapan saja. Kamu bahkan bisa mendengarkan saat offline. Tanpa batasan. Tanpa iklan. </p>

                        <a href="/id/purchase/panel/" class="btn  btn-green btn-lg hidden-xs " data-ga-category="Account Pages" data-ga-action="Jumbotron CTA clicked" data-ga-label="free">
            Dapatkan akun Premium
        </a>

                    </div>
                    <div class="col-sm-4">
                        <a href="/id/purchase/panel/" class="btn  btn-green btn-overview-xs " data-ga-category="Account Pages" data-ga-action="Jumbotron CTA clicked" data-ga-label="free">
                            Dapatkan akun Premium
                        </a>

                        <img src="//www.scdn.co/i/account/overview/iphone-ddd9e69.png" class="jumbotron-image" />
                    </div>
                </div>
            </div>
        </div>

        

        <div class="container container-content">
            <div class="row">
                <div class="col-sm-3 hidden-xs">

                    <div class="sidebar">
                        <div class="user-icon-container img-circle ">
                            <svg class="user-icon">
                             
                            </svg>
                        </div>

                        <ul class="nav-inverse nav-tabs nav-stacked">

                            <li class="active" id="submenu-item-account-overview">
                                <a href="/id/account/overview/">
                                    <svg>
                                      
                                    </svg> Tinjauan akun</a>
                            </li>

                            <li id="submenu-item-subscription">
                                <a href="/id/account/subscription/">
                                    <svg>
                                   
                                    </svg> Langganan</a>
                            </li>

                            <li id="submenu-item-edit-profile">
                                <a href="/id/account/profile/">
                                    <svg>
                                       
                                    </svg> Edit profil</a>
                            </li>

                            <li id="submenu-item-change-password">
                                <a href="/id/account/change-password/">
                                    <svg>
                                   
                                    </svg> Ubah kata sandi</a>
                            </li>

                            <li id="submenu-item-notification-settings">
                                <a href="/id/account/notifications/">
                                    <svg>
                               
                                    </svg> Pengaturan pemberitahuan</a>
                            </li>

                            <li id="submenu-item-privacy-settings">
                                <a href="/id/account/privacy/">
                                    <svg>
                                    
                                    </svg> Pengaturan privasi</a>
                            </li>

                            <li id="submenu-item-offline-devices">
                                <a href="/id/account/offline-devices/">
                                    <svg>
                          
                                    </svg> Perangkat offline</a>
                            </li>

                            <li id="submenu-item-recover-playlists">
                                <a href="/id/account/recover-playlists/">
                                    <svg>
                       
                                    </svg> Pulihkan playlist</a>
                            </li>

                            <li id="submenu-item-receipts">
                                <a href="/id/account/subscription/receipt/">
                                    <svg>
                              
                                    </svg> Tanda terima</a>
                            </li>

                            <li id="submenu-item-apps">
                                <a href="/id/account/apps/">
                                    <svg>
                             
                                    </svg> Aplikasi</a>
                            </li>

                            <li id="submenu-item-redeem">
                                <a href="/id/redeem/">
                                    <svg>

                                    </svg> Tukarkan</a>
                            </li>

                        </ul>

                    </div>
                </div>
                <div class="col-sm-9">
                    <div class="content">
                        <div class="content-top">

                            <div id="account-csr-container">
                                <div data-reactroot="" class="Page__root--3KyWp">
                                    <div class="Modal__root--2Kazc">
                                        <div class="Modal__inner--3fmpO">
                                            <h3 class="Modal__title--3A5LV"></h3>
                                            <div class="Modal__controls--1DFS9"></div>
                                        </div>
                                    </div>
                                    <div class="Page__header--17YSZ">
                                        <h1 class="Page__title--1iyG-">Tinjauan akun</h1></div>
                                    <article class="Section__root--R8-Tv">
                                        <h3 class="Section__title--1WdWR">Profil</h3>
                                        <section class="Section__children--1XRH-">
                                            <table class="ProfileSection__table--3LO1m">
                                               
                                                <tbody>
                                                    <tr class="ProfileSection__field--3QXcG">
                                                        <td class="ProfileSection__labelCell--1CydE">
                                                            <label class="ProfileSection__label--2pOTi">Nama pengguna</label>
                                                        </td>
                                                        <td class="ProfileSection__valueCell--1hETr">
                                                            <p class="ProfileSection__value--xBbAR" data-hj-suppress="true">w2r6y1o4jh2zhfryb29iqhdix</p>
                                                        </td>
                                                    </tr>
                                                    <tr class="ProfileSection__field--3QXcG">
                                                        <td class="ProfileSection__labelCell--1CydE">
                                                            <label class="ProfileSection__label--2pOTi">Email</label>
                                                        </td>
                                                        <td class="ProfileSection__valueCell--1hETr">
                                                            <p class="ProfileSection__value--xBbAR" data-hj-suppress="true">satyasunarya@gmail.com</p>
                                                        </td>
                                                    </tr>
                                                    <tr class="ProfileSection__field--3QXcG">
                                                        <td class="ProfileSection__labelCell--1CydE">
                                                            <label class="ProfileSection__label--2pOTi">Tanggal lahir</label>
                                                        </td>
                                                        <td class="ProfileSection__valueCell--1hETr">
                                                            <p class="ProfileSection__value--xBbAR" data-hj-suppress="true">18/09/92</p>
                                                        </td>
                                                    </tr>
                                                    <tr class="ProfileSection__field--3QXcG">
                                                        <td class="ProfileSection__labelCell--1CydE">
                                                            <label class="ProfileSection__label--2pOTi">Negara</label>
                                                        </td>
                                                        <td class="ProfileSection__valueCell--1hETr">
                                                            <p class="ProfileSection__value--xBbAR" data-hj-suppress="true">ID</p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </section>
                                        <div><a class="CTA__root--3tKwy CTA__secondary--GNPSC" href="/id/account/profile/">Edit profil</a></div>
                                    </article>
                                    <article class="Section__root--R8-Tv">
                                        <h3 class="Section__title--1WdWR">Paketmu</h3>
                                        <section class="Section__children--1XRH-">
                                            <div class="Card__root--z444v">
                                                <div class="PlanHeader__root--1mcgr" >
                                                    <div class="PlanHeader__info--3wjMJ" >
                                                        <h2 class="PlanHeader__productName--2stvf">Spotify Free</h2></div>
                                                    <div class="PlanHeader__graphics--1okUh"></div>
                                                </div>
                                                <div class="Card__body--3K1XH">
                                                    <div class="ColumnLayout__root--2g8KB">
                                                        <div class="ColumnLayout__moduleColumns--4BpYn ColumnLayout__modulesBorder--IsWw8 ColumnLayout__singleColumn--1YIZL">
                                                            <div class="ColumnLayout__leftModule--2QLyC">
                                                                <div class="PlanDescriptionModule__root--3s53A">
                                                                    <p class="PlanDescriptionModule__text--1CzI4">Putar musik hanya dalam mode shuffle, dengan iklan.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div class="FreeModule__root--ELaX-">
                                                                <div class="FreeModule__title--2Mteb">Gratis</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <div><a class="CTA__root--3tKwy CTA__secondary--GNPSC" href="/id/purchase/panel/" data-ga-category="Account Pages" data-ga-action="Subscription Widget CTA clicked" data-ga-label="upsell-trial_30_days">Gabung Premium</a></div>
                                    </article>
                                    <article class="Section__root--R8-Tv">
                                        <h3 class="Section__title--1WdWR">Keluar di mana saja</h3>
                                        <p class="Section__text--33wTk">Keluar setiap kali Spotify terbuka, baik di web, ponsel, desktop, atau di perangkat lain.</p>
                                        <div class="Section__note---f224">
                                            <div class="Box__root--awvNj">
                                          
                                            </div>
                                        </div>
                                        <div><a class="CTA__root--3tKwy CTA__secondary--GNPSC" href="//accounts.spotify.com/revoke_sessions/?continue=https%3A//www.spotify.com/id/" data-ga-category="Account Pages" data-ga-action="sign out everywhere" data-ga-label="sign-out-everywhere-account" data-gtm-event-name="signout_everywhere_button_clicked">Keluar di mana saja</a></div>
                                    </article>
                                </div>
                            </div>
                        </div>

                        <div class="content-bottom">
                            <div class="well card card--feedback" id="">
                                <form action="#" class="account-feedback ">
                                    <section class="account-feedback__section" id="account-feedback__section-satisfaction">
                                        <h3>Bantu kami meningkatkan pengalaman akun kamu.</h3>
                                        <p>Apa kamu menemukan yang dicari?</p>
                                      
                                    </section>
                                    <section class="account-feedback__section account-feedback__section--hidden" id="account-feedback__section-text">
                                        <h3>Terima Kasih! Beri tahu kami lebih banyak.</h3>
                                        <p>Apa yang tadi ingin kamu lakukan di akun kamu?</p>
                                        <textarea class="account-feedback__free-text" name="account-feedback-text" required=""></textarea>
                                        <p class="account-feedback__disclaimer">Kami terus memakai masukan ini untuk meningkatkan pengalaman kamu, tetapi kami tidak bisa menanggapi secara individual.</p>
                                        <button type="button" class="account-feedback__send-button btn btn-primary btn-sm" disabled="">Kirim</button>
                                    </section>
                                    <section class="account-feedback__section account-feedback__section--center account-feedback__section--hidden" id="account-feedback__section-thanks">
                                        <h3>Terima kasih untuk masukannya!</h3></section>
                                </form>
                              
                                <script src="//www.scdn.co/webpack/feedback.4a8ea5a83293264e79ae.js" async=""></script>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </div>

    </div>
    <footer role="contentinfo" class="footer footer-default ">
        <div class="container">
            <nav class="row">

                <div class="col-xs-12 col-md-2">
                    <div class="footer-logo">
                        <a href="/id/">Spotify</a>
                    </div>
                </div>

                <div class="col-xs-6 col-sm-4 col-md-2">
                    <h3 class="nav-title">Perusahaan</h3>
                    <ul class="nav">

                        <li>
                            <a href="/id/about-us/contact/" id="nav-link-about" data-ga-category="menu" data-ga-action="about">
                    Tentang
                                </a>
                        </li>

                        <li>
                            <a href="https://www.spotifyjobs.com/" id="nav-link-jobs" data-ga-category="menu" data-ga-action="jobs">
                    Pekerjaan
                                </a>
                        </li>

                        <li>
                            <a href="https://newsroom.spotify.com/" id="nav-link-press" data-ga-category="menu" data-ga-action="press">
                    For the Record
                                </a>
                        </li>

                    </ul>
                </div>

                <div class="col-xs-6 col-sm-4 col-md-2">
                    <h3 class="nav-title">Komunitas</h3>
                    <ul class="nav">

                        <li>
                            <a href="https://artists.spotify.com/" id="nav-link-artists" data-ga-category="menu" data-ga-action="artists">
                    Untuk Artis
                                </a>
                        </li>

                        <li>
                            <a href="https://developer.spotify.com/" id="nav-link-developers" data-ga-category="menu" data-ga-action="developers">
                    Pengembang
                                </a>
                        </li>

                        <li>
                            <a href="https://spotifyforbrands.com" id="nav-link-brands" data-ga-category="menu" data-ga-action="brands">
                    Brands
                                </a>
                        </li>

                        <li>
                            <a href="https://investors.spotify.com/" id="nav-link-investors" data-ga-category="menu" data-ga-action="investors">
                    Investor
                                </a>
                        </li>

                        <li>
                            <a href="https://spotifyforvendors.com/" id="nav-link-vendors" data-ga-category="menu" data-ga-action="vendors">
                    Vendor
                                </a>
                        </li>

                    </ul>
                </div>

                <div class="col-xs-6 col-sm-4 col-md-2">
                    <h3 class="nav-title">Tautan berguna</h3>
                    <ul class="nav">
                        <li>
                            <a href="https://support.spotify.com/?utm_source=www.spotify.com&amp;utm_medium=www_footer" id="nav-link-help" data-ga-category="menu" data-ga-action="help">
                    Bantuan
                                </a>
                        </li>

                        <li class="hidden-xs ">
                            <a href="/id/redirect/webplayerlink/?utm_medium=www_footer" id="nav-link-play" data-ga-category="menu" data-ga-action="play">
                    Pemutar Web
                                </a>
                        </li>

                        <li class="visible-xs hidden-sm ">
                            <a href="/id/free/?utm_medium=www_footer" id="nav-link-free" data-ga-category="menu" data-ga-action="free">
                    Aplikasi Seluler Gratis
                                </a>
                        </li>

                    </ul>
                </div>

                <div class="col-xs-12 col-md-4 col-social">
                    <ul class="nav">
                        <li>

                        </li>
                        <li>

                        </li>
                        <li>

                        </li>
                    </ul>
                </div>
            </nav>

            <nav class="row row-small">
                <div class="col-xs-9">

                    <ul class="nav nav-small">
                        <li>
                            <a href="/id/legal/">Hukum</a>
                        </li>
                        <li>
                            <a href="/id/privacy/">Pusat Privasi</a>
                        </li>
                        <li>
                            <a href="/legal/privacy-policy/">Kebijakan Privasi</a>
                        </li>
                        <li>
                            <a href="/id/legal/cookies-policy/">Cookies</a>
                        </li>
                        <li>
                            <a href="/id/legal/privacy-policy/#s3">Tentang Iklan</a>
                        </li>

                    </ul>
                </div>

                <div class="col-xs-3 text-right">
                    <a class="market" href="/id/select-your-country/" title="Klik untuk mengubah">
                        <div class="media">
                            <div class="media-body media-middle">
                                Indonesia
                            </div>
                            <div class="media-right media-middle">
                                <span class="media-object flag-icon flag-icon-id"></span>
                            </div>
                        </div>
                    </a>

                    <small class="copyright">© 2019 Spotify AB</small>
                </div>
            </nav>
        </div>
    </footer>

    </div>
  )
  };

  export default Overview;
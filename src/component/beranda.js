import React  from 'react';
// import logo from './logo.svg';
// import './App.css';
// import './css/boostrap.css';
// import { withRouter } from "react-router-dom";
import './../css/boostrap.css';
import './../css/beranda.css';

function Beranda() {
  return (
    <div >
        alallala
        <br/><br/><br/><br/><br/><br/><br/>
        

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
                        <a href="/id/account/overview/" className="user-link hidden">
                            <div className="user-icon-container img-circle navbar-user-img">
                            <svg className="user-icon">
                        
                            </svg>
                            </div>
                        </a>
                        <a className="navbar-brand" href="/beranda" >
                        <span className="navbar-logo">Spotify</span>
                        </a>
                    </div>
                    {/* <div class="mobile mobile-one">
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
            
            <section>
                <div class="hero hero-home simplified">
                {/* <div class="hero-home-bg-cover"></div> */}
                <div class="container container-simplified">
                    <div class="row row-simplified">
                    <h1>Musik untuk semua orang.</h1>
                    <h4>Jutaan lagu. Tak perlu kartu kredit.</h4>
                    <a href="/id/download/" id="generic-btn-premium" role="button" data-tracking="{&quot;category&quot;: &quot;home (offer)&quot;, &quot;action&quot;: &quot;premium&quot;}" class="btn btn-green btn-simplified js-goto-signup js-button-hero-get-free">
                        DAPATKAN SPOTIFY FREE
                    </a>
                    </div>
                </div>
                </div>
            </section>
        
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
  );
}

export default Beranda;
// export default (App);

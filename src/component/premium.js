import React  from 'react';
// import logo from './logo.svg';
// import './App.css';
// import './css/boostrap.css';
// import { withRouter } from "react-router-dom";
import './../css/boostrap.css';

function Premium() {
  return (
        <div>
            <div className="wrap">
                <header id="js-navbar" className="navbar navbar-default navbar-fixed-top navbar-transparent navbar-react sticky" role="banner">
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
                            <a className="navbar-brand" href="/id/" data-tracking="{&quot;category&quot;: &quot;menu&quot;, &quot;action&quot;: &quot;spotify-logo&quot;}">
                                <span className="navbar-logo">Spotify</span>
                            </a>
                        </div>
                        <nav className="collapse navbar-collapse" id="navbar-nav" role="navigation">

                            <ul className="nav navbar-nav navbar-right nav-main">

                                <li>
                                    <a href="/id/premium/?checkout=false" id="nav-link-premium" data-ga-category="menu" data-ga-action="premium">
                Premium
                            </a>
                                </li>

                                <li>
                                    <a href="https://support.spotify.com" id="nav-link-help" data-ga-category="menu" data-ga-action="help">
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

                <div data-hypernova-key="Page" data-hypernova-id="748034e1-ef7a-4926-bafe-daf3ee1bd779">
                    <section className="components__Wrapper-lc4c7b-0 hKDBpC" id="HERO-0" role="banner" color="#fff" offset="">
                        <article className="components__Container-lc4c7b-1 dvYxbd">
                            <header className="components__Main-lc4c7b-2 hLvHCy">
                                <div className="components__Content-lc4c7b-3 fRnNPj">
                                    <div className="components__Images-lc4c7b-8 eUcGBm"></div>
                                    <div>
                                        <h1 className="components__Header-lc4c7b-4 eFFtTx" width="" font-weight="" font-size="">Alihkan ke Premium. Bersenang-senanglah.</h1></div>
                                    <div>
                                        <h2 className="components__SecondaryHeader-lc4c7b-5 hdfOTW" width="" font-weight="" font-size="">Premium terdengar mengagumkan. Dengarkan offline tanpa jeda iklan.</h2></div>
                                    <ul className="components__Benefits-lc4c7b-11 dJjMnc"></ul>
                                    <div className="components__ButtonGroup-lc4c7b-10 sMxEW">
                                        <div><a className="button__Button-sc-1bzuh8k-0 bRBOwG Button-kdidm1-0 eifmih" href="#block-promotion" color="" border="" data-event-name="CampaignCallToActionClick" data-event-version="2" data-event-params="[&quot;ID&quot;,&quot;default&quot;,&quot;#block-promotion&quot;,&quot;trial-30d&quot;,&quot;hero&quot;,0,&quot;prodCatId&quot;]" tabindex="0" rel="next"><span>Lihat penawaran</span></a></div>
                                    </div>
                                </div>
                            </header>
                        </article>
                    </section>
                    <section className="container__Background-sc-1qkbwcl-0 fPPxDz" id="BENEFITS-1">
                        <article className="container__Content-sc-1qkbwcl-1 bgXgoZ" color="">
                            <header className="header__Wrapper-sc-1y4qmb3-0 gfqYeP">
                                <h1 className="header__Title-sc-1y4qmb3-1 iaZYiD">Mengapa beralih ke Premium?</h1></header>
                            <article className="benefits__Content-sc-1by8452-0 gKDLvT">
                                <article className="benefit__Wrapper-sc-1g27ygi-0 dTTRnT">
                                    <div className="benefit__Image-sc-1g27ygi-1 eTGFDO" src="https://campaigns.scdn.co/images/benefit-1.png" alt="Download musik."></div>
                                    <article className="benefit__Content-sc-1g27ygi-2 cBSzWg">
                                        <header className="benefit__Header-sc-1g27ygi-3 ivJjFa">Download musik.</header>
                                        <p className="benefit__Text-sc-1g27ygi-4 bLyMeZ">Dengarkan di mana saja.</p>
                                    </article>
                                </article>
                                <article className="benefit__Wrapper-sc-1g27ygi-0 dTTRnT">
                                    <div className="benefit__Image-sc-1g27ygi-1 eOPHVc" src="https://campaigns.scdn.co/images/benefit-2.png" alt="Tidak ada gangguan iklan."></div>
                                    <article className="benefit__Content-sc-1g27ygi-2 cBSzWg">
                                        <header className="benefit__Header-sc-1g27ygi-3 ivJjFa">Tidak ada gangguan iklan.</header>
                                        <p className="benefit__Text-sc-1g27ygi-4 bLyMeZ">Nikmati musik tanpa henti.</p>
                                    </article>
                                </article>
                                <article className="benefit__Wrapper-sc-1g27ygi-0 dTTRnT">
                                    <div className="benefit__Image-sc-1g27ygi-1 CQjIM" src="https://campaigns.scdn.co/images/benefit-3.png" alt="Mainkan lagu apa saja."></div>
                                    <article className="benefit__Content-sc-1g27ygi-2 cBSzWg">
                                        <header className="benefit__Header-sc-1g27ygi-3 ivJjFa">Mainkan lagu apa saja.</header>
                                        <p className="benefit__Text-sc-1g27ygi-4 bLyMeZ">Bahkan di ponsel.</p>
                                    </article>
                                </article>
                                <article className="benefit__Wrapper-sc-1g27ygi-0 dTTRnT">
                                    <div className="benefit__Image-sc-1g27ygi-1 hFxgvf" src="https://campaigns.scdn.co/images/benefit-4.png" alt="Lewati tanpa batas."></div>
                                    <article className="benefit__Content-sc-1g27ygi-2 cBSzWg">
                                        <header className="benefit__Header-sc-1g27ygi-3 ivJjFa">Lewati tanpa batas.</header>
                                        <p className="benefit__Text-sc-1g27ygi-4 bLyMeZ">Cukup tekan berikutnya.</p>
                                    </article>
                                </article>
                            </article>
                            <footer className="benefits__ButtonWrapper-sc-1by8452-1 iratEd"></footer>
                        </article>
                    </section>
                    <section className="container__Background-sc-1qkbwcl-0 fPPxDz" title="plans" id="block-promotion">
                        <article className="container__Content-sc-1qkbwcl-1 bgXgoZ" color="">
                            <header className="header__Wrapper-sc-1y4qmb3-0 gfqYeP">
                                <h1 className="header__Title-sc-1y4qmb3-1 iaZYiD">Pilih paket Premium</h1>
                                <h2 className="header__Subheader-sc-1y4qmb3-3 jhJmTs">Kami memiliki paket yang cocok untuk kamu.</h2></header>
                            <ul className="plans__Content-erd5aq-0 llEywn">
                                <li className="common__Container-sc-1e8cdrs-5 anajf" title="plan">
                                    <div className="common__Column-sc-1e8cdrs-6 hehgbf">
                                        <summary className="common__Header-sc-1e8cdrs-7 lctlFa">Berlangganan dengan kartu</summary>
                                        <article className="common__BoxShadow-sc-1e8cdrs-8 eDpEKl box-shadow__BoxShadow-sc-3t8fu0-0 kciwaC">
                                            <div className="common__Content-sc-1e8cdrs-1 fkLcgW">
                                                <h1 className="common__Promotion-sc-1e8cdrs-2 dUYXRI">30 hari gratis</h1>
                                                <h2 className="common__Header-sc-1e8cdrs-0 iCSwsw">Spotify Premium</h2>
                                                <h3 className="common__Description-sc-1e8cdrs-3 iTuPDd">Hanya Rp&nbsp;49990/bulan setelahnya. Berhenti berlangganan kapan saja.</h3>
                                                </div>
                                            <div><a className="common__Button-sc-1e8cdrs-4 deDJqB Button-kdidm1-0 eifmih" href="/signup/?forward_url=https%3A%2F%2Fwww.spotify.com%2Fpurchase%2Foffer%2Ftrial-30d" color="" border="" backgroundcolor="" data-event-name="CampaignCallToActionClick" data-event-version="2" data-event-params="[&quot;ID&quot;,&quot;default&quot;,&quot;\/purchase\/offer\/trial-30d&quot;,&quot;trial-30d&quot;,&quot;plan&quot;,0,&quot;prodCatId&quot;]"><b>Dapatkan Premium</b></a></div>
                                            <footer className="plan__LegalDisclaimer-e4d6rc-0 cWenyN"><a href="/legal/new-30-days-free-trial-terms-and-conditions">Syarat berlaku</a></footer>
                                        </article>
                                    </div>
                                </li>
                                <li className="common__Container-sc-1e8cdrs-5 anajf" title="plan">
                                    <div className="common__Column-sc-1e8cdrs-6 hehgbf">
                                        <summary className="common__Header-sc-1e8cdrs-7 lctlFa">Berlangganan dengan pulsa</summary>
                                        <article className="common__BoxShadow-sc-1e8cdrs-8 eDpEKl box-shadow__BoxShadow-sc-3t8fu0-0 kciwaC">
                                            <div className="common__Content-sc-1e8cdrs-1 fkLcgW">
                                                <h1 className="common__Promotion-sc-1e8cdrs-2 dUYXRI">Diskon 50% untuk 2 bulan</h1>
                                                <h2 className="common__Header-sc-1e8cdrs-0 iCSwsw">Spotify Premium</h2>
                                                <h3 className="common__Description-sc-1e8cdrs-3 iTuPDd">Hanya Rp&nbsp;54990/bulan setelahnya. Berhenti berlangganan kapan saja.</h3>
                                                </div>
                                            <div><a className="common__Button-sc-1e8cdrs-4 deDJqB Button-kdidm1-0 eifmih" href="/signup/?forward_url=https%3A%2F%2Fwww.spotify.com%2Fpurchase%2Foffer%2F2months-for-1-cb" color="" border="" backgroundcolor="" data-event-name="CampaignCallToActionClick" data-event-version="2" data-event-params="[&quot;ID&quot;,&quot;default&quot;,&quot;\/purchase\/offer\/2months-for-1-cb&quot;,&quot;recurring-carrier-billing-2m-for-1&quot;,&quot;plan&quot;,0,&quot;prodCatId&quot;]"><b>Dapatkan Premium</b></a></div>
                                            <footer className="plan__LegalDisclaimer-e4d6rc-0 cWenyN">*<a href="/legal/intro-offer-2m-terms-and-conditions">Persyaratan dan ketentuan</a> berlaku. Hanya terbuka bagi pengguna yang belum pernah mencoba Premium.</footer>
                                        </article>
                                    </div>
                                </li>
                                <li className="common__Container-sc-1e8cdrs-5 anajf" title="plan">
                                    <div className="common__Column-sc-1e8cdrs-6 hehgbf">
                                        <summary className="common__Header-sc-1e8cdrs-7 lctlFa">Bayar dengan pulsa</summary>
                                        <article className="common__BoxShadow-sc-1e8cdrs-8 eDpEKl box-shadow__BoxShadow-sc-3t8fu0-0 kciwaC">
                                            <div className="common__Content-sc-1e8cdrs-1 fkLcgW">
                                                <h2 className="common__Header-sc-1e8cdrs-0 iCSwsw">Spotify Premium</h2>
                                                <h3 className="common__Description-sc-1e8cdrs-3 iTuPDd">Semua yang kamu sukai tentang Premium, tanpa komitmen.</h3>
                                             </div>
                                            <div className="SelectContainer-sc-1tvvok4-0 geLWQr">
                                                <select className="common__Select-sc-1e8cdrs-9 cNSMSN Select-sc-1smx4qo-0 iumpOk" aria-label="choose your plan">
                                                    <option value="0">1 hari</option>
                                                    <option selected="" value="1">1 minggu</option>
                                                    <option value="2">1 bulan</option>
                                                    <option value="3">3 bulan</option>
                                                </select>
                                                <svg className="SelectArrow-xuctyq-0 ykxoJ Svg-uf49n2-0 coTJtR" role="img" height="16" width="16" viewBox="0 0 24 24" aria-hidden="true">
                                                    <polyline points="20 8 12 17 4 8" fill="none" stroke="#181818"></polyline>
                                                </svg>
                                            </div>
                                            <div><a className="common__Button-sc-1e8cdrs-4 deDJqB Button-kdidm1-0 eifmih" href="/signup/?forward_url=https%3A%2F%2Fwww.spotify.com%2Fpurchase%2Foffer%2Fpayg-carrier-billing-7d-sea" color="" border="" backgroundcolor="" data-event-name="CampaignCallToActionClick" data-event-version="2" data-event-params="[&quot;ID&quot;,&quot;default&quot;,&quot;\/purchase\/offer\/payg-carrier-billing-7d-sea&quot;,&quot;payg-carrier-billing-7d&quot;,&quot;plan&quot;,1,&quot;prodCatId&quot;]"><b>Dapatkan 1 minggu seharga Rp&nbsp;16500</b></a></div>
                                            <footer className="plan__LegalDisclaimer-e4d6rc-0 cWenyN"><a href="/legal/end-user-agreement">Syarat berlaku</a></footer>
                                        </article>
                                    </div>
                                </li>
                            </ul>
                        </article>
                    </section>
                </div>
               
                </div>
        </div>
    );
}

export default Premium;
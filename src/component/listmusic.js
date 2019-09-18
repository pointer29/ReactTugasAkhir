import React  from 'react';
// import logo from './logo.svg';
// import './App.css';
// import './css/boostrap.css';
// import { withRouter } from "react-router-dom";
import './../css/sportify.css';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { getMusic } from "./../action/auth";
import axios from 'axios';

class  Listmusic extends React.Component{

    componentWillMount(){
        //console.log('componentWillMount')
        this.props.dispatch(getMusic())
      }
    
      componentDidMount(){
        console.log('componentDidMount')
      }
    
      componentWillUpdate(){
        console.log('componentWillUpdate')
      }
    
      componentDidUpdate(){
        console.log('componentDidUpdate')
      }
    
      componentWillUnmount(){
        console.log('componentWillUnmount')
      }

    handleSubmit = () => {

        this.props.dispatch(getMusic())
        
    };

    XcreateElement(titles,artists,url){

        console.log('url', url, titles, artists)
        //console.log(titles);
        var node = document.createElement("Div");
            var node_cover = document.createElement("Div");
            var node_credits = document.createElement("Div");
            var img_src = document.createElement("IMG");
            var textnode = document.createTextNode("Water");
            var title = document.createElement("h5");
            var artist = document.createElement("h6");
            var symboli = document.createElement("i");
            var nmtitle=document.createTextNode(titles);
            var nmartist=document.createTextNode(artists);
            node.className = "album";
            node_credits.className = "credits";
            node_cover.className = "cover";
            title.className = "title";
            artist.className = "artist";
            symboli.className = "fas fa-chevron-right";
            img_src.src=(url);
            node.appendChild(node_cover);
            node.appendChild(node_credits);
            node.appendChild(symboli);
            node_cover.appendChild(img_src);
            node_credits.appendChild(title);
            node_credits.appendChild(artist);
            title.appendChild(nmtitle);
            artist.appendChild(nmartist);
            document.getElementById("recently-played").appendChild(node);
    }

    componentWillReceiveProps(nextProps){
        console.log('nextprops', nextProps.dataAuth)
        
        var i=0;
        for(i=0;i<nextProps.dataAuth.length;i++){
            //console.log(nextProps.dataAuth[0].id);
            //
            this.XcreateElement(nextProps.dataAuth[i].title, nextProps.dataAuth[i].artist, nextProps.dataAuth[i].albumArtUrl);
            //
        }
      
      }

    render(){
        return (
            <div>
                <div class="content-container">
                    <header>
                        <nav>
                            <div className="font-besar" id="profile-icon">
                                <i class="far fa-user"></i>
                            </div>
                            
                            <h2>Your Library</h2>
                            
                            <div className="font-besar" id="settings-icon">
                                <i class="fas fa-cog"></i>
                            </div>
                        </nav>
                        
                    </header>
                    <main>
                        <section id="recently-played">
                            <div class="title-row">
                                <h3>Recently Played</h3>
                                <p>Edit</p>
                            </div>
                            
                            
                        </section>
                    </main>
                    <footer	>
                
                        
                        <div id="footer-nav" >
                            <div>
                                <i class="fas fa-home font-besar2"></i>
                                <p className="font-besar3">Home</p>
                            </div>
                        
                            <div onClick={this.handleSubmit}>
                                <i class="fas fa-search font-besar2"></i>
                                <p className="font-besar3"> Search</p>
                            </div >
                            <div id="active">
                                <i class="far fa-folder-open font-besar2"></i>
                                <p className="font-besar3">Koleksi Kamu</p>
                            </div>
                            <div >
                                <i class="fas fa-book-open font-besar2"></i>
                                <p className="font-besar3">Premium</p>
                            </div>
                        </div>
                    </footer>
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

export default withRouter(connect(mapStateToProps)(Listmusic));

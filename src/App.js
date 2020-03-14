import React, { Component } from 'react'; //import React Component
import {Projects}  from './Components/projectCards';
//import {App2}  from '../stage-2/src/App2';
import {Sign} from './Components/Sign';
import {Join} from './Components/Join';
import {Route, Switch, NavLink, Redirect} from 'react-router-dom'
import firebase from 'firebase/app';
import currUserStuff from './Components/currUserStuff';

export default class App extends Component {
render() { 
    return  (         
    <div className = "sign">
      <main>
        <NavBar state = {this.state}/>
        <Banner />
        <Switch>
            {/* Always prompt user to sign in first*/}
            <Route exact path='/explore' component = {Projects}/>
            <Route path ='/join' component = {Join}/>
            <Route path ="/signin" component = {Sign}/>
            <Route path ="/mystuff" component = {currUserStuff}/>
            <Redirect to ="/explore"/> 
        </Switch>
      </main>
    </div>
    )
  }
}


class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {user: firebase.auth().currentUser}
  }
  // Should change depending on if the user is logged in or not
    render() {
        return (
          <div className = "nav">
                <img src={require('./projecthub.png')} alt="Project Hub logo"></img><a href="index.html"><span id="name">ProjectHub</span></a>
                <ul className = "navbar">
                  <li><NavLink to = "/explore" activeClassName="activeLink"> <h1>EXPLORE</h1><i className = "fa fa-home" /></NavLink></li>
                  <li><NavLink to = "/join" activeClassName="activeLink"><h1>JOIN</h1><i className = "fa fa-weixin"></i></NavLink></li>
                  <li><NavLink to ="/signin" activeClassName="activeLink"><h1>LOG IN</h1><i className = "fa fa-user"></i></NavLink></li>
                  <li><NavLink to ="/mystuff" activeClassName="activeLink"><h1>MY STUFF</h1><i className = "fa fa-user"></i></NavLink></li>
                </ul>
          </div>
    )}
    }


    class Banner extends Component {
        render() {
            return (
              <div className="background-pic">
                 <div className="banner-text">
                    <h1>Discover Opportunities</h1>
                    <p>Find projects to work on and expore your passion!</p>
                </div>
              </div>
            )
        }
    }
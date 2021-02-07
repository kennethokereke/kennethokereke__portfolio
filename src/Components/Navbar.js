import React ,{Component} from 'react'
import {NavLink, BrowserRouter } from 'react-router-dom'
import { withRouter } from 'react-router'

import '../Stylesheet/Navbar.scss'

class Navbar extends Component {
   
    isMainPage = () => {
       return ['/', 'resume'].includes(this.props.location.pathname);

   }

   getNavbarClass () {
    var classStr = "";

    if (!['/',  '/resume'].includes(this.props.location.pathname)) {
       classStr = classStr.concat("smallNav");
    }

    

    return classStr;
 }

   
    render() {
        return (
            <div id="navbar" className={this.getNavbarClass()}>
            <div id="navBackground"></div>
            <div id="titles">
               <h3>Hi, I'm</h3>
               <h2>Kenneth Okereke</h2>
               <h3>I'm a UI/UX Designer & Developer</h3>
            </div>
            <div id="linkWrapper">
               <NavLink to="/" activeClassName="active" exact>Portfolio</NavLink>
               <NavLink to="/resume" activeClassName="active" exact>Resume</NavLink>
              
            </div>
            <div id="logoWrapper">
               <a id="logo" href="/"></a>
            </div>
         </div>

        )

    }
   
   
    
}

export default withRouter(Navbar);


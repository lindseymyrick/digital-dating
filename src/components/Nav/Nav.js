import React, { Component } from 'react';
import { Link, withRouter  } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';


// function Nav(props) 

export class Nav extends Component {


  componentDidMount () {

  }

    // changeNav = () => {
    //   this.props.dispatch({ type: 'CHANGE_NAV_SHOW_FAVORITES' })
    // }



  render () {
    let additionalLinks = <span> </span>
    
    let URL = this.props.location.pathname; 
    let splitLocation = URL.split('/'); 
    let currentLocation = splitLocation.pop(); 
    if (currentLocation == "theBar" || currentLocation ==  "favoriteCocktails") { additionalLinks =
        this.props.user.id && (
            <Link className="nav-link" to="/favoriteCocktails">
              Favorite Cocktails
          </Link>

        )
    } ;

    return (
      <div className="nav">
        {JSON.stringify(this.props.history.location)}
        {JSON.stringify(currentLocation)}
        {JSON.stringify(this.props.match.params)}
        <Link to="/home">
          <h2 className="nav-title">Dating Digitally</h2>
        </Link>
        <div className="nav-right">
          {additionalLinks}
          <Link className="nav-link" to="/home" >
            {/* Show this link if they are logged in or not,
           but call this link 'Home' if they are logged in,
           and call this link 'Login / Register' if they are not */}
            {this.props.user.id ? 'Home' : 'Login / Register'}
          </Link>
          {/* Show the link to the info page and the logout button if the user is logged in */}
          {this.props.user.id && (
            <>
              <Link className="nav-link" to="/user">
                Profile
          </Link>
              <LogOutButton className="nav-link" />
            </>
          )}
          {/* Always show this link since the about page is not protected */}
          <Link className="nav-link" to="/about">
            About
      </Link>
     
        </div>
      </div>

    )
  }
  
  
};

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
  favorites: state.favoritesNavigation
});

export default connect(mapStateToProps)(withRouter (Nav));

import React, {Component} from 'react';
import {ThemeProvider} from '@material-ui/styles';
import theme from '../ui/Theme';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import VideoChat from '../VideoChat/VideoChat'; 

import './App.css';
import ActivityPage from '../ActivityPage/ActivityPage';
import CocktailsSearch from '../Cocktails/CocktailsSearch/CocktailsSearch'; 
import ApartmentHunt from '../ApartmentHunt/ApartmentHunt'; 
import CocktailsFavoritesList from '../Cocktails/CocktailsFavoritesList/CocktailsFavoritesList'; 
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import styles from '../ui/Theme'; 
import { withStyles } from '@material-ui/core/styles';


class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    const {classes} = this.props; //need this for cards 
    let videoChat = <span> </span>;
    if (this.props.user.id) {
      videoChat = <VideoChat
        url={`https://datingdigitally.daily.co/meet-lindsey`}>
      </VideoChat>
    }
    return (
      <>
      {/* <Grid container direction="row" className={classes.gridRoot} alignItems="top" spacing={2}>
        <VideoChat
          url={`https://datingdigitally.daily.co/meet-lindsey`}
        ></VideoChat>
      </Grid> */}
      
      <Router>
        <div>
          
          <Nav />
     
            {/* <VideoChat
              url={`https://datingdigitally.daily.co/meet-lindsey`}>
            </VideoChat> */}
           
     
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/about"
              component={AboutPage}
            />
            {/* Visiting localhost:3000/home will show the user a list of activities that they can choose from */}
            <ProtectedRoute
              exact
              path="/home"
              component={ActivityPage}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/user"
              component={UserPage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/info"
              component={InfoPage}
            />

         
            <ProtectedRoute
              exact
              path="/theBar"
              component={CocktailsSearch}
            />
     

            
            <ProtectedRoute
              exact
              path="/favoriteCocktails"
              component={CocktailsFavoritesList}
            />
       
            

            <ProtectedRoute
              exact
              path="/apartmentHunt"
              component={ApartmentHunt}
            />

            <Route
              exact
              path="/test"
              component={VideoChat}
            />

           
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
         
            {videoChat}
        
           {/* <Grid container direction="row" className={classes.gridRoot} alignItems="top" spacing = {2}>
          <VideoChat
            url={`https://datingdigitally.daily.co/meet-lindsey`}
          ></VideoChat>
          </Grid> */}
          <Footer />
        </div>
      </Router>
      </>
      
  )}
     
}



ActivityPage.propTypes = { classes: PropTypes.object.isRequired }; //need this for cards 
// export default connect()(App);

const mapStateToProps = (state) => {
  return {
    user: state.user,
    loginMode: state.loginMode,
  }
}
export default connect(mapStateToProps)(withStyles(styles)(App)); 
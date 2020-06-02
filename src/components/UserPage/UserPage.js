// import React from 'react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
// const dotenv = require('dotenv');
// import dotenv from 'dotenv'; 
// dotenv.config(); 
// require('dotenv').config();

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
// const UserPage = (props) => (
export class UserPage extends Component {

  handleDateCreation = () => {
    console.log('handle date creation'); 
    this.props.dispatch({ type: 'GET_ROOM_URL' })
  }

  render(){

    return(
  <div>
    <h1 id="welcome">
      Welcome, { this.props.user.username }!
    </h1>
    <p>Your ID is: {this.props.user.id}</p>
    <LogOutButton className="log-in" />

    <div>

    <button onClick={this.handleDateCreation}> Create a date </button>

    <button> Join a date </button>

    </div>
  </div>

    )}
};

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);

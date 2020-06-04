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

  state = {
    roomToJoin: '', 
    dateToInvite: ''
  } 

  componentDidMount() {
    this.getAllRoomInvites()
  }

  handleChange = (event) => {
    console.log(event.target.value); 
    this.setState ({
      ...this.state, 
      roomToJoin: event.target.value
    })
  }

  handleDateInvitation = (event) => {
    console.log(event.target.value);
    this.setState({
      ...this.state,
      dateToInvite: event.target.value
    })
  }

  handleDateJoin = (event, property) => {
    this.props.dispatch({ type: 'JOIN_ROOM', payload: property })
  }

  handleDateCreation = () => {
    console.log('handle date creation'); 
    this.props.dispatch({ type: 'GET_ROOM_URL', payload: this.state.dateToInvite })
  }
  
  getAllRoomInvites = () => {
     console.log('handle date join'); 
    this.props.dispatch({ type: 'GET_ROOM_URLS', payload: this.state.roomToJoin })
  }

  render(){

    return(
  <div>
    <h1 id="welcome">
      Welcome, { this.props.user.username }!
    </h1>
    {/* <p>Your ID is: {this.props.user.id}</p> */}
    {/* <p> You have been invited to a date with </p>
    <p> Your room id is {this.props.roomURL.id} </p> */}
    {this.props.allRoomsURL.map(room => {
      return(
        <>
        <p> {room.username_user} has invited you to a date. Would you like to join? </p>
          <button onClick={(event) => this.handleDateJoin(event, room.room_id)}> Join Now </button>
        </>
      )
    }

    )}
    {/* <div>
    <LogOutButton className="log-in" />
      </div> */}
    <div>
    
    <input onChange={this.handleDateInvitation} />
    <button onClick={this.handleDateCreation}> Create a date </button>
          
        {/* <div>
    <input onChange= {this.handleChange}/>
     <button onClick={this.handleDateJoin}> Join a date </button>
        </div> */}
   

    </div>
  </div>

    )}
};

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
  roomURL: state.roomURL,
  allRoomsURL: state.allRoomsURL
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);

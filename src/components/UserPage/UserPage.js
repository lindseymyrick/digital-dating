// import React from 'react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from '../ui/Theme';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


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
    const { classes } = this.props; //need this for cards 

    return(
  <div>
    <h1  id="welcome">
      Welcome, { this.props.user.username }!
    </h1>
  
    {this.props.allRoomsURL.map(room => {
      return(
        <div>
          <Typography className={classes.userPage}> {room.username_user} has invited you to a date. Would you like to join? </Typography>
          <Button variant="outlined" onClick={(event) => this.handleDateJoin(event, room.room_id)}> Join Now </Button>
        </div>
      )
    }

    )}
  
    <div>
    
          <TextField className={classes.textField} onChange={this.handleDateInvitation} />
    <Button variant="outlined" onClick={this.handleDateCreation}> Create a date </Button>
          
       
   

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

UserPage.propTypes = { classes: PropTypes.object.isRequired };

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(withStyles(styles)(UserPage));

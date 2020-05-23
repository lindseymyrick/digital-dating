import React, { Component } from 'react'; 
import {connect} from 'react-redux';

export class Test extends Component {

    render() {
       
        return (
            <div>
                <h1> Hello </h1>

                <h1> {JSON.stringify(this.props.reduxState.user.id)}</h1>
            </div>
        )
    }
}


const mapStateToProps = (reduxState) => ({ reduxState });

export default connect(mapStateToProps)(Test);

//  { "errors": { "loginMessage": "", "registrationMessage": "" }, "loginMode": "login", "user": { "id": 1, "username": "lindseyMyrick" } }

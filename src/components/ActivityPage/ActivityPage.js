import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';

export class ActivityPage extends Component {
    
    //takes user to an activity landing page 
    handleClick = () => {
        console.log('in handleClick');
        
    }


    render() {
        return (
            <div>
                <ul>
                    <li> <Link to="/theBar"> Visit the Bar </Link> </li>
                    <li> <Link to="/apartmentHunt"> Apartment Hunt  </Link> </li>
                    <li> Activity 3  </li>
                    <li> Activity 4  </li>
                    <li> Activity 5  </li>
                </ul>
            </div>
        )
    }
}

export default ActivityPage

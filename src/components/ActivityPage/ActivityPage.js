import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core"; 
import PropTypes from 'prop-types'; 
import styles from '../ui/Theme'; 

// const useStyles = withStyles({
//     root: {
//         maxWidth: 345,
//     },
//     media: {
//         height: 140,
//     }, 
// })

// const styles = { root: {
//         maxWidth: 345,
//     },
//     media: {
//         height: 140,
//     } }

// const styles = {
//     card: {
//         maxWidth: 200,
//         backgroundColor: 'rgba(255, 217, 154, 0.3)',
//         marginLeft: '25px',
//         marginTop: '25px',
//     }

export class ActivityPage extends Component {
    //takes user to an activity landing page 
    handleClick = () => {
        console.log('in handleClick');
        
    }


    render() {
    const {classes} = this.props; //need this for cards 
        return (
            <div>
                <Link to="/theBar"> 
                <Card className = {classes.root}>
                    <CardMedia
                        component="img"
                        className={classes.media}
                        src= "images/Bar.jpeg"
                        title="The Bar"
                    />
                    <CardContent>
                        <Typography>
                            Grab a cocktail 
                       </Typography>

                    </CardContent>
                </Card>
                </Link>

                
                <Link to="/apartmentHunt">
                    <Card className={classes.root}>
                        <CardMedia
                            component="img"
                            className={classes.media}
                            src="images/Apartment.jpeg"
                            title= "Apartment"
                        />
                        <CardContent>
                            <Typography>
                                Apartment Scavenger Hunt
                       </Typography>

                        </CardContent>
                    </Card>
                </Link>

                <Card className={classes.root}>
                    <CardMedia
                        component="img"
                        className={classes.media}
                        src="images/Love.jpeg"
                        title="Apartment"
                    />
                    <CardContent>
                        <Typography>
                           NYT's 30 Questions To Fall In Love
                       </Typography>

                    </CardContent>
                </Card>

                <Card className={classes.root}>
                    <CardMedia
                        component="img"
                        className={classes.media}
                        src="images/Trivia.jpeg"
                        title="Apartment"
                    />
                    <CardContent>
                        <Typography>
                            Trivia Night
                       </Typography>

                    </CardContent>
                </Card>
                {/* <Card className={classes.root} >
                    <CardMedia 
                        className = {classes.media}
                        image = "https://unsplash.com/photos/LRx-y4bRdMA"
                        title = "The Bar"
                        />
                    <CardContent>
                       <Typography>
                           The Bar
                       </Typography>

                    </CardContent>
                </Card> */}
                {/* <ul>
                    <li> <Link to="/theBar"> Visit the Bar </Link> </li>
                    <li> <Link to="/apartmentHunt"> Apartment Hunt  </Link> </li>
                    <li> Activity 3  </li>
                    <li> Activity 4  </li>
                    <li> Activity 5  </li>
                </ul> */}
            </div>
        )
    }
}

ActivityPage.propTypes= {classes:PropTypes.object.isRequired}; //need this for cards 

export default (withStyles(styles) (ActivityPage)); //need this for cards
// export default ActivityPage; 

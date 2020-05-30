import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';

//Material UI Imports 
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core"; 
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types'; 
import styles from '../ui/Theme'; 


export class ActivityPage extends Component {
    //takes user to an activity landing page 
    handleClick = () => {
        console.log('in handleClick');
        
    }


    render() {
    const {classes} = this.props; //need this for cards 
        return (
            <div>
                <Grid container direction="row" className={classes.gridRoot} alignItems="top" spacing = {2}>
         
                <Grid item xs={4} >
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
                </Grid>

                <Grid item xs={4} >
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
                </Grid>

            <Grid item xs={4} >    
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
             </Grid>

             <Grid item xs={4} >    
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
                </Grid>

                <Grid item xs={4} >    
                    <Card className={classes.root}>
                        <CardMedia
                            component="img"
                            className={classes.media}
                            src="images/Cooking.jpeg"
                            title="Apartment"
                        />
                        <CardContent>
                            <Typography>
                                Cooking Competition
                        </Typography>

                        </CardContent>
                    </Card>
                </Grid>

                    <Grid item xs={4} >
                        <Card className={classes.root}>
                            <CardMedia
                                component="img"
                                className={classes.media}
                                src="images/Art.jpeg"
                                title="Apartment"
                            />
                            <CardContent>
                                <Typography>
                                    Make Art
                        </Typography>

                            </CardContent>
                        </Card>
                    </Grid>
           
         </Grid>
                
            </div>
        )
    }
}

ActivityPage.propTypes= {classes:PropTypes.object.isRequired}; //need this for cards 

export default (withStyles(styles) (ActivityPage)); //need this for cards
// export default ActivityPage; 

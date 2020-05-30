import React, { Component } from 'react';
import CocktailsResultsItem from '../CocktailsResultsItem/CocktailsResultsItem';
import {connect} from 'react-redux'; 

//material UI imports 
//Material UI Imports 
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import styles from '../../ui/Theme';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';




export class CocktailsResultsList extends Component {
     errorAlert = () => {
        alert('Sorry we do not have that cocktail!'); 
        this.props.dispatch({ type: 'SEND_COCKTAIL_ERROR' })
    }

    handleClick = (event, property) => {
        console.log('in handleClick', property);
        this.props.dispatch({ type: 'GET_ID_COCKTAIL', payload: property });
    }

    render() {
        const { classes } = this.props; //need this for cards 
        let list = <span> </span> 
        console.log('reduxState', this.props.error); 
        if (this.props.error){
            this.errorAlert();
                } else {
            list = (
               
                <Grid container direction="row" className={classes.gridRoot} alignItems="top" spacing={2}>                {this.props.cocktails.map(cocktail => {
                    return (
                        <Grid item xs={2} >
                            <Card className={classes.root}>
                                <CardActionArea>
                                <CardMedia
                                    component="img"
                                    className={classes.media}
                                    image={cocktail.strDrinkThumb}
                                    title= {cocktail.strDrink}
                                />
                                <CardContent>
                                    <Typography>
                                        {cocktail.strDrink}
                                     </Typography>

                                </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" onClick={(event) => this.handleClick(event, cocktail.idDrink)}>
                                        Get the recipe!</Button>
                                {/* <IconButton
          
                                        onClick= {(event) => this.handleClick(event, cocktail.idDrink)}
          
                                     aria-label="show more"
                            > </IconButton> */}
                            </CardActions>
                            </Card>
                        
                         {/* <h2> {cocktail.strDrink} </h2>
                        // <img onClick={(event) => this.handleClick(event, cocktail.idDrink)} alt="cocktail" src={cocktail.strDrinkThumb} /> */}
                        </Grid>
                        // <CocktailsResultsItem cocktail={cocktail} />
                    )
                })}
                 </Grid>
             
           )
        }
            //  list = (<ul>
            //     {this.props.cocktails.map(cocktail => {
            //         return (
            //             <CocktailsResultsItem cocktail={cocktail} />
            //         )
            //     })}
            // </ul>)
            //     }
        

        return (
            <div>
                {list}
                    
                
                
            </div>
        )
    }
}


CocktailsResultsList.propTypes = { classes: PropTypes.object.isRequired };

const reduxStateToProps = (reduxState) => {
    return {
        cocktails: reduxState.cocktails, 
        error: reduxState.cocktailsError
    }
}

export default connect(reduxStateToProps)(withStyles(styles)(CocktailsResultsList)); 

// export default connect(reduxStateToProps)(CocktailsResultsList);




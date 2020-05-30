import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import CocktailsResultsList from '../CocktailsResultsList/CocktailsResultsList';
import CocktailRecipe from '../CocktailRecipe/CocktailRecipe';
import { Link } from 'react-router-dom';


//Material UI Imports 
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import styles from '../../ui/Theme';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

export class CocktailsSearch extends Component {
    state = {
        inputText: ''
    }

    //sets state so that the nav page will conditionally update 
    componentDidMount() {
        this.props.dispatch({ type: 'CHANGE_NAV_SHOW_FAVORITES'})
    }

    //sets state.inputText with keyword that user wants to search
    handleChange = (event) => {
        console.log(event.target.value); 
        this.setState({
            ...this.state,
            inputText: event.target.value
        })
    }

    //sets state.searchTerm that will be GET request to API
    handleIconClick = (event, property) => {
        console.log('in handleClick', property );
        this.props.dispatch({type: 'GET_INGREDIENT_COCKTAILS', payload: property})
    }

    handleInputClick = (event, property) => {
        console.log('in handleClick', property);
        this.props.dispatch({ type: 'GET_NAME_COCKTAILS', payload: property })
    }


    render() {
        const { classes } = this.props; //need this for cards 
        let listOrRecipe= <span> hidden </span>
        if (this.props.cocktailsRecipeShowing){
            listOrRecipe = <CocktailRecipe /> 
        } else {
            listOrRecipe = 
            <>
             <Grid container className={classes.gridRoot} spacing = {2} direction = "column">
                 <Grid item xs={12} container >
                     <Grid item xs = {4} />
                     <Grid item xs = {4}>
                        <Paper elevation={7} >
                            <Typography>
                                 <h1> Pick Your Poison </h1>
                             </Typography>
                        </Paper>
                    </Grid>
                        <Grid item xs={2} >
                            <input type="text" placeholder="search" onChange={this.handleChange} />
                        </Grid>
                        <Grid item xs={1} >
                            <button onClick={(event) => this.handleInputClick(event, this.state.inputText)}>Submit</button>
                        </Grid>
                     </Grid>  {/* end first line */}
                     <Grid item xs = {12} container >
                        <Grid item xs= {1} />
                        <Grid item xs={2} >
                                
                            <img src="images/Alcohol/Vodka.png" onClick={(event) => this.handleIconClick(event, "Vodka")}/> 
                            <Typography className={classes.marginOne}>
                                Vodka
                            </Typography>
                        </Grid>
                        <Grid item xs={2} >
                            <img src="images/Alcohol/Tequila.png" onClick={(event) => this.handleIconClick(event, "Tequila")} /> 
                            <Typography className={classes.marginOne}>
                                Tequila
                            </Typography>
                           
                            
                        </Grid>
                        <Grid item xs={2} >
                            <img src="images/Alcohol/Gin.png" onClick={(event) => this.handleIconClick(event, "Gin")} /> 
                            <Typography className={classes.marginTwo}>
                                Gin
                            </Typography>
                        </Grid>
                        <Grid item xs={2} >
                            <img src="images/Alcohol/Scotch.png" onClick={(event) => this.handleIconClick(event, "Scotch")} /> 
                           <Typography className={classes.marginOne}>
                                Scotch
                            </Typography>
                        </Grid>
                        <Grid item xs={2} >
                             <img src="images/Alcohol/Rum.png" onClick={(event) => this.handleIconClick(event, "Rum")} /> 
                            <Typography className={classes.marginTwo}>
                                Rum
                            </Typography>
                        </Grid> 
                            
                    </Grid>   {/* end second line */}
  
        
             
               
                <Grid item xs={12} > 
                <CocktailsResultsList />
                      
                </Grid> 

                </Grid>

           
            </>
        }
        return (
            <div>

            {listOrRecipe}


            </div>
        )
    }
}

CocktailsSearch.propTypes = { classes: PropTypes.object.isRequired };

const reduxStateToProps = (reduxState) => {
    return {
        cocktailsRecipeShowing: reduxState.cocktailsRecipeShowing
    }
}


export default connect (reduxStateToProps) (withStyles(styles) (CocktailsSearch)); 


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
import { compose } from 'redux';

export class CocktailsSearch extends Component {

    state = {
        inputText: ''
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
            {/* // <Grid container direction="row" className={classes.gridRoot} alignItems="top" spacing = {2}> */}
            {/* //      <Grid item xs={4} > */}
                <button> <Link to="favoriteCocktails"> Favorites Page </Link> </button>
                    {/* // </Grid> */}
                    {/* //  <Grid item xs={4} > */}
                <h1>Pick Your Poison </h1>
                    {/* // </Grid>
                    // <Grid item xs={4} > */}
                <input type="text" placeholder="search" onChange={this.handleChange} />
                    {/* // </Grid>
                    // <Grid item xs={4} > */}
                <button onClick={(event) => this.handleInputClick(event, this.state.inputText)}>Submit</button>
                    {/* // </Grid>
  
                
                    //     <Grid item xs={4} > */}
                    {/* <span onClick={(event) => this.handleIconClick(event, "Tequila")}> Tequila </span> */}
                {/* <Card >
                    <CardMedia
                        component="img"
                        src="images/Bar.jpeg"
                        title="The Bar"
                    />
                    <CardContent>
                        <Typography>
                            Grab a cocktail
                        </Typography>

                    </CardContent>
                </Card> */}
                        {/* // </Grid>
                        // <Grid item xs={4} > */}
                    <span onClick={(event) => this.handleIconClick(event, "Vodka")}> Vodka </span>
                        {/* // </Grid>
                        //  <Grid item xs={4} > */}
                    <span onClick={(event) => this.handleIconClick(event, "Gin")}> Gin </span>
                        {/* // </Grid>
                        // <Grid item xs={4} > */}
                    <span onClick={(event) => this.handleIconClick(event, "Scotch")}> Scotch </span>
                        {/* // </Grid>
                        // <Grid item xs={4} > */}
                    <span onClick={(event) => this.handleIconClick(event, "Rum")}> Rum </span>
                        {/* // </Grid> */}
        
             
               
                {/* // <Grid item xs={4} > */}
                <CocktailsResultsList />
                      
                {/* // </Grid> */}

                {/* // </Grid> */}

           
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

// export default withStyles(styles) (connect(reduxStateToProps) (CocktailsSearch));

export default connect (reduxStateToProps) (withStyles(styles) (CocktailsSearch)); 


// connect(reduxStateToProps)(withStyles(styles)(CocktailsSearch));

// export default connect(reduxStateToProps) (CocktailsSearch); 
// export default (withStyles(styles)(ActivityPage)); //need this for cards
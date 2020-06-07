import React, { Component } from 'react';
import { connect } from 'react-redux';
import CockTailFavoriteRecipeIngredient from '../CocktailFavoriteRecipeIngredient/CocktailFavoriteRecipeIngredient'; 
import './CocktailFavoriteRecipe.css'; 
import { withStyles } from '@material-ui/core/styles';
import { Typography, TextField } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import styles from '../../ui/Theme';
import PropTypes from 'prop-types';
import Textfield from "@material-ui/core";
import Button from '@material-ui/core/Button';




export class CocktailFavoriteRecipe extends Component {

    state = {
        editMode: true, 
        drinkID: this.props.favoriteCocktailRecipe[0].id,
        comments: '',
        commentsOnPage: this.props.favoriteCocktailRecipe[0].comments 

    }

    //conditionally renders edit functionality 
    editComments = () => {
         this.setState({
            ...this.state, 
            editMode: !this.state.editMode
        })
        // console.log('in editComments',this.state)
    }

    handleDelete = (event, property) => {
        console.log('in deleteFavorite', property)
        this.props.dispatch({ type: 'DELETE_FAVORITE_COCKTAIL', payload: property })
    }

    //updates comments display functionality  
    submitComments = () => {
        this.setState({
            ...this.state,
            editMode: !this.state.editMode,
            commentsOnPage: this.state.comments
        })
        console.log(`this.state.comments`,this.state.comments, `this.state.commentsOnPage`, this.state.commentsOnPage)
        if (this.state.comments === ''){
            console.log('IN EMPTY STRING')
            this.props.dispatch({ type: 'EDIT_FAVORITE_COCKTAIL_COMMENTS', payload: { comments: this.state.commentsOnPage, id: this.props.favoriteCocktailRecipe[0].id } });
        } else {
        this.props.dispatch({ type: 'EDIT_FAVORITE_COCKTAIL_COMMENTS', payload: { comments: this.state.comments, id: this.props.favoriteCocktailRecipe[0].id } });
        }
    }

    handleChange = (event) => {
        this.setState({
            ...this.state, 
            comments: event.target.value
        })
    }

    //conditionally renders the Favorite Cocktail list 
    handleClick = () => {
        // console.log('in handleClick'); 
        { this.props.dispatch({ type: 'SET_COCKTAILS_FAVORITE_RECIPE_SHOWING' }) }
    }

//   {this.props.favoriteCocktailRecipe[0].comments} 

    render() {
        const { classes } = this.props; //need this for cards 
        let comments = <span> </span>; 
        let editButton = <span> </span>;
        if(this.state.editMode){
            comments = <Typography className={classes.marginLeft}>  {this.state.commentsOnPage}  </Typography>
            editButton = <Button className={classes.button} variant = "outlined" onClick={this.editComments}> Edit </Button>
        } else {
           
            comments = <div><TextField className={classes.marginLeft} defaultValue={this.state.commentsOnPage} onChange={this.handleChange} /> </div> 
            editButton = <Button className={classes.button} variant = "outlined" onClick={this.submitComments}> Submit </Button>
       
        }
       
        return (
            <div>
                <h1 className= "marginLeft"> {this.props.favoriteCocktailRecipe[0].drink_name} </h1>
                <img src={this.props.favoriteCocktailRecipe[0].image_url} className="recipePhoto" />
                {comments}
                {editButton}
                <Button variant = "outlined" onClick={(event) => this.handleDelete(event, this.props.favoriteCocktailRecipe[0].id)}> Delete cocktail </Button>
               
                <Typography className={classes.directions} > Directions: {this.props.favoriteCocktailRecipe[0].method} </Typography>
                <ul>
                    {this.props.favoriteCocktailRecipe.map(ingredient_measurement => {
                        return (
                            <CockTailFavoriteRecipeIngredient ingredient_measurement={ingredient_measurement} />)
                    }
                    )}
                </ul>

                 <Button variant = "outlined" onClick={this.handleClick}> Back to Favorites </Button>
                
            </div>
        )
    }
}

CocktailFavoriteRecipe.propTypes = { classes: PropTypes.object.isRequired };

const reduxStateToProps = (reduxState) => {
    return {
        favoriteCocktailsRecipeShowing: reduxState.cocktailsFavoriteRecipeShowing, 
        favoriteCocktailRecipe: reduxState.cocktailsFavoriteRecipe
    }
}

// export default connect(reduxStateToProps)(CocktailFavoriteRecipe);
export default connect(reduxStateToProps)(withStyles(styles)(CocktailFavoriteRecipe)); 




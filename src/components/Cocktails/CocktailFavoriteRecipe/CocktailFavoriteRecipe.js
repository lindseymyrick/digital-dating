import React, { Component } from 'react';
import { connect } from 'react-redux';
import CockTailFavoriteRecipeIngredient from '../CocktailFavoriteRecipeIngredient/CocktailFavoriteRecipeIngredient'; 
import './CocktailFavoriteRecipe.css'; 





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
        console.log('in editComments',this.state)
    }

    //updates comments display functionality  
    submitComments = () => {
        this.setState({
            ...this.state,
            editMode: !this.state.editMode,
            commentsOnPage: this.state.comments
        })
        this.props.dispatch({ type: 'EDIT_FAVORITE_COCKTAIL_COMMENTS', payload: { comments: this.state.comments, id: this.props.favoriteCocktailRecipe[0].id } });
    }

    handleChange = (event) => {
        this.setState({
            ...this.state, 
            comments: event.target.value
        })
    }

    //conditionally renders the Favorite Cocktail list 
    handleClick = () => {
        console.log('in handleClick'); 
        { this.props.dispatch({ type: 'SET_COCKTAILS_FAVORITE_RECIPE_SHOWING' }) }
    }

//   {this.props.favoriteCocktailRecipe[0].comments} 

    render() {
        let comments = <span> </span>; 
        let editButton = <span> </span>;
        if(this.state.editMode){
             comments = <p>Comments: {this.state.commentsOnPage}  </p>
            editButton = <button onClick={this.editComments}> Edit </button>
        } else {
            comments = <input placeholder={this.state.commentsOnPage} onChange= {this.handleChange} /> 
            editButton = <button onClick={this.submitComments}> Submit </button>
        }
       
        return (
            <div>
                <h1> {this.props.favoriteCocktailRecipe[0].drink_name} </h1>
                <img src={this.props.favoriteCocktailRecipe[0].image_url} className="recipePhoto" />
                {comments}
                {editButton}
               
                <p> Method: {this.props.favoriteCocktailRecipe[0].method} </p>
                <ul>
                    {this.props.favoriteCocktailRecipe.map(ingredient_measurement => {
                        return (
                            <CockTailFavoriteRecipeIngredient ingredient_measurement={ingredient_measurement} />)
                    }
                    )}
                </ul>

                 <button onClick={this.handleClick}> Back to Favorites </button>
                
            </div>
        )
    }
}

const reduxStateToProps = (reduxState) => {
    return {
        favoriteCocktailsRecipeShowing: reduxState.cocktailsFavoriteRecipeShowing, 
        favoriteCocktailRecipe: reduxState.cocktailsFavoriteRecipe
    }
}

export default connect(reduxStateToProps)(CocktailFavoriteRecipe);



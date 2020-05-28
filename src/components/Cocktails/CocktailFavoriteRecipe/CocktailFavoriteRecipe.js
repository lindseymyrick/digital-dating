import React, { Component } from 'react';
import { connect } from 'react-redux';
import CockTailFavoriteRecipeIngredient from '../CocktailFavoriteRecipeIngredient/CocktailFavoriteRecipeIngredient'; 




export class CocktailFavoriteRecipe extends Component {

    state = {
        editMode: false, 
        drinkID: this.props.favoriteCocktailRecipe[0].id
    }

    editComments = () => {
         this.setState({
            ...this.state, 
            editMode: !this.state.editMode
        })
        console.log('in editComments',this.state)
    }

    submitComments = () => {
        this.setState({
            ...this.state,
            editMode: !this.state.editMode
        })
    }

    //conditionally renders the Favorite Cocktail list 
    handleClick = () => {
        console.log('in handleClick'); 
        { this.props.dispatch({ type: 'SET_COCKTAILS_FAVORITE_RECIPE_SHOWING' }) }
    }

  

    render() {
        let comments = <span> </span>; 
        let editButton = <span> </span>;
        if(this.state.editMode){
             comments = <p>Comments: {this.props.favoriteCocktailRecipe[0].comments}  </p>
            editButton = <button onClick={this.editComments}> Edit </button>
        } else {
            comments = <input placeholder={this.props.favoriteCocktailRecipe[0].comments} /> 
            editButton = <button onClick={this.submitComments}> Submit </button>
        }
       
        return (
            <div>
                <h1> {this.props.favoriteCocktailRecipe[0].drink_name} </h1>
                <img src={this.props.favoriteCocktailRecipe[0].image_url} />
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

{/* <div>
    <h1>{this.props.cocktailRecipe[0].strDrink}</h1>
    <img src={this.props.cocktailRecipe[0].strDrinkThumb} />
    <div>
        <button onClick={this.addToFavorites}> Like </button>
    </div>

    <ul>
        {this.state.ingredients_measurement.map(ingredient_measurement => {
            return (
                <CocktailRecipeIngredient ingredient_measurement={ingredient_measurement} />)
        }
        )}
    </ul>

    <div>
        <h2> Cocktail Method </h2>
        <p> {this.props.cocktailRecipe[0].strInstructions} </p>
    </div>
    <button onClick={this.handleClick}> Back to Search</button>
    <button onClick={this.handleChange}> Change </button>  */}

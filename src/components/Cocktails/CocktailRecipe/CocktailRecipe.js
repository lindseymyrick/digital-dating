import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import CocktailRecipeIngredient from '../CocktailRecipeIngredient/CocktailRecipeIngredient';



export class CocktailRecipe extends Component {
//ingredients for cocktail that was called 
    state = {
     ingredients: [], 
    }

    addToFavorites = () => {
        console.log('add to favorites');
        this.props.dispatch({ type: 'ADD_FAVORITE', payload: this.props.cocktailRecipe[0] })
    }

    //sets state.ingredient when component mounts 
    componentDidMount(){
       this.createIngredientArray(this.props.cocktailRecipe[0], 'strIngredient' );
    //    this.setState({
    //        cocktailRecipe: this.props.cocktailRecipe[0]
    //    })
        
    }


    createIngredientArray = (objectToSearch, keyToFind) => {
        for(let i in objectToSearch) {
            //if the key includes strIngredient, set state.ingredient with value
            if (i.toLowerCase().indexOf(keyToFind.toLowerCase()) !== -1) {
                // if the value is not null, set state.ingredient with value
                if(objectToSearch[i] !== null) {
                    console.log('testing objectToSearch', objectToSearch[i])
                    this.setState (prevState => ({
                        ingredients: [...prevState.ingredients, objectToSearch[i]]
                    }))
                    console.log('in loop',this.state.ingredients)
                }
            }
        }
        console.log('state: ingredients', this.state.ingredients)
        
    }

    //if a user goes back to search, conditionally renders search component 
    handleClick= () => {
        this.props.dispatch({ type: 'SET_COCKTAILS_RECIPE_SHOWING' });
    
    }


    render() {
        return (
            <div>
                <h1>{this.props.cocktailRecipe[0].strDrink}</h1>
                <img src={this.props.cocktailRecipe[0].strDrinkThumb}/>
                <div>
                <button onClick={this.addToFavorites}> Like </button>
                </div>
                <ul>
                    {this.state.ingredients.map(ingredient => {
                        return (
                            <CocktailRecipeIngredient ingredient={ingredient} />)
                    }
                    )}
                </ul>

                <div>
                <h2> Cocktail Method </h2>
                    <p> {this.props.cocktailRecipe[0].strInstructions} </p>
                </div>
                <button onClick={this.handleClick}> Back to Search</button>
               
              
            </div>
        )
    }
}

const reduxStateToProps = (reduxState) => {
    return {
        cocktailRecipe: reduxState.cocktailsRecipe
    }
}
export default connect(reduxStateToProps)(CocktailRecipe);
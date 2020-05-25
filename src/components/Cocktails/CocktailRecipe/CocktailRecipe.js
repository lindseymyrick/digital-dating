import React, { Component } from 'react';
import { connect } from 'react-redux'; 

let ingredientArray = [];

export class CocktailRecipe extends Component {

    componentDidMount(){
       this.createIngredientArray(this.props.cocktailRecipe[0], 'strIngredient' );
    }

    createIngredientArray = (objectToSearch, keyToFind) => {
        for(let i in objectToSearch) {
            if (i.toLowerCase().indexOf(keyToFind.toLowerCase()) !== -1) {
                if(objectToSearch[i] !== null) {
                ingredientArray.push( objectToSearch[i])
                }
            }
        }
        console.log('ingredientArray', ingredientArray)
        return ingredientArray; 
    }

    handleClick= () => {
        this.props.dispatch({ type: 'SET_COCKTAILS_RECIPE_SHOWING' });
    
    }

    render() {
        return (
            <div>
                <h1>{this.props.cocktailRecipe[0].strDrink}</h1>
                <img src={this.props.cocktailRecipe[0].strDrinkThumb}/>
                <ul>
                 
               
                </ul>
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
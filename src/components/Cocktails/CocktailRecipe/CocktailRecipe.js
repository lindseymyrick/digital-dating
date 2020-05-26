import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import CocktailRecipeIngredient from '../CocktailRecipeIngredient/CocktailRecipeIngredient';



export class CocktailRecipe extends Component {

    state = {
     ingredients: []   
    }

    componentDidMount(){
       this.createIngredientArray(this.props.cocktailRecipe[0], 'strIngredient' );
       
    }

    handleStateChange = () => {
        console.log('handleStateChange', this.state.ingredients)
    }

    createIngredientArray = (objectToSearch, keyToFind) => {
        for(let i in objectToSearch) {
            if (i.toLowerCase().indexOf(keyToFind.toLowerCase()) !== -1) {
                // let ingredientToAdd = objectToSearch[i];
                if(objectToSearch[i] !== null) {
                    console.log('testing objectToSearch', objectToSearch[i])
                    this.setState (prevState => ({
                        ingredients: [...prevState.ingredients, objectToSearch[i]]
                    }))
                    console.log('in loop',this.state.ingredients)
                    // console.log('testing objectToSearch', objectToSearch[i])
                    // let ingredientToAdd = objectToSearch[i];
                    // this.setState({
                    //     ...this.state.ingredients,
                    //     ingredients: objectToSearch[i]
                    // })
                //  ingredientArray.push( objectToSearch[i])
                }
            }
        }
        console.log('state: ingredients', this.state.ingredients)
        // return ingredientArray; 
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
                    {/* {ingredientArray.map(ingredient => {
                        return (
                            <CocktailRecipeIngredient ingredient={ingredient} />)
                    } */}
                    )}
                </ul>
                <button onClick={this.handleClick}> Back to Search</button>
                <button onClick = {this.handleStateChange}> Handle </button>
              
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
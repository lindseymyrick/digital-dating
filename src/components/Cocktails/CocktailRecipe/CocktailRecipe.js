import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import CocktailRecipeIngredient from '../CocktailRecipeIngredient/CocktailRecipeIngredient';



export class CocktailRecipe extends Component {
//ingredients for cocktail that was called 
    state = {
     ingredients_measurement: [],
     comments: ''
    }

    addToFavorites = (event) => {
        console.log('add to favorites');
        let promptComments = prompt('Please enter comments');
        console.log('promptComments', promptComments);
        this.setState ({
            comments: promptComments
        });
        this.props.dispatch({ type: 'ADD_FAVORITE', payload: { cocktailDetails: this.props.cocktailRecipe[0], ingredients_methods: this.state.ingredients_methods, comments: promptComments} })
       
    }

    sendFavoriteDispatch = () => {
        console.log('in send favorite dispatch', this.state)
    }

    //sets state.ingredient when component mounts 
    componentDidMount(){
        this.createIngredientArray(this.props.cocktailRecipe[0], 'strIngredient', 'strMeasure');
        // this.createMethodArray(this.props.cocktailRecipe[0], 'strMeasure'); 
    }

    createIngredientArray = (objectToSearch, keyToFind1, keyToFind2 ) => {
        let ingredientArray = [];
        let measureArray = [];
        for(let i in objectToSearch) {
            //if the key includes this string, do logic
            if (i.toLowerCase().indexOf(keyToFind1.toLowerCase()) !== -1) {
                // if the value is not null, set state with value
                if(objectToSearch[i] !== null) {
                    
                    console.log('testing objectToSearch', objectToSearch[i]); 
                    
                    ingredientArray.push(objectToSearch[i]); 
                    // this.setState (prevState => ({
                    //     ingredients: [...prevState.ingredients, objectToSearch[i]]
                    // }))
                    // this.props.dispatch({ type: 'SET_CURRENT_RECIPE', payload: this.state.ingredients });
                    console.log('in ingredinet loop', ingredientArray)
                }
            }
        }
        for (let i in objectToSearch) {
            //if the key includes this string, do logic
            if (i.toLowerCase().indexOf(keyToFind2.toLowerCase()) !== -1) {
                // if the value is not null, set state with value
                if (objectToSearch[i] !== null) {
                    console.log('testing objectToSearch', objectToSearch[i]);
                    measureArray.push(objectToSearch[i]);
                    // this.setState(prevState => ({
                    //     methods: [...prevState.methods, objectToSearch[i]]
                    // }))
                    this.props.dispatch({ type: 'SET_CURRENT_RECIPE', payload: this.state.ingredients });
                }
            }
        }
        console.log('INGREDIENT AND MEASURE ARRAY', ingredientArray, measureArray)
        // console.log('state: ingredients', this.state.methods)

        let zip = (a, b) => a.map((x, i) => [x, b[i]]);
        for (let [a, b] of zip(ingredientArray, measureArray)) {
            console.log(a, b)
            let ingredientAndMethod = `${b} ${a}`;
            console.log('ingredientMethod', ingredientAndMethod)
            this.setState(prevState => ({
                ingredients_measurement: [...prevState.ingredients_measurement, ingredientAndMethod]
            }))
        }
        
    }

    // createMethodArray = (objectToSearch, keyToFind) => {
    //     for (let i in objectToSearch) {
    //         //if the key includes this string, do logic
    //         if (i.toLowerCase().indexOf(keyToFind.toLowerCase()) !== -1) {
    //             // if the value is not null, set state with value
    //             if (objectToSearch[i] !== null) {

    //                 console.log('testing objectToSearch', objectToSearch[i]);
    //                 this.setState(prevState => ({
    //                     methods: [...prevState.methods, objectToSearch[i]]
    //                 }))
    //                 this.props.dispatch({ type: 'SET_CURRENT_RECIPE', payload: this.state.ingredients });
    //                 console.log('in loop', this.state.ingredients)
    //             }
    //         }
    //     }
    //     console.log('state: ingredients', this.state.methods)

    // }


    //if a user goes back to search, conditionally renders search component 
    handleClick= () => {
        this.props.dispatch({ type: 'SET_COCKTAILS_RECIPE_SHOWING' });
    
    }

    // combineIngredientsAndMethods = () => {
    //     let zip = (a, b) => a.map((x, i) => [x, b[i]]);
    //     for (let [a, b] of zip(this.state.ingredients, this.state.methods)) {
    //         console.log(a, b)
    //         let ingredientAndMethod = `${b} ${a}`;
    //         console.log('ingredientMethod', ingredientAndMethod)
    //         this.setState(prevState => ({
    //             ingredients_methods: [...prevState.ingredients_methods, ingredientAndMethod]
    //         }))
    //     }

    // }

    //hello

    handleChange = () => {
        console.log(this.state)
        // let zip = (a,b) => a.map((x, i) => [x,b[i]]);
        // for (let [a,b] of zip (this.state.ingredients, this.state.methods)){
        //     console.log(a, b)
        //     let ingredientAndMethod = `${b} ${a}`;
        //     console.log('ingredientMethod' , ingredientAndMethod)
        //     this.setState(prevState => ({
        //         ingredients_methods: [...prevState.ingredients_methods, ingredientAndMethod]
        //     }))
        // }
        // {
        //     this.state.ingredients.forEach((a, i) => (a + this.state.methods[i]))
        // }
        // { this.state.ingredients.forEach((a, i) => this.setState({
        //     ...this.state,
        //     ingredients_methods: (a + this.state.methods[i])) }
        // })
    }


    render() {
        return (
            <div>
                <h1>{this.props.cocktailRecipe[0].strDrink}</h1>
                <img src={this.props.cocktailRecipe[0].strDrinkThumb}/>
                <div>
                <button onClick={this.addToFavorites}> Like </button>
                </div>
                {/* <ul>
                    {this.state.ingredients.forEach((a,i) => console.log(a + this.state.methods[i]))}
                </ul> */}
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
                <button onClick = {this.handleChange}> Change </button> 
               
              
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
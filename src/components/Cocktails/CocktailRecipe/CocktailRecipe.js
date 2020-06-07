import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'; 
import CocktailRecipeIngredient from '../CocktailRecipeIngredient/CocktailRecipeIngredient';
import './CocktailRecipe.css'; 
import swal from "sweetalert";



//Materiaul UI import 
import { withStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import styles from '../../ui/Theme';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

export class CocktailRecipe extends Component {
    state = {
     ingredients_measurement: [],
     comments: '', 
     show: false 
    }

    // changeText = (notes) => {
    //     let text = notes.target.value; 
    //     this.setState({
    //         ...this.state, 
    //         comments: notes 
    //     })

    //     swal.setActionValue(text);
    // }

    addToFavorites = (event) => {
        console.log('add to favorites');
        swal("Add your comments", {
            content: "input",
        })
            .then((value) => {
                swal(`Visit your favorite cocktails to find this winner again!`);
                this.setState({
                    ...this.state,
                    comments: value
                })
                 this.props.dispatch({ type: 'ADD_FAVORITE', payload: { cocktailDetails: this.props.cocktailRecipe[0], ingredients_measurement: this.state.ingredients_measurement, comments: value, id: this.props.user.id} })
            });
        // let promptComments = prompt('Please enter comments');
        // console.log('promptComments', promptComments);
        // this.setState ({
        //     comments: promptComments
        // });
       
       
    }

    sendFavoriteDispatch = () => {
        console.log('in send favorite dispatch', this.state)
    }

    
    componentDidMount(){
        this.createIngredientArray(this.props.cocktailRecipe[0], 'strIngredient', 'strMeasure');
        
    }

    //combines ingredients and measurments, and sets state 
    createIngredientArray = (objectToSearch, keyToFind1, keyToFind2 ) => {
        let ingredientArray = [];
        let measureArray = [];
        for(let i in objectToSearch) {
            //if the key includes this string, do logic
            if (i.toLowerCase().indexOf(keyToFind1.toLowerCase()) !== -1) {
                // if the value is not null, push to array
                if(objectToSearch[i] !== null) {
                    console.log('testing objectToSearch', objectToSearch[i]); 
                    ingredientArray.push(objectToSearch[i]); 
                    console.log('in ingredinet loop', ingredientArray)
                }
            }
        }
        for (let i in objectToSearch) {
            //if the key includes this string, do logic
            if (i.toLowerCase().indexOf(keyToFind2.toLowerCase()) !== -1) {
                // if the value is not null, push to array
                if (objectToSearch[i] !== null) {
                    console.log('testing objectToSearch', objectToSearch[i]);
                    measureArray.push(objectToSearch[i]);
                }
            }
        }
        console.log('INGREDIENT AND MEASURE ARRAY', ingredientArray, measureArray)
        

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



    //if a user goes back to search, conditionally renders search component 
    handleClick= () => {
        this.props.dispatch({ type: 'SET_COCKTAILS_RECIPE_SHOWING' });
    
    }



    handleChange = () => {
        console.log(this.state)
    }


    render() {
        const { classes } = this.props; //need this for cards 
        let recipeOrComments = <span>></span> 

        return (
            <>

            {/* <input 
            value={this.state.comments}
            onChange={this.changeText} 
            /> */}


        

            <Box className={classes.recipe}>
                <h1>
                    {this.props.cocktailRecipe[0].strDrink}
                </h1>
                <img src={this.props.cocktailRecipe[0].strDrinkThumb} className="recipePhoto" />
                
                <div>
                <Button className={classes.buttonTwo} variant="outlined" onClick={(this.addToFavorites)}> Add To Favorites </Button>
                </div>
                    <Typography className={classes.directions}>
                        Directions: {this.props.cocktailRecipe[0].strInstructions}
                    </Typography>
                    <Typography className= {classes.directions}>
                        Ingredients:
                                {this.state.ingredients_measurement.map(ingredient_measurement => {
                        return (
                            <CocktailRecipeIngredient ingredient_measurement={ingredient_measurement} />)
                    }
                    )}
                    </Typography>
                     
                     <Button variant= "outlined" onClick={this.handleClick} className={classes.buttonTwo}> Back to Search</Button>

            </Box>

            
              
           </>
        )
    }
}

// We want to retrieve MyInput as a pure DOM node: 
// let wrapper = document.createElement('div');
// ReactDOM.render(<CocktailRecipe />, wrapper);
// let el = wrapper.firstChild;

// swal({
//     text: "Write something here:",
//     content: el,
//     buttons: {
//         confirm: {
//             /*
//              * We need to initialize the value of the button to
//              * an empty string instead of "true":
//              */
//             value: ''
//         },
//     },
// })
//     .then((value) => {
//         swal(`You typed: ${value}`);
//     });

CocktailRecipe.propTypes = { classes: PropTypes.object.isRequired };

const reduxStateToProps = (reduxState) => {
    return {
        cocktailRecipe: reduxState.cocktailsRecipe,
        user: reduxState.user
    }
}
export default connect (reduxStateToProps) (withStyles(styles) (CocktailRecipe)); 






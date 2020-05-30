import React, { Component } from 'react';
import '../Cocktails.css'; 
import { connect } from 'react-redux'; 
import Grid from '@material-ui/core/Grid';


export class CocktailsResultsItem extends Component {
    handleClick = () => {
        console.log('in handleClick', this.props.cocktail.idDrink);
        this.props.dispatch({ type: 'GET_ID_COCKTAIL', payload: this.props.cocktail.idDrink});
    }

    render() {
        return (
           
                <>
                    <h2> {this.props.cocktail.strDrink} </h2>
                    <img onClick={this.handleClick} alt="cocktail" src={this.props.cocktail.strDrinkThumb} />
                    
               </>
            
        )
    }
}


export default connect()(CocktailsResultsItem); 

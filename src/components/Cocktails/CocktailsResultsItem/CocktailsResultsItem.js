import React, { Component } from 'react';
import '../Cocktails.css'; 
import { connect } from 'react-redux'; 


export class CocktailsResultsItem extends Component {
    handleClick = () => {
        console.log('in handleClick', this.props.cocktail.idDrink);
        this.props.dispatch({ type: 'GET_ID_COCKTAIL', payload: this.props.cocktail.idDrink});
    }

    render() {
        return (
            <div>
                <li>
                    <h2> {this.props.cocktail.strDrink} </h2>
                    <img onClick={this.handleClick} alt="cocktail" src={this.props.cocktail.strDrinkThumb} />
                    
                </li>
            </div>
        )
    }
}


export default connect()(CocktailsResultsItem); 

import React, { Component } from 'react';
import '../Cocktails.css'; 


export class CocktailsResultsItem extends Component {
    render() {
        return (
            <div>
                <li>
                    <h2> {this.props.cocktail.strDrink} </h2>
                    <img alt="cocktail" src={this.props.cocktail.strDrinkThumb} />
                    
                </li>
            </div>
        )
    }
}


export default CocktailsResultsItem; 

import React, { Component } from 'react';


export class CocktailsResultsItem extends Component {
    render() {
        return (
            <div>
                <li>
                    <h2> {this.props.cocktail.strDrink} </h2>
                    <img src={this.props.cocktail.strDrinkThumb} />
                    
                </li>
            </div>
        )
    }
}


export default CocktailsResultsItem; 

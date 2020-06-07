import React, { Component } from 'react';

export class CocktailFavoriteRecipeIngredient extends Component {
    render() {
        return (
            <div>
                <li> {this.props.ingredient_measurement.ingredient_measurement} </li>
            </div>
        )
    }
}

export default CocktailFavoriteRecipeIngredient;

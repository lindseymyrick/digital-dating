import React, { Component } from 'react'

export class CocktailRecipeIngredient extends Component {
    render() {
        return (
            <div>
                <li> {this.props.ingredient} </li>
            </div>
        )
    }
}

export default CocktailRecipeIngredient

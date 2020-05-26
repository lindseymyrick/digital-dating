import React, { Component } from 'react'

export class CocktailRecipeIngredient extends Component {
    render() {
        return (
            <div>
                <li> {this.props.ingredient} </li>
                {JSON.stringify(this.props)}
            </div>
        )
    }
}

export default CocktailRecipeIngredient

import React, { Component } from 'react'

export class CocktailsFavoritesItem extends Component {
    render() {
        return (
            <div>
                
                <li>
                    <h2> {this.props.cocktail.drink_name} </h2>
                    <img onClick={this.handleClick} alt="cocktail" src={this.props.cocktail.image_url} />
                    
                </li>
            </div>
        )
    }
}

export default CocktailsFavoritesItem

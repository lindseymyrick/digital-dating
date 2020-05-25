import React, { Component } from 'react';
import { connect } from 'react-redux'; 

export class CocktailRecipe extends Component {
    handleClick= () => {
        this.props.dispatch({ type: 'SET_COCKTAILS_RECIPE_SHOWING' });
    }

    render() {
        return (
            <div>
                <h1>Cocktail Recipe</h1>
                <button onClick={this.handleClick}> Back to Search</button>
            </div>
        )
    }
}

export default connect()(CocktailRecipe); 
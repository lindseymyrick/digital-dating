import React, { Component } from 'react';
import {connect} from 'react-redux';

export class CocktailsFavoritesItem extends Component {
    handleClick = () => {
        this.props.dispatch({ type: 'GET_ID_FAVORITE_COCKTAIL', payload: this.props.cocktail.id });
    }

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

const reduxStateToProps = (reduxState) => {
    return {
        user: reduxState.user
    }
}
export default connect(reduxStateToProps)(CocktailsFavoritesItem);

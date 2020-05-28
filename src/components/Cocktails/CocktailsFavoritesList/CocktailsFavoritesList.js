import React, { Component } from 'react'; 
import {connect} from 'react-redux';
import CocktailsFavoriteItem from '../CocktailsFavoritesItem/CocktailsFavoritesItem';

export class CocktailsFavoritesList extends Component {
    componentDidMount() {
        this.props.dispatch({type: 'FETCH_FAVORITES' }); 
    }

    render() {
        return (
            <div>
                <h2> Favorite Cocktails </h2> 
                <ul>
                    {this.props.favoriteCocktailsList.map(cocktail => {
                    return (
                        <CocktailsFavoriteItem cocktail={cocktail} />
                    )
                })}
            </ul>)
            </div>
        )
    }
}

const reduxStateToProps = (reduxState) => {
    return {
        favoriteCocktailsList: reduxState.cocktailsFavoriteList
    }
}

export default connect(reduxStateToProps)(CocktailsFavoritesList);

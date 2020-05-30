import React, { Component } from 'react'; 
import {connect} from 'react-redux';
import CocktailsFavoriteItem from '../CocktailsFavoritesItem/CocktailsFavoritesItem';
import CocktailFavoriteRecipe from '../CocktailFavoriteRecipe/CocktailFavoriteRecipe';

export class CocktailsFavoritesList extends Component {
   
    componentDidMount() {
        console.log('in componentDidMount of FavoritesList')
        this.props.dispatch({type: 'FETCH_FAVORITES' }); 
    }

 

    render() {
        let listOrRecipe = <span> </span>;
        if (this.props.favoriteCocktailsRecipeShowing) {
            listOrRecipe = <CocktailFavoriteRecipe />
        } else {
            listOrRecipe = 
            <>
                 
                 <h2> Favorite Cocktails </h2>
                <ul>
                    {this.props.favoriteCocktailsList.map(cocktail => {
                        return (
                            <CocktailsFavoriteItem cocktail={cocktail} />
                        )
                    })}
                </ul>

                
            </>
        }
        
        return (
            
            
            <div>

            {listOrRecipe}

            </div>
         
            
        )
    }
}

const reduxStateToProps = (reduxState) => {
    return {
        favoriteCocktailsList: reduxState.cocktailsFavoriteList,
        favoriteCocktailsRecipeShowing: reduxState.cocktailsFavoriteRecipeShowing
    }
}

export default connect(reduxStateToProps)(CocktailsFavoritesList);

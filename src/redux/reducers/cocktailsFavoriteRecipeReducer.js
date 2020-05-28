//change favoriteCocktailRecipe reduxState so that recipe pops up
const favoriteCocktailsRecipe = (state = [], action) => {
    switch (action.type) {
        case 'SET_COCKTAILS_FAVORITE_RECIPE':
            console.log('in setCocktail');
            return action.payload;
        default:
            return state;
    }
};


export default favoriteCocktailsRecipe;
//change cocktailRecipeShowing state so that the recipe shows on DOM
const favoriteCocktailsRecipeShowing = (state = false, action) => {
    switch (action.type) {
        case 'SET_COCKTAILS_FAVORITE_RECIPE_SHOWING':
            console.log('in favoriteRecipeSHowing');
            return !state;
        default:
            return state;
    }
};


export default favoriteCocktailsRecipeShowing;
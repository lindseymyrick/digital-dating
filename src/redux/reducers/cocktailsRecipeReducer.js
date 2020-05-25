//change cocktailRecipe reduxState so that recipe pops up
const cocktailsRecipe = (state = false, action) => {
    switch (action.type) {
        case 'SEND_COCKTAIL_ERROR':
            return !state;
        default:
            return state;
    }
};


export default cocktailsRecipe;
//change cocktailRecipe reduxState so that recipe pops up
const cocktailsRecipe = (state = [], action) => {
    switch (action.type) {
        case 'SET_COCKTAILS_RECIPE':
            console.log('in setCocktail');
            return action.payload;
        default:
            return state;
    }
};


export default cocktailsRecipe;
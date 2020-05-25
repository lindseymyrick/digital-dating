//change cocktailRecipeShowing state so that the recipe shows on DOM
const cocktailsRecipeShowing = (state = false, action) => {
    switch (action.type) {
        case 'SET_COCKTAILS_RECIPE_SHOWING':
            console.log('in recipeSHowing');
            return !state;
        default:
            return state;
    }
};


export default cocktailsRecipeShowing;
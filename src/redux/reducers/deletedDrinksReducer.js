//changes reduxState cocktail for rendering to cocktailList
const deletedCocktails = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_DELETED_DRINKS':
            return action.payload;
        default:
            return state;
    }
};


export default deletedCocktails;
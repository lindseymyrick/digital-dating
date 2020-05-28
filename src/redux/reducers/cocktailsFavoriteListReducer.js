//change set favoriteCocktailsList reducer
const favoriteCocktailsList = (state = [], action) => {
    switch (action.type) {
        case 'SET_FAVORITE_COCKTAILS':
            console.log('in setFavoriteCocktail');
            return action.payload;
        default:
            return state;
    }
};


export default favoriteCocktailsList;
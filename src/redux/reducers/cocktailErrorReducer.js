//change cocktailError reduxState so that an alert pops up
const cocktailsError = (state = false, action) => {
    switch (action.type) {
        case 'SEND_COCKTAIL_ERROR':
            return !state;
        default:
            return state;
    }
};


export default cocktailsError;
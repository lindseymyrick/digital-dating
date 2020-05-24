
//changes reduxState cocktail for rendering to cocktailList
const cocktails = (state = [], action) => {
    switch (action.type) {
        case 'SET_COCKTAILS':
            return action.payload;
        default:
            return state;
    }
};


export default cocktails;
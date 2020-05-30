//conditionally render favorite cocktails on Nav Bar
const favoritesNavigation = (state = false, action) => {
    switch (action.type) {
        case 'CHANGE_NAV_SHOW_FAVORITES':
            return !state;
        default:
            return state;
    }
};


export default favoritesNavigation;
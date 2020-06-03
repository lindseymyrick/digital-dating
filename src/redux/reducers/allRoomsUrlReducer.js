const allRoomsURL = (state = [], action) => {
    switch (action.type) {
        case 'SET_ALL_ROOMS':
            return action.payload;
        default:
            return state;
    }
};


export default allRoomsURL;
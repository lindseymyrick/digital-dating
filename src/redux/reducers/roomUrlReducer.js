const roomURL = (state = [], action) => {
    switch (action.type) {
        case 'SET_ROOM_URL':
            return action.payload;
        default:
            return state;
    }
};


export default roomURL;
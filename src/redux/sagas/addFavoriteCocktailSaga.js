import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addFavorite(action) {
    try {
        console.log('in addFavoriteSaga', action.payload);
        
        //get request to API based on input field 
        const response = yield axios.post(`/favorite/cocktail`, action.payload);

        //put request to change reduxState for cocktail 
        // if (response.data === null) {
        //     yield put({ type: 'SEND_COCKTAIL_ERROR', payload: response.data });
        // } else {
        //     yield put({ type: 'SET_COCKTAILS', payload: response.data });
        // }
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* watcher() {
    yield takeLatest('ADD_FAVORITE', addFavorite);
}

export default watcher;
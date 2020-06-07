import axios from 'axios';
import {  takeLatest } from 'redux-saga/effects';

function* addFavorite(action) {
    try {
        console.log('in addFavoriteSaga', action.payload);
        
        //get request to API based on input field 
        const response = yield axios.post(`/favorite/cocktail`, action.payload);

       
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* watcher() {
    yield takeLatest('ADD_FAVORITE', addFavorite);
}

export default watcher;
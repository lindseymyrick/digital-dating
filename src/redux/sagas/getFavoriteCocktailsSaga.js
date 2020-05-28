import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getFavorite(action) {
    try {
        console.log('in getFavoriteSaga');

        //get request to API based on input field 
        const response = yield axios.get(`/favorite/cocktail`);

        //put request to change reduxState for favorite cocktail lsit 
       
     yield put({ type: 'SET_FAVORITE_COCKTAILS', payload: response.data });
      
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* watcher() {
    yield takeLatest('FETCH_FAVORITES', getFavorite);
}

export default watcher;
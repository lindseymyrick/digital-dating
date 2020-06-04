import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* deleteFavorite(action) {
    try {

        //delete favorite cocktail 
        const response = yield axios.delete(`/favorite/cocktail/${action.payload}`);

        //put request to change reduxState for cocktail 
       
        yield put({ type: 'FETCH_FAVORITES', payload: response.data });
     
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* watcher() {
    yield takeLatest('DELETE_FAVORITE_COCKTAIL', deleteFavorite);
}

export default watcher;
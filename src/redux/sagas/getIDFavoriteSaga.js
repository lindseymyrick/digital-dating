import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getIDFavorite(action) {
    try {

        //get request to API based on input field 
        const response = yield axios.get(`/favorite/cocktail/recipe/${action.payload}`);
        console.log('response', response)

        //put request to change reduxState for cocktail 
            yield put({ type: 'SET_COCKTAILS_FAVORITE_RECIPE', payload: response.data });
            yield put({ type: 'SET_COCKTAILS_FAVORITE_RECIPE_SHOWING' });
        
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* watcher() {
    yield takeLatest('GET_ID_FAVORITE_COCKTAIL', getIDFavorite);
}

export default watcher;
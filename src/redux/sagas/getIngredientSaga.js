import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getCocktails(action) {
    try {

         //get request to API based on input field 
        const response = yield axios.get(`/api/ingredient/cocktail/${action.payload}`);
     
        //put request to change reduxState for cocktail 
        if (response.data === null) {
            yield put({ type: 'SEND_COCKTAIL_ERROR', payload: response.data });
        } else {
            yield put({ type: 'SET_COCKTAILS', payload: response.data });
        }
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* watcher() {
    yield takeLatest('GET_INGREDIENT_COCKTAILS', getCocktails);
}

export default watcher;
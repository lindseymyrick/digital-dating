import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getCocktails(action) {
    try {
        //get request to API based on input field 
        const response = yield axios.get(`/api/name/cocktail/${action.payload}`);
      
        //put to change reduxState cocktail 
        yield put({ type: 'SET_COCKTAILS', payload: response.data });
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* watcher() {
    yield takeLatest('GET_NAME_COCKTAILS', getCocktails);
}

export default watcher;


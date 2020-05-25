import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getID(action) {
    try {
       
        //get request to API based on input field 
        const response = yield axios.get(`/api/id/cocktail/${action.payload}`);
        console.log('response', response)

        //put request to change reduxState for cocktail 
        // if (response.data === null) {
        //     yield put({ type: 'SEND_COCKTAIL_ERROR', payload: response.data });
        // } else {
            // yield put({ type: 'SET_COCKTAILS', payload: response.data });
        // }
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* watcher() {
    yield takeLatest('GET_ID_COCKTAIL', getID);
}

export default watcher;
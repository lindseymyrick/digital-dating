import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getDeleted(action) {
    try {
        console.log('in getDeleted', action.payload);

        // post request to add deleted cocktail to Database so that the API will not return that in future queries 
        const response = yield axios.get('/deleted/cocktail');

        yield put({ type: 'UPDATE_DELETED_DRINKS', payload: response.data });

    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* watcher() {
    yield takeLatest('GET_DELETED_COCKTAILS', getDeleted);
}

export default watcher;
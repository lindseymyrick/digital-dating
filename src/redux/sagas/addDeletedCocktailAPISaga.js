import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addDeleted(action) {
    try {
        console.log('in addDeleted', action.payload);

        // post request to add deleted cocktail to Database so that the API will not return that in future queries 
        const response = yield axios.post('/deleted/cocktail', action.payload);
        
        yield put({ type: 'UPDATE_DELETED_DRINKS', payload: response.data });
     
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* watcher() {
    yield takeLatest('ADD_DELETED_COCKTAIL_API', addDeleted);
}

export default watcher;
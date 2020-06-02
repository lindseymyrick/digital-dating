import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getRoom(action) {
    try {
        //get request to API based on input field 
        const response = yield axios.get(`/room`);
       

        yield put({ type: 'SET_ROOM_URL', payload: response.data });
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* watcher() {
    yield takeLatest('GET_ROOM_URL', getRoom);
}

export default watcher;
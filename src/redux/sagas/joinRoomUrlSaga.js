import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* joinRoom(action) {
    try {
        console.log('in join room', action.payload)
        //get request to API based on input field 
        // const response = yield axios.get(`/room`);


        // yield put({ type: 'SET_ROOM_URL', payload: response.data });
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* watcher() {
    yield takeLatest('JOIN_ROOM_URL', joinRoom);
}

export default watcher;
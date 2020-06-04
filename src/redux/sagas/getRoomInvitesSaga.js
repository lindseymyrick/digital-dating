import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* joinRoom(action) {
    try {
        //get request to API based on input field 
        const response = yield axios.get(`/room/invite/${action.payload}`);
        

        console.log(response.data)
        yield put({ type: 'SET_ALL_ROOMS', payload: response.data });

    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* watcher() {
    yield takeLatest('GET_ROOM_URLS', joinRoom);
}

export default watcher;
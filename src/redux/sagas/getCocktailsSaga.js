import React, { Component } from 'react';
import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* getCocktails(action) {
    try {

        console.log('in getCocktails Saga', action.payload)
        const response = yield axios.get(`/api/cocktail/${action.payload}`);

        // now that the session has given us a user object
        // with an id and username set the client-side user object to let
        // the client-side code know the user is logged in
        yield put({ type: 'SET_USER', payload: response.data });
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* watcher() {
    yield takeLatest('GET_COCKTAILS', getCocktails);
}

export default watcher;


import React, { Component } from 'react';
import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getCocktails(action) {
    try {

        console.log('in getCocktails Saga', action.payload)
        const response = yield axios.get(`/api/cocktail/${action.payload}`);
        // console.log(response.data);
        // now that the session has given us a user object
        // with an id and username set the client-side user object to let
        // the client-side code know the user is logged in
        yield put({ type: 'SET_COCKTAILS', payload: response.data });
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* watcher() {
    yield takeLatest('GET_COCKTAILS', getCocktails);
}

export default watcher;


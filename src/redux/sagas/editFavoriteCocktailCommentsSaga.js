import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* editFavoriteCocktailComments(action) {
    try {
        console.log('in editFavoriteCocktailCommentsSaga', action.payload.comments);

        //get request to API based on input field 
         const response = yield axios.put(`/favorite/cocktail/${action.payload.id}`, action.payload);

        yield put({ type: 'FETCH_FAVORITES'});
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* watcher() {
    yield takeLatest('EDIT_FAVORITE_COCKTAIL_COMMENTS', editFavoriteCocktailComments);
}

export default watcher;
import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import  getNameSaga from './getNameSaga'; 
import getIngredientSaga from './getIngredientSaga';
import getIDSaga from './getIDSaga';
import addFavorite from './addFavoriteCocktailSaga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    getNameSaga(), 
    getIngredientSaga(),
    getIDSaga(),
    addFavorite(),
  ]);
}

import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import  getNameSaga from './getNameSaga'; 
import getIngredientSaga from './getIngredientSaga';
import getIDSaga from './getIDSaga';
import addFavorite from './addFavoriteCocktailSaga';
import getFavorite from './getFavoriteCocktailsSaga';
import getIDFavoriteSaga from './getIDFavoriteSaga';
import editFavoriteCocktailComments from './editFavoriteCocktailCommentsSaga';
import addDeletedCocktailAPI from './addDeletedCocktailAPISaga'; 
import getDeleteCocktailAPI from './getDeletedCocktailsAPISaga'; 
import getRoom from './getRoomUrlSaga';
import getRoomInvites from './getRoomInvitesSaga';
import joinRoom from './joinRoomsSaga';
import deleteFavorite from './deleteFavoriteCocktailSaga'; 


// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), //login request
    registrationSaga(), //registration request
    userSaga(),
    getNameSaga(), 
    getIngredientSaga(),
    getIDSaga(), 
    addFavorite(), //add to favorite table
    getFavorite(), //get all favorite cocktails (basic information)
    getIDFavoriteSaga(), //get all information for chosen favorite cocktail
    editFavoriteCocktailComments(), //edit comments
    addDeletedCocktailAPI(), //add cocktail to deleted table (API)
    getDeleteCocktailAPI(), //get deleted cocktail information (API)
    getRoom(), //get empty room
    getRoomInvites(), //get room url based on invite
    joinRoom(),  //join chat room
    deleteFavorite(), //delete favorite cocktail 
  ]);
}

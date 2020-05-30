import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import cocktails from './cocktailsReducer';
import cocktailsError from './cocktailErrorReducer';
import cocktailsRecipe from './cocktailsRecipeReducer';
import cocktailsRecipeShowing from './cocktailsRecipeShowingReducer';
import cocktailsFavoriteList from './cocktailsFavoriteListReducer';
import cocktailsFavoriteRecipeShowing from './cocktailsFavoriteRecipeShowingReducer';
import cocktailsFavoriteRecipe from './cocktailsFavoriteRecipeReducer';
import favoritesNavigation from './changeNavFavorites';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  cocktails, //will set state of API cocktails 
  cocktailsError, //will set state of cocktailError 
  cocktailsRecipe, //sets recipe to show
  cocktailsRecipeShowing, //conditionally renders recipe
  cocktailsFavoriteList, //sets list of favorite cocktails 
  cocktailsFavoriteRecipeShowing, //conditionally renders favorite cocktail recipe
  cocktailsFavoriteRecipe, //sets data for favorite cocktail
  favoritesNavigation, //sets favorites to conditionally render to nav

});

export default rootReducer;

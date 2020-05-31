
const express = require('express');
require('dotenv').config();


const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const cocktailNameRouter = require('./routes/cocktails.name.router');
const cocktailIngredientRouter = require('./routes/cocktails.ingredient.router')
const cocktailIDRouter = require ('./routes/cocktails.id.router');
const favoriteCocktailRouter = require ('./routes/cocktails.favorite.router'); 
const deletedCocktailsRouter = require ('./routes/cocktails.deleted.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/name/cocktail', cocktailNameRouter);
app.use('/api/ingredient/cocktail', cocktailIngredientRouter);
app.use('/api/id/cocktail', cocktailIDRouter); 
app.use('/favorite/cocktail', favoriteCocktailRouter); 
app.use('/deleted/cocktail', deletedCocktailsRouter); 



// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

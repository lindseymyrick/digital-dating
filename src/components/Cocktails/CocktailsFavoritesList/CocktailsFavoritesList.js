import React, { Component } from 'react'; 
import {connect} from 'react-redux';
import CocktailFavoriteRecipe from '../CocktailFavoriteRecipe/CocktailFavoriteRecipe';

//material UI imports 
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import styles from '../../ui/Theme';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

export class CocktailsFavoritesList extends Component {
   
    componentDidMount() {
        console.log('in componentDidMount of FavoritesList')
        this.props.dispatch({type: 'FETCH_FAVORITES' }); 
    }

    handleClick = (event, property) => {
        this.props.dispatch({ type: 'GET_ID_FAVORITE_COCKTAIL', payload: property });
    }

    handleDelete = (event, property) => {
        console.log('in deleteFavorite', property)
        this.props.dispatch({type: 'DELETE_FAVORITE_COCKTAIL', payload: property})
    }

 

    render() {
        const { classes } = this.props; //need this for cards 

        let listOrRecipe = <span> </span>;
        if (this.props.favoriteCocktailsRecipeShowing) {
            listOrRecipe = <CocktailFavoriteRecipe />
        } else {
            listOrRecipe = 
            <>
                <Grid container className={classes.gridRoot} spacing = {2} direction = "column">
                    <Grid item xs={12} container >
                        <Grid item xs={4} />
                        <Grid item xs={4}>
                            <Paper elevation={7} >
                                <Typography>
                                    <h1> Favorite Cocktails </h1>
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={4} />
                    </Grid>
                </Grid>
                <Grid container className={classes.gridRoot} spacing = {2} >
                    {this.props.favoriteCocktailsList.map(cocktail => {
                        return (
                            <Grid item xs={2} >
                                <Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            className={classes.media}
                                            image={cocktail.image_url}
                                            title={cocktail.drink_name}
                                        />
                                        <CardContent>
                                            <Typography>
                                                {cocktail.drink_name}
                                            </Typography>

                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" onClick={(event) => this.handleClick(event, cocktail.id)}>
                                            See more!</Button>
                                        <Button size="small" onClick={(event) => this.handleDelete(event, cocktail.id )}>
                                            Delete</Button>

                                    </CardActions>
                                </Card>


                            </Grid>

                        )
                    })}
                </Grid>
                 
               
            </>
        }
        
        return (
            
            
            <div>

            {listOrRecipe}

            </div>
         
            
        )
    }
}

CocktailsFavoritesList.propTypes = { classes: PropTypes.object.isRequired };

const reduxStateToProps = (reduxState) => {
    return {
        favoriteCocktailsList: reduxState.cocktailsFavoriteList,
        favoriteCocktailsRecipeShowing: reduxState.cocktailsFavoriteRecipeShowing,
        user: reduxState.user
    }
}

// export default connect(reduxStateToProps)(CocktailsFavoritesList);

export default connect(reduxStateToProps)(withStyles(styles)(CocktailsFavoritesList)); 


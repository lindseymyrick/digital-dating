import React, { Component } from 'react';
// import CocktailsResultsItem from '../CocktailsResultsItem/CocktailsResultsItem';
import {connect} from 'react-redux'; 

//material UI imports 
//Material UI Imports 
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
import Button from '@material-ui/core/Button';




export class CocktailsResultsList extends Component {

     errorAlert = () => {
        alert('Sorry we do not have that cocktail!'); 
        this.props.dispatch({ type: 'SEND_COCKTAIL_ERROR' })
    }

    handleClick = (event, property) => {
        // console.log('in handleClick', property);
        this.props.dispatch({ type: 'GET_ID_COCKTAIL', payload: property });
    }

    handleDelete = (event, property) => {
        // console.log('in handleDelete', property ); 
        this.props.dispatch({type: 'ADD_DELETED_COCKTAIL_API', payload: property});
    }

    render() {
        const { classes } = this.props; //need this for cards 
        let list = <span> </span> 
        console.log('reduxState', this.props.error); 
        if (this.props.error){
            this.errorAlert();
                } else {
            // let filteredCocktails = this.props.cocktails.filter(cocktail => cocktail.idDrink !== this.props.deletedCocktails[i].api_id); 
            list = (
               
                <Grid container direction="row" className={classes.gridRoot} alignItems="top" spacing={2}>             
                   {this.props.cocktails.map(cocktail => {
                    //    console.log('in map', cocktail); 
                      for(let i =0; i < this.props.deletedCocktails.length; i++) {
                          console.log('in for loop deleted cocktails', cocktail, this.props.deletedCocktails[i]); 
                          //if they equal return something invisible 
                           if ( cocktail.idDrink == this.props.deletedCocktails[i].api_id) {
                               console.log('Cocktail ID', cocktail.idDrink, 'Deleted Cocktail', this.props.deletedCocktails[i].api_id );
                               return (
                                   null 
                               ) //end return 
                           } //end conditional 
                       } //end for loop
                       return (
                           <Grid item xs={2} >
                               <Card className={classes.root}>
                                   <CardActionArea>
                                       <CardMedia
                                           component="img"
                                           className={classes.media}
                                           image={cocktail.strDrinkThumb}
                                           title={cocktail.strDrink}
                                       />
                                       <CardContent>
                                           <Typography>
                                               {cocktail.strDrink}
                                           </Typography>

                                       </CardContent>
                                   </CardActionArea>
                                   <CardActions>
                                       <Button size="small" onClick={(event) => this.handleClick(event, cocktail.idDrink)}>
                                           See more!</Button>
                                       <Button size="small" onClick={(event) => this.handleDelete(event, { id: cocktail.idDrink, name: cocktail.strDrink })}>
                                           Delete</Button>

                                   </CardActions>
                               </Card>


                           </Grid>

                       )
                     
                        
                   
                    } ) }  
                   
                    
                 </Grid>
             
           ) //end list 
        } //end if there is no error 
        

        return (
            <div>
                {list}
                    
                
                
            </div>
        ) //end return of JSX
    } //end render
} //end component 


CocktailsResultsList.propTypes = { classes: PropTypes.object.isRequired };

const reduxStateToProps = (reduxState) => {
    return {
        cocktails: reduxState.cocktails, 
        error: reduxState.cocktailsError,
        deletedCocktails: reduxState.deletedCocktails,
    }
}

export default connect(reduxStateToProps)(withStyles(styles)(CocktailsResultsList)); 

// export default connect(reduxStateToProps)(CocktailsResultsList);




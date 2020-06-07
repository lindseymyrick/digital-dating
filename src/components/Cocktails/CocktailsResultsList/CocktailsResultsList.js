import React, { Component } from 'react';
import {connect} from 'react-redux'; 
import swal from "sweetalert";

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

    //if user searches for a cocktail not in database
     errorAlert = () => {
        alert('Sorry we do not have that cocktail!'); 
        this.props.dispatch({ type: 'SEND_COCKTAIL_ERROR' })
    }

    //gets recipe information based on ID
    handleClick = (event, property) => {
        this.props.dispatch({ type: 'GET_ID_COCKTAIL', payload: property });
    }

    //adds cocktail to deleted database
    handleDelete = (event, property) => {
        swal({
            title: "Are you sure you want to delete this cocktail?",
            text: "If deleted, you will no longer have access to this recipe!",
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then((willDelete) => {
            if(willDelete){
        this.props.dispatch({type: 'ADD_DELETED_COCKTAIL_API', payload: property});
        swal("This cocktail has been deleted!", { icon: "success" });
            } else {
                swal("Phew, cocktail not deleted!");
            }
         } )
    }

    render() {
        const { classes } = this.props; //need this for cards 
        let list = <span> </span> 
        console.log('reduxState', this.props.error); 
        if (this.props.error){
            this.errorAlert();
                } else {
            list = (
               
                <Grid container direction="row" className={classes.gridRoot} alignItems="top" spacing={2}>             
                   {this.props.cocktails.map(cocktail => {
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





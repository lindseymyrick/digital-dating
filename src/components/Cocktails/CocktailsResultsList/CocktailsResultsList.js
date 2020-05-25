import React, { Component } from 'react';
import CocktailsResultsItem from '../CocktailsResultsItem/CocktailsResultsItem';
import {connect} from 'react-redux'; 




export class CocktailsResultsList extends Component {
     errorAlert = () => {
        alert('Sorry we do not have that cocktail!'); 
        this.props.dispatch({ type: 'SEND_COCKTAIL_ERROR' })
    }

    render() {
        let list = <span> </span> 
        console.log('reduxState', this.props.error); 
        if (this.props.error){
            this.errorAlert();
                } else {
             list = (<ul>
                {this.props.cocktails.map(cocktail => {
                    return (
                        <CocktailsResultsItem cocktail={cocktail} />
                    )
                })}
            </ul>)
                }
        

        return (
            <div>
                {list}
                    
                
                
            </div>
        )
    }
}

const reduxStateToProps = (reduxState) => {
    return {
        cocktails: reduxState.cocktails, 
        error: reduxState.cocktailsError
    }
}
export default connect(reduxStateToProps)(CocktailsResultsList);




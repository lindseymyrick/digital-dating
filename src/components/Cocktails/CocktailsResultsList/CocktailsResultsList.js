import React, { Component } from 'react';
import CocktailsResultsItem from '../CocktailsResultsItem/CocktailsResultsItem';
import {connect} from 'react-redux'; 

export class CocktailsResultsList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.cocktails.map(cocktail => {
                        return (
                            <CocktailsResultsItem cocktail= {cocktail}/>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

const reduxStateToProps = (reduxState) => {
    return {
        cocktails: reduxState.cocktails
    }
}
export default connect(reduxStateToProps)(CocktailsResultsList);




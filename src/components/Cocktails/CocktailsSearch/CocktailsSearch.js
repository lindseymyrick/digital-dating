import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import CocktailsResultsList from '../CocktailsResultsList/CocktailsResultsList';

export class CocktailsSearch extends Component {

    state = {
        inputText: ''
    }

    //sets state.inputText with keyword that user wants to search
    handleChange = (event) => {
        console.log(event.target.value); 
        this.setState({
            ...this.state,
            inputText: event.target.value
        })
    }

    //sets state.searchTerm that will be GET request to API
    handleIconClick = (event, property) => {
        console.log('in handleClick', property );
        this.props.dispatch({type: 'GET_INGREDIENT_COCKTAILS', payload: property})
    }

    handleInputClick = (event, property) => {
        console.log('in handleClick', property);
        this.props.dispatch({ type: 'GET_NAME_COCKTAILS', payload: property })
    }


    render() {
        return (
            <div>
                <h1>Pick Your Poison </h1>
                <input type="text" placeholder="search" onChange={this.handleChange} /> 
                <button onClick={(event) => this.handleInputClick(event, this.state.inputText)}>Submit</button>

                <div>
                    <span onClick= {(event) => this.handleIconClick (event, "Tequila")}> Tequila </span>
                    <span onClick={(event) => this.handleIconClick(event, "Vodka")}> Vodka </span>
                    <span onClick={(event) => this.handleIconClick(event, "Gin")}> Gin </span>
                    <span onClick={(event) => this.handleIconClick(event, "Scotch")}> Scotch </span>
                    <span onClick={(event) => this.handleIconClick(event, "Rum")}> Rum </span>
                </div>

                <CocktailsResultsList/>


            </div>
        )
    }
}

export default connect() (CocktailsSearch); 

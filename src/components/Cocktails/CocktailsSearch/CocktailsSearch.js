import React, { Component } from 'react'

export class CocktailsSearch extends Component {

    state = {
        searchTerm: '', 
        inputText: ''
    }

    handleChange = (event) => {
        console.log(event.target.value); 
        this.setState({
            ...this.state,
            inputText: event.target.value
        })
    }

    handleClick = (event, property) => {
        console.log('in handleClick', property );
        this.setState({
            ...this.state,
            searchTerm: property
        })
        console.log('STATE', this.state);
        
    }


    render() {
        return (
            <div>
                <h1>Pick Your Poison </h1>
                <input type="text" placeholder="search" onChange={this.handleChange} /> 
                <button onClick={(event) => this.handleClick(event, this.state.inputText)}>Submit</button>

                <div>
                    <span onClick= {(event) => this.handleClick (event, "Tequila")}> Tequila </span>
                    <span onClick={(event) => this.handleClick(event, "Vodka")}> Vodka </span>
                    <span onClick={(event) => this.handleClick(event, "Gin")}> Gin </span>
                    <span onClick={(event) => this.handleClick(event, "Scotch")}> Scotch </span>
                    <span onClick={(event) => this.handleClick(event, "Rum")}> Rum </span>
                </div>


            </div>
        )
    }
}

export default CocktailsSearch

import React, { Component } from "react";
import axios from "axios";

import "./root.component.css";

class Root extends Component {

  state = {
    searchValue: "",
    results: []
  };

  handleOnChange = event => {
    this.setState({ searchValue: event.target.value });
  };
  
  handleSearch = () => {
    this.makeApiCall(this.state.searchValue);
  };
  
  makeApiCall = () => {
    var searchUrl = 'https://al61rvj8rj.execute-api.us-east-1.amazonaws.com/dev/search';
    const { searchValue } = this.state;
    axios.post(searchUrl, { query: `${searchValue}` })
      .then(response => {
        let details = [];
  
        for (var i in response.data.hits.hit) {
          details.push(response.data.hits.hit[i])
        }
  
        console.log(details);
        this.setState({ results: details })
      })
  
  };

  render () {
    return (
      <div >

        <div id="main">
          <h1>Welcome to doctors search app</h1>
          <input
            name="name"
            type="text"
            placeholder="Search"
            onChange={event => this.handleOnChange(event)}
            value={this.state.searchValue}
          />
          <button onClick={this.handleSearch}>Search</button>
          {this.state.results ? (
            <div id="meals-container">
              {this.state.results.map((result, index) => (
                <div class="single-meal" key={index}>
                  <h2>{result.id}</h2>
                  <h2>{result.fields.f__firstname}</h2>
                  <h2>{result.fields.f__lastname}</h2>
                  <h2>{result.fields.category}</h2>
                  <h2>{result.fields.address}</h2>


                </div>
              ))}
            </div>
          ) : (
              <p>Try searching for a meal</p>
            )}
        </div>
      </div>
    );
          }  
}

export default Root
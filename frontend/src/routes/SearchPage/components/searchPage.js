import React, { Component } from 'react';
import { Link } from 'react-router';

class SearchPage extends Component {
  render() {
    return (
      <form>
        <input type="text" className="form-control"/>
        <button className="btn btn-primary">OK</button>
      </form>
    );
  }
}

export default SearchPage;

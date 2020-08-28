
import React from 'react';
import "./searchBar.scss";

class SearchBar extends React.Component {

  render () {
    return (
      <div className="search-bar">
        <svg viewBox="0 0 20 20" fill="currentColor" className="search w-6 h-6"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
        <input
          type="text"
          aria-label="Search"
          placeholder="Escriba su criterio de búsqueda"
          onChange={this.props.eventFunction}
        />
      </div>
    );
  }

}





export default SearchBar;
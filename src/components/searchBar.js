
import React from 'react';
import "./searchBar.scss";
import IconSearch from './icons/iconSearch';
import IconMilk from './icons/iconMilk';
import IconRecipe from './icons/iconRecipe';
import ToggleButton from './toggleButton';

class SearchBar extends React.Component {
  
  render () {
    return (
      <div className="search-bar">
        <IconSearch/>    
        <input
          type="text"
          placeholder="Buscar"
          onChange={this.props.onInputChange}
        />
          <ToggleButton onChange = {this.props.onIngredientToggleChange} tooltip={"Buscar por ingrediente"}>
            <IconMilk />
          </ToggleButton>
      </div>
    );
  }

}





export default SearchBar;
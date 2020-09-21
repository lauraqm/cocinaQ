
import React from 'react';
import "./searchBar.scss";
import IconSearch from './icons/iconSearch';
import IconMilk from './icons/iconMilk';
import ToggleButton from './toggleButton';

const SearchBar = (props) => {
  return (
    <div className="search-bar">
      <IconSearch/>    
      <input
        type="text"
        placeholder="Buscar"
        onChange={props.onInputChange}
      />
        <ToggleButton onChange = {props.onIngredientToggleChange} tooltip={"Buscar por ingrediente"}>
          <IconMilk />
        </ToggleButton>
    </div>
  );
}

export default SearchBar;
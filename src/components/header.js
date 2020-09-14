import React from 'react';
import { Link, navigate } from "gatsby";
import { Menu } from "antd";
import { scale } from "../utils/typography";
import kebabCase from "lodash/kebabCase";
import "./header.scss";

const { SubMenu } = Menu;

class Header extends React.Component {

  handleClick = (e) => {
    if (e.key === 'Adobes') {
      navigate(`/Adobes/`);
    }
    else if (e.key === 'AllRecipes'){
      navigate(`/all-recipes/`);
    }
    else if (e.key === 'Tips'){
      navigate(`/tips/`);
    }
    else {
      navigate(`/categories/${kebabCase(e.key)}/`); 
    }
  }

  onClickLogo = () =>{
    navigate(`/`);
  }

  render () {
    let { specialDivider }= this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    return (
      <div className='header'>
        <div className="logo" onClick={this.onClickLogo}></div>
        <div className='menu-container'>
          <Menu onClick={this.handleClick} className="menu" key="main-menu" mode="horizontal">
            <SubMenu title="Recetas">
              {/* <Menu.Item key="search">Buscar recetas</Menu.Item> */}
              <Menu.Item key="AllRecipes">Todas las recetas</Menu.Item>
            </SubMenu>
            <SubMenu title="Categorías">
              <Menu.Item key="Adobes">Adobes</Menu.Item>
              <Menu.Item key="Platos fuertes">Platos fuertes</Menu.Item>
              <Menu.Item key="Ensaladas">Ensaladas</Menu.Item>
              <Menu.Item key="Acompañamientos">Acompañamientos</Menu.Item>
              {/* <Menu.Item key="Sándwiches">Sándwiches</Menu.Item>
              <Menu.Item key="Desayunos">Desayunos</Menu.Item>
              <Menu.Item key="Dips y cremas">Dips y cremas</Menu.Item>
              <Menu.Item key="Panes tradicionales">Panes tradicionales</Menu.Item>
              <Menu.Item key="Postres">Postres</Menu.Item>
              <Menu.Item key="Salsas">Salsas</Menu.Item> */}
            </SubMenu>
            <Menu.Item key="Tips">Tips de cocina</Menu.Item>
          </Menu>
        </div>
        <div className='horizontal-divider'></div>
        {specialDivider}
      </div>
    );
   }
}


export default Header ;
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
      navigate(`/Adobes/Adobes/`);
    }
    else if (e.key === 'AllRecipes'){
      AllRecipes
    }
    else {
      navigate(`/categories/${kebabCase(e.key)}/`); 
      console.log (e);
    }
  }

  render () {
    let {location, title }= this.props;
    let header;
    const rootPath = `${__PATH_PREFIX__}/`;
    return (
      <div className='header'>
        <h1 className='logo' style={{...scale(1.5), marginBottom: 0, marginTop: 0}}>
          <Link style={{boxShadow: `none`, color: `#707070`}} to={`/`}>
            {title}
          </Link>
        </h1>
        <Menu onClick={this.handleClick} className="menu" key="main-menu" mode="horizontal">
          <SubMenu title="Recetas">
            <Menu.Item key="search">Buscar recetas</Menu.Item>
            <Menu.Item key="AllRecipes">Índice de recetas</Menu.Item>
          </SubMenu>
          <SubMenu title="Categorías">
            <Menu.Item key="Adobes">Adobes</Menu.Item>
            <Menu.Item key="Platos fuertes">Platos fuertes</Menu.Item>
            <Menu.Item key="Ensaladas">Ensaladas</Menu.Item>
            <Menu.Item key="Acompañamientos">Acompañamientos</Menu.Item>
            <Menu.Item key="Sándwiches">Sándwiches</Menu.Item>
            <Menu.Item key="Desayunos">Desayunos</Menu.Item>
            <Menu.Item key="Dips y cremas">Dips y cremas</Menu.Item>
            <Menu.Item key="Panes tradicionales">Panes tradicionales</Menu.Item>
            <Menu.Item key="Postres">Postres</Menu.Item>
            <Menu.Item key="Salsas">Salsas</Menu.Item>
          </SubMenu>
          <Menu.Item key="tips">Tips de cocina</Menu.Item>
        </Menu>
        <div className='horizontal-divider'></div>
      </div>
    );
   }
}


export default Header ;
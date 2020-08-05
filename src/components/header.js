import React from 'react';
import { Link } from "gatsby";
import { Menu } from "antd";
import { rhythm, scale } from "../utils/typography"
import "antd/dist/antd.css";
import "./header.scss";

const { SubMenu } = Menu;

class Header extends React.Component {
  render () {
    let {location, title }= this.props;
    let header;
    const rootPath = `${__PATH_PREFIX__}/`;
    
    return (
      <div className='header'>
        <h1 style={{...scale(1.5), marginBottom: rhythm(1.5), marginTop: 0}}>
          <Link style={{boxShadow: `none`, color: `inherit`}} to={`/`}>
            {title}
          </Link>
        </h1>
        <Menu className="menu" key="main-menu" mode="horizontal">
          <Menu.Item key="home">Inicio</Menu.Item>
          <SubMenu title="Recetas">
            <Menu.Item key="setting:1">Buscar recetas</Menu.Item>
            <Menu.Item key="setting:2">Índice de recetas</Menu.Item>
          </SubMenu>
          <SubMenu title="Categorías">
            <Menu.Item key="setting:1">Adobes</Menu.Item>
            <Menu.Item key="setting:2">Platos fuertes</Menu.Item>
            <Menu.Item key="setting:2">Ensaladas</Menu.Item>
            <Menu.Item key="setting:2">Dips y cremas</Menu.Item>
            <Menu.Item key="setting:2">Guarniciones</Menu.Item>
            <Menu.Item key="setting:2">Panes y queques</Menu.Item>
            <Menu.Item key="setting:2">Postes</Menu.Item>
            <Menu.Item key="setting:2">Sandwiches</Menu.Item>
            <Menu.Item key="setting:2">Desayunos</Menu.Item>
            <Menu.Item key="setting:2">Salsas</Menu.Item>
          </SubMenu>
          <Menu.Item key="tips">Tips de cocina</Menu.Item>
        </Menu>
      </div>
    );
   }
}


export { Header };
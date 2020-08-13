import React from 'react';
import { Link } from "gatsby";
import { Menu } from "antd";
import { scale } from "../utils/typography"
import "./header.scss";

const { SubMenu } = Menu;

class Header extends React.Component {
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
        <Menu className="menu" key="main-menu" mode="horizontal">
          <SubMenu title="Recetas">
            <Menu.Item key="setting:1">Buscar recetas</Menu.Item>
            <Menu.Item key="setting:2">Índice de recetas</Menu.Item>
          </SubMenu>
          <SubMenu title="Categorías">
            <Menu.Item key="setting:1">Adobes</Menu.Item>
            <Menu.Item key="setting:2">Platos fuertes</Menu.Item>
            <Menu.Item key="setting:3">Ensaladas</Menu.Item>
            <Menu.Item key="setting:4">Dips y cremas</Menu.Item>
            <Menu.Item key="setting:5">Guarniciones</Menu.Item>
            <Menu.Item key="setting:6">Panes y queques</Menu.Item>
            <Menu.Item key="setting:7">Postes</Menu.Item>
            <Menu.Item key="setting:8">Sandwiches</Menu.Item>
            <Menu.Item key="setting:9">Desayunos</Menu.Item>
            <Menu.Item key="setting:10">Salsas</Menu.Item>
          </SubMenu>
          <Menu.Item key="tips">Tips de cocina</Menu.Item>
        </Menu>
        <div className='horizontal-divider'></div>
      </div>
    );
   }
}


export default Header ;
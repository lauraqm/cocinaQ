import React from "react";

import { rhythm} from "../utils/typography";
import { Header } from './header'

const Layout = ({ location, title, children }) => {
  
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(30),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
    <header>
      <Header location={location} title={title}></Header>
    </header>
    <main>{children}</main>
    <footer>
      Hecho con ♥ en California © {new Date().getFullYear()} Cocina Q. Todos
      los derechos reservados
    </footer>
    </div>
  );
};

export default Layout;

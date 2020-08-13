import React from "react";
import { rhythm} from "../utils/typography";
import Header from './header';
import Footer from './footer';
import './layout.scss';

const Layout = ({ location, title, children }) => {
  
  return (
    <React.Fragment>
    <div className='preheader'></div>
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(32),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
    <header>
      <Header location={location} title={title}></Header>
    </header>
    <main>{children}</main>
    </div>
    <Footer></Footer>
    </React.Fragment>
  );
};

export default Layout;

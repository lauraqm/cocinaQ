import React from "react";
import { rhythm } from "../utils/typography";
import Header from "./header";
import CustomFooter from "./footer";
import { Helmet } from "react-helmet";


const Layout = ({ location, title, children, specialDivider }) => {
  return (
    <React.Fragment>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(32),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>
          <Header location={location} title={title} specialDivider={specialDivider}></Header>
        </header>
        <main>{children}</main>
      </div>
      <CustomFooter></CustomFooter>
    </React.Fragment>
  );
};

export default Layout;

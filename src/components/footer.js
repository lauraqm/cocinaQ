import "./footer.scss";
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Instagram from "./icons/Instagram";
import Facebook from "./icons/Facebook";

const CustomFooter = () => {

  return (
    <footer className="general-footer">
      <div className="background-footer"></div>
      <div className="legend">
        
        <div className="media">
          <p className='follow-text'>Síguenos en</p>
          <a href="https://www.facebook.com/cocinaq/">
            <Facebook/>
          </a>
          <a href="https://www.instagram.com/cocinaq/">
            <Instagram/>
          </a>
        </div>
        <div className="rigths">
          Hecho con <span className="heart">♥</span> en California ©{" "}
          {new Date().getFullYear()} Cocina Q. Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
};

export default CustomFooter;

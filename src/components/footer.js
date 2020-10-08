import "./footer.scss";
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Instagram from "./icons/Instagram";

const CustomFooter = () => {

  return (
    <footer className="general-footer">
      <div className="background-footer"></div>
      <div className="legend">
        <div className="media">
          <div>
            <p>Síguenos en Instagram</p>
            <a href="https://www.instagram.com/cocinaq/">
              <Instagram/>
            </a>
          </div>
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

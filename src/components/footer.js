import "./footer.scss";
import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Footer = () => {
  const mediaData = useStaticQuery(graphql`
    query mediaQuery {
      facebook: file(absolutePath: { regex: "/facebook-media.svg/" }) {
        childImageSharp {
          fixed(width: 25, height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
        extension
        publicURL
      }

      instagram: file(absolutePath: { regex: "/instagram-media.svg/" }) {
        childImageSharp {
          fixed(width: 25, height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
        extension
        publicURL
      }

      pinterest: file(absolutePath: { regex: "/pinterest-media.svg/" }) {
        childImageSharp {
          fixed(width: 25, height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
        extension
        publicURL
      }
    }
  `);

  let mediaPanel = [];
  for (var key in mediaData) {
    let media = mediaData[key];
    let image;
    if (!media.childImageSharp && media.extension === "svg") {
      image = <img src={media.publicURL} />;
    }
    mediaPanel.push(image);
  };

  return (
    <footer>
      <div className="line"></div>
      <div className="legend">
        <div className="media">{mediaPanel}</div>
        <div className="rigths">
          Hecho con ♥ en California © {new Date().getFullYear()} Cocina Q. Todos
          los derechos reservados
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;

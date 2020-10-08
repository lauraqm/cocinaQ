import React from "react";
import { navigate, Link } from "gatsby";
import { Card } from "antd";
const { Meta } = Card;
import "./categoryCard.scss";
import kebabCase from "lodash/kebabCase";

class CategoryCard extends React.Component {
  
  getUrl = (title, disable) => {
    if (!disable) {
      if (title === "Típicas costarricenses") {
        return (`/traditional-food/`);
      }
      else if (title === "Adobes") {
        return(`/Adobes/`);
      } 
      else {
        return(`/categories/${kebabCase(title)}/`);
      }
    }
  };

  createCard = (cardData) => {
    const { title, metadata, image, disable, alt } = cardData;
    let card;
    card = (
        <div className="card-container">
          <Link  to={this.getUrl(title, disable)}>
            <Card
              
              bordered={false}
              hoverable
              cover={ <img alt={alt} src={image} />}
            >
              <div className="title-card">{title}</div>
              <Meta description={metadata} />
            </Card>
          </Link>
        </div>
    );
    
    if (disable) {
      card =  (
        <div className="card-container">
        <Link  to={this.getUrl(title, disable)}>
          <Card
            onClick={() => {
              this.handleClick(title, disable);
            }}
            bordered={false}
            hoverable
            cover={<img src={image} />}
          >
            <div className="title-card">{title}</div>
            <Meta description={metadata} />
          </Card>
          <div className="disable-card">
            <div className="banner">Próximamente</div>
          </div>
        </Link>
      </div>
      )
    }

    return card;
  };

  render() {
    return (
      <div className="categories">
        {categoryData.map((data) => {
          return this.createCard(data);
        })}
      </div>
    );
  }
}

const categoryData = [
  {
    title: "Adobes",
    image:
      "https://images.unsplash.com/photo-1564149504298-00c351fd7f16?ixlib=rb-1.2.1&q=85&fm=jpg&auto=format&fit=crop&w=400&q=80",
    alt: "adobes-marinar-carne",
    metadata:
      "Formulas mágicas para marinar de la mejor manera las carnes que son protagonistas en nuestros platillos",
  },
  {
    title: "Típicas costarricenses",
    image: "https://images.unsplash.com/photo-1600125693229-2865faaf0732?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
    alt: "recetas-comida-tipica-costa-rica",
    metadata:
      "Para celebrar nuestra Semana Patria le traemos una selección de platillos típicos costarricenses",
  },
  {
    title: "Platos Fuertes",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
    alt: "recetas-platos-fuertes-costarricenses",
    metadata:
      "Platos principales que reunen una fusión de sabores, inspiradas en la cocina costarricense",
  },
  {
    title: "Ensaladas",
    image:
      "https://images.unsplash.com/photo-1537785713284-0015ce8a145c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
    alt: "recetas-ensaladas",
    metadata:
      "Aquí podrá encontrar distintas recetas del acompañamiento por excelencia de cualquier plato principal: Las ensaladas",
  },
  {
    title: "Acompañamientos",
    image:
      "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-1.2.1&q=85&fm=jpg&auto=format&fit=crop&w=400&q=80",
    alt: "recetas-acompañamientos",
    metadata:
      "Acompañamientos varios para servir con nuestros platos principales",
  },
  {
    title: "Sánwiches",
    image: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?ixlib=rb-1.2.1&q=85&fm=jpg&auto=format&fit=crop&w=400&q=80",
    alt: "recetas-sandwiches",
    metadata: "Los infalibles sandwiches que pueden utilizarse desde el desayuno hasta la cena",
    disable: true,
  },
  {
    title: "Desayunos",
    image:
      "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&q=85&fm=jpg&auto=format&fit=crop&w=400&q=80",
    alt: "recetas-desayunos",
    metadata:
      "La mejor forma de empezar el día sin duda es con un buen desayuno, aquí encontrarás buenas ideas para variar las tradicionales",
    disable: true,
  },

  // {
  //   title: "Dips y cremas",
  //   image: "https://images.unsplash.com/photo-1582724790987-313797eb6119?ixlib=rb-1.2.1&q=85&fm=jpg&auto=format&fit=crop&w=667&q=80",
  //   metadata: "Ideales para picar en las fiestas o para comer liviano"
  // },
  // {
  //   title: "Panes tradicionales",
  //   image: "https://images.unsplash.com/photo-1590368746679-a403ad57e684?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
  //   metadata: "Panes costarricenses tradicionales para hacer la hora del café"
  // },
  // {
  //   title: "Postres",
  //   image: "https://images.unsplash.com/photo-1476097297040-79e9e1603142?ixlib=rb-1.2.1&q=85&fm=jpg&auto=format&fit=crop&w=667&q=80",
  //   metadata: "¡El pecado capital de todos! Muy dificil no ceder ante un dulce"
  // },
  // {
  //   title: "Salsas",
  //   image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
  //   metadata: "Utilizadas para carnes, pastas, sandwiches, tacos y demás recetas"
  // },
];

export default CategoryCard;

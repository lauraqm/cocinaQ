import React from "react";
import { navigate } from "gatsby";
import { Card } from "antd";
const { Meta } = Card;
import "./categoryCard.scss";
import kebabCase from "lodash/kebabCase";

class CategoryCard extends React.Component {
  handleClick = (title, disable) => {
    if (!disable) {
      if (title === "Típicos costarricenses") {
        navigate(`/traditional-food/`);
      }
      else if (title === "Adobes") {
        navigate(`/Adobes/Adobes/`);
      } 
      else {
        navigate(`/categories/${kebabCase(title)}/`);
      }
    }
  };

  createCard = (cardData) => {
    const { title, metadata, image, disable } = cardData;
    let card;
    card = (
      <div className="card-container">
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
      </div>
    );
    
    if (disable) {
      card =  (
        <div className="card-container">
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
    title: "Típicos costarricenses",
    image: "https://images.unsplash.com/photo-1600125693229-2865faaf0732?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
    metadata:
      "Para celebrar nuestra Semana Patria le traemos una selección de platillos típicos costarricenses",
  },
  {
    title: "Adobes",
    image:
      "https://images.unsplash.com/photo-1564149504298-00c351fd7f16?ixlib=rb-1.2.1&q=85&fm=jpg&auto=format&fit=crop&w=667&q=80",
    metadata:
      "Formulas mágicas para marinar de la mejor manera las carnes que son protagonistas en nuestros platillos",
  },
  {
    title: "Platos Fuertes",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
    metadata:
      "Platos principales que reunen una fusión de sabores, inspiradas en la cocina costarricense",
  },
  {
    title: "Ensaladas",
    image:
      "https://images.unsplash.com/photo-1537785713284-0015ce8a145c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
    metadata:
      "Aquí podrá encontrar distintas recetas del acompañamiento por excelencia de cualquier plato principal: Las ensaladas",
  },
  {
    title: "Acompañamientos",
    image:
      "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-1.2.1&q=85&fm=jpg&auto=format&fit=crop&w=667&q=80",
    metadata:
      "Acompañamientos varios para servir con nuestros platos principales",
  },
  {
    title: "Sánwiches",
    image: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?ixlib=rb-1.2.1&q=85&fm=jpg&auto=format&fit=crop&w=667&q=80",
    metadata: "Los infalibles sandwiches que pueden utilizarse desde el desayuno hasta la cena",
    disable: true,
  },
  {
    title: "Desayunos",
    image:
      "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&q=85&fm=jpg&auto=format&fit=crop&w=667&q=80",
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

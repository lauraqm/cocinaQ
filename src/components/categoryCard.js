
import React from 'react';
import { navigate } from 'gatsby'
import { Card, Col, Row } from 'antd';
const { Meta } = Card;
import "./categoryCard.scss";
import kebabCase from "lodash/kebabCase"

class CategoryCard extends React.Component {


  handleClick = (title) => {
    navigate(`/categories/${kebabCase(title)}/`); 
  }

  createCard = (cardData) =>{
    const {title, metadata, image} = cardData;
    return (
      <div className='card-container'>
        <Card
          title = {title}
          onClick = { ()=> {this.handleClick (title)} }
          bordered={false}
          hoverable
          cover={<img src= {image} />}
        >
          <Meta description={metadata} />
        </Card>
      </div>
    )
  }


  render () {
    return (
      <div className='cardWrapper'>
        {
        categoryData.map((data) => { //  Iterate in the room's array and return a new array with renderRoom output
            return this.createCard(data);
          })
        }
      </div>
    );
  }

}


const categoryData = [
  {
    title: "Adobes",
    image: "https://images.unsplash.com/photo-1564149504298-00c351fd7f16?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjYzOTIxfQ&w=3600",
    metadata: "Formulas mágicas para marinar de la mejor manera las carnes que son protagonistas en nuestros platillos"
  },
  {
    title: "Platos Fuertes",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",
    metadata: "Platos principales que reunen una fusión de sabores, inspiradas en la cocina costarricense"
  },
  {
    title: "Ensaladas",
    image: "https://images.unsplash.com/photo-1547496502-affa22d38842?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjYzOTIxfQ&w=3600",
    metadata: "Aquí podrá encontrar distintas recetas del acompañamiento por excelencia de cualquier plato principal: Las ensaladas" 
  },
  {
    title: "Dips y cremas",
    image: "https://images.unsplash.com/photo-1582724790987-313797eb6119?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjYzOTIxfQ&w=3600",
    metadata: "Ideales para picar en las fiestas o para comer liviano"
  },
  {
    title: "Acompañamientos",
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjYzOTIxfQ&w=3600",
    metadata: "Acompañamientos varios para servir con nuestros platos principales"
  },
  {
    title: "Panes tradicionales",
    image: "https://images.unsplash.com/photo-1590368746679-a403ad57e684?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2840&q=80",
    metadata: "Panes costarricenses tradicionales para hacer la hora del café"
  },
  {
    title: "Postres",
    image: "https://images.unsplash.com/photo-1476097297040-79e9e1603142?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjYzOTIxfQ&w=3600",
    metadata: "¡El pecado capital de todos! Muy dificil no ceder ante un dulce"
  },

  {
    title: "Desayunos",
    image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjYzOTIxfQ&w=3600",
    metadata: "La mejor forma de empezar el día sin duda es con un buen desayuno, aquí encontrarás buenas ideas para variar las tradicionales" 
  },
  {
    title: "Sánwiches",
    image: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjYzOTIxfQ&w=3600",
    metadata: "Los infalibles sandwiches que pueden utilizarse desde el desayuno hasta la cena"
  },
  {
    title: "Salsas",
    image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",
    metadata: "Utilizadas para carnes, pastas, sandwiches, tacos y demás recetas"
  },
];



export default CategoryCard;
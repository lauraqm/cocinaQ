
import React from 'react';
import { navigate } from 'gatsby'
import { Card, Col, Row } from 'antd';
const { Meta } = Card;
import "./categoryCard.scss";

class CategoryCard extends React.Component {


  handleClick = (title) => {
    navigate(`/all-post/?category=${title}`);
  }

  


  render () {
    return (
      <div className='cardWrapper'>
        
        <div className='card-container'>        
          <Card
            title="Platos Fuertes" 
            onClick={ () =>{
              const title = 'Plato fuerte';
              this.handleClick(title);
            }}
            bordered={false}
            hoverable
            cover={<img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" />}
          >
            <Meta description="Platos principales que reunen una fusión de sabores, inspiradas en la cocina costarricense" />
          </Card>
        </div>
        <div className='card-container'>
          <Card
            title="Ensaladas"
            onClick={ () =>{
              const title = 'Ensalada';
              this.handleClick(title);
            }} 
            bordered={false}
            hoverable
            cover={<img src="https://images.unsplash.com/photo-1547496502-affa22d38842?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjYzOTIxfQ&w=3600" />}
          >
            <Meta description="Aquí podrá encontrar distintas recetas del acompañamiento por excelencia de cualquier plato principal: Las ensaladas" />
          </Card>
        </div>

        <div className='card-container'>
          <Card
            title="Dips y cremas" 
            bordered={false}
            hoverable
            cover={<img src="https://images.unsplash.com/photo-1582724790987-313797eb6119?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjYzOTIxfQ&w=3600" />}
          >
            <Meta description="Ideales para picar en las fiestas o para comer liviano" />
          </Card>
        </div>

        <div className='card-container'>
          <Card
            title="Acompañamientos" 
            bordered={false}
            hoverable
            cover={<img src="https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjYzOTIxfQ&w=3600" />}
          >
            <Meta description="Acompañamientos varios para servir con nuestros platos principales" />
          </Card>
        </div>

        <div className='card-container'>
          <Card
            title="Panes tradicionales" 
            bordered={false}
            hoverable
            cover={<img src="https://images.unsplash.com/photo-1590368746679-a403ad57e684?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2840&q=80" />}
          >
            <Meta description="Panes costarricenses tradicionales para hacer la hora del café" />
          </Card>
        </div>


        <div className='card-container'>
          <Card
            title="Postres" 
            bordered={false}
            hoverable
            cover={<img src="https://images.unsplash.com/photo-1476097297040-79e9e1603142?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjYzOTIxfQ&w=3600" />}
          >
            <Meta description="¡El pecado capital de todos! Muy dificil no ceder ante un dulce" />
          </Card>
        </div>

        <div className='card-container'>
          <Card
            title="Sándwiches" 
            bordered={false}
            hoverable
            cover={<img src="https://images.unsplash.com/photo-1550507992-eb63ffee0847?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjYzOTIxfQ&w=3600" />}
          >
            <Meta description="Los infalibles sandwiches que pueden utilizarse desde el desayuno hasta la cena" />
          </Card>
        </div>

        <div className='card-container'>
          <Card
            title="Desayunos" 
            bordered={false}
            hoverable
            cover={<img src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjYzOTIxfQ&w=3600" />}
          >
            <Meta description="La mejor forma de empezar el día sin duda es con un buen desayuno, aquí encontrarás buenas ideas para variar las tradicionales" />
          </Card>
        </div>

        <div className='card-container'>
          <Card
            title="Salsas" 
            bordered={false}
            hoverable
            cover={<img src="https://images.unsplash.com/photo-1472476443507-c7a5948772fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" />}
          >
            <Meta description="Utilizadas para carnes, pastas, sandwiches, tacos y demás recetas" />
          </Card>
        </div>




      </div>
    );
  }

}


const categoryData = [
  {
    title = "Adobes",
    image = "https://images.unsplash.com/photo-1564149504298-00c351fd7f16?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjYzOTIxfQ&w=3600";
    metadata = "Formulas mágicas para marinar de la mejor manera las carnes que son protagonistas en nuestros platillos";
  },
  {
    title = "Platos Fuertes",
    image = "https://images.unsplash.com/photo-1564149504298-00c351fd7f16?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjYzOTIxfQ&w=3600";
    metadata = "Formulas mágicas para marinar de la mejor manera las carnes que son protagonistas en nuestros platillos";
  },
];



export default CategoryCard;
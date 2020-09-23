import React from "react";
import { Card } from 'antd';
const { Meta } = Card;
import { navigate } from 'gatsby';
import "./tipCard.scss";

const  TipCard = (props) =>{
    const { title, content, image } = props;
    return (
        <div className="card-container">
          <Card 
            title={title}
            onClick = { ()=> {navigate(`/Tips/${title}/`);} }
            bordered={false}
            hoverable
            cover={<img src={image}></img>}
          >
            <Meta description={content} />
          </Card>
        </div>
    );
}

export default TipCard;

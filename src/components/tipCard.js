import React from "react";
import { Card } from 'antd';
const { Meta } = Card;
import { navigate } from 'gatsby';
import kebabCase from "lodash/kebabCase";
import "./tipCard.scss";

class TipCard extends React.Component {

  handleClick = (title) => {
    navigate(`/Tips/${title}/`); 
  }


  render() {
    const { title, content, image } = this.props;
    return (
        <div className="card-container">
          <Card 
            title={title}
            onClick = { ()=> {this.handleClick (title)} }
            bordered={false}
            hoverable
            cover={<img src={image}></img>}
          >
            <Meta description={content} />
          </Card>
        </div>
    );
  }
}

export default TipCard;

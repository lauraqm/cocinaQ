import React from "react";
import { Card } from 'antd';
const { Meta } = Card;
import { navigate } from 'gatsby';
import "./traditionalCard.scss";

class TraditionalCard extends React.Component {
  handleClick = (title) => {
    navigate(`/Tipicos/${title}/`); 
  }

  render() {
    const { title, content, image } = this.props;
    return (
        <div className="card-container">
          <Card
            onClick = { ()=> {this.handleClick (title)} }
            bordered={false}
            hoverable
            cover={<img src={image}></img>}
          >
            <div className="title-card">{title}</div>
            <Meta description={content} />
          </Card>
        </div>
    );
  }
}

export default TraditionalCard;

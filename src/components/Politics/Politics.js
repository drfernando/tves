import React from "react";
import "./Politics.css";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import image from "../../assets/img/test.jpg";

export default class Politics extends React.Component {
  render() {
    return (
      <div className="center">
        <Row className="row">
          <strong>Politica: </strong>
        </Row>
        <Row className="row">
          <Card className="bg-dark text-white politics">
            <Card.Img src={image} alt="Card image" className="image"/>
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Row>
        <Row className="row">
          <Card className="bg-dark text-white politics">
            <Card.Img src={image} alt="Card image" className="image"/>
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Row>
        <Row className="row">
          <Card className="bg-dark text-white politics">
            <Card.Img src={image} alt="Card image" className="image"/>
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Row>
      </div>
    );
  }
}

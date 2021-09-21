import React from "react";
import Row from "react-bootstrap/esm/Row";
import "./Sports.css";
import Card from "react-bootstrap/Card";
import image from "../../assets/img/test.jpg";

export default class Sports extends React.Component {
  render() {
    return (
      <div >
        <Row className="row">
          <strong>Deportes: </strong>
        </Row>
        <Row className="row">
          <Card className="bg-dark text-white sports">
            <Card.Img src={image} className="image" alt="Card image" />
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
          <Card className="bg-dark text-white sports">
            <Card.Img src={image} className="image" alt="Card image" />
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
          <Card className="bg-dark text-white sports">
            <Card.Img src={image} className="image" alt="Card image" />
            <Card.ImgOverlay bsPrefix="card-img-overlay">
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

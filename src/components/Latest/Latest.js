import React from "react";
import Card from "react-bootstrap/Card";
import image from "../../assets/img/test.jpg";
import Carousel from 'react-bootstrap/Carousel';
import "./Latest.css";

export default class Latest extends React.Component {
  render() {
    return (
      <div>
        <Carousel className="carousel">
          <Carousel.Item>
          <Card className="bg-dark text-white latest">
            <Card.Img src={image} alt="Card image" />
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
          </Carousel.Item>
          <Carousel.Item>
          <Card className="bg-dark text-white latest">
            <Card.Img src={image} alt="Card image" />
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
          </Carousel.Item>
          <Carousel.Item>
          <Card className="bg-dark text-white latest">
            <Card.Img src={image} alt="Card image" />
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
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

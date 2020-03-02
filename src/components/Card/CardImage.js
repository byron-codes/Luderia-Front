import React, { Component } from "react";
import Card from "react-bootstrap/Card";

export default class CardImage extends Component {
  randomImage() {
    var image = [
        "https://assets.xtechcommerce.com/uploads/images/medium/689389c40376fdc34322e1b8de2e82ae.png",
        "https://images-submarino.b2w.io/produtos/01/00/sku/18530/5/18530566_1GG.jpg",
        "https://457408.smushcdn.com/1295015/wp-content/uploads/2019/04/Dixit-8-Harmonies-1.png?lossy=1&strip=1&webp=1",
        "https://www.dhresource.com/600x600/f2/albu/g5/M00/B3/AB/rBVaJFklJbSAJfZhAAV70BrTcxQ971.jpg"
      ]
  }

  render() {
    return (
      <div
        className="col col-md-3 justify-content-center d-flex mouse-click"
        onClick={e => (window.location = "/itens/1")}
      >
        <Card style={{ width: "18rem", padding: "5px" }}>
          <Card.Img
            variant="top"
            src="https://assets.xtechcommerce.com/uploads/images/medium/689389c40376fdc34322e1b8de2e82ae.png"
          />
          <Card.Body>
            <Card.Title>Bloodborne</Card.Title>
            <Card.Text>R${Math.floor(Math.random() * 250)},00</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

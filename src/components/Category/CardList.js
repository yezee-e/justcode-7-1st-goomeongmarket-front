//상품리스트 컴포넌트라고 생각
import React from 'react';
import { Card, Button } from 'react-bootstrap';

function CardList({ title, price }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <p>price:{price}</p>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">buy now</Button>
      </Card.Body>
    </Card>
  );
}

export default CardList;

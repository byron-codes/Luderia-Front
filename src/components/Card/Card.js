import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default props => (
    <Card style={{ width: '450px' }} className="carousel-size">
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
)
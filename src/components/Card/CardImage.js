import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default props => (
    <div className="col col-md-3 justify-content-center d-flex">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://static.zerochan.net/Chevasis.full.1127673.jpg" />
            <Card.Body>
                <Card.Title>Bloodborne</Card.Title>
                <Card.Text>
                    R${Math.floor(Math.random() * 250)},00
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
)
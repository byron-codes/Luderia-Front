import React from 'react'
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default props => (
    <div className="col col-md-4 justify-content-center d-flex">
        <Card border="primary" style={{ width: '18rem' }} className="text-center">
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    <FontAwesomeIcon icon={props.icon} size="10x"></FontAwesomeIcon>
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
)
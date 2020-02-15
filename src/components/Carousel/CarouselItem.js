import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default props => (
    <Carousel.Item>
        {props.children}
    </Carousel.Item>
)
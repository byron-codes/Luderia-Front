import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import CarouselItem from './CarouselItem'

export default props => {
    return (
        <Carousel>
            {props.children}
            {/* <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item> */}
        </Carousel>
    )
}
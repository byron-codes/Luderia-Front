import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from './components/NavBar/NavBar'
import Carousel from './components/Carousel/Carousel'
import CarouselB from 'react-bootstrap/Carousel'
import CarouselItem from './components/Carousel/CarouselItem'

export default props => (
    <React.Fragment>
        <NavBar></NavBar>
        <Carousel>
            <CarouselB.Item>
                <img
                    className="d-block w-100"
                    src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"
                    alt="First slide"
                />
                <CarouselB.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </CarouselB.Caption>
            </CarouselB.Item>
            <CarouselItem>
                <img
                    className="d-block w-100"
                    src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"
                    alt="First slide"
                />
                <CarouselB.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </CarouselB.Caption>
            </CarouselItem>
        </Carousel>
        {/* <CarouselItem></CarouselItem> */}
    </React.Fragment>
)
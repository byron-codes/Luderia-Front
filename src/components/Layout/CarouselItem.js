import React from "react";
import CardImage from "../Card/CardImage"
import {Row, Carousel} from "react-bootstrap";


export function GerarCarousel(){
    return (
        <Carousel.Item>
            <Row>
                <CardImage></CardImage>
                <CardImage></CardImage>
                <CardImage></CardImage>
                <CardImage></CardImage>
            </Row>
        </Carousel.Item>
    )
}

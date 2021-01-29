import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../images/carousel/carousel-1-min.png';
import img2 from '../../images/carousel/carousel-2-min.png';

import img4 from '../../images/carousel/carousel-4-min.png';
import img5 from '../../images/carousel/carousel-5-min.png';
const SliderContent = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <div className="p-5 d-flex justify-content-center">
                    <img
                        className="d-block  w-50 h-60"
                        src={img1}
                        alt="First slide"
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="p-5 d-flex justify-content-center">
                    <img
                        className="d-block w-50 h-60"
                        src={img2}
                        alt="second slide"
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="p-5 d-flex justify-content-center">
                    <img
                        className="d-block w-50 h-60"
                        src={img4}
                        alt="third slide"
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="p-5 d-flex justify-content-center">
                    <img
                        className="d-block w-50 h-60"
                        src={img5}
                        alt="forth slide"
                    />
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default SliderContent;

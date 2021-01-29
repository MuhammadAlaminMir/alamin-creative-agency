import React from 'react';
import SliderContent from './SliderContent';

const Slider = () => {
    const sliderStyle = {
        background: '#111430',
        hight: '40vh',
    };

    return (
        <section style={sliderStyle}>
            <div className="container text-center p-5">
                <h3>
                    <span style={{ color: 'white', fontWeight: 500 }}>
                        Here are some of
                    </span>
                    <span style={{ color: 'green' }}> our works</span>
                </h3>
                <SliderContent />
            </div>
        </section>
    );
};

export default Slider;

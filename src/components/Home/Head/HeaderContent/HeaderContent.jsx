import React from 'react';
import photo from '../../../images/logos/Frame-min.png';

const HeaderContent = () => {
    return (
        <div className="container headerContent">
            <div className="row mt-5">
                <div className="col-md-6 p-5">
                    <h1
                        style={{
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            fontSize: '48px',
                            lineHeight: '60px',
                        }}
                    >
                        Let's Grow Your Brand To The Next Level
                    </h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Pariatur nemo non dolorum exercitationem nobis.
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Reprehenderit, nemo!
                    </p>
                    <button
                        style={{
                            backgroundColor: 'black',
                            color: 'white',
                            border: 'none',
                            padding: '7px 18px',
                            fontWeight: '700',
                            borderRadius: '5px',
                        }}
                    >
                        Hire us
                    </button>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <img src={photo} width="100%" alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeaderContent;

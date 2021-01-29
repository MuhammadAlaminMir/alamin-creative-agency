import React from 'react';
import web_Mobile from '../../images/icons/service1-min.png';
import graphic_design from '../../images/icons/service2-min.png';
import web from '../../images/icons/service3-min.png';
const Services = () => {
    const fakeData = [
        {
            id: 1,
            name: 'Web & Mobile Design',
            description:
                ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id aliquid assumenda nostrum voluptate accusamus quia repellat tempore, blanditiis veritatis debitis velit quis quaerat reiciendis',
            photo: web_Mobile,
        },
        {
            id: 2,
            name: 'Web & Mobile Design',
            description:
                ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id aliquid assumenda nostrum voluptate accusamus quia repellat tempore, blanditiis veritatis debitis velit quis quaerat reiciendis',
            photo: graphic_design,
        },
        {
            id: 3,
            name: 'Web & Mobile Design',
            description:
                ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id aliquid assumenda nostrum voluptate accusamus quia repellat tempore, blanditiis veritatis debitis velit quis quaerat reiciendis',
            photo: web,
        },
    ];

    return (
        <div className="mt-5 container mb-5">
            <h3 className="d-flex justify-content-center">
                Provide awesome <span style={{ color: 'green' }}>services</span>
            </h3>
            <br />
            <br />
            <div className="row">
                {fakeData.map((data) => (
                    <div
                        key={data.id}
                        className="col-md-4 col-sm-6 text-center mt-4"
                    >
                        <img
                            src={data.photo}
                            height="80px"
                            className="text-center"
                            alt=""
                        />

                        <br />
                        <br />
                        <h4>{data.name}</h4>
                        <p>{data.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;

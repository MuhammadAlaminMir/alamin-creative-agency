import React from 'react';
import pic1 from '../../images/carousel/customer-1-min.png';
import pic2 from '../../images/carousel/customer-2-min.png';
import pic3 from '../../images/carousel/customer-3-min.png';

const ClientsFeedBack = () => {
    const fakeData = [
        {
            id: 1,
            name: 'Alamin Mir',
            title: 'CEO, My World',
            photo: pic1,
            description:
                ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id aliquid assumenda nostrum voluptate accusamus quia repellat tempore, blanditiis veritatis debitis velit quis quaerat reiciendis',
        },
        {
            id: 2,
            name: 'Jhanker Mahbub',
            title: 'CEO, Programming-Hero',
            photo: pic2,
            description:
                ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id aliquid assumenda nostrum voluptate accusamus quia repellat tempore, blanditiis veritatis debitis velit quis quaerat reiciendis',
        },
        {
            id: 3,
            name: 'Alamin Mir',
            title: 'CEO, My World',
            photo: pic3,
            description:
                ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id aliquid assumenda nostrum voluptate accusamus quia repellat tempore, blanditiis veritatis debitis velit quis quaerat reiciendis',
        },
    ];

    return (
        <div className="mt-5 container">
            <h3 className="d-flex justify-content-center">
                Provide awesome
                <span style={{ color: 'green' }}> &nbsp;services</span>
            </h3>
            <br />
            <br />
            <div className="row">
                {fakeData.map((data) => (
                    <div
                        key={data.id}
                        className="col-md-4 col-sm-6 text-center mt-4"
                    >
                        <div className="d-flex justify-content-center">
                            <div>
                                <img
                                    src={data.photo}
                                    height="80px"
                                    className="text-center "
                                    alt=""
                                />
                            </div>
                            <div className="p-3">
                                <h4 className="">{data.name}</h4>
                                <p>
                                    <strong>{data.title}</strong>
                                </p>
                            </div>
                        </div>

                        <p>{data.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClientsFeedBack;

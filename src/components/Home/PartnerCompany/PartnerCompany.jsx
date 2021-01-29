import React from 'react';
import p1 from '../../images/logos/slack-min.png';
import p2 from '../../images/logos/google-min.png';
import p3 from '../../images/logos/uber-min.png';
import p4 from '../../images/logos/netflix-min.png';
import p5 from '../../images/logos/airbnb-min.png';

const PartnerCompany = () => {
    return (
        <div className="container mb-5">
            <div className="mt-5 pt-5  row d-flex justify-content-center">
                <div className="col-md-2 pt-2 col-sm-4 col-6">
                    <img height="40px" width="70%" src={p1} alt="" />
                </div>
                <div className="col-md-2 pt-2 col-sm-4 col-6">
                    <img height="40px" width="70%" src={p2} alt="" />
                </div>
                <div className="col-md-2 pt-2 col-sm-4 col-6">
                    <img height="40px" width="70%" src={p3} alt="" />
                </div>
                <div className="col-md-2 pt-2 col-sm-4 col-6">
                    <img height="40px" width="70%" src={p4} alt="" />
                </div>
                <div className="col-md-2 pt-2 col-sm-4 col-6">
                    <img height="40px" width="70%" src={p5} alt="" />
                </div>
            </div>
            <br />
            <br />
            <br />
        </div>
    );
};

export default PartnerCompany;

import React from 'react';
import ClientsFeedBack from '../Clients_Feedback/ClientsFeedBack';
import Footer from '../Footer/Footer';
import Header from '../Head/Header/Header';
import PartnerCompany from '../PartnerCompany/PartnerCompany';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Header />
            <PartnerCompany />
            <Services />
            <Slider />
            <ClientsFeedBack />
            <Footer />
        </div>
    );
};

export default Home;

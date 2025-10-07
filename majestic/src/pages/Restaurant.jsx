import React from 'react';
import HeroResturant from '../components/HeroResturant';
import ContactSection from '../components/ContactSection';
import Galerie from '../components/Galerie';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const Restaurant = () => {
    return (
        <div>
            <HeroResturant />
            <Contact />
            <Galerie />
            <Footer />
        </div>
    );
};

export default Restaurant;
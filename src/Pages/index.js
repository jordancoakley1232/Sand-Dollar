import React, { useState, useEffect } from 'react'
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import InfoSection from '../Components/InfoSection';
import Services from '../Components/Services';
import Footer from "../Components/Footer"

// Data for components
import { homeObjOne, homeObjTwo, homeObjThree } from '../Components/InfoSection/Data';

const Home = () => {

    // State and function to open and close side bar
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar isOpen={isOpen} toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services />
            <InfoSection {...homeObjThree} />
            <Footer />

        </>
    )
}


// 2:25:58
export default Home

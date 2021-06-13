import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
// styled components
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from "./NavbarElements"
import { IconContext } from 'react-icons/lib'
// Scroll to top from react scroll;
import { animateScroll as scroll } from 'react-scroll'


const Navbar = ({ toggle, isOpen }) => {
    // define state for scroll
    const [scrollNav, setScrollNav] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    // function to determine when scroll will trigger
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false);
        }
    }
    // function to scroll to top on click of logo
    const toggleHome = () => {
        scroll.scrollToTop();
    }


    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to={'/'} onClick={toggleHome}>
                            SND-$
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="discover" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>Discover</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>Services</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="signup" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>Sign Up</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to="/signin">Sign In</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar

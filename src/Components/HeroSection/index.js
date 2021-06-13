import React, { useState } from 'react';
import video from "../../Video/video.mp4"

// Components
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from "./HeroElements";
import { Button } from "../ButtonElements"

const HeroSection = () => {
    // state and function to change arrow on hover of button
    const [hover, setHover] = useState(false);

    const toggleHover = () => {
        setHover(!hover);
    }



    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Crypto Trading Made Easy</HeroH1>
                <HeroP>Sign Up for a new account today and receive $250 in credit towards your next trade</HeroP>
                <HeroBtnWrapper>
                    <Button onMouseEnter={toggleHover} onMouseLeave={toggleHover} to="signup" primary="true" dark="true" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}
export default HeroSection

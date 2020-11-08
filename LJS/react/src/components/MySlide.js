import React from 'react'
import styled from 'styled-components'

import {makeStyles} from '@material-ui/core/styles'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import Container from '@material-ui/core/Container'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick'

const useStyles = makeStyles(() => ({
    slideContainer: {
        overflow: "hidden",
        maxWidth: "100%",
    },
}))

const IMG = styled.img`
    width: 100%;
    height: 30vh;
`;

// slick 클래스를 직접 수정
// background size가 있어야 이미지가 보임
const StyledSlider = styled(Slider)`
    .slick-dots {
        padding: 1.5rem 0;
    }
`


const NextArrowBt = styled.button`
    position: absolute;
    display: block;
    right: 0%;
    cursor: pointer;
    background: transparent;
    height: 100%;
    top: 0%;
    border: none;
    outline: none;
    color: rgba(0, 0, 0, 0.25);
    z-index: 1;

    &:hover {
        background-color: rgba(213, 213, 213, .25);
        color: rgba(0, 0, 0, 0.75);
    }
`;

const PrevArrowBt = styled.button`
    position: absolute;
    display: block;
    left: 0%;
    cursor: pointer;
    background: transparent;
    height: 100%;
    top: 0%;
    border: none;
    outline: none;
    color: rgba(0, 0, 0, 0.25);
    z-index: 1;

    &:hover {
        background-color: rgba(213, 213, 213, .25);
        color: rgba(0, 0, 0, 0.75);
    }
`;

function MyNextArrow(props) {
    const { onClick } = props;

    return (
        <NextArrowBt
            onClick={onClick}
        >
             <ArrowForwardIosIcon />
         </NextArrowBt>
    );
}

function MyPrevArrow(props) {
    const { onClick } = props;

    return (
        <PrevArrowBt
            onClick={onClick}
        >
            <ArrowBackIosIcon />
        </PrevArrowBt>
    );
}

const MyImg = (props) => {

    return (
        <IMG src={props.src} />
    )
}

const MySlide = () => {

    const classes = useStyles()

    const settings = {
        dots: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <MyNextArrow/>,
        prevArrow: <MyPrevArrow />
    }

    return (
        <Container 
        className={classes.slideContainer}
        >
            <StyledSlider  {...settings}>
                {[1, 2, 2].map((num, index) => {
                    const src = "/images/slide" + num + ".png"

                    return (
                        <MyImg src={src} key={index}/>
                    )
                })}
            </StyledSlider>
        </Container>
    )
}

export default MySlide
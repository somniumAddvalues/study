import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick'

const IMG = styled.img`
    width: 100%;
    height: 30vh;
`;

const Container = styled.div`
    width: 60%;
    overflow: hidden;
`;

// const Button = styled.button`
//     all: unset;
//     border: 1px solid coral;
//     padding 0.5em 2em;
//     color: coral;
//     border-radius: 10px;
//     &:hover {
//         transition: all 0.3s ease-in-out;
//         background-color: coral;
//         color: #fff;
//     }
// `;

// slick 클래스를 직접 수정
// background size가 있어야 이미지가 보임
const StyledSlider = styled(Slider)`
    //  .slick-prev:before {
    //     width: 80px;
    //     height: 80px;
    //     content: '' !important;
    //     position: absolute;
    //     top: -11px;
    //     left: -31px;
    //     background-image: url(/images/logo.png);
    //     background-repeat: no-repeat;
    //     vertical-align: middle;
    //     background-size: 80px;
    //     // opacity: 1 !important;
    //  }
    
    .slick-arrow {
        background-color: red;
        height: 35px;
        width: 35px;
        border-radius: 100px;
    }
    .slick-arrow:hover, .slick:active {
        background-color: black !important;
    }
    .slick-prev.slick-arrow {
        left: 2%;
        z-index: 1;
    }
    .slick-next.slick-arrow {
        right: 2%;
        z-index: 1;
    }
`

// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <ArrowForwardIosIcon
//             className={className}
//             style={{ ...style, display: "block", right: "4%", zIndex: 1, backgroundSize: "100%" }}
//             onClick={onClick}
//         />
//     );
// }

// function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "block",  left: "4%", zIndex: 1}}
//             onClick={onClick}
//         />
//     );
// }

const MyImg = (props) => {

    console.log(props)

    return (
        <IMG src={props.src} />
    )
}

const MySlide = () => {

    // const [curSlide, setCurSlide] = useState(0)
    // const slideRef = useRef(null)

    // const nextSlide = () => {
    //     this.slider.slickNext()
    // }

    // const prevSlide = () => {
    //     if(curSlide <= 0){
    //         setCurSlide(TOTAL_SLIDES)
    //     }
    //     else{
    //         setCurSlide(curSlide - 1)
    //     }
    // }

    // useEffect(() => {
    //     slideRef.current.style.transition = "all 0.5s ease-in-out"
    //     slideRef.current.style.transform = `translateX(-${curSlide}00%)`
    // }, [curSlide])

    // const renderSlides = () => {
    //     [1, 2, 2].map(num => {
    //         const src = "/images/slide" + num + ".png"
    //         //console.log(src)

    //         return (
    //             <Slide src={src}/>
    //         )
    //     })
    // }

    const settings = {
        dost: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        // nextArrow: <SampleNextArrow/>,
        // prevArrow: <SamplePrevArrow / >,
    }

    return (
        <Container>
            <StyledSlider  {...settings}>
                {[1, 2, 2].map(num => {
                    const src = "/images/slide" + num + ".png"
                    //console.log(src)

                    return (
                        <MyImg src={src}/>
                    )
                })}
            </StyledSlider>
            {/* <Button onClick={prevSlide}>PS</Button>
            <Button onClick={nextSlide}>NS</Button> */}
        </Container>
    )
}

export default MySlide
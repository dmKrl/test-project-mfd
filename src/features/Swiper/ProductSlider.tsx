import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import { FC, useRef } from 'react';
import { SliderItem } from 'widgets/SliderItem';
import slideImg1 from 'widgets/Slider/assets/slideImg1.png';
import slideImg2 from 'widgets/Slider/assets/slideImg2.png';
import slideImg3 from 'widgets/Slider/assets/slideImg3.png';
import slideImg4 from 'widgets/Slider/assets/slideImg4.png';
import slideImg5 from 'widgets/Slider/assets/slideImg5.png';

export const ProductSlider: FC = () => {
    const sliderRef = useRef<Slider>(null);
    const slideCount = 5; // Общее количество слайдов

    const settings = {
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        centerPadding: '100px',
        slidesToScroll: 1,
        focusOnSelect: true,
        beforeChange: (oldIndex: number, newIndex: number) => {
            if (newIndex === slideCount - 1 && oldIndex === slideCount - 2) {
                setTimeout(() => {
                    sliderRef.current?.slickGoTo(0, false);
                }, 0);
            }
        },
        responsive: [
            {
                breakpoint: 1540,
                settings: {
                    infinite: true,
                    slidesToShow: 5,
                    centerMode: false,
                    speed: 300,
                    slidesToScroll: 1,
                    focusOnSelect: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    focusOnSelect: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    focusOnSelect: true,
                },
            },
        ],
    };

    return (
        <Slider ref={sliderRef} {...settings}>
            <SliderItem score='1.75' img={slideImg1} />
            <SliderItem score='1.75' img={slideImg2} />
            <SliderItem score='1.75' img={slideImg3} />
            <SliderItem score='1.25' img={slideImg4} />
            <SliderItem score='1.25' img={slideImg5} />
        </Slider>
    );
};

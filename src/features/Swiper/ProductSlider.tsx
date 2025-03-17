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
import cls from './Product.module.scss';

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
            // При достижении конца слайдера переходим в начало без анимации
            if (newIndex === slideCount - 1 && oldIndex === slideCount - 2) {
                setTimeout(() => {
                    sliderRef.current?.slickGoTo(0, false); // false отключает анимацию
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
                    centerPadding: '100px',
                    speed: 400,
                    slidesToScroll: 1,
                    focusOnSelect: false,
                },
            },
            {
                breakpoint: 1280,
                settings: {
                    infinite: true,
                    centerPadding: '100px',
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                    focusOnSelect: false,
                },
            },
            {
                breakpoint: 787,
                settings: {
                    swipe: false,
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <>
            <Slider ref={sliderRef} {...settings}>
                <SliderItem score='1.75' img={slideImg1} />
                <SliderItem score='1.75' img={slideImg2} />
                <SliderItem score='1.75' img={slideImg3} />
                <SliderItem score='1.25' img={slideImg4} />
                <SliderItem score='1.25' img={slideImg5} />
            </Slider>
            <div className={cls.arrowButtons} />
        </>
    );
};

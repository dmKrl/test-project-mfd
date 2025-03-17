import { FC } from 'react';
import { SliderItem } from 'widgets/SliderItem';
import cls from './Slider.module.scss';
import slideImg1 from '../assets/slideImg1.png';
import slideImg2 from '../assets/slideImg2.png';
import slideImg3 from '../assets/slideImg3.png';
import slideImg4 from '../assets/slideImg4.png';
import slideImg5 from '../assets/slideImg5.png';

interface SliderProps {
}

export const Slider: FC<SliderProps> = () => {
    return (
        <div className={cls.sliderContainer}>
            <SliderItem score='1.75' img={slideImg1} />
            <SliderItem score='1.75' img={slideImg2} />
            <SliderItem score='1.75' img={slideImg3} />
            <SliderItem score='1.25' img={slideImg4} />
            <SliderItem score='1.25' img={slideImg5} />
        </div>
    );
};

import { FC } from 'react';
import { SliderItem } from 'widgets/SliderItem';
import cls from './Slider.module.scss';

interface SliderProps {
}

export const Slider: FC<SliderProps> = () => {
    return (
        <div className={cls.sliderContainer}>
            <SliderItem />
            <SliderItem />
            <SliderItem />
        </div>
    );
};

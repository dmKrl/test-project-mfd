import { FC } from 'react';
import { Button, ButtonOptions } from 'shared/Button/ui/Button';
import cls from './SliderItem.module.scss';
import sliderItem1 from '../assets/sliderItem1.png';

interface SliderItemProps {
}

export const SliderItem: FC<SliderItemProps> = () => {
    return (
        <div className={cls.sliderItem}>
            <div className={cls.slideImg}>
                <img src={sliderItem1} alt="slider-img" />
            </div>
            <div className={cls.slideContent}>
                <h4>Sun-Glass</h4>
                <div className={cls.slideInfo}>
                    <div className={cls.slideInfoLeft}>
                        <p>Current bid</p>
                    </div>
                    <Button themeButton={ButtonOptions.PRIMARY}>PLACE BID</Button>
                </div>
            </div>
        </div>
    );
};

import { FC } from 'react';
import { Slider } from 'widgets/Slider/ui/Slider';
import classNames from 'classnames';
import cls from './SliderShow.module.scss';

interface SliderShowProps {
}

export const SliderShow: FC<SliderShowProps> = () => {
    return (
        <div className={classNames('', {}, [cls.sliderShow])}>
            <div className={classNames('container', {}, [cls.sliderShowBlock])}>
                <h2>Weekly - Top NFT</h2>
                <Slider />
            </div>
        </div>
    );
};

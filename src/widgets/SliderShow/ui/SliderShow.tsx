import { FC } from 'react';
import classNames from 'classnames';
import { ProductSlider } from 'widgets/Slider/ui/ProductSlider';
import cls from './SliderShow.module.scss';

interface SliderShowProps {
}

export const SliderShow: FC<SliderShowProps> = () => {
    return (
        <div className={classNames('', {}, [cls.sliderShow])}>
            <div className={classNames('container', {}, [cls.sliderShowBlock])}>
                <h2>Weekly - Top NFT</h2>
                <ProductSlider />
            </div>
        </div>
    );
};

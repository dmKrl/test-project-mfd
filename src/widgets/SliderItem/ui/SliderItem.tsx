import { FC } from 'react';
import { Button, ButtonOptions } from 'shared/Button/ui/Button';
import EthereumSvg from 'widgets/SliderItem/assets/ethereum.svg';
import { MyTimer } from 'features';
import sliderItem1 from '../assets/sliderItem1.png';
import cls from './SliderItem.module.scss';
import { randomizerTimer } from '../lib/randomizerTimer';

interface SliderItemProps {
    score: string;
    img: string;
}

export const SliderItem: FC<SliderItemProps> = ({ score, img }) => {
    const time = new Date();

    // Чтобы не сбрасывался счётчик, данные могут приходить с бэка
    const timeScore = randomizerTimer();
    time.setSeconds(time.getSeconds() + timeScore); // 10 minutes timer

    return (
        <div className={cls.sliderItem}>
            <div className={cls.slideBlockImg}>
                <img src={img} alt="slider-img" />
                <div className={cls.slideTimer}>
                    <MyTimer expiryTimestamp={time} />
                </div>
            </div>
            <div className={cls.slideContent}>
                <h4>Sun-Glass</h4>
                <div className={cls.slideInfo}>
                    <div className={cls.slideInfoLeft}>
                        <p>Current bid</p>
                        <div className={cls.slideScore}>
                            <EthereumSvg />
                            <p>{score}</p>
                        </div>
                    </div>
                    <Button themeButton={ButtonOptions.PRIMARY_CARD}>PLACE BID</Button>
                </div>
            </div>
        </div>
    );
};

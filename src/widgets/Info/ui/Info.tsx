import classNames from 'classnames';
import { Button, ButtonOptions } from 'shared/Button/ui/Button';
import { InfoItems } from 'shared/InfoItems/ui/InfoItems';
import { ImageAnimation } from 'shared/ImageAnimation/ui/ImageAnimation';
import Arrow from '../assets/arrow.svg';
import LineDesk from '../assets/line.svg';
import LineMob from '../assets/lineMob.svg';
import cls from './Info.module.scss';

export const Info = () => {
    return (
        <div className={classNames('container', {}, [cls.info])}>
            <Arrow className={cls.infoArrow} />
            <div className={cls.infoBlockAnimation}>
                <ImageAnimation />
            </div>
            <div className={cls.infoWrapper}>
                <div className={cls.descriptorDesk}><LineDesk /></div>
                <div className={cls.descriptorMob}>
                    <LineMob />
                    OVER 1M CREATORS
                </div>
                <h1>Discover And Create NFTs</h1>
                <p className={cls.infoDescription}>
                    Discover, Create and Sell NFTs On Our NFT Marketplace With
                    Over Thousands Of NFTs And Get a
                    <b> $20 bonus.</b>
                </p>
                <div className={cls.infoBlockButtons}>
                    <Button themeButton={ButtonOptions.PRIMARY}>EXPLORE MORE</Button>
                    <Button themeButton={ButtonOptions.SECONDARY}>CREATE NFT</Button>
                </div>
                <div className={cls.infoItems}>
                    <InfoItems />
                </div>
            </div>
        </div>
    );
};

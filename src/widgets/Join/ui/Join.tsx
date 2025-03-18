import { FC } from 'react';
import { Button, ButtonOptions } from 'shared/Button/ui/Button';
import classNames from 'classnames';
import createImg from '../assets/createImg.png';
import createImgMob from '../assets/createImgMob.png';
import cls from './Join.module.scss';

interface JoinProps {
}

export const Join: FC<JoinProps> = () => {
    return (
        <div className={classNames('container', {}, [cls.join])}>
            <div className={cls.joinContainer}>
                <div className={cls.joinLeft}>
                    <h4>Create and Sell NFTs</h4>
                    <p>World’s Largest NFT Place</p>
                    <div className={cls.joinBlockButtons}>
                        <Button themeButton={ButtonOptions.SECONDARY_INVERTED}>Explore More</Button>
                        <Button themeButton={ButtonOptions.PRIMARY_INVERTED}>Sell Artwork</Button>
                    </div>
                </div>
                <div className={cls.joinRight}>
                    <img className={cls.joinImg} src={createImg} alt="create-img-nft" />
                    <img className={cls.joinImgMob} src={createImgMob} alt="create-img-nft" />
                </div>
            </div>
        </div>
    );
};

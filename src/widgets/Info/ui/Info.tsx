import { FC } from 'react';
import { Button, ButtonOptions } from 'shared/Button/ui/Button';
import { InfoItems } from 'shared/InfoItems/ui/InfoItems';
import cls from './Info.module.scss';

interface InfoProps {
}

export const Info: FC<InfoProps> = (props) => {
    return (
        <div className={cls.info}>
            <div className={cls.infoWrapper}>
                <h1>Discover And Create NFTs</h1>
                <p>
                    Discover, Create and Sell NFTs On Our NFT Marketplace With
                    Over Thousands Of NFTs And Get a
                    <b>$20 bonus.</b>
                </p>
                <div className={cls.infoBlockButtons}>
                    <Button themeButton={ButtonOptions.PRIMARY}>EXPLORE MORE</Button>
                    <Button themeButton={ButtonOptions.SECONDARY}>CREATE NFT</Button>
                </div>
                <InfoItems />
            </div>
        </div>
    );
};

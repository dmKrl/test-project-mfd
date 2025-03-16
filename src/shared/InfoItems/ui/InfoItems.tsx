import { FC } from 'react';
import { InfoItem } from 'shared/InfoItem/ui/InfoItem';
import cls from './InfoItems.module.scss';

interface InfoItemsProps {
}

export const InfoItems: FC<InfoItemsProps> = () => {
    return (
        <div className={cls.infoItems}>
            <InfoItem quantity='430K+' quantityName='Art Works' />
            <InfoItem quantity='159K+' quantityName='Creators' />
            <InfoItem quantity='87K+' quantityName='Collections' />
        </div>
    );
};

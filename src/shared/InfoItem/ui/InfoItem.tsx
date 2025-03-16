import { FC, ReactNode } from 'react';
import cls from './InfoItem.module.scss';

interface InfoItemProps {
    quantity: ReactNode,
    quantityName: ReactNode,
}

export const InfoItem: FC<InfoItemProps> = (props) => {
    const { quantity, quantityName } = props;
    return (
        <div className={cls.infoItem}>
            <p className={cls.infoQuantity}>{quantity}</p>
            <p className={cls.infoQuantityName}>{quantityName}</p>
        </div>
    );
};

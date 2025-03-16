import { AppLink, LinkOptions } from 'shared/AppLink/ui/AppLink';
import { FC } from 'react';
import cls from './HeaderNavbar.module.scss';

interface HeaderNavbarProps {
}

export const HeaderNavbar: FC<HeaderNavbarProps> = () => {
    return (
        <div className={cls.headerNavbar}>
            <AppLink theme={LinkOptions.PRIMARY} to='/'>DISCOVER</AppLink>
            <AppLink theme={LinkOptions.PRIMARY} to='/'>CREATORS</AppLink>
            <AppLink theme={LinkOptions.PRIMARY} to='/'>SELL</AppLink>
            <AppLink theme={LinkOptions.PRIMARY} to='/'>STATS</AppLink>
        </div>
    );
};

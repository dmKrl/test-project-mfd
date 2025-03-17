import classNames from 'classnames';
import { FC } from 'react';
import { AppLink, LinkOptions } from 'shared/AppLink/ui/AppLink';
import { Button, ButtonOptions } from 'shared/Button/ui/Button';
import LogoHeader from 'widgets/assets/logo-header.svg';
import { HeaderNavbar } from 'widgets/Navabar';
import cls from './Header.module.scss';

interface HeaderProps {
}

export const Header: FC<HeaderProps> = () => {
    return (
        <div className={classNames('', {}, [cls.header])}>
            <div className={cls.headerWrapper}>
                <AppLink to='/' theme={LinkOptions.CLEAR}><LogoHeader /></AppLink>
                <HeaderNavbar />
            </div>
            <Button themeButton={ButtonOptions.PRIMARY}>Connect Wallet</Button>
        </div>
    );
};

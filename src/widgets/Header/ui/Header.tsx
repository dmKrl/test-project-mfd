import classNames from 'classnames';
import { FC, useEffect, useState } from 'react';
import { AppLink, LinkOptions } from 'shared/AppLink/ui/AppLink';
import { Button, ButtonOptions } from 'shared/Button/ui/Button';
import LogoHeader from 'widgets/assets/logo-header.svg';
import { HeaderNavbar } from 'widgets/Navabar';
import cls from './Header.module.scss';

interface HeaderProps {
}

export const Header: FC<HeaderProps> = () => {
    const [isFixed, setIsFixed] = useState(false);

    const mods: Record<string, boolean> = {
        [cls.isFixed]: isFixed,
    };

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={classNames('container', mods, [cls.header])}>
            <div className={cls.headerWrapper}>
                <AppLink to='/' theme={LinkOptions.CLEAR}><LogoHeader /></AppLink>
                <HeaderNavbar />
            </div>
            <Button themeButton={ButtonOptions.PRIMARY_HEADER}>Connect Wallet</Button>
        </div>
    );
};

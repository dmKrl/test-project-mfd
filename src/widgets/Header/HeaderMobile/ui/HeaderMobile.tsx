import classNames from 'classnames';
import { FC, useState } from 'react';
import { AppLink, LinkOptions } from 'shared/AppLink/ui/AppLink';
import { Button, ButtonOptions } from 'shared/Button/ui/Button';
import LogoHeader from 'widgets/assets/logo-header.svg';
import { HeaderNavbar } from 'widgets/Navabar';
import { Social } from 'widgets/Social';
import BurgerOpen from 'widgets/assets/burgerOpen.svg';
import BurgerClose from 'widgets/assets/burgerClose.svg';
import cls from './HeaderMobile.module.scss';

interface HeaderMobileProps {
}

export const HeaderMobile: FC<HeaderMobileProps> = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpen = () => {
        setIsOpen((prev) => !prev);
    };

    const modsMobileContent: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.closed]: !isOpen,
    };

    return (
        <div className={classNames('container', {}, [cls.header])}>
            <div className={cls.headerWrapper}>
                <div className={cls.headerLogoBlock}>
                    <AppLink to='/' theme={LinkOptions.CLEAR}><LogoHeader /></AppLink>
                    <AppLink to='/' theme={LinkOptions.UNIQUE_BLACK}>DiveSea</AppLink>
                </div>
                <Button themeButton={ButtonOptions.CLEAR} onClick={handleIsOpen}>
                    {isOpen ? <BurgerClose /> : <BurgerOpen />}
                </Button>
            </div>
            <div className={classNames('', modsMobileContent, [cls.mobileContentBlock])}>
                <HeaderNavbar />
                <Social />
                <Button themeButton={ButtonOptions.PRIMARY_HEADER}>Connect Wallet</Button>
            </div>
        </div>
    );
};

import classNames from 'classnames';
import { FC, useContext } from 'react';
import { AppLink, LinkOptions } from 'shared/AppLink/ui/AppLink';
import { Button, ButtonOptions } from 'shared/Button/ui/Button';
import LogoHeader from 'widgets/assets/logo-header.svg';
import { HeaderNavbar } from 'widgets/Navabar';
import { Social } from 'widgets/Social';
import BurgerOpen from 'widgets/assets/burgerOpen.svg';
import BurgerClose from 'widgets/assets/burgerClose.svg';
import { BurgerContext } from 'widgets/lib/context/useBurger/BurgerContext';
import cls from './HeaderMobile.module.scss';

interface HeaderMobileProps {
}

export const HeaderMobile: FC<HeaderMobileProps> = () => {
    const { isOpen, setIsOpen } = useContext(BurgerContext);

    const handleIsOpen = () => {
        setIsOpen(!isOpen);
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
                <Button
                    className={cls.burgerMenu}
                    themeButton={ButtonOptions.CLEAR}
                    onClick={handleIsOpen}
                >
                    {isOpen ? <BurgerClose /> : <BurgerOpen />}
                </Button>
            </div>
            <div className={classNames('', modsMobileContent, [cls.mobileContentBlock])}>
                <div className={cls.mobileNav}>
                    <HeaderNavbar />
                    <Social />
                </div>
                <Button themeButton={ButtonOptions.PRIMARY_HEADER}>Connect Wallet</Button>
            </div>
        </div>
    );
};

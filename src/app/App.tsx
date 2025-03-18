/* eslint-disable react/button-has-type */
import { HeaderDesktop } from 'widgets/Header/HeaderDesktop/ui/HeaderDesktop';
import { HeaderMobile } from 'widgets/Header/HeaderMobile/ui/HeaderMobile';
import { MainPage } from 'pages/MainPage/MainPage';
import { FooterDesktop } from 'widgets/Footer/FooterDesktop/ui/FooterDesktop';
import { FooterMobile } from 'widgets/Footer/FooterMobile/ui/FooterMobile';
import './styles/index.scss';
import { useContext } from 'react';
import { BurgerContext } from 'widgets/lib/context/useBurger/BurgerContext';
import classNames from 'classnames';
import cls from './styles/app.module.scss';

export const App = () => {
    const { isOpen } = useContext(BurgerContext);

    const mods: Record<string, boolean> = {
        [cls.lockedScreen]: isOpen,
    };

    return (
        <div className={classNames(cls.app, mods, [])}>
            <div className={cls.contentPage}>
                <HeaderDesktop />
                <HeaderMobile />
                <MainPage />
                <FooterDesktop />
                <FooterMobile />
            </div>
        </div>
    );
};

import { FC } from 'react';
import { AppLink } from 'shared/AppLink/ui/AppLink';
import { Social } from 'widgets/Social';
import LogoFooter from 'widgets/assets/logo-footer.svg';
import { FooterNavbar } from 'widgets/Navabar';
import classNames from 'classnames';
import cls from './Footer.module.scss';

interface FooterProps {
}

export const Footer: FC<FooterProps> = () => {
    return (
        <div className={classNames('container', {}, [cls.footer])}>
            <div className={cls.footerUp}>
                <AppLink to='/'><LogoFooter /></AppLink>
                <FooterNavbar />
            </div>
            <div className={cls.footerDown}>
                <p>© 2023 EATLY All Rights Reserved.</p>
                <Social />
            </div>
        </div>
    );
};

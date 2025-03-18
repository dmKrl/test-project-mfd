import { FC } from 'react';
import { AppLink, LinkOptions } from 'shared/AppLink/ui/AppLink';
import { Social } from 'widgets/Social';
import LogoFooter from 'widgets/assets/logo-footer.svg';
import { FooterNavbar } from 'widgets/Navabar';
import classNames from 'classnames';
import cls from './FooterMobile.module.scss';

interface FooterMobileProps {
}

export const FooterMobile: FC<FooterMobileProps> = () => {
    return (
        <div className={classNames('container', {}, [cls.footer])}>
            <div className={cls.footerUp}>
                <div className={cls.footerLinks}>
                    <AppLink to='/' theme={LinkOptions.CLEAR}><LogoFooter /></AppLink>
                    <AppLink to='/' theme={LinkOptions.UNIQUE}>DiveSea</AppLink>
                </div>
                <Social />
            </div>
            <FooterNavbar />
            <div className={cls.footerDown}>
                <p>© 2023 EATLY All Rights Reserved.</p>
            </div>
        </div>
    );
};
